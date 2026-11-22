import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';
import {Dial} from './Probe';

const t = T.meter;
const {mt1, mt2, mt3, mt4, mt5} = t.cue;

const A = 420;
const B = 780;
const MID = (A + B) / 2;
const TOP = 250;
const BOT = 350;

// Each case: stimulus point and the cue it plays in. The impulse spreads both
// ways from the stimulus over the first 80% of the line.
const CASES = [
	{cue: mt2, x: 200, label: '刺激a左侧', result: '偏转两次，方向相反', color: C.red},
	{cue: mt3, x: MID, label: '刺激a、b中点', result: '不偏转', color: C.green},
	{cue: mt4, x: 520, label: '刺激a、b之间（非中点）', result: '偏转两次，方向相反', color: C.red},
];

const near = (p: number, e: number) => Math.max(0, 1 - Math.abs(p - e) / 60);

export const Meter: React.FC = () => {
	const frame = useCurrentFrame();
	const current = [...CASES].reverse().find((c) => frame >= c.cue.from) ?? CASES[0];
	const active = frame >= mt2.from && frame < mt4.to + 20;
	const dist = interpolate(frame, [current.cue.from + 20, current.cue.from + 20 + (current.cue.to - current.cue.from) * 0.8], [0, 1000], clamp);
	const pulses = active ? [current.x - dist, current.x + dist] : [];
	const atA = Math.max(0, ...pulses.map((p) => near(p, A)));
	const atB = Math.max(0, ...pulses.map((p) => near(p, B)));
	const angle = 40 * (atA - atB);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点八">电表指针偏转问题</Header>
			<Appear at={mt1.from} style={{position: 'absolute', left: 60, top: 160}}>
				<svg width={1100} height={520} viewBox="0 0 1100 520">
					<rect x={40} y={TOP} width={1020} height={BOT - TOP} fill="#fbeedd" />
					{pulses.map((p, i) =>
						p > 40 && p < 1060 ? <rect key={i} x={p - 30} y={TOP} width={60} height={BOT - TOP} fill={C.red} opacity={0.35} /> : null,
					)}
					<line x1={40} y1={TOP} x2={1060} y2={TOP} stroke={C.brown} strokeWidth={8} />
					<line x1={40} y1={BOT} x2={1060} y2={BOT} stroke={C.brown} strokeWidth={8} />
					<Dial x={MID} y={120} angle={angle} r={80} />
					<path d={`M${MID - 80},120 L${A},120 L${A},${TOP - 14}`} fill="none" stroke={C.text} strokeWidth={4} />
					<path d={`M${MID + 80},120 L${B},120 L${B},${TOP - 14}`} fill="none" stroke={C.text} strokeWidth={4} />
					<circle cx={A} cy={TOP - 10} r={10} fill={C.text} />
					<circle cx={B} cy={TOP - 10} r={10} fill={C.text} />
					<text x={A - 30} y={TOP - 24} fontSize={34} fontWeight={900}>a</text>
					<text x={B + 16} y={TOP - 24} fontSize={34} fontWeight={900}>b</text>
					{frame >= mt2.from && (
						<g>
							<line x1={current.x} y1={BOT + 90} x2={current.x} y2={BOT + 16} stroke={C.red} strokeWidth={8} markerEnd="url(#arrow-red)" />
							<text x={current.x} y={BOT + 130} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">刺激</text>
						</g>
					)}
					<defs>
						<marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
							<path d="M0,0 L10,5 L0,10 z" fill={C.red} />
						</marker>
					</defs>
				</svg>
			</Appear>
			<div style={{position: 'absolute', left: 1220, right: 90, top: 190, display: 'flex', flexDirection: 'column', gap: 20}}>
				{CASES.map((c) => (
					<Appear key={c.label} at={c.cue.from} dx={-20} dy={0}>
						<div style={{background: current === c && active ? C.orangeSoft : C.panel, border: `3px solid ${current === c && active ? C.orange : C.line}`, borderRadius: 16, padding: '14px 22px'}}>
							<div style={{fontSize: 30, fontWeight: 900}}>{c.label}</div>
							<div style={{fontSize: 30, fontWeight: 800, color: c.color}}>→ {c.result}</div>
						</div>
					</Appear>
				))}
			</div>
			<Appear at={mt5.from} style={{position: 'absolute', left: 90, right: 90, top: 760}}>
				<Callout label="解题方法" style={{fontSize: 30}}>
					比较兴奋到达两电极的<Hl c={C.orange}>先后</Hl>：<Hl c={C.green}>同时到达，不偏转</Hl>；<Hl>先后到达，偏转两次，方向相反</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
