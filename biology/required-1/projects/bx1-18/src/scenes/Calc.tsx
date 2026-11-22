import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Rows, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.calc;
const {ca1, ca2, ca3, ca4} = t.cue;

export const Calc: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">细胞呼吸的相关计算</Header>
		<Rows
			style={{left: 90, right: 90, top: 170}}
			fontSize={33}
			gap={16}
			items={[
				{at: ca1.from, color: C.red, title: '有氧呼吸', children: <>葡萄糖 : <F>O2</F> : <F>CO2</F> ＝ <Hl>1 : 6 : 6</Hl></>},
				{at: ca2.from, color: C.orange, title: '产酒精的无氧呼吸', children: <>葡萄糖 : <F>CO2</F> ＝ <Hl c={C.orange}>1 : 2</Hl>，不消耗 <F>O2</F></>},
			]}
		/>
		<Def at={ca3.from} style={{left: 90, right: 90, top: 370}} fontSize={32}>
			例：吸收 <F>O2</F> 6 mol，释放 <F>CO2</F> 10 mol
			<br />
			有氧：<F>O2</F> 6 → 葡萄糖 <Hl>1 mol</Hl>；无氧：<F>CO2</F> 10 − 6 ＝ 4 → 葡萄糖 <Hl>2 mol</Hl>
		</Def>
		<Tip at={ca4.from} top={580} label="解题方法">
			先用 <Hl>O<sub>2</sub> 吸收量</Hl>算有氧呼吸，再用<Hl>剩下的 CO<sub>2</sub></Hl>算无氧呼吸
		</Tip>
		<Narration t={t} />
	</Scene>
);
