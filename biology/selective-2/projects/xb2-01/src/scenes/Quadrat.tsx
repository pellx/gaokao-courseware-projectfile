import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.quadrat;
const {qd1, qd2, qd3, qd4, qd5} = t.cue;

// Quadrat at (Q.x, Q.y), side Q.s. Individuals inside, and on each edge/corner.
const Q = {x: 1060, y: 60, s: 330};
type Dot = {x: number; y: number; count: boolean};
const DOTS: Dot[] = [
	// inside
	{x: 70, y: 80, count: true},
	{x: 190, y: 60, count: true},
	{x: 120, y: 170, count: true},
	{x: 250, y: 200, count: true},
	{x: 80, y: 260, count: true},
	{x: 200, y: 280, count: true},
	// top and left edges + top-left corner: counted
	{x: 140, y: 0, count: true},
	{x: 0, y: 140, count: true},
	{x: 0, y: 0, count: true},
	// bottom and right edges + other corners: not counted
	{x: 260, y: 330, count: false},
	{x: 330, y: 110, count: false},
	{x: 330, y: 330, count: false},
	{x: 330, y: 0, count: false},
];

const Mini: React.FC<{x: number; y: number}> = ({x, y}) => <rect x={x - 22} y={y - 22} width={44} height={44} fill="#fff" stroke={C.red} strokeWidth={5} />;

export const Quadrat: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">样方法</Header>
		<Appear at={qd1.from} style={{position: 'absolute', left: 90, top: 165, fontSize: 32, fontWeight: 700}}>
			适用：<Hl c={C.orange}>植物</Hl>、<Hl c={C.orange}>活动能力弱、活动范围小</Hl>的动物（蚯蚓、蚜虫、跳蝻、虫卵）
		</Appear>
		<svg width={1740} height={500} viewBox="0 0 1740 500" style={{position: "absolute", left: 90, top: 225}}>
			<Defs />
			<G at={qd2.from}>
				<rect x={10} y={40} width={300} height={300} fill={C.greenSoft} stroke={C.green} strokeWidth={5} />
				{[
					[60, 90],
					[260, 90],
					[160, 190],
					[60, 290],
					[260, 290],
				].map(([x, y], i) => (
					<Mini key={i} x={x} y={y} />
				))}
				<text x={160} y={390} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">五点取样法</text>
				<text x={160} y={428} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">方形地块</text>
				<rect x={380} y={140} width={580} height={100} fill={C.greenSoft} stroke={C.green} strokeWidth={5} />
				{[440, 556, 672, 788, 904].map((x) => (
					<Mini key={x} x={x} y={190} />
				))}
				<text x={670} y={300} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">等距取样法</text>
				<text x={670} y={338} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">狭长地块</text>
				<text x={485} y={60} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">关键：随机取样</text>
			</G>
			<G at={qd3.from}>
				<rect x={Q.x} y={Q.y} width={Q.s} height={Q.s} fill="#fff" stroke={C.text} strokeWidth={5} />
				<line x1={Q.x} y1={Q.y} x2={Q.x + Q.s} y2={Q.y} stroke={C.green} strokeWidth={10} />
				<line x1={Q.x} y1={Q.y} x2={Q.x} y2={Q.y + Q.s} stroke={C.green} strokeWidth={10} />
				{DOTS.map((d, i) => (
					<circle key={i} cx={Q.x + d.x} cy={Q.y + d.y} r={15} fill={d.count ? C.orange : '#fff'} stroke={d.count ? C.orange : C.muted} strokeWidth={4} />
				))}
				<text x={Q.x + Q.s + 30} y={Q.y + 60} fontSize={28} fontWeight={900} fill={C.green}>计上、计左</text>
				<text x={Q.x + Q.s + 30} y={Q.y + 98} fontSize={28} fontWeight={900} fill={C.green}>及左上角</text>
				<text x={Q.x + Q.s + 30} y={Q.y + 250} fontSize={28} fontWeight={900} fill={C.muted}>不计下、</text>
				<text x={Q.x + Q.s + 30} y={Q.y + 288} fontSize={28} fontWeight={900} fill={C.muted}>不计右</text>
				<text x={Q.x + Q.s / 2} y={Q.y + Q.s + 50} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">本样方计数：9 个</text>
			</G>
			<G at={qd4.from}>
				<text x={Q.x + Q.s / 2} y={Q.y + Q.s + 92} fontSize={28} fontWeight={800} fill={C.text} textAnchor="middle">各样方取平均值 → 估算值</text>
			</G>
		</svg>
		<Appear at={qd5.from} style={{position: 'absolute', left: 90, right: 90, top: 745}}>
			<Callout label="解题方法" style={{fontSize: 31}}>
				先数框内，再只数<Hl c={C.green}>上边、左边和左上角</Hl>的个体；四条边都算就会<Hl>偏大</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
