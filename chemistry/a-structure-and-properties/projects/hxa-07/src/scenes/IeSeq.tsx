import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ieseq;
const {is1, is3, is4, is5} = t.cue;
const n = (x: string) => <span>{x}</span>;
const J = (x: string) => <span style={{color: C.red, fontWeight: 900}}>↑{x}</span>;

export const IeSeq: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="逐级电离能（kJ/mol）"
		callout={{label: '解题方法', at: is5.from, text: <>找<Hl>第一次大突跃</Hl>：前面有几个电离能，最外层就有几个电子</>}}
	>
		<Big at={is1.from} size={34}>I<sub>1</sub> &lt; I<sub>2</sub> &lt; I<sub>3</sub> &lt; …　<Hl>突跃</Hl> → 开始失去<Hl>内层</Hl>电子</Big>
		<Table
			head={['元素', 'I1', 'I2', 'I3', 'I4', '最外层 / 化合价']}
			cols="1fr 1fr 1fr 1fr 1fr 1.8fr"
			at={is3.from}
			fontSize={32}
			rowHeight={70}
			rows={[
				{cells: ['Na', n('496'), J('4562'), n('6912'), n('9543'), <Hl>1 个 / +1</Hl>], at: is3.from},
				{cells: ['Mg', n('738'), n('1451'), J('7733'), n('10540'), <Hl>2 个 / +2</Hl>], at: is4.from},
				{cells: ['Al', n('578'), n('1817'), n('2745'), J('11575'), <Hl>3 个 / +3</Hl>], at: is4.from + 40},
			]}
		/>
	</Board>
);
