import React from 'react';
import {C} from '../theme';
import {Defs} from './ui';

const STEM = '#dcefc8';
const TIP = '#a9d88a';
const EDGE = '#3f7d3a';
const FOIL = '#9a948c';
const AGAR = '#f3e3b5';

export type ColeoptileProps = {
	// Sideways shift of the top in px: negative bends left, positive bends right.
	bend?: number;
	// normal tip; tip under a foil cap; tip cut off; tip put on the left/right half of the cut surface.
	tip?: 'normal' | 'cap' | 'none' | 'left' | 'right';
	// Foil sleeve over the part just below the tip.
	sleeve?: boolean;
	// A sheet between the tip and the rest: agar lets chemicals through, mica does not.
	sheet?: 'agar' | 'mica';
	// Mica inserted vertically into the middle of the tip.
	micaV?: boolean;
	// Agar block on the cut surface: plain or carrying auxin, centred or on one side.
	block?: {kind: 'plain' | 'auxin'; pos: 'center' | 'left' | 'right'};
	light?: 'left' | 'right';
	rotate?: boolean;
	// Auxin dots below the tip: even, or more on the side away from the light.
	auxin?: 'even' | 'shift';
	// Arrow across the tip: auxin moving from the lit side to the shaded side.
	lateral?: boolean;
	label?: string;
	scale?: number;
};

const L = 150; // stem length below the tip
const W = 40; // stem width

// One oat coleoptile in a pot, drawn in a 220×380 box with its base at (110, 320).
export const Coleoptile: React.FC<ColeoptileProps> = ({bend = 0, tip = 'normal', sleeve, sheet, micaV, block, light, rotate, auxin, lateral, label, scale = 1}) => {
	const theta = (Math.atan2(bend, 0.4 * L) * 180) / Math.PI;
	const stem = `M0,0 Q0,${-0.6 * L} ${bend},${-L}`;
	const gap = sheet ? 8 : 0;
	const tipShape = (w: number, x0: number) => `M${x0 - w / 2},0 L${x0 - w / 2},-26 A${w / 2},${w / 2} 0 0 1 ${x0 + w / 2},-26 L${x0 + w / 2},0 Z`;
	return (
		<svg width={220 * scale} height={380 * scale} viewBox="0 0 220 380">
			<Defs />
			<g transform="translate(110,320)">
				<rect x={-70} y={0} width={140} height={34} rx={6} fill="#c8a77e" />
				<path d={stem} fill="none" stroke={EDGE} strokeWidth={W + 6} />
				<path d={stem} fill="none" stroke={STEM} strokeWidth={W - 2} />
				{sleeve && <path d={stem} pathLength={100} fill="none" stroke={FOIL} strokeWidth={W + 10} strokeDasharray="0 55 45 0" />}
				{auxin &&
					[-110, -80, -50, -20].map((y) =>
						(auxin === 'even' ? [[-9, 0], [9, 0]] : light === 'left' ? [[9, 0], [9, 14], [-9, 7]] : [[-9, 0], [-9, 14], [9, 7]]).map(([x, dy]) => (
							<circle key={`${y}${x}${dy}`} cx={x} cy={y + dy} r={5} fill={C.orange} />
						)),
					)}
				<g transform={`translate(${bend},${-L}) rotate(${theta})`}>
					{sheet && <rect x={-W / 2 - 4} y={-gap} width={W + 8} height={gap} fill={sheet === 'mica' ? '#4a4a4a' : AGAR} stroke={sheet === 'mica' ? '#4a4a4a' : '#c9b27a'} strokeWidth={1.5} />}
					<g transform={`translate(0,${-gap})`}>
						{(tip === 'normal' || tip === 'cap') && <path d={tipShape(W, 0)} fill={TIP} stroke={EDGE} strokeWidth={3} />}
						{(tip === 'left' || tip === 'right') && <path d={tipShape(W * 0.6, tip === 'left' ? -W * 0.2 : W * 0.2)} fill={TIP} stroke={EDGE} strokeWidth={3} />}
						{tip === 'cap' && <path d={tipShape(W + 12, 0)} transform="translate(0,4)" fill={FOIL} />}
						{lateral && <line x1={light === 'right' ? 13 : -13} y1={-22} x2={light === 'right' ? -9 : 9} y2={-22} stroke={C.orange} strokeWidth={5} markerEnd="url(#arrow-orange)" />}
						{micaV && <line x1={0} y1={-44} x2={0} y2={4} stroke="#4a4a4a" strokeWidth={5} />}
						{block && (
							<g>
								<rect x={block.pos === 'center' ? -W / 2 - 2 : block.pos === 'left' ? -W / 2 - 2 : 0} y={-24} width={block.pos === 'center' ? W + 4 : W / 2 + 2} height={24} fill={block.kind === 'auxin' ? '#f6c27a' : AGAR} stroke="#b58b45" strokeWidth={2} />
								{block.kind === 'auxin' && <circle cx={block.pos === 'right' ? W / 4 : block.pos === 'left' ? -W / 4 : 0} cy={-12} r={5} fill={C.orange} />}
							</g>
						)}
					</g>
				</g>
				{light && (
					<g transform={`translate(${light === 'left' ? -100 : 100},${-L - 20})`}>
						<line x1={light === 'left' ? -6 : 6} y1={0} x2={light === 'left' ? 46 : -46} y2={0} stroke={C.gold} strokeWidth={6} />
						<path d={light === 'left' ? 'M46,-10 L62,0 L46,10 Z' : 'M-46,-10 L-62,0 L-46,10 Z'} fill={C.gold} />
						<text x={light === 'left' ? 4 : -4} y={-14} fontSize={22} fontWeight={900} fill={C.gold} textAnchor="middle">光</text>
					</g>
				)}
				{rotate && <path d="M-84,17 A84,20 0 1 0 84,17" fill="none" stroke={C.brown} strokeWidth={4} markerEnd="url(#arrow)" />}
			</g>
			{label && (
				<text x={110} y={rotate ? 378 : 372} fontSize={24} fontWeight={800} fill={C.text} textAnchor="middle">
					{label}
				</text>
			)}
		</svg>
	);
};
