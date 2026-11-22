import React from 'react';
import {Hl} from '../components/ui';
import {Board, Mark} from '../components/board';
import {chem} from '../components/chem';
import {T} from '../timeline';

const t = T.trap;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

export const Trap: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="易错辨析"
		gap={18}
		callout={{label: '易错', at: tp5.from, text: <>判断晶体类型看<Hl>构成微粒和微粒间作用力</Hl>，不看有没有共价键</>}}
	>
		<Mark ok={false} at={tp1.from}>有共价键的晶体就是共价晶体 —— 干冰、冰是<Hl>分子晶体</Hl></Mark>
		<Mark ok={false} at={tp2.from}>分子晶体熔化破坏共价键 —— 只破坏<Hl>分子间作用力</Hl></Mark>
		<Mark ok={false} at={tp3.from}>{chem('H2O')} 比 {chem('H2S')} 稳定是因为氢键 —— 看<Hl>键能</Hl></Mark>
		<Mark ok={false} at={tp4.from}>60 g {chem('SiO2')} 含 2N<sub>A</sub> 个 Si—O 键 —— 应为 <Hl>4N<sub>A</sub></Hl></Mark>
	</Board>
);
