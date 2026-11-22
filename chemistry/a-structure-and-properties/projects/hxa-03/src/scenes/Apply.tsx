import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Row, Rule} from '../components/board';
import {PTable} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apply;
const {ap1, ap2, ap3, ap4, ap5} = t.cue;
const range = (a: number, b: number) => Array.from({length: b - a + 1}, (_, i) => a + i);
const TRANS = [...range(21, 30), ...range(39, 48), ...range(72, 80)];

export const Apply: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="周期表和周期律的应用"
		callout={{label: '考法', at: ap5.from, text: <>半导体找<Hl>分界线</Hl>，催化剂找<Hl c={C.orange}>过渡元素</Hl>，农药找<Hl c={C.green}>右上方</Hl>——别调换</>}}
	>
		<Row gap={30}>
			<PTable
				at={ap1.from}
				cell={52}
				periods={6}
				marks={[
					{zs: [5, 14, 32, 33, 51, 52, 84, 85], color: C.red, at: ap1.from},
					{zs: TRANS, color: C.orange, fill: C.orangeSoft, at: ap2.from},
					{zs: [9, 15, 16, 17], color: C.green, at: ap3.from},
				]}
			/>
			<Col gap={14}>
				<Rule tag="半导体" color={C.red} at={ap1.from} size={28}>金属与非金属<Hl>分界线附近</Hl>（Si、Ge）</Rule>
				<Rule tag="催化剂" color={C.orange} at={ap2.from} size={28}><Hl c={C.orange}>过渡元素</Hl>：催化剂、耐高温耐腐蚀合金</Rule>
				<Rule tag="农药" color={C.green} at={ap3.from} size={28}>右上方 F、Cl、S、P 附近</Rule>
				<Rule tag="预测" color={C.brown} at={ap4.from} size={28}>门捷列夫预言“类铝”“类硅”→ 镓、锗</Rule>
			</Col>
		</Row>
	</Board>
);
