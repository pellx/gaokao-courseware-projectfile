import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.features;
const {fe2, fe3, fe4, fe5, fe6} = t.cue;
export const FEATURES_DUR = t.duration;

const CELLS = [
	{x: 330, y: 90, target: false},
	{x: 500, y: 330, target: true},
	{x: 640, y: 90, target: true},
	{x: 760, y: 330, target: false},
];

const FEATURES = [
	{n: '①', t: '通过体液运输', d: '随血液流到全身', at: fe2.from},
	{n: '②', t: '作用于靶器官、靶细胞', d: '靶细胞有特异性受体', at: fe3.from},
	{n: '③', t: '作为信使传递信息', d: '起作用后即失活', at: fe4.from},
	{n: '④', t: '微量和高效', d: '含量低，作用显著', at: fe5.from},
];

// Hormone dots leave the gland, flow along the vessel and bind only to target cells.
const Diagram: React.FC<{frame: number}> = ({frame}) => {
	const flow = interpolate(frame, [fe2.from + 10, fe2.from + 300], [0, 1], clamp);
	const bind = interpolate(frame, [fe3.from + 40, fe3.from + 70], [0, 1], clamp);
	const fade = interpolate(frame, [fe4.from + 60, fe4.from + 90], [1, 0.25], clamp);
	return (
		<svg width={880} height={420} viewBox="0 0 880 420" style={{position: 'absolute', left: 70, top: 190}}>
			<rect x={150} y={175} width={720} height={70} rx={35} fill={C.redSoft} stroke={C.red} strokeWidth={3} />
			<text x={840} y={275} fontSize={26} fill={C.red} textAnchor="end">血管（体液）</text>
			<ellipse cx={90} cy={210} rx={80} ry={64} fill="#f6d7b0" stroke={C.brown} strokeWidth={4} />
			<text x={90} y={220} fontSize={30} fontWeight={800} textAnchor="middle" fill={C.brown}>内分泌腺</text>
			{Array.from({length: 12}, (_, i) => {
				const p = (flow * 1.6 - i * 0.1) % 1;
				if (flow === 0 || p < 0) return null;
				return <circle key={i} cx={170 + 680 * p} cy={195 + (i % 3) * 15} r={9} fill={C.orange} />;
			})}
			{CELLS.map((c) => (
				<g key={c.x}>
					<circle cx={c.x} cy={c.y} r={58} fill={c.target ? (bind > 0 ? C.greenSoft : '#fff') : '#fff'} stroke={c.target ? C.green : '#cfc6ba'} strokeWidth={4} />
					{c.target && (
						<>
							<path d={c.y < 200 ? `M${c.x - 14},${c.y + 62} l14,14 l14,-14` : `M${c.x - 14},${c.y - 62} l14,-14 l14,14`} fill="none" stroke={C.green} strokeWidth={6} />
							<circle cx={c.x} cy={c.y < 200 ? c.y + 76 - 6 * bind : c.y - 76 + 6 * bind} r={10} fill={C.orange} opacity={bind * fade} />
						</>
					)}
					<text x={c.x} y={c.y + 10} fontSize={26} fontWeight={700} textAnchor="middle" fill={c.target ? C.green : C.muted}>
						{c.target ? '靶细胞' : '非靶细胞'}
					</text>
				</g>
			))}
		</svg>
	);
};

export const Features: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={FEATURES_DUR}>
			<Header tag="考点九">激素调节的特点</Header>
			<Appear at={fe2.from - 10}>
				<Diagram frame={frame} />
			</Appear>
			<div style={{position: 'absolute', left: 1000, right: 90, top: 170, display: 'flex', flexDirection: 'column', gap: 12}}>
				{FEATURES.map((f) => (
					<Appear key={f.n} at={f.at} dx={30} dy={0}>
						<div style={{background: C.panel, border: `3px solid ${C.line}`, borderRadius: 18, padding: '10px 24px'}}>
							<div style={{fontSize: 36, fontWeight: 900}}>
								<span style={{color: C.red, marginRight: 10}}>{f.n}</span>
								{f.t}
							</div>
							<div style={{fontSize: 29, color: C.muted, marginTop: 4}}>{f.d}</div>
						</div>
					</Appear>
				))}
			</div>
			<Appear at={fe6.from} style={{position: 'absolute', left: 90, right: 90, top: 730}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 33}}>
					激素运输到<Hl>全身各处</Hl>，只<Hl c={C.green}>作用于</Hl>靶细胞；激素<Hl>不组成细胞结构、不提供能量、不起催化作用</Hl>。
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
