import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board, Col, Row, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.valence;
const {va1, va2, va3, va4, va5} = t.cue;
const s = (x: string) => <span>{x}</span>;

export const Valence: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="主要化合价"
		callout={{label: '考法', at: va5.from, text: <>看到“最高正价 +7” → <Hl>Cl</Hl>（不可能是 F）；看到“无正价” → <Hl>F</Hl></>}}
	>
		<Row gap={30}>
			<Col width={900}>
				<Table
					head={['第三周期', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl']}
					cols="2.2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
					at={va1.from}
					fontSize={30}
					rowHeight={62}
					rows={[
						{cells: ['最外层电子', s('1'), s('2'), s('3'), s('4'), s('5'), s('6'), s('7')], at: va1.from},
						{cells: ['最高正价', s('+1'), s('+2'), s('+3'), s('+4'), s('+5'), s('+6'), <Hl>+7</Hl>], at: va3.from},
						{cells: ['最低负价', '—', '—', '—', s('−4'), s('−3'), s('−2'), <Hl c={C.orange}>−1</Hl>], at: va3.from + 30},
					]}
				/>
			</Col>
			<Col gap={14}>
				<Rule tag="规律" color={C.red} at={va1.from} size={28}>最高正价 = <Hl>主族序数</Hl></Rule>
				<Rule tag="规律" color={C.orange} at={va2.from} size={28}>正价 + |负价| = <Hl c={C.orange}>8</Hl></Rule>
			</Col>
		</Row>
		<Big at={va4.from} size={36} color={C.red} soft={C.redSoft}>
			例外：<Hl>O、F 没有最高正价</Hl>（F 没有正价）；金属元素<Hl c={C.orange}>没有负价</Hl>
		</Big>
	</Board>
);
