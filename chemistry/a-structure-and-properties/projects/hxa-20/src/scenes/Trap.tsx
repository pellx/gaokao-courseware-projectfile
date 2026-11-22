import React from 'react';
import {Hl} from '../components/ui';
import {Board, Mark} from '../components/board';
import {chem} from '../components/chem';
import {T} from '../timeline';

const t = T.trap;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

export const Trap: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="易错陷阱：限定词"
		gap={18}
		callout={{label: '易错', at: tp5.from, text: <>“<Hl>简单</Hl>”“<Hl>最高价</Hl>”“<Hl>一定</Hl>”“<Hl>都</Hl>”——就是出题人设的陷阱</>}}
	>
		<Mark ok={false} at={tp1.from}>“氢化物”≠“简单氢化物”：{chem('H2O2')} 不是简单氢化物</Mark>
		<Mark ok={false} at={tp2.from}>HClO 比 {chem('H2CO3')} 弱 ≠ 非金属性 Cl &lt; C（不是<Hl>最高价</Hl>含氧酸）</Mark>
		<Mark ok at={tp3.from}>离子化合物<Hl>可以含共价键</Hl>：NaOH、{chem('Na2O2')}、{chem('NH4Cl')}</Mark>
		<Mark ok={false} at={tp4.from}>稳定性用氢键解释 —— 稳定性看<Hl>键能</Hl>，沸点才看分子间作用力</Mark>
	</Board>
);
