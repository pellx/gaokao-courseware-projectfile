import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.result;
const {rs1, rs2, rs3, rs4} = t.cue;

// Paper strip with four pigment bands (top to bottom), widths by content.
const BANDS: {y: number; h: number; fill: string; name: string; color: string; at: (typeof rs1)}[] = [
	{y: 70, h: 10, fill: '#f0a030', name: '胡萝卜素（橙黄色）', color: C.orange, at: rs1},
	{y: 140, h: 20, fill: '#e8c820', name: '叶黄素（黄色）', color: C.gold, at: rs1},
	{y: 220, h: 36, fill: '#2f7d4f', name: '叶绿素a（蓝绿色）', color: C.green, at: rs2},
	{y: 300, h: 26, fill: '#9cc23a', name: '叶绿素b（黄绿色）', color: C.green, at: rs2},
];

export const Result: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">实验结果：四条色素带</Header>
		<svg width={1100} height={470} viewBox="0 0 1100 470" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={rs1.from}>
				<rect x={120} y={20} width={200} height={430} rx={6} fill="#fffdf8" stroke={C.line} strokeWidth={4} />
				<line x1={130} y1={400} x2={310} y2={400} stroke={C.green} strokeWidth={4} />
				<text x={345} y={410} fontSize={26} fontWeight={800} fill={C.muted}>滤液细线</text>
				<text x={100} y={45} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="end">扩散快</text>
				<text x={100} y={420} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="end">扩散慢</text>
			</G>
			{BANDS.map((b) => (
				<G key={b.name} at={b.at.from}>
					<rect x={130} y={b.y - b.h / 2} width={180} height={b.h} rx={4} fill={b.fill} />
					<line x1={320} y1={b.y} x2={380} y2={b.y} stroke={b.color} strokeWidth={3} />
					<text x={395} y={b.y + 11} fontSize={32} fontWeight={900} fill={b.color}>{b.name}</text>
				</G>
			))}
			<G at={rs3.from}>
				<text x={760} y={231} fontSize={28} fontWeight={900} fill={C.red}>← 最宽，含量最多</text>
				<text x={720} y={81} fontSize={28} fontWeight={900} fill={C.red}>← 最窄；溶解度最高</text>
			</G>
		</svg>
		<Tip at={rs4.from} top={680} label="解题方法">
			从上到下：<Hl>胡、黄、a、b</Hl>；宽度（含量）：叶绿素a ＞ 叶绿素b ＞ 叶黄素 ＞ 胡萝卜素
		</Tip>
		<Narration t={t} />
	</Scene>
);
