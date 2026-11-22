import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.meter;
const {mt1, mt2, mt3, mt4, mt5} = t.cue;

// Neuron 1 runs x 40–540 (synapse at 560), neuron 2 runs x 580–1060.
const A = 200;
const B = 760;
const SYN = 560;
const MID = 480; // on neuron 1, as far from a as from b (but b is past the synapse)
const TOP = 280;
const BOT = 360;
const DELAY = 140; // synaptic delay, in px of travel

const CASES = [
	{cue: mt2, x: 90, label: '刺激a左侧', result: '偏转两次，方向相反', color: C.red},
	{cue: mt3, x: 960, label: '刺激b右侧', result: '只偏转一次', color: C.green},
	{cue: mt4, x: MID, label: '刺激突触前、距a和b相等的点', result: '偏转两次（突触延搁）', color: C.red},
];

const near = (p: number, e: number) => Math.max(0, 1 - Math.abs(p - e) / 50);

// Impulse positions after travelling `d` px from x: both ways along its own
// neuron; crossing the synapse forwards only, after a delay.
const pulses = (x: number, d: number) => {
	const out: number[] = [];
	if (x < SYN) {
		out.push(x - d);
		const right = x + d;
		if (right < SYN) out.push(right);
		else if (right > SYN + DELAY) out.push(right - DELAY);
	} else {
		out.push(x - d >= SYN + 20 ? x - d : -999, x + d);
	}
	return out;
};

const Dial: React.FC<{x: number; y: number; angle: number}> = ({x, y, angle}) => (
	<g>
		<path d={`M${x - 80},${y} A80,80 0 0 1 ${x + 80},${y} Z`} fill="#fff" stroke={C.text} strokeWidth={4} />
		<line x1={x} y1={y} x2={x} y2={y - 66} stroke={C.red} strokeWidth={6} strokeLinecap="round" transform={`rotate(${angle} ${x} ${y})`} />
		<circle cx={x} cy={y} r={8} fill={C.text} />
	</g>
);

export const Meter: React.FC = () => {
	const frame = useCurrentFrame();
	const current = [...CASES].reverse().find((c) => frame >= c.cue.from) ?? CASES[0];
	const active = frame >= mt2.from && frame < mt4.to + 20;
	const d = interpolate(frame, [current.cue.from + 20, current.cue.from + 20 + (current.cue.to - current.cue.from) * 0.8], [0, 1100], clamp);
	const ps = active ? pulses(current.x, d) : [];
	const atA = Math.max(0, ...ps.map((p) => near(p, A)));
	const atB = Math.max(0, ...ps.map((p) => near(p, B)));
	return (
		<Scene duration={t.duration}>
			<Header tag="考点八">跨突触的电表偏转</Header>
			<Appear at={mt1.from} style={{position: 'absolute', left: 60, top: 170}}>
				<svg width={1100} height={520} viewBox="0 0 1100 520">
					<Defs />
					<rect x={40} y={TOP} width={500} height={BOT - TOP} fill="#fbeedd" />
					<rect x={580} y={TOP} width={480} height={BOT - TOP} fill="#fbeedd" />
					{ps.map((p, i) => (p > 40 && p < 1060 ? <rect key={i} x={p - 25} y={TOP} width={50} height={BOT - TOP} fill={C.red} opacity={0.35} /> : null))}
					{[[40, 540], [580, 1060]].map(([x1, x2]) => (
						<g key={x1}>
							<line x1={x1} y1={TOP} x2={x2} y2={TOP} stroke={C.brown} strokeWidth={8} />
							<line x1={x1} y1={BOT} x2={x2} y2={BOT} stroke={C.brown} strokeWidth={8} />
						</g>
					))}
					<circle cx={548} cy={320} r={26} fill={C.orange} />
					<line x1={578} y1={280} x2={578} y2={360} stroke={C.green} strokeWidth={8} />
					<text x={SYN} y={420} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">突触</text>
					<text x={290} y={420} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">突触前神经元</text>
					<text x={820} y={420} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">突触后神经元</text>
					<Dial x={SYN} y={140} angle={40 * (atA - atB)} />
					<path d={`M${SYN - 80},140 L${A},140 L${A},${TOP - 14}`} fill="none" stroke={C.text} strokeWidth={4} />
					<path d={`M${SYN + 80},140 L${B},140 L${B},${TOP - 14}`} fill="none" stroke={C.text} strokeWidth={4} />
					<circle cx={A} cy={TOP - 10} r={10} fill={C.text} />
					<circle cx={B} cy={TOP - 10} r={10} fill={C.text} />
					<text x={A - 34} y={TOP - 22} fontSize={34} fontWeight={900}>a</text>
					<text x={B + 16} y={TOP - 22} fontSize={34} fontWeight={900}>b</text>
					{frame >= mt2.from && (
						<g>
							<line x1={current.x} y1={BOT + 100} x2={current.x} y2={BOT + 16} stroke={C.red} strokeWidth={8} markerEnd="url(#arrow-red)" />
							<text x={current.x} y={BOT + 140} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">刺激</text>
						</g>
					)}
				</svg>
			</Appear>
			<div style={{position: 'absolute', left: 1220, right: 90, top: 190, display: 'flex', flexDirection: 'column', gap: 20}}>
				{CASES.map((c) => (
					<Appear key={c.label} at={c.cue.from} dx={-20} dy={0}>
						<div style={{background: current === c && active ? C.orangeSoft : C.panel, border: `3px solid ${current === c && active ? C.orange : C.line}`, borderRadius: 16, padding: '14px 22px'}}>
							<div style={{fontSize: 29, fontWeight: 900}}>{c.label}</div>
							<div style={{fontSize: 29, fontWeight: 800, color: c.color}}>→ {c.result}</div>
						</div>
					</Appear>
				))}
			</div>
			<Appear at={mt5.from} style={{position: 'absolute', left: 90, right: 90, top: 760}}>
				<Callout label="解题方法" style={{fontSize: 29}}>
					先看能否<Hl>过突触</Hl>（只能前膜 → 后膜）；再比<Hl c={C.orange}>先后</Hl>：经过突触的一侧<Hl c={C.brown}>更慢</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
