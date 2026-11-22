import React from 'react';
import {Hl} from '../components/ui';
import {Board, Mark} from '../components/board';
import {T} from '../timeline';

const t = T.trap;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

export const Trap: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="易错辨析"
		gap={18}
		callout={{label: '易错', at: tp5.from, text: <>判断晶体看<Hl>内部结构是否有序</Hl>（X 射线衍射），不看外形</>}}
	>
		<Mark ok={false} at={tp1.from}>玻璃有固定熔点 —— 非晶体，加热<Hl>逐渐软化</Hl></Mark>
		<Mark ok={false} at={tp2.from}>有规则外形的固体一定是晶体 —— 切割的<Hl>玻璃</Hl>也有</Mark>
		<Mark ok={false} at={tp3.from}>晶体研成粉末就不是晶体 —— 每个小颗粒<Hl>仍是晶体</Hl></Mark>
		<Mark ok={false} at={tp4.from}>不同晶体的晶胞大小形状都相同 —— <Hl>可以不同</Hl></Mark>
	</Board>
);
