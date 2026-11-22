import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Row, Rule} from '../components/board';
import {PTable} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.table;
const {tb1, tb2, tb3, tb4, tb5, tb6} = t.cue;
const range = (a: number, b: number) => Array.from({length: b - a + 1}, (_, i) => a + i);

export const Table: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="元素周期表的结构"
		callout={{label: '易错', at: tb6.from, text: <>周期序数 = <Hl>电子层数</Hl>，主族序数 = <Hl>最外层电子数</Hl>；ⅠA 族的<Hl>氢</Hl>不是碱金属</>}}
	>
		<Row gap={30}>
			<PTable
				at={tb1.from}
				cell={56}
				groupLabels
				periodLabels
				marks={[
					{zs: range(1, 18), color: C.orange, fill: C.orangeSoft, at: tb2.from},
					{zs: [26, 27, 28, 44, 45, 46, 76, 77, 78, 108, 109, 110], color: C.red, fill: C.redSoft, at: tb4.from},
					{zs: [57, 89], color: C.green, fill: C.greenSoft, at: tb5.from},
				]}
			/>
			<Col gap={14}>
				<Rule tag="周期" color={C.red} at={tb1.from} size={27}>电子层数相同 → 同一横行</Rule>
				<Rule tag="7 个" color={C.orange} at={tb2.from} size={27}>1～3 <Hl c={C.orange}>短周期</Hl>，4～7 长周期</Rule>
				<Rule tag="族" color={C.red} at={tb3.from} size={27}>18 个纵列 → <Hl>16 个族</Hl></Rule>
				<Rule tag="16 族" color={C.red} at={tb4.from} size={27}>7 主族 A + 7 副族 B + <Hl>第Ⅷ族（3 列）</Hl>+ 0 族</Rule>
				<Rule tag="f 区" color={C.green} at={tb5.from} size={27}>第 6、7 周期第 3 列：镧系、锕系各 15 种</Rule>
			</Col>
		</Row>
	</Board>
);
