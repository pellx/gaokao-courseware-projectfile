import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.template;
const {tm1, tm2, tm3, tm4, tm5, tm6} = t.cue;

export const Template: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="答题模板：比较 N 和 O 的第一电离能并解释"
		gap={16}
		callout={{label: '答题模板', at: tm6.from, text: <>排布 → 特点（<Hl>半满、全满</Hl>或核电荷数、半径）→ 失电子所需能量 → 结论，<Hl>四步缺一不可</Hl></>}}
	>
		<Rule tag="题目" color={C.brown} at={tm1.from} size={32}>比较 N 和 O 的第一电离能，并从原子结构角度解释</Rule>
		<Rule tag="① 排布" color={C.red} at={tm2.from} size={32}>N：{ec('2s2 2p3')}；O：{ec('2s2 2p4')}</Rule>
		<Rule tag="② 特点" color={C.orange} at={tm3.from} size={32}>N 的 2p 能级<Hl>半充满</Hl>，较稳定</Rule>
		<Rule tag="③ 后果" color={C.green} at={tm4.from} size={32}>失去一个电子<Hl>所需能量更大</Hl></Rule>
		<Rule tag="④ 结论" color={C.red} at={tm5.from} size={32}>第一电离能 <Hl>N &gt; O</Hl></Rule>
	</Board>
);
