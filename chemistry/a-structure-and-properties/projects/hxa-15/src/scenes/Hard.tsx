import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hard;
const {hd1, hd2, hd3, hd4} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Hard: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="共价晶体的熔点和硬度"
		callout={{label: '答题模板', at: hd4.from, text: <>都是共价晶体 → 半径 C &lt; Si → 键长 C—C &lt; C—Si &lt; Si—Si → <Hl>键能依次减小</Hl> → 熔点依次降低</>}}
	>
		<Big at={hd1.from} size={36}>熔化破坏<Hl>共价键</Hl> → 熔点高、硬度大，一般不导电、难溶</Big>
		<Big at={hd2.from} size={36} color={C.orange} soft={C.orangeSoft}>原子半径小 → <Hl>键长短、键能大</Hl> → 熔点高、硬度大</Big>
		<Table
			head={['共价晶体', '键', '键长 / pm', '熔点 / ℃']}
			cols="1.2fr 1fr 1fr 1fr"
			at={hd3.from}
			fontSize={32}
			rowHeight={62}
			rows={[
				{cells: [<Hl>金刚石</Hl>, 'C—C', n('154'), <Hl>&gt;3500</Hl>], at: hd3.from},
				{cells: ['碳化硅', 'C—Si', n('184'), n('2700')], at: hd3.from + 20},
				{cells: ['晶体硅', 'Si—Si', n('234'), n('1410')], at: hd3.from + 40},
			]}
		/>
	</Board>
);
