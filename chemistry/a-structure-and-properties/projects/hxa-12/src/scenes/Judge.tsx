import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board, Rule} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.judge;
const {jd1, jd2, jd3, jd4, jd5, jd6} = t.cue;
const L = (xs: string[]) => xs.map((x) => chem(x)).reduce<React.ReactNode[]>((a, b, k) => (k ? [...a, '、', b] : [b]), []);

export const Judge: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="判断分子的极性"
		callout={{label: '解题方法', at: jd6.from, text: <>先画空间结构看是否<Hl>对称</Hl>；AB<sub>n</sub> 型直接看中心原子有无<Hl c={C.orange}>孤电子对</Hl></>}}
	>
		<Rule tag="双原子" color={C.brown} at={jd1.from} size={30}>同种原子 → 非极性；不同原子 → 极性</Rule>
		<Rule tag="多原子" color={C.red} at={jd2.from} size={30}>看空间结构是否<Hl>对称</Hl></Rule>
		<Rule tag={'ABn 型'} color={C.orange} at={jd3.from} size={30}>中心原子最外层电子<Hl c={C.orange}>全部成键</Hl>（无孤电子对）→ 一般非极性</Rule>
		<Table
			head={['类别', '实例', '原因']}
			cols="1fr 2.4fr 1.6fr"
			at={jd4.from}
			fontSize={32}
			rowHeight={64}
			rows={[
				{cells: [<Hl c={C.orange}>非极性</Hl>, L(['CO2', 'BF3', 'CH4', 'CCl4', 'SO3']), '中心原子无孤电子对'], at: jd4.from},
				{cells: [<Hl>极性</Hl>, L(['H2O', 'NH3', 'SO2']), '中心原子有孤电子对'], at: jd4.from + 40},
				{cells: [<Hl>极性</Hl>, L(['H2O2', 'O3']), '常考特例'], at: jd5.from, key: true},
			]}
			focus
		/>
	</Board>
);
