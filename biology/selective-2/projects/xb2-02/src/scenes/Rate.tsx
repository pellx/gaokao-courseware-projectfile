import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample, sub} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';
import {logistic} from './SCurve';

const t = T.rate;
const {rr1, rr2, rr3, rr4} = t.cue;

// Growth rate of the logistic curve, scaled so the peak is 0.8.
const rate = (x: number) => {
	const e = Math.exp(-12 * (x - 0.4));
	return (0.8 * 4 * e) / (1 + e) ** 2;
};
const T1 = 0.4;
const T2 = 0.85;

export const Rate: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">“S”形增长的增长速率</Header>
		<div style={{position: 'absolute', left: 70, top: 175}}>
			<Plot
				id="rn"
				w={820}
				h={470}
				xLabel="时间"
				yLabel="种群数量"
				at={rr1.from}
				curves={[{pts: sample(logistic), color: C.green, at: rr1.from}]}
				hrefs={[
					{y: 0.8, label: 'K', color: C.red, at: rr3.from},
					{y: 0.4, label: 'K/2', color: C.orange, at: rr2.from},
				]}
				vrefs={[
					{x: T1, label: sub('t', '1'), color: C.orange, at: rr2.from},
					{x: T2, label: sub('t', '2'), color: C.red, at: rr3.from},
				]}
				dots={[{x: T1, y: 0.4, color: C.orange, at: rr2.from}]}
			/>
		</div>
		<div style={{position: 'absolute', left: 980, top: 175}}>
			<Plot
				id="rg"
				w={820}
				h={470}
				xLabel="时间"
				yLabel="增长速率"
				at={rr1.from}
				curves={[{pts: sample(rate), color: C.orange, at: rr1.from + 20}]}
				vrefs={[
					{x: T1, label: sub('t', '1'), color: C.orange, at: rr2.from},
					{x: T2, label: sub('t', '2'), color: C.red, at: rr3.from},
				]}
				dots={[
					{x: T1, y: 0.8, color: C.orange, at: rr2.from, label: '最大', dx: 60, dy: 8},
					{x: T2, y: rate(T2), color: C.red, at: rr3.from, label: '≈ 0', dy: -24},
				]}
			/>
		</div>
		<Appear at={rr4.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				增长速率<Hl c={C.orange}>最高点 ↔ K/2</Hl>，<Hl>降到零 ↔ K值</Hl>；增长速率最大时，数量<Hl>并不最多</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
