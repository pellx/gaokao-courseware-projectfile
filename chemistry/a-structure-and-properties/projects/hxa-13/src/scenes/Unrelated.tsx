import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Mark} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.unrelated;
const {ur1, ur2, ur3, ur4} = t.cue;

export const Unrelated: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="与氢键无关的事实"
		gap={18}
		callout={{label: '考法', at: ur4.from, text: <>“下列事实与氢键无关的是” → 找<Hl>热稳定性</Hl>那一项</>}}
	>
		<Big at={ur1.from} size={36}>氢键影响<Hl c={C.orange}>物理性质</Hl>：熔沸点、溶解度、密度</Big>
		<Mark ok={false} at={ur2.from} size={32}>{chem('HF')} 比 {chem('HCl')} 稳定 —— <Hl>键能</Hl>决定，与氢键无关</Mark>
		<Mark ok={false} at={ur2.from + 40} size={32}>{chem('H2O')} 比 {chem('H2S')} 稳定 —— <Hl>键能</Hl>决定，与氢键无关</Mark>
		<Mark ok={false} at={ur3.from} size={32}>{chem('HF')} 酸性比 {chem('HCl')} 弱、{chem('CH4')} 沸点很低 —— 也与氢键无关</Mark>
	</Board>
);
