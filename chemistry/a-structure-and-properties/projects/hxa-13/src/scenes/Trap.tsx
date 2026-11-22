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
		tag="考点九"
		title="易错辨析"
		gap={18}
		callout={{label: '易错', at: tp5.from, text: <>氢键看<Hl>有没有</Hl>、看<Hl c={C.orange}>分子间还是分子内</Hl>、看<Hl c={C.green}>数目多少</Hl></>}}
	>
		<Mark ok={false} at={tp1.from}>氢键是一种化学键 —— 属于<Hl>分子间作用力</Hl></Mark>
		<Mark ok={false} at={tp2.from}>含 H 的分子之间都能形成氢键 —— {chem('CH4')} 没有；H 须连 N、O、F</Mark>
		<Mark ok={false} at={tp3.from}>HF 氢键更强，所以沸点 HF &gt; {chem('H2O')} —— {chem('H2O')} 形成的氢键<Hl>数目更多</Hl></Mark>
		<Mark ok={false} at={tp4.from}>邻羟基苯甲醛沸点更高 —— 分子内氢键使沸点<Hl>降低</Hl></Mark>
	</Board>
);
