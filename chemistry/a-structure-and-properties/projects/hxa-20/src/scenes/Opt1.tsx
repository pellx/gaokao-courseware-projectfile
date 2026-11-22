import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Row, Rule} from '../components/board';
import {PTable} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.opt1;
const {o11, o12, o13, o14} = t.cue;

export const Opt1: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="选项判断（一）：半径、金属性与非金属性"
		callout={{label: '解题方法', at: o14.from, text: <>把推出的元素放进<Hl>周期表小格子</Hl>，左右上下一看，大小关系就出来了</>}}
	>
		<Row gap={30}>
			<PTable at={o11.from} cell={58} periods={4} marks={[{zs: [8, 11, 16, 17], color: C.red, at: o13.from}]} />
			<Col gap={14}>
				<Rule tag="原子半径" color={C.red} at={o12.from} size={28}><Hl>先比层数，再比核电荷数</Hl></Rule>
				<Rule tag="离子半径" color={C.orange} at={o12.from + 40} size={28}>电子层结构相同：<Hl c={C.orange}>序大径小</Hl></Rule>
				<Rule tag="金属性" color={C.green} at={o13.from} size={28}>同周期 → 减弱；同主族 ↓ 增强</Rule>
				<Rule tag="非金属性" color={C.brown} at={o13.from + 30} size={28}>与金属性<Hl c={C.brown}>相反</Hl></Rule>
			</Col>
		</Row>
	</Board>
);
