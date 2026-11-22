import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.doping;
const {dp1, dp2, dp3, dp4} = t.cue;

export const Doping: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="掺杂、取代与空位（课本外）"
		gap={20}
		callout={{label: '解题方法', at: dp4.from, text: <>画出新晶胞，<Hl>逐个位置重新均摊</Hl>；最后检查化合价代数和为零</>}}
	>
		<Rule tag="题型" color={C.brown} at={dp1.from} size={34}>某些原子被<Hl>替换</Hl>，或某位置<Hl c={C.orange}>缺失</Hl> → 重新求化学式</Rule>
		<Rule tag="取代" color={C.red} at={dp2.from} size={34}>一个面心被替换：原粒子 <Hl>− 1/2</Hl>，新粒子 <Hl>+ 1/2</Hl></Rule>
		<Rule tag="空位" color={C.orange} at={dp3.from} size={34}>减去缺失粒子的均摊份额，再检查<Hl c={C.orange}>电荷守恒</Hl>（可能需要变价离子）</Rule>
	</Board>
);
