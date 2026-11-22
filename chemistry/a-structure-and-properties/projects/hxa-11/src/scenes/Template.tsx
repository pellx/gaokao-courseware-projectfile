import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.template;
const {tm1, tm2, tm3, tm4, tm5, tm6} = t.cue;

export const Template: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="答题模板：比较水和氨的键角"
		gap={16}
		callout={{label: '答题模板', at: tm6.from, text: <>杂化相同 → 孤电子对数不同 → <Hl>排斥力比较</Hl> → 结论；缺“排斥力”常扣分</>}}
	>
		<Rule tag="题目" color={C.brown} at={tm1.from} size={32}>比较 {chem('H2O')} 和 {chem('NH3')} 的键角大小并解释原因</Rule>
		<Rule tag="① 杂化" color={C.red} at={tm2.from} size={32}>中心原子都是 <Hl>sp<sup>3</sup></Hl> 杂化</Rule>
		<Rule tag="② 孤对" color={C.orange} at={tm3.from} size={32}>O 有 <Hl>2</Hl> 对孤电子对，N 有 <Hl>1</Hl> 对</Rule>
		<Rule tag="③ 排斥" color={C.green} at={tm4.from} size={32}><Hl>孤电子对–成键电子对</Hl>的排斥 &gt; 成键电子对之间的排斥</Rule>
		<Rule tag="④ 结论" color={C.red} at={tm5.from} size={32}>孤电子对越多键角越小：键角 <Hl>{chem('NH3 > H2O')}</Hl></Rule>
	</Board>
);
