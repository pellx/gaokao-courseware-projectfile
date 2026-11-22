import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow} from '../components/kit';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.flow;
const {fl1, fl2, fl3, fl4, fl5} = t.cue;

// A lettered flow chart as exam questions draw it; each name is revealed at
// the step of the method that identifies it.
type N = [string, number, number, string, string, number, boolean?];

const Flow: React.FC = () => {
	const frame = useCurrentFrame();
	const show = (from: number) => interpolate(frame, [from, from + 15], [0, 1], clamp);
	const NODES: N[] = [
		['a', 270, 280, '抗原呈递细胞', C.brown, fl4.from],
		['b', 500, 280, '辅助性T细胞', C.orange, fl4.from],
		['c', 760, 120, 'B细胞', C.red, fl2.from],
		['d', 1010, 70, '浆细胞', C.red, fl2.from],
		['e', 1010, 200, '记忆B细胞', C.orange, fl5.from],
		['f', 760, 410, '细胞毒性T细胞', C.green, fl3.from],
		['g', 1010, 360, '细胞毒性T细胞', C.green, fl3.from],
		['h', 1290, 360, '靶细胞', C.green, fl3.from],
		['i', 1010, 470, '记忆T细胞', C.orange, fl5.from],
	];
	const P = Object.fromEntries(NODES.map((n) => [n[0], n])) as Record<string, N>;
	const link = (a: string, b: string, color = C.muted, marker = 'arrow') => (
		<Arrow x1={P[a][1]} y1={P[a][2]} x2={P[b][1]} y2={P[b][2]} trim={[40, 46]} color={color} marker={marker} />
	);
	return (
		<svg width={1740} height={580} viewBox="0 0 1740 580">
			<Defs />
			<rect x={30} y={250} width={120} height={60} rx={30} fill={C.redSoft} stroke={C.red} strokeWidth={4} />
			<text x={90} y={290} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">抗原</text>
			<Arrow x1={150} y1={280} x2={226} y2={280} color={C.muted} />
			<Arrow x1={140} y1={250} x2={720} y2={130} color={C.muted} dash="10 8" />
			{link('a', 'b')}
			{link('b', 'c')}
			{link('b', 'f')}
			{link('c', 'd')}
			{link('c', 'e')}
			{link('f', 'g')}
			{link('f', 'i')}
			{link('g', 'h', C.green, 'arrow-green')}
			{/* substances: ① cytokines from b, ② antibodies from d */}
			<circle cx={620} cy={200} r={24} fill="#fff" stroke={C.orange} strokeWidth={4} />
			<text x={620} y={210} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">①</text>
			<text x={652} y={244} fontSize={26} fontWeight={900} fill={C.orange} opacity={show(fl4.from)}>细胞因子</text>
			<Arrow x1={1050} y1={70} x2={1190} y2={70} color={C.red} marker="arrow-red" />
			<circle cx={1230} cy={70} r={24} fill="#fff" stroke={C.red} strokeWidth={4} />
			<text x={1230} y={80} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">②</text>
			<text x={1340} y={80} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle" opacity={show(fl2.from)}>抗体</text>
			{/* re-exposure arrows that identify the memory cells */}
			<path d="M1050,190 C 1100,160 1100,110 1050,90" fill="none" stroke={C.orange} strokeWidth={4} strokeDasharray="10 7" markerEnd="url(#arrow-orange)" opacity={0.4 + 0.6 * show(fl5.from)} />
			<path d="M1050,460 C 1100,440 1100,400 1050,380" fill="none" stroke={C.orange} strokeWidth={4} strokeDasharray="10 7" markerEnd="url(#arrow-orange)" opacity={0.4 + 0.6 * show(fl5.from)} />
			{NODES.map(([id, x, y, name, color, from]) => (
				<g key={id}>
					<circle cx={x} cy={y} r={40} fill={show(from) > 0.5 ? '#fff' : C.panel} stroke={show(from) > 0.5 ? color : C.muted} strokeWidth={5} />
					<text x={x} y={y + 13} fontSize={36} fontWeight={900} fill={show(from) > 0.5 ? color : C.muted} textAnchor="middle">{id}</text>
					<text x={id === 'g' ? x + 145 : x} y={id === 'g' ? y - 18 : y + 74} fontSize={26} fontWeight={900} fill={color} textAnchor="middle" opacity={show(from)}>{name}</text>
				</g>
			))}
		</svg>
	);
};

export const FlowScene: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">免疫流程图的识别</Header>
		<Appear at={fl1.from} style={{position: 'absolute', left: 90, top: 165}}>
			<Flow />
		</Appear>
		<div style={{position: 'absolute', left: 1440, right: 90, top: 300, display: 'flex', flexDirection: 'column', gap: 14, fontSize: 28, fontWeight: 800}}>
			<Appear at={fl2.from}><Hl>① 找抗体 → 浆细胞</Hl></Appear>
			<Appear at={fl3.from}><Hl c={C.green}>② 找靶细胞 → 细胞毒性T</Hl></Appear>
			<Appear at={fl4.from}><Hl c={C.orange}>③ 连两条路线 → 辅助性T</Hl></Appear>
		</div>
		<Appear at={fl5.from} style={{position: 'absolute', left: 90, right: 90, top: 770}}>
			<Callout label="解题方法" style={{fontSize: 29, padding: '10px 24px'}}>
				再次接触抗原时能<Hl c={C.orange}>直接分化</Hl>为浆细胞或细胞毒性T细胞的 → <Hl c={C.orange}>记忆细胞</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
