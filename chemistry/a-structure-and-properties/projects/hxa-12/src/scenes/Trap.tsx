import React from 'react';
import {Hl} from '../components/ui';
import {Board, Mark} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.trap;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

export const Trap: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="易错辨析"
		gap={18}
		callout={{label: '易错', at: tp5.from, text: <>分子极性看<Hl>整体是否对称</Hl>；键的极性只看<Hl c={C.orange}>两个成键原子</Hl></>}}
	>
		<Mark ok={false} at={tp1.from}>极性键构成的分子一定是极性分子 —— {chem('CO2')}、{chem('CH4')} 是<Hl>非极性</Hl></Mark>
		<Mark ok={false} at={tp2.from}>{chem('O3')} 是非极性分子 —— V 形，<Hl>极性分子</Hl></Mark>
		<Mark ok at={tp3.from}>三氯乙酸酸性强于乙酸：Cl 是<Hl>吸电子基团</Hl></Mark>
		<Mark ok={false} at={tp4.from}>{chem('CH2Cl2')} 中的 C 是手性碳 —— 连两个 H、两个 Cl，<Hl>不是</Hl></Mark>
	</Board>
);
