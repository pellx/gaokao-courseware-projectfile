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
		tag="考点七"
		title="易错辨析"
		gap={18}
		callout={{label: '易错', at: tp5.from, text: <>稳定性看<Hl>键能</Hl>，熔沸点看<Hl c={C.orange}>分子间作用力</Hl></>}}
	>
		<Mark ok at={tp1.from}>{chem('N2')} 化学性质稳定，因为 N≡N <Hl>键能大</Hl></Mark>
		<Mark ok={false} at={tp2.from}>HF 比 HCl 稳定，因为有氢键 —— 看<Hl>键能</Hl>，与氢键无关</Mark>
		<Mark ok={false} at={tp3.from}>π 键“一定”比 σ 键弱 —— <Hl>一般</Hl>如此，{chem('N2')} 中的 π 键较牢固</Mark>
		<Mark ok={false} at={tp4.from}>1 mol 乙烯含 6 mol σ 键 —— <Hl>5 mol σ、1 mol π</Hl></Mark>
	</Board>
);
