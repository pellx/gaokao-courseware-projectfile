import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fluct;
const {fl1, fl2, fl3, fl4} = t.cue;

// Rises to K = 0.6 then fluctuates around it.
const wave = (x: number) => {
	const s = 0.6 / (1 + Math.exp(-18 * (x - 0.18)));
	return s + (x > 0.3 ? 0.08 * Math.sin((x - 0.3) * 30) * Math.min(1, (x - 0.3) * 8) : 0);
};
const START = 0.62;
const decline = (x: number) => wave(START) * Math.max(0, 1 - ((x - START) / 0.33) ** 1.4);

export const Fluct: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">种群数量的波动和下降</Header>
		<div style={{position: 'absolute', left: 90, top: 180}}>
			<Plot
				id="fl"
				w={1100}
				h={480}
				xLabel="时间"
				yLabel="种群数量"
				at={fl1.from}
				curves={[
					{pts: sample(wave, 0, START), color: C.orange, at: fl1.from, dur: 50, label: '在K值附近波动', lx: 0.36, ly: 0.82},
					{pts: sample(wave, START, 1), color: C.orange, at: fl2.from, dur: 30, dash: true},
					{pts: sample((x) => 0.6 + 0.35 * Math.exp(-(((x - 0.86) / 0.05) ** 2)), 0.72, 1), color: C.red, width: 5, at: fl2.from + 20, label: '爆发', lx: 0.86, ly: 1.02},
					{pts: sample(decline, START, 0.96), color: C.muted, at: fl3.from, dur: 40, label: '持续下降', lx: 0.68, ly: 0.2},
				]}
				hrefs={[{y: 0.6, label: 'K', color: C.red, at: fl1.from}]}
			/>
		</div>
		<div style={{position: 'absolute', left: 1260, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 24, fontSize: 29, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={fl1.from}>
				<Hl c={C.orange}>波动</Hl>：大多数种群的常态，有的呈周期性波动
			</Appear>
			<Appear at={fl2.from}>
				<Hl>大量增长</Hl>：东亚飞蝗爆发、赤潮中藻类激增
			</Appear>
			<Appear at={fl3.from}>
				<Hl c={C.muted}>下降甚至灭亡</Hl>：长期处于不利条件，如乱捕滥杀、栖息地破坏
			</Appear>
		</div>
		<Appear at={fl4.from} style={{position: 'absolute', left: 90, right: 90, top: 710}}>
			<Callout label="考法" style={{fontSize: 30}}>
				种群数量变化包括<Hl c={C.orange}>增长、波动和下降</Hl>；达到K值后不是一条直线，而是在K值附近波动
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
