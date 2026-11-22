import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board, Col, Row, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.params;
const {pa1, pa2, pa3, pa4, pa5} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Params: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="键参数：键能、键长、键角"
		callout={{label: '易错', at: pa5.from, text: <>键能、键长 → 分子的<Hl>稳定性</Hl>；键长、键角 → 分子的<Hl c={C.orange}>空间结构</Hl></>}}
	>
		<Row gap={30}>
			<Col gap={14}>
				<Rule tag="键能" color={C.red} at={pa1.from} size={28}>1 mol 气态键解离成气态原子吸收的能量；<Hl>越大越牢固</Hl></Rule>
				<Rule tag="键长" color={C.orange} at={pa2.from} size={28}>两核间距；<Hl c={C.orange}>越短</Hl>，往往键能越大</Rule>
				<Rule tag="键角" color={C.green} at={pa4.from} size={28}>CO<sub>2</sub> 180°，H<sub>2</sub>O 约 105°，CH<sub>4</sub> 109°28′</Rule>
			</Col>
			<Col width={700}>
				<Table
					head={['键', '键长 / pm', '键能 kJ/mol']}
					cols="1fr 1.2fr 1.4fr"
					at={pa3.from}
					fontSize={32}
					rowHeight={66}
					rows={[
						{cells: ['C—C', n('154'), n('347.7')], at: pa3.from},
						{cells: ['C=C', n('133'), <>615 <span style={{fontSize: 24, color: C.red}}>&lt; 2×347.7</span></>], at: pa3.from + 20},
						{cells: ['C≡C', n('120'), n('812')], at: pa3.from + 40},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
