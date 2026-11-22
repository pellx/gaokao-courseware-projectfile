import React from 'react';
import {Hl} from '../components/ui';
import {Board, Mark} from '../components/board';
import {T} from '../timeline';

const t = T.trap;
const {tp2, tp3, tp4, tp5, tp6} = t.cue;

export const Trap: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="易错辨析"
		gap={18}
		callout={{label: '易错', at: tp6.from, text: <>见到“<Hl>一定</Hl>”“<Hl>都</Hl>”“<Hl>就是</Hl>”这类绝对化说法，先找反例</>}}
	>
		<Mark ok={false} at={tp2.from}>能层越高，能级能量一定越高 —— <Hl>4s &lt; 3d</Hl></Mark>
		<Mark ok={false} at={tp3.from}>原子轨道就是电子运动的固定路线 —— 只是<Hl>概率较大的区域</Hl></Mark>
		<Mark ok={false} at={tp4.from}>p 能级能量一定比 s 能级高 —— <Hl>3s &gt; 2p</Hl></Mark>
		<Mark ok at={tp5.from}>第三能层：3 个能级、9 个轨道、最多 18 个电子</Mark>
	</Board>
);
