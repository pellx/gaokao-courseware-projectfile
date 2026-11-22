import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.primary;
const {pm1, pm2, pm3, pm4, pm5} = t.cue;

const GROUND = 300;
const W = 340;
// Five stages, each a column with its typical plants growing taller.
const STAGES: [string, string, (x: number) => React.ReactNode][] = [
	['地衣阶段', C.orange, (x) => <>
		<path d={`M${x + 40},${GROUND} q130,-70 260,0 z`} fill="#b7aea4" />
		{[90, 150, 220].map((d) => <ellipse key={d} cx={x + d} cy={GROUND - 26} rx={22} ry={9} fill={C.orange} />)}
	</>],
	['苔藓阶段', '#7a9a3a', (x) => <>
		<rect x={x + 30} y={GROUND - 22} width={280} height={22} rx={11} fill="#7a9a3a" />
	</>],
	['草本植物阶段', C.green, (x) => <>
		{[60, 120, 180, 240, 290].map((d) => <path key={d} d={`M${x + d - 16},${GROUND} L${x + d - 6},${GROUND - 80} L${x + d},${GROUND} L${x + d + 8},${GROUND - 90} L${x + d + 16},${GROUND}`} fill="#6dbb6a" />)}
	</>],
	['灌木阶段', '#3f8f4f', (x) => <>
		{[100, 230].map((d) => <g key={d}><rect x={x + d - 5} y={GROUND - 90} width={10} height={90} fill={C.brown} /><ellipse cx={x + d} cy={GROUND - 110} rx={60} ry={45} fill="#4fa860" /></g>)}
	</>],
	['乔木阶段', C.green, (x) => <>
		{[110, 240].map((d) => <g key={d}><rect x={x + d - 10} y={GROUND - 200} width={20} height={200} fill={C.brown} /><ellipse cx={x + d} cy={GROUND - 230} rx={70} ry={60} fill={C.green} /></g>)}
	</>],
];

export const Primary: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">初生演替：裸岩上的演替</Header>
		<Appear at={pm1.from} style={{position: 'absolute', left: 90, right: 90, top: 165, fontSize: 28, fontWeight: 700}}>
			起点：<Hl>从来没有植被</Hl>，或植被<Hl>被彻底消灭</Hl>（沙丘、火山岩、冰川泥）
		</Appear>
		<svg width={1740} height={370} viewBox="0 0 1700 370" style={{position: 'absolute', left: 90, top: 215}}>
			{STAGES.map(([name, color, draw], i) => (
				<G key={name} at={pm2.from + i * 22}>
					<rect x={i * W} y={GROUND} width={W - 6} height={14} fill={C.brown} opacity={0.35 + i * 0.12} />
					{draw(i * W)}
					<text x={i * W + W / 2} y={GROUND + 52} fontSize={30} fontWeight={900} fill={color} textAnchor="middle">{name}</text>
				</G>
			))}
			<G at={pm3.from}>
				<text x={W / 2} y={60} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">分泌有机酸</text>
				<text x={W / 2} y={92} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">风化岩石 → 土壤</text>
			</G>
			<G at={pm4.from}>
				<text x={W * 1.5} y={150} fontSize={24} fontWeight={800} fill={C.green} textAnchor="middle">更高大，争得阳光</text>
			</G>
		</svg>
		<Appear at={pm5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 31}}>
				某阶段为何能取代前一阶段？答：<Hl>植株更高大，在争夺阳光的竞争中占优势</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
