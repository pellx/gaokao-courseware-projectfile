import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Cross} from '../components/gene';
import {G, Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.testcross;
const {tc1, tc2, tc3, tc4} = t.cue;
const XS = [120, 300, 480, 660];
const KIDS = [
	{geno: 'YyRr', pheno: '黄圆', color: C.red},
	{geno: 'Yyrr', pheno: '黄皱', color: C.orange},
	{geno: 'yyRr', pheno: '绿圆', color: C.green},
	{geno: 'yyrr', pheno: '绿皱', color: C.brown},
];

export const Testcross: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">测交验证</Header>
		<svg width={900} height={560} viewBox="0 0 900 560" style={{position: 'absolute', left: 70, top: 160}}>
			<Cross
				fontSize={40}
				labelX={0}
				rows={[
					{label: '测交', y: 60, at: tc1.from, items: [{x: 300, geno: 'YyRr', pheno: '黄圆（F1）', color: C.red}, {x: 700, geno: 'yyrr', pheno: '绿皱', color: C.brown}], signs: [{x: 500, text: '×'}]},
					{label: '配子', y: 260, at: tc2.from, items: [...['YR', 'Yr', 'yR', 'yr'].map((g, i) => ({x: XS[i] + 40, geno: g, color: KIDS[i].color})), {x: 800, geno: 'yr', color: C.brown}]},
					{label: '子代', y: 430, at: tc3.from, items: KIDS.map((k, i) => ({x: XS[i] + 40, ...k}))},
				]}
				links={[
					...[0, 1, 2, 3].map((i) => [[0, 0], [1, i]] as [[number, number], [number, number]]),
					[[0, 1], [1, 4]],
					...[0, 1, 2, 3].map((i) => [[1, i], [2, i]] as [[number, number], [number, number]]),
				]}
			/>
			<G at={tc3.from}>
				<text x={400} y={540} fontSize={38} fontWeight={900} fill={C.red} textAnchor="middle">1 ∶ 1 ∶ 1 ∶ 1</text>
			</G>
		</svg>
		<div style={{position: 'absolute', left: 1010, right: 90, top: 200}}>
			<Table
				at={tc3.from + 30}
				cols="1.3fr 1fr 1fr 1fr 1fr"
				fontSize={28}
				rowHeight={80}
				head={['实际', '黄圆', '黄皱', '绿圆', '绿皱']}
				rows={[
					{at: tc3.from + 40, cells: ['F1 作母本', '31', '27', '26', '26']},
					{at: tc3.from + 70, cells: ['F1 作父本', '24', '22', '25', '26']},
				]}
			/>
		</div>
		<Tip at={tc4.from} top={740} label="考法" fontSize={32}>
			测交证明 F<sub>1</sub> 产生了<Hl>四种比例相等的配子</Hl>，即形成配子时不同对的遗传因子<Hl>自由组合</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
