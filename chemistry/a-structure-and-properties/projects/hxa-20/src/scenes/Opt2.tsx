import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.opt2;
const {o21, o22, o23, o24} = t.cue;

export const Opt2: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="选项判断（二）：电离能、电负性、酸性、稳定性"
		gap={20}
		callout={{label: '易错', at: o24.from, text: <>电负性 <Hl>O &gt; N</Hl>，但第一电离能 <Hl c={C.orange}>N &gt; O</Hl>——顺序不一样</>}}
	>
		<Big at={o21.from} size={34}>四个指标，三个跟着<Hl>非金属性</Hl>走，一个有<Hl c={C.orange}>反常</Hl></Big>
		<Rule tag="第一电离能" color={C.orange} at={o22.from} size={32}>同周期总体增大，<Hl c={C.orange}>ⅡA、ⅤA 反常</Hl>：N &gt; O，Mg &gt; Al</Rule>
		<Rule tag="电负性" color={C.red} at={o23.from} size={32}>与非金属性一致</Rule>
		<Rule tag="最高价含氧酸" color={C.red} at={o23.from + 20} size={32}>与非金属性一致</Rule>
		<Rule tag="简单氢化物稳定性" color={C.red} at={o23.from + 40} size={32}>与非金属性一致</Rule>
	</Board>
);
