import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ie;
const {ie1, ie2, ie3, ie4} = t.cue;

export const Ie: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="电离能、电负性的规范解释"
		gap={20}
		callout={{label: '答题模板', at: ie4.from, text: <>结论 → 结构差异（排布、半径、核电荷数）→ <Hl>对电子的吸引 / 失电子所需能量</Hl> → 呼应结论</>}}
	>
		<Rule tag="顺序" color={C.brown} at={ie1.from} size={32}>先写<Hl>结论</Hl>，再按 排布 → 特点 → 能量 说理由</Rule>
		<Rule tag="电离能" color={C.red} at={ie2.from} size={32}>N &gt; O：N {ec('2s2 2p3')}，2p <Hl>半充满</Hl>较稳定 → 失一个电子所需能量更大</Rule>
		<Rule tag="电负性" color={C.orange} at={ie3.from} size={32}>同周期 →：<Hl c={C.orange}>核电荷数增大、半径减小</Hl> → 核对键合电子吸引增强</Rule>
	</Board>
);
