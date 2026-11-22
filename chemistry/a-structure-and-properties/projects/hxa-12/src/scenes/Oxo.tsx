import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.oxo;
const {ox1, ox2, ox3, ox4, ox5} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Oxo: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="无机含氧酸的酸性（课本外）"
		callout={{label: '易错', at: ox5.from, text: <>课本没有、考试会用；用于<Hl>同一元素</Hl>的含氧酸，不同元素最高价含氧酸还是比<Hl c={C.orange}>非金属性</Hl></>}}
	>
		<Big at={ox1.from} size={36}>
			写成 (HO)<sub>m</sub>RO<sub>n</sub>：n = <Hl>非羟基氧</Hl>数　→　<Hl>n 越大，酸性越强</Hl>
		</Big>
		<Appear at={ox2.from} style={{fontSize: 30, fontWeight: 800, color: C.muted}}>非羟基氧越多 → R 正电性越高 → O—H 越易断</Appear>
		<Table
			head={['含氧酸', '写法', '非羟基氧 n', '酸性']}
			cols="1.2fr 1.4fr 1fr 1fr"
			at={ox3.from}
			fontSize={32}
			rowHeight={60}
			rows={[
				{cells: [chem('HClO'), chem('(HO)Cl'), n('0'), '弱'], at: ox3.from},
				{cells: [chem('HClO2'), chem('(HO)ClO'), n('1'), '中强'], at: ox3.from + 15},
				{cells: [chem('HClO3'), chem('(HO)ClO2'), n('2'), '强'], at: ox3.from + 30},
				{cells: [chem('HClO4'), chem('(HO)ClO3'), <Hl>3</Hl>, <Hl>最强</Hl>], at: ox3.from + 45, key: true},
				{cells: [chem('H2SO4') , chem('(HO)2SO2'), n('2'), <>强于 {chem('H2SO3')}（n = 1）</>], at: ox4.from},
			]}
			focus
		/>
	</Board>
);
