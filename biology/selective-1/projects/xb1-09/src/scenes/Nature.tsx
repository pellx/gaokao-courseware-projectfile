import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.nature;
const {na2, na3, na4, na5, na6, na7} = t.cue;
export const NATURE_DUR = t.duration;

const KINDS = [
	{name: '蛋白质 / 多肽类', list: '下丘脑、垂体分泌的激素\n胰岛素、胰高血糖素\n促胰液素', use: '只能注射', c: C.red, soft: C.redSoft, at: na2.from},
	{name: '氨基酸衍生物', list: '甲状腺激素\n肾上腺素', use: '可注射，也可口服', c: C.orange, soft: C.orangeSoft, at: na3.from},
	{name: '类固醇', list: '性激素\n醛固酮、皮质醇', use: '可注射，也可口服', c: C.green, soft: C.greenSoft, at: na4.from},
];

// A target cell: receptor on the membrane (protein hormone) or inside (steroid).
const Cell: React.FC<{x: number; inside: boolean; p: number; label: string; color: string}> = ({x, inside, p, label, color}) => {
	const hx = inside ? x + 40 * p : x;
	const hy = inside ? 60 + 120 * p : 60 + 48 * p;
	return (
		<g>
			<ellipse cx={x} cy={200} rx={180} ry={90} fill="#fff" stroke={C.brown} strokeWidth={5} />
			<circle cx={x - 60} cy={215} r={30} fill={C.panel} stroke={C.line} strokeWidth={3} />
			{inside ? (
				<path d={`M${x + 25},${200} l15,-20 l15,20`} fill="none" stroke={color} strokeWidth={6} />
			) : (
				<path d={`M${x - 15},${100} l15,15 l15,-15 M${x},${115} l0,22`} fill="none" stroke={color} strokeWidth={6} />
			)}
			<circle cx={hx} cy={hy} r={13} fill={color} />
			<text x={x} y={325} fontSize={28} fontWeight={700} textAnchor="middle">{label}</text>
		</g>
	);
};

export const Nature: React.FC = () => {
	const frame = useCurrentFrame();
	const tagIn = useRamp(na5.from + 10, 12);
	const cells = interpolate(frame, [na6.from, na6.from + 15, na7.from - 12, na7.from], [0, 1, 1, 0], clamp);
	const move = interpolate(frame, [na6.from + 30, na6.from + 70], [0, 1], clamp);
	const move2 = interpolate(frame, [na6.from + Math.round((na6.to - na6.from) * 0.55), na6.from + Math.round((na6.to - na6.from) * 0.55) + 40], [0, 1], clamp);

	return (
		<Scene duration={NATURE_DUR}>
			<Header tag="考点七">激素的化学本质：能否口服？</Header>
			<div style={{position: 'absolute', left: 100, right: 100, top: 165, display: 'flex', gap: 28}}>
				{KINDS.map((k) => (
					<Appear key={k.name} at={k.at} style={{flex: 1}}>
						<div style={{background: k.soft, border: `4px solid ${k.c}`, borderRadius: 22, padding: '18px 26px', height: 340, boxSizing: 'border-box', display: 'flex', flexDirection: 'column'}}>
							<div style={{fontSize: 40, fontWeight: 900, color: k.c}}>{k.name}</div>
							<div style={{fontSize: 32, lineHeight: 1.6, marginTop: 10, whiteSpace: 'pre-line', flex: 1}}>{k.list}</div>
							<div style={{opacity: tagIn, alignSelf: 'flex-start', background: k.c, color: '#fff', fontSize: 30, fontWeight: 800, padding: '4px 16px', borderRadius: 10}}>{k.use}</div>
						</div>
					</Appear>
				))}
			</div>
			<svg width={1720} height={340} viewBox="0 0 1720 340" style={{position: 'absolute', left: 100, top: 530, opacity: cells}}>
				<Cell x={430} inside={false} p={move} label="蛋白质类激素：受体在细胞膜上" color={C.red} />
				<Cell x={1290} inside p={move2} label="性激素（脂溶性）：受体在细胞内" color={C.green} />
			</svg>
			<Appear at={na7.from} style={{position: 'absolute', left: 100, right: 100, top: 560}}>
				<Callout label="考法" style={{fontSize: 34}}>
					问：糖尿病人为什么注射而不口服胰岛素？
					<br />
					答：胰岛素是<Hl>蛋白质</Hl>，口服会在消化道中被<Hl>蛋白酶分解</Hl>而失效。
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
