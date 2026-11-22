import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {svgChem} from '../components/chem';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pr1, pr2, pr3, pr4, pr5, pr6} = t.cue;

const Y = 150;
const Label: React.FC<{x: number; y?: number; color?: string; children: React.ReactNode}> = ({x, y = Y + 125, color = C.text, children}) => (
	<text x={x} y={y} fontSize={26} fontWeight={900} fill={color} textAnchor="middle">{children}</text>
);
const Egg: React.FC<{x: number; y?: number; nucleus?: boolean; donor?: boolean}> = ({x, y = Y, nucleus, donor}) => (
	<g>
		<circle cx={x} cy={y} r={70} fill="#fdeedd" stroke={C.orange} strokeWidth={5} />
		<circle cx={x} cy={y} r={78} fill="none" stroke={C.line} strokeWidth={6} />
		{nucleus && <circle cx={x + 30} cy={y - 30} r={14} fill={C.muted} />}
		{donor && <circle cx={x} cy={y} r={22} fill={C.red} />}
	</g>
);

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">体细胞核移植的过程</Header>
		<svg width={1740} height={600} viewBox="0 -40 1740 600" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={pr1.from}>
				<Egg x={100} nucleus />
				<Label x={100}>卵母细胞</Label>
				<Label x={100} y={Y + 160} color={C.red}>培养到 MⅡ 期</Label>
			</G>
			<G at={pr2.from}>
				<Arrow x1={190} y1={Y} x2={330} y2={Y} />
				<text x={260} y={Y - 20} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">去核</text>
				<Egg x={420} />
				<Label x={420} y={Y - 100}>去核卵母细胞</Label>
				<circle cx={420} cy={Y + 300} r={50} fill={C.redSoft} stroke={C.red} strokeWidth={5} />
				<circle cx={420} cy={Y + 300} r={20} fill={C.red} />
				<Label x={600} y={Y + 310} color={C.red}>供体体细胞（培养）</Label>
			</G>
			<G at={pr3.from}>
				<Arrow x1={420} y1={Y + 240} x2={420} y2={Y + 95} color={C.red} marker="arrow-red" />
				<text x={440} y={Y + 175} fontSize={24} fontWeight={800} fill={C.red}>注入</text>
				<Arrow x1={510} y1={Y} x2={650} y2={Y} />
				<text x={580} y={Y - 20} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">电融合</text>
				<Egg x={740} donor />
				<Label x={740} color={C.red}>重构胚</Label>
			</G>
			<G at={pr4.from}>
				<Arrow x1={830} y1={Y} x2={970} y2={Y} color={C.orange} marker="arrow-orange" />
				<text x={900} y={Y - 20} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">激活</text>
				{[[-24, -24], [24, -24], [-24, 24], [24, 24]].map(([dx, dy], i) => (
					<circle key={i} cx={1060 + dx} cy={Y + dy} r={28} fill="#fdeedd" stroke={C.orange} strokeWidth={4} />
				))}
				<Label x={1060}>早期胚胎</Label>
				<text x={1060} y={Y + 160} fontSize={22} fontWeight={800} fill={C.muted} textAnchor="middle">{svgChem('电刺激、Ca^2+ 载体、乙醇等', 22)}</text>
			</G>
			<G at={pr5.from}>
				<Arrow x1={1150} y1={Y} x2={1290} y2={Y} color={C.green} marker="arrow-green" />
				<text x={1220} y={Y - 20} fontSize={24} fontWeight={800} fill={C.green} textAnchor="middle">胚胎移植</text>
				<ellipse cx={1420} cy={Y} rx={110} ry={70} fill={C.greenSoft} stroke={C.green} strokeWidth={5} />
				<text x={1420} y={Y + 10} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">代孕母体</text>
				<Label x={1420} color={C.green}>→ 克隆动物</Label>
			</G>
		</svg>
		<Tip at={pr6.from} top={740} label="解题方法">
			六个关键词：<Hl>培养到 MⅡ 期 → 去核 → 注入 → 融合 → 激活 → 胚胎移植</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
