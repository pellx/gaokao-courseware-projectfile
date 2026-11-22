import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Rule} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.norm;
const {nm1, nm2, nm3, nm4, nm5} = t.cue;

export const Norm: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="规范表述：比较熔沸点"
		gap={18}
		callout={{label: '答题模板', at: nm5.from, text: <>作用力类型 → 强弱比较 → 结论，<Hl>三步缺一不可</Hl></>}}
	>
		<Rule tag="① 类型" color={C.red} at={nm1.from} size={32}>指出作用力类型：<Hl>有没有氢键</Hl></Rule>
		<Rule tag="② 强弱" color={C.orange} at={nm2.from} size={32}>氢键 &gt; 范德华力；无氢键时比<Hl c={C.orange}>相对分子质量、分子极性</Hl></Rule>
		<Rule tag="③ 结论" color={C.green} at={nm3.from} size={32}>熔沸点或溶解性的结论</Rule>
		<Big at={nm4.from} size={30}>
			例：{chem('H2O')} 沸点比 {chem('H2S')} 高——{chem('H2O')} 分子间存在<Hl>氢键</Hl>，{chem('H2S')} 分子间只有范德华力，氢键比范德华力强
		</Big>
	</Board>
);
