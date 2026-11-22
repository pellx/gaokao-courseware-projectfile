import React from 'react';
import {C} from '../theme';

// A seedling laid on its side. `b` (0–1) bends the shoot up and the root down;
// `dots` shows more auxin on the lower side of both.
export const Gravity: React.FC<{b: number; dots?: number}> = ({b, dots = 0}) => {
	const stemEnd = [560 - 50 * b, 250 - 150 * b];
	const rootEnd = [60 + 40 * b, 250 + 150 * b];
	return (
		<svg width={640} height={460} viewBox="0 0 640 460">
			<line x1={20} y1={440} x2={620} y2={440} stroke="#c8a77e" strokeWidth={8} />
			<text x={600} y={430} fontSize={22} fontWeight={800} fill={C.brown} textAnchor="end">地面</text>
			<path d={`M300,250 Q470,250 ${stemEnd[0]},${stemEnd[1]}`} fill="none" stroke="#5b8f3e" strokeWidth={22} strokeLinecap="round" />
			<ellipse cx={stemEnd[0]} cy={stemEnd[1]} rx={14} ry={14} fill="#8cc56a" />
			<path d={`M300,250 Q130,250 ${rootEnd[0]},${rootEnd[1]}`} fill="none" stroke="#d2a86b" strokeWidth={16} strokeLinecap="round" />
			<ellipse cx={300} cy={250} rx={34} ry={24} fill="#e9cf9a" stroke={C.brown} strokeWidth={4} />
			<g opacity={dots}>
				{[350, 390, 430].map((x) => (
					<g key={x}>
						<circle cx={x} cy={268} r={6} fill={C.orange} />
						<circle cx={x + 12} cy={272} r={6} fill={C.orange} />
						<circle cx={x + 6} cy={232} r={6} fill={C.orange} opacity={x === 390 ? 1 : 0} />
					</g>
				))}
				{[170, 210, 250].map((x) => (
					<g key={x}>
						<circle cx={x} cy={265} r={6} fill={C.orange} />
						<circle cx={x - 12} cy={269} r={6} fill={C.orange} />
						<circle cx={x - 6} cy={235} r={6} fill={C.orange} opacity={x === 210 ? 1 : 0} />
					</g>
				))}
				<text x={300} y={320} fontSize={24} fontWeight={900} fill={C.orange} textAnchor="middle">近地侧生长素多</text>
			</g>
			<text x={stemEnd[0]} y={stemEnd[1] - 30} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">茎</text>
			<text x={rootEnd[0] - 10} y={rootEnd[1] + 40} fontSize={28} fontWeight={900} fill={C.brown} textAnchor="middle">根</text>
			<g transform="translate(600,60)">
				<line x1={0} y1={0} x2={0} y2={70} stroke={C.muted} strokeWidth={5} />
				<path d="M-10,66 L0,84 L10,66 Z" fill={C.muted} />
				<text x={-14} y={40} fontSize={22} fontWeight={800} fill={C.muted} textAnchor="end">重力</text>
			</g>
		</svg>
	);
};
