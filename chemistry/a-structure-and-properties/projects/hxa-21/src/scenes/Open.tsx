import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.open;
const {op1, op2, op3, op4, op4b, op5} = t.cue;

export const Open: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="“结构决定性质”类开放设问"
		gap={20}
		callout={{label: '答题模板', at: op5.from, text: <>结构特点 → 对电子或空间的影响 → 性质结论；用“<Hl>由于……使……所以……</Hl>”串起来</>}}
		overlay={
			<AnimeBeat k="pass" from={op4b.from} to={op4b.to}>
				拿分靠<span style={{color: C.red}}>规范</span>：{'\n'}结论 + 结构原因{'\n'}+ 因果连接词
			</AnimeBeat>
		}
	>
		<Rule tag="题型" color={C.brown} at={op1.from} size={32}>给出反应或性质，从结构角度解释</Rule>
		<Rule tag="键的极性" color={C.red} at={op2.from} size={32}>吸电子基团 → O—H 极性增大 → <Hl>酸性增强</Hl></Rule>
		<Rule tag="空间位阻" color={C.orange} at={op3.from} size={32}>大基团挡住反应位点 → <Hl c={C.orange}>反应变慢</Hl></Rule>
		<Rule tag="π 键" color={C.green} at={op4.from} size={32}>π 键较弱易断 → <Hl c={C.green}>易加成</Hl></Rule>
	</Board>
);
