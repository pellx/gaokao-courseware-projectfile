import React from 'react';
import {Hl} from '../components/ui';
import {Board, Mark} from '../components/board';
import {T} from '../timeline';

const t = T.trap;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

export const Trap: React.FC = () => (
	<Board
		t={t}
		tag="考点九"
		title="易错辨析"
		gap={18}
		callout={{label: '易错', at: tp5.from, text: <>第一电离能、金属性、电负性的顺序<Hl>不完全一致</Hl>，反常点就是命题点</>}}
	>
		<Mark ok={false} at={tp1.from}>I<sub>1</sub>：N &gt; O，所以电负性 N &gt; O —— 电负性 <Hl>O &gt; N</Hl></Mark>
		<Mark ok={false} at={tp2.from}>I<sub>1</sub> 越大，金属性一定越弱 —— I<sub>1</sub>：Mg &gt; Al，金属性 <Hl>Mg &gt; Al</Hl></Mark>
		<Mark ok={false} at={tp3.from}>同周期：半径减小，I<sub>1</sub> 和电负性“都增大” —— I<sub>1</sub> 有<Hl>反常</Hl></Mark>
		<Mark ok={false} at={tp4.from}>只答“因为 N 的第一电离能大” —— 必须写<Hl>结构原因</Hl></Mark>
	</Board>
);
