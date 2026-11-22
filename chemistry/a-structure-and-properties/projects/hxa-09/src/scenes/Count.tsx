import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.count;
const {co1, co2, co3, co4, co5} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Count: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="σ 键与 π 键的计数"
		callout={{label: '解题方法', at: co5.from, text: <>画结构式数“线”：每两原子之间算 <Hl>1 个 σ</Hl>，多出来的都是 π；别漏<Hl c={C.orange}>配位键</Hl>和 C—H</>}}
	>
		<Big at={co1.from} size={38}>
			单键 <Hl>1σ</Hl>　　双键 <Hl c={C.orange}>1σ + 1π</Hl>　　三键 <Hl c={C.green}>1σ + 2π</Hl>
		</Big>
		<Table
			head={['分子', '结构', 'σ 键', 'π 键']}
			cols="1.2fr 2.6fr 0.8fr 0.8fr"
			at={co2.from}
			fontSize={32}
			rowHeight={62}
			rows={[
				{cells: [chem('N2'), 'N≡N', n('1'), <Hl>2</Hl>], at: co2.from},
				{cells: ['乙烯 ' , '4 个 C—H + 1 个 C=C', <Hl>5</Hl>, n('1')], at: co2.from + 40},
				{cells: ['乙炔', '2 个 C—H + 1 个 C≡C', n('3'), n('2')], at: co3.from},
				{cells: [chem('CO2'), 'O=C=O', n('2'), n('2')], at: co3.from + 40},
				{cells: [chem('[Cu(NH3)4]^2+'), <>4 个<Hl c={C.orange}>配位键</Hl> + 12 个 N—H</>, <Hl>16</Hl>, n('0')], at: co4.from, key: true},
			]}
			focus
		/>
	</Board>
);
