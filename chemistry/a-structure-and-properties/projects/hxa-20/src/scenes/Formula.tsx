import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.formula;
const {fm1, fm2, fm3, fm4} = t.cue;

export const Formula: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="由化合物结构式推元素（课本外）"
		callout={{label: '易错', at: fm4.from, text: <>先看是不是离子；B 常连 3 个键，接受一对孤电子对后连 <Hl>4 个键、带负电</Hl></>}}
	>
		<Appear at={fm1.from} style={{fontSize: 34, fontWeight: 800}}>看每个原子<Hl>形成几个共价键</Hl></Appear>
		<Table
			head={['成键数（中性原子）', '1', '2', '3', '4']}
			cols="2fr 1fr 1fr 1fr 1fr"
			at={fm2.from}
			fontSize={34}
			rowHeight={70}
			rows={[{cells: ['可能的元素', <Hl>H、F、Cl</Hl>, <Hl>O、S</Hl>, <Hl>N、P</Hl>, <Hl>C、Si</Hl>], at: fm2.from}]}
		/>
		<Table
			head={['带电原子', '成键数', '例子']}
			cols="1.6fr 1fr 2fr"
			at={fm3.from}
			fontSize={32}
			rowHeight={64}
			headColor={C.red}
			rows={[
				{cells: [<>N<sup>+</sup></>, <Hl c={C.orange}>4</Hl>, chem('NH4^+')], at: fm3.from},
				{cells: [<>O<sup>−</sup></>, <Hl c={C.orange}>1</Hl>, <>—O<sup>−</sup></>], at: fm3.from + 25},
				{cells: [<>B<sup>−</sup></>, <Hl c={C.orange}>4</Hl>, chem('BF4^-')], at: fm4.from},
			]}
		/>
	</Board>
);
