import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, clamp} from '../theme';

// Line chart in data space 0–1 on both axes. Curves draw on from left to
// right (they must run left to right), reference lines and dots fade in.

export type Curve = {
	pts: [number, number][];
	color: string;
	at: number;
	dur?: number;
	dash?: boolean;
	width?: number;
	label?: string;
	// Label position in data space.
	lx?: number;
	ly?: number;
};
export type HRef = {y: number; label: string; color?: string; at: number};
export type VRef = {x: number; label?: React.ReactNode; color?: string; at: number};

// SVG text with a subscript, e.g. sub("t", "1") for t₁ (Unicode subscripts render badly).
export const sub = (base: string, s: string) => [<tspan key="b">{base}</tspan>, <tspan key="s" dy={8} fontSize="0.7em">{s}</tspan>];
export type Dot = {x: number; y: number; color: string; at: number; label?: React.ReactNode; dx?: number; dy?: number};

// Samples f on [a, b] (data space) into points for a Curve.
export const sample = (f: (x: number) => number, a = 0, b = 1, n = 90): [number, number][] =>
	Array.from({length: n + 1}, (_, i) => {
		const x = a + ((b - a) * i) / n;
		return [x, f(x)];
	});

const L = 80;
const T = 46;
const R = 30;
const B = 56;

export const Plot: React.FC<{
	w: number;
	h: number;
	xLabel: string;
	yLabel: string;
	curves: Curve[];
	hrefs?: HRef[];
	vrefs?: VRef[];
	dots?: Dot[];
	xTicks?: [number, string][];
	yTicks?: [number, string][];
	at?: number;
	fontSize?: number;
	id: string;
}> = ({w, h, xLabel, yLabel, curves, hrefs = [], vrefs = [], dots = [], xTicks = [], yTicks = [], at = 0, fontSize = 26, id}) => {
	const frame = useCurrentFrame();
	const pw = w - L - R;
	const ph = h - T - B;
	const px = (x: number) => L + x * pw;
	const py = (y: number) => T + (1 - y) * ph;
	const fade = (from: number) => interpolate(frame, [from, from + 14], [0, 1], clamp);
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{overflow: 'visible'}}>
			<g opacity={fade(at)}>
				<line x1={L} y1={T - 20} x2={L} y2={T + ph} stroke={C.text} strokeWidth={4} />
				<line x1={L} y1={T + ph} x2={L + pw + 10} y2={T + ph} stroke={C.text} strokeWidth={4} />
				<path d={`M${L - 9},${T - 12} L${L},${T - 30} L${L + 9},${T - 12} z`} fill={C.text} />
				<path d={`M${L + pw},${T + ph - 9} L${L + pw + 18},${T + ph} L${L + pw},${T + ph + 9} z`} fill={C.text} />
				<text x={L + 14} y={T - 14} fontSize={fontSize} fontWeight={800} fill={C.muted}>{yLabel}</text>
				<text x={L + pw + 14} y={T + ph + 44} fontSize={fontSize} fontWeight={800} fill={C.muted} textAnchor="end">{xLabel}</text>
				<text x={L - 12} y={T + ph + 30} fontSize={fontSize * 0.85} fontWeight={700} fill={C.muted} textAnchor="end">0</text>
				{xTicks.map(([x, s]) => (
					<text key={s} x={px(x)} y={T + ph + 32} fontSize={fontSize * 0.85} fontWeight={700} fill={C.muted} textAnchor="middle">{s}</text>
				))}
				{yTicks.map(([y, s]) => (
					<text key={s} x={L - 12} y={py(y) + 9} fontSize={fontSize * 0.85} fontWeight={800} fill={C.muted} textAnchor="end">{s}</text>
				))}
			</g>
			{hrefs.map((r) => (
				<g key={r.label} opacity={fade(r.at)}>
					<line x1={L} y1={py(r.y)} x2={L + pw} y2={py(r.y)} stroke={r.color ?? C.muted} strokeWidth={3} strokeDasharray="12 9" />
					<text x={L - 12} y={py(r.y) + 9} fontSize={fontSize} fontWeight={900} fill={r.color ?? C.muted} textAnchor="end">{r.label}</text>
				</g>
			))}
			{vrefs.map((r, i) => (
				<g key={i} opacity={fade(r.at)}>
					<line x1={px(r.x)} y1={T} x2={px(r.x)} y2={T + ph} stroke={r.color ?? C.muted} strokeWidth={3} strokeDasharray="10 8" />
					{r.label && (
						<text x={px(r.x)} y={T + ph + 32} fontSize={fontSize * 0.85} fontWeight={800} fill={r.color ?? C.muted} textAnchor="middle">{r.label}</text>
					)}
				</g>
			))}
			{curves.map((c, i) => {
				const p = interpolate(frame, [c.at, c.at + (c.dur ?? 40)], [0, 1], clamp);
				const d = c.pts.map(([x, y], j) => `${j ? 'L' : 'M'}${px(x).toFixed(1)},${py(y).toFixed(1)}`).join(' ');
				return (
					<g key={i} opacity={p > 0 ? 1 : 0}>
						<clipPath id={`${id}-c${i}`}>
							<rect x={0} y={-h} width={L + 6 + p * pw} height={h * 3} />
						</clipPath>
						<path d={d} fill="none" stroke={c.color} strokeWidth={c.width ?? 7} strokeLinejoin="round" strokeLinecap="round" strokeDasharray={c.dash ? '14 10' : undefined} clipPath={`url(#${id}-c${i})`} />
						{c.label && (
							<text x={px(c.lx ?? 1)} y={py(c.ly ?? 1)} fontSize={fontSize} fontWeight={900} fill={c.color} textAnchor="middle" opacity={interpolate(p, [0.7, 1], [0, 1], clamp)}>
								{c.label}
							</text>
						)}
					</g>
				);
			})}
			{dots.map((d, i) => (
				<g key={i} opacity={fade(d.at)}>
					<circle cx={px(d.x)} cy={py(d.y)} r={11} fill={d.color} stroke="#fff" strokeWidth={3} />
					{d.label && (
						<text x={px(d.x) + (d.dx ?? 0)} y={py(d.y) + (d.dy ?? -22)} fontSize={fontSize * 0.9} fontWeight={900} fill={d.color} textAnchor="middle">{d.label}</text>
					)}
				</g>
			))}
		</svg>
	);
};
