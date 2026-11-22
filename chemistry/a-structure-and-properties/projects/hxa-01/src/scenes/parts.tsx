import React from 'react';
import {C} from '../theme';

// Nuclide symbol: mass number over atomic number, stacked to the left of the element.
export const Nuclide: React.FC<{a: React.ReactNode; z: React.ReactNode; x: string; size?: number; color?: string; aColor?: string; zColor?: string}> = ({
	a,
	z,
	x,
	size = 48,
	color = C.text,
	aColor,
	zColor,
}) => (
	<span style={{display: 'inline-flex', alignItems: 'stretch', fontWeight: 800, color, verticalAlign: 'middle'}}>
		<span
			style={{
				display: 'inline-flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				alignItems: 'flex-end',
				fontSize: size * 0.5,
				lineHeight: 1,
				marginRight: size * 0.05,
				paddingBlock: size * 0.04,
			}}
		>
			<span style={{color: aColor}}>{a}</span>
			<span style={{color: zColor}}>{z}</span>
		</span>
		<span style={{fontSize: size, lineHeight: 1.1}}>{x}</span>
	</span>
);

// Atomic / ionic structure diagram (结构示意图), drawn in SVG around (cx, cy).
// The nucleus circle shows "+Z"; each shell is an arc with its electron count on it.
export const ShellDiagram: React.FC<{cx: number; cy: number; z: number; shells: number[]; color?: string; hlLast?: string}> = ({
	cx,
	cy,
	z,
	shells,
	color = C.text,
	hlLast,
}) => (
	<g>
		<circle cx={cx} cy={cy} r={44} fill="#fff" stroke={color} strokeWidth={5} />
		<text x={cx} y={cy + 13} fontSize={36} fontWeight={900} fill={color} textAnchor="middle">
			+{z}
		</text>
		{shells.map((n, i) => {
			const x = cx + 82 + i * 58;
			const h = 62 + i * 10;
			const c = hlLast && i === shells.length - 1 ? hlLast : color;
			return (
				<g key={i}>
					<path d={`M${x - 16},${cy - h} Q${x + 22},${cy} ${x - 16},${cy + h}`} fill="none" stroke={c} strokeWidth={4} />
					<text x={x + 3} y={cy + 13} fontSize={34} fontWeight={900} fill={c} textAnchor="middle" stroke="#fff" strokeWidth={10} paintOrder="stroke">
						{n}
					</text>
				</g>
			);
		})}
	</g>
);

// Small rounded label box for rule lists.
export const Rule: React.FC<{tag: string; color: string; children: React.ReactNode}> = ({tag, color, children}) => (
	<div style={{display: 'flex', alignItems: 'center', gap: 18, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 18, padding: '14px 22px', fontSize: 31, fontWeight: 600}}>
		<span style={{background: color, color: '#fff', fontWeight: 800, fontSize: 27, padding: '4px 14px', borderRadius: 10, whiteSpace: 'nowrap'}}>{tag}</span>
		<span>{children}</span>
	</div>
);
