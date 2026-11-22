import React from 'react';
import {C} from '../theme';

// Double-stranded DNA drawn as two rows of base letters in boxes. `top` and
// `bottom` are the strand sequences (a space leaves a gap, for overhangs); `cutTop`/`cutBottom` are the
// indexes after which each strand is cut (a staggered red line is drawn).
const W = 46;
const H = 52;

export const Duplex: React.FC<{
	x: number;
	y: number;
	top: string;
	bottom: string;
	cutTop?: number;
	cutBottom?: number;
	hl?: [number, number];
	fontSize?: number;
}> = ({x, y, top, bottom, cutTop, cutBottom, hl, fontSize = 30}) => (
	<g>
		{hl && <rect x={x + hl[0] * W - 4} y={y - 6} width={(hl[1] - hl[0]) * W + 8} height={H * 2 + 28} rx={10} fill={C.orangeSoft} stroke={C.orange} strokeWidth={3} />}
		{[top, bottom].map((s, row) =>
			s.split('').map((b, i) =>
				b === ' ' ? null : (
				<g key={`${row}-${i}`}>
					<rect x={x + i * W + 3} y={y + row * (H + 16)} width={W - 6} height={H} rx={8} fill="#fff" stroke={C.line} strokeWidth={3} />
					<text x={x + i * W + W / 2} y={y + row * (H + 16) + H / 2 + fontSize * 0.36} fontSize={fontSize} fontWeight={900} fill={C.text} textAnchor="middle">
						{b}
					</text>
				</g>
				),
			),
		)}
		{cutTop !== undefined && cutBottom !== undefined && (
			<path
				d={`M${x + cutTop * W},${y - 16} V${y + H + 8} H${x + cutBottom * W} V${y + 2 * H + 32}`}
				fill="none"
				stroke={C.red}
				strokeWidth={6}
				strokeDasharray="10 6"
			/>
		)}
	</g>
);

export const BASE_W = W;
export const BASE_H = H;
