import React from 'react';
import {C} from '../theme';

// One DNA strand as a vertical bar: old (parental) strands are filled red,
// new strands are white with an orange outline. `h` is the bar height.
export const Strand: React.FC<{x: number; y: number; old?: boolean; h?: number; w?: number; color?: string}> = ({x, y, old, h = 160, w = 24, color}) => (
	<rect x={x - w / 2} y={y} width={w} height={h} rx={6} fill={old ? (color ?? C.red) : '#fff'} stroke={old ? (color ?? C.red) : C.orange} strokeWidth={4} />
);
