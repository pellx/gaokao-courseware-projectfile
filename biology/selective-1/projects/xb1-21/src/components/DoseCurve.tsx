import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, clamp} from '../theme';

// Auxin dose–response curves: x is concentration (0–1, left to right), y is
// promotion (+) or inhibition (−). Each curve rises from x0 to its peak
// (halfway to `cross` by default), crosses zero at `cross` and dips below.
export type Curve = {label: string; color: string; x0: number; peak?: number; cross: number; h: number; from: number; lx: number; ly: number};

const px = (x: number) => 80 + x * 700;

// "10^-6" → 10 with a raised −6.
const pow = (label: string, size: number) => {
	const [base, exp] = label.split('^');
	return exp === undefined ? label : [<tspan key="b">{base}</tspan>, <tspan key="e" dy={-size * 0.42} fontSize={size * 0.7}>{exp.replace('-', '−')}</tspan>];
};
const py = (y: number) => 210 - y * 170;

export const yAt = (c: Curve, x: number) => {
	if (x <= c.x0) return 0;
	const peak = c.peak ?? (c.x0 + c.cross) / 2;
	if (x <= peak) return c.h * Math.sin(((Math.PI / 2) * (x - c.x0)) / (peak - c.x0));
	if (x <= c.cross) return c.h * Math.cos(((Math.PI / 2) * (x - peak)) / (c.cross - peak));
	return -0.45 * Math.sin((Math.PI / 2) * Math.min(1, (x - c.cross) / 0.14));
};

export const DoseCurve: React.FC<{
	curves: Curve[];
	ticks?: [number, string][];
	vlines?: [number, string, string, number][];
	dots?: [number, number, string, number, string?, number?, number?][];
	hline?: [number, number];
	regions?: number;
}> = ({curves, ticks = [], vlines = [], dots = [], hline, regions}) => {
	const frame = useCurrentFrame();
	const show = (from: number) => interpolate(frame, [from, from + 15], [0, 1], clamp);
	return (
		<svg width={860} height={440} viewBox="0 0 860 440">
			<line x1={80} y1={30} x2={80} y2={400} stroke={C.text} strokeWidth={4} />
			<line x1={80} y1={210} x2={820} y2={210} stroke={C.text} strokeWidth={4} />
			<path d="M820,200 L838,210 L820,220 Z" fill={C.text} />
			<text x={70} y={60} fontSize={26} fontWeight={900} fill={C.green} textAnchor="end">促进</text>
			<text x={70} y={380} fontSize={26} fontWeight={900} fill={C.red} textAnchor="end">抑制</text>
			<text x={840} y={250} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="end">生长素浓度</text>
			{regions !== undefined && (
				<g opacity={show(regions)}>
					<rect x={81} y={30} width={739} height={178} fill={C.green} opacity={0.07} />
					<rect x={81} y={212} width={739} height={188} fill={C.red} opacity={0.07} />
				</g>
			)}
			{ticks.map(([x, label]) => (
				<text key={label} x={px(x)} y={330} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">{pow(label, 24)}</text>
			))}
			{curves.map((c) => {
				const p = interpolate(frame, [c.from, c.from + 40], [0, 1], clamp);
				const end = Math.min(1, c.cross + 0.14);
				const pts = Array.from({length: 61}, (_, i) => c.x0 + ((end - c.x0) * i) / 60);
				const d = pts.map((x, i) => `${i ? 'L' : 'M'}${px(x).toFixed(1)},${py(yAt(c, x)).toFixed(1)}`).join(' ');
				return (
					<g key={c.label} opacity={p > 0 ? 1 : 0}>
						<path d={d} fill="none" stroke={c.color} strokeWidth={7} strokeLinejoin="round" pathLength={1} strokeDasharray={`${p} 1`} />
						<text x={px(c.lx)} y={py(c.ly)} fontSize={28} fontWeight={900} fill={c.color} textAnchor="middle" opacity={p}>{c.label}</text>
					</g>
				);
			})}
			{hline && (
				<line x1={80} y1={py(hline[0])} x2={820} y2={py(hline[0])} stroke={C.orange} strokeWidth={3} strokeDasharray="10 8" opacity={show(hline[1])} />
			)}
			{vlines.map(([x, label, color, from]) => (
				<g key={label} opacity={show(from)}>
					<line x1={px(x)} y1={30} x2={px(x)} y2={400} stroke={color} strokeWidth={3} strokeDasharray="10 8" />
					<text x={px(x)} y={424} fontSize={24} fontWeight={900} fill={color} textAnchor="middle">{pow(label, 24)}</text>
				</g>
			))}
			{dots.map(([x, y, color, from, label, dy = -22, dx = 0], i) => (
				<g key={i} opacity={show(from)}>
					<circle cx={px(x)} cy={py(y)} r={11} fill={color} stroke="#fff" strokeWidth={3} />
					{label && <text x={px(x) + dx} y={py(y) + dy} fontSize={24} fontWeight={900} fill={color} textAnchor="middle">{label}</text>}
				</g>
			))}
		</svg>
	);
};
