import React from 'react';
import {Hl} from '../components/ui';
import {Board, Mark} from '../components/board';
import {ec} from '../components/sci';
import {T} from '../timeline';

const t = T.trap;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

export const Trap: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="易错辨析"
		gap={18}
		callout={{label: '易错', at: tp5.from, text: <>见到“一定”“都”，先想<Hl>氢、氦和过渡元素</Hl>这几个特例</>}}
	>
		<Mark ok={false} at={tp1.from}>最外层 2 个电子一定在ⅡA 族 —— <Hl>He</Hl>、许多过渡元素也是</Mark>
		<Mark ok={false} at={tp2.from}>Cu、Zn 位于 d 区 —— 在 <Hl>ds 区</Hl></Mark>
		<Mark ok at={tp3.from}>H 在 s 区，He 在 p 区</Mark>
		<Mark ok={false} at={tp4.from}>价层 {ec('ns2')} 的元素都是金属 —— He 是 {ec('1s2')}</Mark>
	</Board>
);
