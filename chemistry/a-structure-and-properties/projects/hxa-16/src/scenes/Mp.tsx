import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Mark} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mp;
const {mp1, mp2, mp3, mp4} = t.cue;

export const Mp: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="离子晶体的熔点比较"
		gap={22}
		callout={{label: '答题模板', at: mp4.from, text: <>都是离子晶体 → 比较<Hl>离子电荷和半径</Hl> → 离子键强弱 → 熔点高低</>}}
	>
		<Big at={mp1.from} size={38}>离子<Hl>电荷越多</Hl>、<Hl c={C.orange}>半径越小</Hl> → 离子键越强 → 熔点越高</Big>
		<Mark ok at={mp2.from} size={34}>{chem('MgO > NaCl')}：{chem('Mg^2+')}、{chem('O^2-')} 带 <Hl>2</Hl> 个电荷</Mark>
		<Mark ok at={mp3.from} size={34}>{chem('NaCl > KCl')}：电荷相同，{chem('Na^+')} 半径<Hl c={C.orange}>更小</Hl></Mark>
	</Board>
);
