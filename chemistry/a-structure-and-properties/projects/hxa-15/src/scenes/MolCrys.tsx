import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Items} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.molcrys;
const {mc1, mc2, mc3, mc4} = t.cue;

export const MolCrys: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="分子晶体"
		gap={24}
		callout={{label: '易错', at: mc4.from, text: <>稀有气体晶体是分子晶体，但<Hl>没有化学键</Hl>（单原子分子）</>}}
	>
		<Big at={mc1.from} size={38}>微粒：<Hl>分子</Hl>　　作用力：<Hl c={C.orange}>分子间作用力</Hl>（范德华力，有的还有氢键）</Big>
		<Items
			size={34}
			gap={18}
			items={[
				{at: mc2.from, node: <>大多数<Hl c={C.orange}>非金属单质</Hl>：卤素、{chem('O2')}、{chem('N2')}、{chem('P4')}、S、{chem('C60')}；稀有气体</>},
				{at: mc3.from, node: <>所有<Hl c={C.orange}>非金属氢化物</Hl>、多数非金属氧化物（<Hl>{chem('SiO2')} 除外</Hl>）</>},
				{at: mc3.from + 50, node: <>几乎所有的<Hl c={C.orange}>酸</Hl>、大多数<Hl c={C.orange}>有机物</Hl></>},
			]}
		/>
	</Board>
);
