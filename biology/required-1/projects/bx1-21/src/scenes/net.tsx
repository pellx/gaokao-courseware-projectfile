import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, clamp} from '../theme';

// Net photosynthesis curve with the x-axis in the middle: y = A(1 − e^(−kx)) − R.
// Data x in 0–1; y in −0.4–1.1 mapped onto the box.
export type NetLine = {A: number; k: number; R: number; color: string; at: number; dash?: boolean; label?: string};
const W = 860;
const H = 460;
const L = 90;
const TOP = 30;
const BOT = 420;
const YMIN = -0.4;
const YMAX = 1.1;
export const nx = (x: number) => L + x * (W - L - 40);
export const ny = (y: number) => TOP + ((YMAX - y) / (YMAX - YMIN)) * (BOT - TOP);
export const cross = (l: NetLine) => -Math.log(1 - l.R / l.A) / l.k;

export const NetPlot: React.FC<{lines: NetLine[]; at: number; xLabel: string; yLabel: string; children?: React.ReactNode}> = ({lines, at, xLabel, yLabel, children}) => {
	const frame = useCurrentFrame();
	const fade = interpolate(frame, [at, at + 14], [0, 1], clamp);
	return (
		<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
			<g opacity={fade}>
				<line x1={L} y1={BOT} x2={L} y2={TOP - 10} stroke={C.text} strokeWidth={4} />
				<line x1={L} y1={ny(0)} x2={W - 20} y2={ny(0)} stroke={C.text} strokeWidth={4} />
				<path d={`M${W - 20},${ny(0) - 9} L${W - 2},${ny(0)} L${W - 20},${ny(0) + 9} z`} fill={C.text} />
				<text x={L + 12} y={TOP + 4} fontSize={24} fontWeight={800} fill={C.muted}>{yLabel}</text>
				<text x={W - 10} y={ny(0) + 40} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="end">{xLabel}</text>
				<text x={L - 12} y={ny(0) + 8} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="end">0</text>
			</g>
			{lines.map((l, i) => {
				const p = interpolate(frame, [l.at, l.at + 40], [0, 1], clamp);
				const pts = Array.from({length: 91}, (_, j) => j / 90).map((x) => `${nx(x).toFixed(1)},${ny(l.A * (1 - Math.exp(-l.k * x)) - l.R).toFixed(1)}`);
				return (
					<g key={i} opacity={p > 0 ? 1 : 0}>
						<clipPath id={`net${i}`}>
							<rect x={0} y={0} width={L + p * (W - L)} height={H} />
						</clipPath>
						<polyline points={pts.join(' ')} fill="none" stroke={l.color} strokeWidth={7} strokeDasharray={l.dash ? '14 10' : undefined} clipPath={`url(#net${i})`} />
						{l.label && p > 0.8 && (
							<text x={nx(0.92)} y={ny(l.A * (1 - Math.exp(-l.k * 0.92)) - l.R) - 16} fontSize={24} fontWeight={900} fill={l.color} textAnchor="middle">{l.label}</text>
						)}
					</g>
				);
			})}
			{children}
		</svg>
	);
};
