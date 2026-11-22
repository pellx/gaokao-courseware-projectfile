import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cap;
const {cp1, cp2, cp3, cp4} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Cap: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="各能层、能级最多容纳的电子数"
		callout={{label: '解题方法', at: cp4.from, text: <>s、p、d、f → <Hl>2、6、10、14</Hl>，公差为 4；能层容量 = 各能级之和 = <Hl>2n<sup>2</sup></Hl></>}}
	>
		<Table
			head={['能级', 's', 'p', 'd', 'f']}
			cols="1.4fr 1fr 1fr 1fr 1fr"
			at={cp1.from}
			fontSize={34}
			rowHeight={70}
			rows={[{cells: ['最多电子数', <Hl>2</Hl>, <Hl>6</Hl>, <Hl>10</Hl>, <Hl>14</Hl>], at: cp1.from}]}
		/>
		<Table
			head={['能层', 'K', 'L', 'M', 'N']}
			cols="1.4fr 1fr 1fr 1fr 1fr"
			at={cp2.from}
			fontSize={34}
			rowHeight={70}
			headColor={C.red}
			rows={[
				{cells: ['计算', n('2'), n('2+6'), n('2+6+10'), n('2+6+10+14')], at: cp2.from},
				{cells: [<span>最多 2n<sup>2</sup></span>, n('2'), n('8'), n('18'), n('32')], at: cp2.from + 20, key: true},
			]}
			focus
		/>
		<Big at={cp3.from} size={38}>同一能层：<Hl>ns &lt; np &lt; nd &lt; nf</Hl></Big>
	</Board>
);
