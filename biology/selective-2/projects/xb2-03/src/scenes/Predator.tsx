import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.predator;
const {pd1, pd2, pd3, pd4, pd5} = t.cue;

// Two cycles; the predator lags the prey by a quarter cycle.
const prey = (x: number) => 0.55 + 0.32 * Math.sin(2 * Math.PI * 2 * x);
const pred = (x: number) => 0.26 + 0.14 * Math.sin(2 * Math.PI * 2 * x - Math.PI / 2);

// Cycle diagram: four boxes around a square.
const P = [
	{x: 170, y: 60, label: '雪兔↑', color: C.green},
	{x: 470, y: 200, label: '猞猁↑', color: C.red},
	{x: 170, y: 340, label: '雪兔↓', color: C.green},
	{x: -130, y: 200, label: '猞猁↓', color: C.red},
];

export const Predator: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">捕食者与被捕食者的数量变化</Header>
		<div style={{position: 'absolute', left: 80, top: 180}}>
			<Plot
				id="pd"
				w={1000}
				h={470}
				xLabel="时间"
				yLabel="种群数量"
				at={pd1.from}
				curves={[
					{pts: sample(prey), color: C.green, at: pd1.from, dur: 60, label: '雪兔（被捕食者）', lx: 0.63, ly: 0.98},
					{pts: sample(pred), color: C.red, at: pd2.from, dur: 60, label: '猞猁（捕食者）', lx: 0.42, ly: 0.04},
				]}
				vrefs={[
					{x: 0.125, color: C.green, at: pd4.from},
					{x: 0.25, color: C.red, at: pd4.from},
				]}
				dots={[
					{x: 0.125, y: prey(0.125), color: C.green, at: pd4.from, label: '先达峰值', dx: 80, dy: -8},
					{x: 0.25, y: pred(0.25), color: C.red, at: pd4.from, label: '后达峰值', dx: 70, dy: -20},
				]}
			/>
		</div>
		<svg width={740} height={388} viewBox="-230 0 800 420" style={{position: 'absolute', left: 1110, top: 210}}>
			<Defs />
			<G at={pd2.from}>
				<Box x={P[0].x} y={P[0].y} w={170} h={70} label={P[0].label} color={P[0].color} />
				<Arrow x1={260} y1={80} x2={400} y2={160} color={C.muted} />
				<Box x={P[1].x} y={P[1].y} w={170} h={70} label={P[1].label} color={P[1].color} />
				<Arrow x1={400} y1={240} x2={260} y2={320} color={C.muted} />
				<Box x={P[2].x} y={P[2].y} w={170} h={70} label={P[2].label} color={P[2].color} />
			</G>
			<G at={pd3.from}>
				<Arrow x1={80} y1={320} x2={-60} y2={240} color={C.muted} />
				<Box x={P[3].x} y={P[3].y} w={170} h={70} label={P[3].label} color={P[3].color} />
				<Arrow x1={-60} y1={160} x2={80} y2={80} color={C.muted} />
				<text x={170} y={210} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">周期性波动</text>
			</G>
		</svg>
		<Appear at={pd5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="解题方法" style={{fontSize: 31}}>
				<Hl>先增先减的是被捕食者</Hl>；被捕食者数量一般多于捕食者；这种调节属于<Hl c={C.orange}>负反馈</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
