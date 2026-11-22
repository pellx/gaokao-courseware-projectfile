import React from 'react';
import {C} from '../theme';

// Building blocks for DNA drawings: phosphate (circle), deoxyribose (pentagon), base (rounded box).
export const Phos: React.FC<{x: number; y: number; r?: number}> = ({x, y, r = 24}) => (
	<g>
		<circle cx={x} cy={y} r={r} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
		<text x={x} y={y + r * 0.38} fontSize={r * 1.05} fontWeight={900} fill={C.orange} textAnchor="middle">P</text>
	</g>
);

export const Sugar: React.FC<{x: number; y: number; r?: number; flip?: boolean}> = ({x, y, r = 30, flip}) => {
	const pts = Array.from({length: 5}, (_, i) => {
		const a = -Math.PI / 2 + (2 * Math.PI * i) / 5 + (flip ? Math.PI : 0);
		return `${x + r * Math.cos(a)},${y + r * Math.sin(a)}`;
	}).join(' ');
	return <polygon points={pts} fill="#fff" stroke={C.brown} strokeWidth={4} />;
};

export const Base: React.FC<{x: number; y: number; w?: number; h?: number; label: string; color?: string}> = ({x, y, w = 110, h = 50, label, color = C.red}) => (
	<g>
		<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={10} fill="#fff" stroke={color} strokeWidth={4} />
		<text x={x} y={y + 11} fontSize={30} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
	</g>
);

// Hydrogen bonds: n short dashed lines between x1 and x2 around y.
export const HBonds: React.FC<{x1: number; x2: number; y: number; n: number}> = ({x1, x2, y, n}) => (
	<g>
		{Array.from({length: n}, (_, i) => {
			const yy = y + (i - (n - 1) / 2) * 12;
			return <line key={i} x1={x1} y1={yy} x2={x2} y2={yy} stroke={C.green} strokeWidth={4} strokeDasharray="6 5" />;
		})}
	</g>
);

export const BASE_COLOR: Record<string, string> = {A: C.red, T: C.orange, G: C.green, C: C.brown};
