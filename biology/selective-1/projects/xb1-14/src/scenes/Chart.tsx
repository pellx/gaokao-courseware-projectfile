import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, clamp} from '../theme';

// Line chart: x 70–760, y 30–330. Each line: [label, colour, points (0–1), start frame, label position (0–1), dashed?].
export type Line = [string, string, [number, number][], number, [number, number], boolean?];

const px = (x: number) => 70 + x * 690;
const py = (y: number) => 330 - y * 300;

export const Chart: React.FC<{lines: Line[]; xLabel: string; yLabel: string; ticks?: [number, string][]; bands?: [number, number, string, string, number][]}> = ({lines, xLabel, yLabel, ticks = [], bands = []}) => {
	const frame = useCurrentFrame();
	return (
		<svg width={800} height={400} viewBox="0 0 800 400">
			{bands.map(([x1, x2, label, color, from]) => (
				<g key={label} opacity={frame >= from ? 1 : 0}>
					<rect x={px(x1)} y={30} width={px(x2) - px(x1)} height={300} fill={color} opacity={0.18} />
					<text x={(px(x1) + px(x2)) / 2} y={60} fontSize={24} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
				</g>
			))}
			<line x1={70} y1={20} x2={70} y2={330} stroke={C.text} strokeWidth={4} />
			<line x1={70} y1={330} x2={780} y2={330} stroke={C.text} strokeWidth={4} />
			<text x={10} y={16} fontSize={24} fontWeight={800} fill={C.muted}>{yLabel}</text>
			<text x={760} y={372} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="end">{xLabel}</text>
			{ticks.map(([x, label]) => (
				<text key={label} x={px(x)} y={360} fontSize={22} fontWeight={700} fill={C.muted} textAnchor="middle">{label}</text>
			))}
			{lines.map(([label, color, pts, from, [lx, ly], dashed]) => {
				const p = interpolate(frame, [from, from + 45], [0, 1], clamp);
				const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${px(x)},${py(y)}`).join(' ');
				return (
					<g key={label} opacity={p > 0 ? 1 : 0}>
						<path d={d} fill="none" stroke={color} strokeWidth={7} strokeLinejoin="round" strokeDasharray={dashed ? '14 9' : undefined} opacity={p} />
						<text x={px(lx)} y={py(ly)} fontSize={25} fontWeight={900} fill={color} textAnchor="middle" opacity={p}>{label}</text>
					</g>
				);
			})}
		</svg>
	);
};
