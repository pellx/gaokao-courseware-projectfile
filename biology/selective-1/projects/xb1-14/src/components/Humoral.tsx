import React from 'react';
import {C} from '../theme';
import {Arrow, G} from './kit';
import {Defs} from './ui';

// Humoral immunity flow chart. Each entry of `at` is the frame its step fades in:
// 0 pathogen, 1 signal ① (pathogen → B), 2 APC → helper T, 3 signal ② (helper T → B),
// 4 cytokines, 5 plasma + memory cells, 6 antibodies, 7 binding, 8 memory → plasma (re-exposure).
const Cell: React.FC<{x: number; y: number; r?: number; color: string; label: string; dark?: boolean}> = ({x, y, r = 46, color, label}) => (
	<g>
		<circle cx={x} cy={y} r={r} fill="#fff" stroke={color} strokeWidth={6} />
		<circle cx={x} cy={y} r={r * 0.4} fill={color} opacity={0.8} />
		<text x={x} y={y + r + 36} fontSize={30} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
	</g>
);

const Pathogen: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<rect x={x - 50} y={y - 22} width={100} height={44} rx={22} fill={C.red} opacity={0.9} />
		{[-30, 0, 30].map((d) => (
			<path key={d} d={`M${x + d - 8},${y - 22} l8,-14 l8,14 z`} fill={C.red} />
		))}
	</g>
);

const Ab: React.FC<{x: number; y: number; s?: number}> = ({x, y, s = 1}) => (
	<path d={`M${x},${y + 22 * s} L${x},${y} L${x - 16 * s},${y - 18 * s} M${x},${y} L${x + 16 * s},${y - 18 * s}`} stroke={C.green} strokeWidth={7} strokeLinecap="round" fill="none" />
);

export const Humoral: React.FC<{at: number[]}> = ({at}) => (
	<svg width={1740} height={560} viewBox="0 0 1740 560">
		<Defs />
		<G at={at[0]}>
			<Pathogen x={100} y={90} />
			<text x={100} y={160} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">病原体</text>
		</G>
		<G at={at[1]}>
			<Arrow x1={140} y1={130} x2={560} y2={390} color={C.orange} marker="arrow-orange" />
			<rect x={150} y={300} width={300} height={44} rx={10} fill={C.orangeSoft} />
			<text x={300} y={332} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">信号①：直接接触</text>
		</G>
		<G at={at[2]}>
			<Arrow x1={160} y1={90} x2={330} y2={90} color={C.muted} />
			<Cell x={390} y={90} color={C.brown} label="抗原呈递细胞" />
			<Arrow x1={440} y1={90} x2={560} y2={90} color={C.muted} />
			<text x={500} y={70} fontSize={22} fontWeight={800} fill={C.muted} textAnchor="middle">呈递</text>
			<Cell x={620} y={90} color={C.orange} label="辅助性T细胞" />
		</G>
		<G at={at[3]}>
			<Arrow x1={620} y1={175} x2={620} y2={360} color={C.orange} marker="arrow-orange" />
			<rect x={640} y={200} width={300} height={44} rx={10} fill={C.orangeSoft} />
			<text x={790} y={232} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">信号②：结合B细胞</text>
		</G>
		<G at={at[4]}>
			{[[650, 285], [675, 305], [700, 280], [655, 320]].map(([x, y]) => (
				<circle key={`${x}${y}`} cx={x} cy={y} r={8} fill={C.green} />
			))}
			<text x={720} y={310} fontSize={26} fontWeight={900} fill={C.green}>细胞因子（促进）</text>
		</G>
		<G at={at[1]}>
			<Cell x={620} y={420} color={C.red} label="B细胞" />
		</G>
		<G at={at[5]}>
			<Arrow x1={670} y1={410} x2={1000} y2={330} color={C.muted} />
			<Arrow x1={670} y1={440} x2={1000} y2={490} color={C.muted} />
			<text x={830} y={420} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">分裂、分化</text>
			<Cell x={1060} y={310} r={52} color={C.red} label="浆细胞" />
			<Cell x={1060} y={480} r={36} color={C.orange} label="" />
			<text x={1120} y={492} fontSize={30} fontWeight={900} fill={C.orange}>记忆B细胞</text>
		</G>
		<G at={at[6]}>
			<Arrow x1={1120} y1={300} x2={1260} y2={280} color={C.green} marker="arrow-green" />
			{[[1300, 250], [1340, 290], [1290, 310], [1350, 240]].map(([x, y]) => (
				<Ab key={`${x}${y}`} x={x} y={y} />
			))}
			<text x={1320} y={360} fontSize={30} fontWeight={900} fill={C.green} textAnchor="middle">抗体</text>
		</G>
		<G at={at[7]}>
			<Arrow x1={1380} y1={280} x2={1480} y2={280} color={C.muted} />
			<Pathogen x={1580} y={280} />
			<Ab x={1540} y={225} s={0.9} />
			<Ab x={1620} y={225} s={0.9} />
			<text x={1580} y={360} fontSize={26} fontWeight={900} fill={C.text} textAnchor="middle">结合 → 沉淀等</text>
			<text x={1580} y={398} fontSize={26} fontWeight={900} fill={C.text} textAnchor="middle">→ 被吞噬消化</text>
		</G>
		<G at={at[8]}>
			<path d="M1040,440 C 960,400 960,380 1020,350" fill="none" stroke={C.orange} strokeWidth={5} strokeDasharray="12 8" markerEnd="url(#arrow-orange)" />
			<text x={700} y={548} fontSize={24} fontWeight={800} fill={C.orange}>再次接触同种抗原：迅速增殖、分化</text>
		</G>
	</svg>
);
