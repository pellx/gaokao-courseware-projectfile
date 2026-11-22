import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.norm;
const {nr1, nr2, nr3, nr4, nr5} = t.cue;

export const Norm: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="审题规范"
		gap={18}
		callout={{label: '易错', at: nr5.from, text: <>Fe 价层写成 {ec('4s2')} ✗；{'Cu'}<sup>2+</sup> 写成 {ec('3d7 4s2')} ✗——常见丢分点</>}}
	>
		<Rule tag="一看" color={C.red} at={nr1.from} size={32}>问<Hl>价层</Hl>还是<Hl c={C.orange}>完整</Hl>的电子排布式</Rule>
		<Rule tag="二看" color={C.orange} at={nr2.from} size={32}><Hl>基态</Hl>还是<Hl c={C.orange}>激发态</Hl>（激发态不满足构造原理，但也合理）</Rule>
		<Rule tag="三看" color={C.green} at={nr3.from} size={32}><Hl>原子</Hl>还是<Hl c={C.orange}>离子</Hl>（离子先失最外层）</Rule>
		<Rule tag="四看" color={C.brown} at={nr4.from} size={32}>主族价层 = 最外层；过渡元素带 (n−1)d：Cu {ec('3d10 4s1')}</Rule>
	</Board>
);
