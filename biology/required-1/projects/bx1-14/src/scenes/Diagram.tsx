import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.diagram;
const {dg1, dg2, dg3} = t.cue;

// Energy profile: reactant at y=330, product at y=420; humps of different heights.
const X0 = 120;
const X1 = 900;
const R = 330;
const P = 420;
const hump = (peak: number) => `M${X0},${R} L250,${R} C380,${R} 420,${peak} 510,${peak} C600,${peak} 640,${P} 770,${P} L${X1},${P}`;

export const Diagram: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">活化能示意图</Header>
		<svg width={1500} height={500} viewBox="0 0 1500 500" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<line x1={X0} y1={460} x2={X0} y2={20} stroke={C.text} strokeWidth={4} markerEnd="url(#arrow)" />
			<line x1={X0} y1={460} x2={X1 + 40} y2={460} stroke={C.text} strokeWidth={4} markerEnd="url(#arrow)" />
			<text x={X0 + 14} y={40} fontSize={26} fontWeight={800} fill={C.muted}>能量</text>
			<text x={X1 + 40} y={495} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="end">反应过程</text>
			<text x={180} y={R - 14} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">反应物</text>
			<text x={850} y={P - 14} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">产物</text>
			<G at={dg1.from}>
				<path d={hump(60)} fill="none" stroke={C.muted} strokeWidth={6} />
				<line x1={250} y1={R} x2={1000} y2={R} stroke={C.muted} strokeWidth={2} strokeDasharray="8 6" />
				<line x1={510} y1={60} x2={1000} y2={60} stroke={C.muted} strokeWidth={2} strokeDasharray="8 6" />
				<Arrow x1={960} y1={R} x2={960} y2={64} trim={[0, 0]} width={4} />
				<text x={980} y={200} fontSize={26} fontWeight={900} fill={C.muted}>无催化剂时的活化能</text>
			</G>
			<G at={dg2.from}>
				<path d={hump(150)} fill="none" stroke={C.brown} strokeWidth={6} strokeDasharray="14 8" />
				<path d={hump(230)} fill="none" stroke={C.red} strokeWidth={7} />
				<text x={510} y={140} fontSize={24} fontWeight={800} fill={C.brown} textAnchor="middle">无机催化剂</text>
				<text x={510} y={220} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">酶</text>
			</G>
			<G at={dg3.from}>
				<line x1={510} y1={230} x2={1000} y2={230} stroke={C.red} strokeWidth={2} strokeDasharray="8 6" />
				<Arrow x1={880} y1={64} x2={880} y2={226} trim={[0, 0]} color={C.red} marker="arrow-red" width={4} />
				<text x={870} y={160} fontSize={26} fontWeight={900} fill={C.red} textAnchor="end">酶降低的活化能</text>
			</G>
		</svg>
		<Tip at={dg3.from} top={690} label="解题方法">
			酶降低的活化能 ＝ <Hl>无催化剂时的活化能 − 有酶时的活化能</Hl>（两条曲线最高点之差）
		</Tip>
		<Narration t={t} />
	</Scene>
);
