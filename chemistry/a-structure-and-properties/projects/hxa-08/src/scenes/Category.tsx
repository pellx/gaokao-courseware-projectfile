import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.category;
const {ct1, ct2, ct3, ct4, ct5} = t.cue;
const Y = <Hl c={C.green}>✓</Hl>;
const N = <span style={{color: C.muted}}>—</span>;

export const Category: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="化学键与物质类别"
		callout={{label: '考法', at: ct5.from, text: <>“既含离子键又含<Hl>非极性键</Hl>的是” → 常选 <Hl>{chem('Na2O2')}</Hl></>}}
	>
		<Table
			head={['物质', '类别', '离子键', '极性键', '非极性键']}
			cols="1.2fr 1.6fr 1fr 1fr 1fr"
			at={ct1.from}
			fontSize={32}
			rowHeight={64}
			rows={[
				{cells: [chem('NaCl'), '离子化合物', Y, N, N], at: ct1.from},
				{cells: [chem('NaOH'), '离子化合物', Y, Y, N], at: ct1.from + 15},
				{cells: [chem('Na2O2'), '离子化合物', Y, N, <Hl>✓</Hl>], at: ct1.from + 30, key: true},
				{cells: [chem('NH4Cl'), '离子化合物', Y, Y, N], at: ct1.from + 45},
				{cells: [chem('H2O2'), '共价化合物', N, Y, Y], at: ct2.from},
				{cells: [chem('Cl2'), '单质', N, N, Y], at: ct3.from},
				{cells: ['He、Ne', <Hl c={C.orange}>单原子分子</Hl>, N, N, <Hl c={C.orange}>无化学键</Hl>], at: ct3.from + 30},
			]}
			focus
		/>
		<Appear at={ct4.from} style={{fontSize: 30, fontWeight: 800}}>
			判断顺序：先看有没有<Hl>活泼金属或铵根</Hl> → 再看原子团内部的共价键
		</Appear>
	</Board>
);
