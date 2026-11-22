import React from 'react';
import {Hl} from '../components/ui';
import {Chain} from '../components/kit';
import {Big, Board, Rule} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.final;
const {fn1, fn2, fn3, fn3b, fn4, fn5} = t.cue;

export const Final: React.FC = () => (
	<Board
		t={t}
		tag="考点九"
		title="晶胞压轴空与时间分配"
		gap={20}
		callout={{label: '解题方法', at: fn5.from, text: <>解释题按模板写全；晶胞题先化学式、再距离、后密度；算不出也<Hl>写上能写的式子</Hl>，按步给分</>}}
		overlay={
			<AnimeBeat k="panic" from={fn3b.from} to={fn3b.to}>
				时间不够<span style={{color: C.red}}>最慌</span>：{'\n'}前面别纠结，{'\n'}给晶胞题留足时间
			</AnimeBeat>
		}
	>
		<Chain
			fontSize={34}
			gap={12}
			steps={[
				{label: '① 均摊求化学式', color: C.red, at: fn1.from},
				{label: '② 最近距离 / 配位数', color: C.orange, at: fn2.from},
				{label: '③ 列密度式', color: C.green, at: fn3.from},
			]}
		/>
		<Rule tag="①" color={C.red} at={fn1.from} size={30}>这一步错，<Hl>后面全错</Hl></Rule>
		<Rule tag="③" color={C.green} at={fn3.from} size={30}>ρ = N·M / (N<sub>A</sub>·a<sup>3</sup>)，单位换算写进式子，<Hl c={C.green}>只列式</Hl></Rule>
		<Big at={fn4.from} size={34} color={C.orange} soft={C.orangeSoft}>全题约 <Hl c={C.orange}>10～12 分钟</Hl>：概念空快拿分，时间留给解释题和晶胞题</Big>
	</Board>
);
