import React from 'react';
import {C} from '../theme';
import {Chromo} from '../components/gene';

// Cell drawings for the meiosis scenes. Chromosome positions are relative to
// the cell centre. Paternal chromosomes are red, maternal orange.
export const PAT = C.red;
export const MAT = C.orange;
export const LONG = 106;
export const SHORT = 64;

export type Ch = {
	dx: number;
	dy: number;
	h: number;
	color: string;
	double?: boolean;
	rotate?: number;
	tail?: {from: number; color: string; which?: 'left' | 'right' | 'both'};
	bands?: {pos: number; label?: string; color?: string; left?: boolean}[];
};

export const MCell: React.FC<{
	x: number;
	y: number;
	rx: number;
	ry?: number;
	chs: Ch[];
	equator?: boolean;
	label?: string;
	sub?: string[];
	labelY?: number;
	w?: number;
}> = ({x, y, rx, ry, chs, equator, label, sub = [], labelY, w = 18}) => {
	const r2 = ry ?? rx;
	const ly = labelY ?? y + r2 + 44;
	return (
		<g>
			<ellipse cx={x} cy={y} rx={rx} ry={r2} fill={C.panel} stroke={C.brown} strokeWidth={4} />
			{equator && <line x1={x} y1={y - r2 + 12} x2={x} y2={y + r2 - 12} stroke={C.muted} strokeWidth={3} strokeDasharray="8 7" />}
			{chs.map((c, i) => (
				<Chromo key={i} x={x + c.dx} y={y + c.dy} h={c.h} color={c.color} double={c.double} rotate={c.rotate} tail={c.tail} bands={c.bands} w={w} fontSize={24} />
			))}
			{label && (
				<text x={x} y={ly} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">
					{label}
				</text>
			)}
			{sub.map((s, i) => (
				<text key={i} x={x} y={ly + 36 + i * 32} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">
					{s}
				</text>
			))}
		</g>
	);
};
