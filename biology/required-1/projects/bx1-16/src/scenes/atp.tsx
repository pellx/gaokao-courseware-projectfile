import React from 'react';
import {C} from '../theme';

// ATP: adenine – ribose – P – P ~ P (the two special bonds as wavy red lines).
export const PX = [430, 570, 710];
const wave = (x1: number, x2: number, y: number) => {
	const n = 4;
	const w = (x2 - x1) / n;
	let d = `M${x1},${y}`;
	for (let i = 0; i < n; i++) d += ` q${w / 4},${i % 2 ? 12 : -12} ${w / 2},0 t${w / 2},0`;
	return d;
};

export const Atp: React.FC<{y?: number; broken?: boolean}> = ({y = 120, broken}) => {
	const pent = [0, 1, 2, 3, 4]
		.map((i) => {
			const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
			return `${260 + Math.cos(a) * 58},${y + Math.sin(a) * 58}`;
		})
		.join(' ');
	return (
		<g>
			<rect x={30} y={y - 42} width={140} height={84} rx={14} fill="#fff" stroke={C.green} strokeWidth={5} />
			<text x={100} y={y + 10} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">腺嘌呤</text>
			<line x1={170} y1={y} x2={205} y2={y} stroke={C.muted} strokeWidth={5} />
			<polygon points={pent} fill={C.redSoft} stroke={C.red} strokeWidth={5} />
			<text x={260} y={y + 10} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">核糖</text>
			<line x1={318} y1={y} x2={390} y2={y} stroke={C.muted} strokeWidth={5} />
			{PX.map((x, i) => (
				<g key={x} transform={broken && i === 2 ? 'translate(60,0)' : undefined}>
					<circle cx={x} cy={y} r={40} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
					<text x={x} y={y + 11} fontSize={32} fontWeight={900} fill={C.orange} textAnchor="middle">P</text>
				</g>
			))}
			<path d={wave(470, 530, y)} fill="none" stroke={C.red} strokeWidth={5} />
			{!broken && <path d={wave(610, 670, y)} fill="none" stroke={C.red} strokeWidth={5} />}
		</g>
	);
};
