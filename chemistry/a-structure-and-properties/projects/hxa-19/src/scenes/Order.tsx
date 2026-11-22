import React from 'react';
import {Hl} from '../components/ui';
import {Chain} from '../components/kit';
import {Board, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.order;
const {od1, od2, od3, od4} = t.cue;

export const Order: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="压轴空的审题顺序"
		gap={20}
		callout={{label: '答题模板', at: od4.from, text: <>化学式 → 配位数或距离 → 密度；上一步结论是下一步条件，<Hl>按顺序做最稳</Hl></>}}
	>
		<Chain
			fontSize={40}
			gap={14}
			steps={[
				{label: '① 化学式', color: C.red, at: od1.from},
				{label: '② 最近距离', color: C.orange, at: od2.from},
				{label: '③ 密度式', color: C.green, at: od3.from},
			]}
		/>
		<Rule tag="①" color={C.red} at={od1.from} size={32}>均摊法数出各粒子个数 → <Hl>化学式</Hl></Rule>
		<Rule tag="②" color={C.orange} at={od2.from} size={32}>判断位置：顶点–面心、顶点–体心、四面体空隙 → <Hl c={C.orange}>距离</Hl></Rule>
		<Rule tag="③" color={C.green} at={od3.from} size={32}>ρ = N·M / (N<sub>A</sub>·a<sup>3</sup>)，单位换算写进式子</Rule>
	</Board>
);
