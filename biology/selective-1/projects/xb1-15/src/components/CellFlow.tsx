import React from 'react';
import {C} from '../theme';
import {Arrow, G} from './kit';
import {Defs} from './ui';

// Cell-mediated immunity. Each entry of `at` is the frame its step fades in:
// 0 target cell, 1 cytotoxic T recognises it, 2 new cytotoxic T + memory T,
// 3 helper T and cytokines, 4 contact and lysis, 5 pathogen exposed → antibody / phagocyte,
// 6 memory T → cytotoxic T on re-exposure.
const Cell: React.FC<{x: number; y: number; r?: number; color: string; label?: string; ly?: number}> = ({x, y, r = 46, color, label, ly}) => (
	<g>
		<circle cx={x} cy={y} r={r} fill="#fff" stroke={color} strokeWidth={6} />
		<circle cx={x} cy={y} r={r * 0.4} fill={color} opacity={0.8} />
		{label && (
			<text x={x} y={ly ?? y + r + 36} fontSize={30} fontWeight={900} fill={color} textAnchor="middle">
				{label}
			</text>
		)}
	</g>
);

const Virus: React.FC<{x: number; y: number; s?: number}> = ({x, y, s = 1}) => (
	<g>
		<circle cx={x} cy={y} r={12 * s} fill={C.red} />
		{[0, 60, 120, 180, 240, 300].map((a) => (
			<line key={a} x1={x} y1={y} x2={x + Math.cos((a * Math.PI) / 180) * 19 * s} y2={y + Math.sin((a * Math.PI) / 180) * 19 * s} stroke={C.red} strokeWidth={4} />
		))}
	</g>
);

export const CellFlow: React.FC<{at: number[]}> = ({at}) => (
	<svg width={1740} height={560} viewBox="0 0 1740 560">
		<Defs />
		<G at={at[0]}>
			<circle cx={130} cy={380} r={90} fill="#fbeedd" stroke={C.red} strokeWidth={6} />
			<circle cx={130} cy={380} r={30} fill="#ecd2ae" />
			<Virus x={85} y={340} />
			<Virus x={175} y={420} />
			<Virus x={170} y={335} s={0.8} />
			<text x={130} y={510} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">靶细胞</text>
			<text x={130} y={545} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">膜表面分子变化</text>
		</G>
		<G at={at[1]}>
			<Arrow x1={225} y1={360} x2={360} y2={290} color={C.orange} marker="arrow-orange" />
			<text x={250} y={300} fontSize={24} fontWeight={800} fill={C.orange}>识别</text>
			<Cell x={420} y={270} color={C.orange} label="细胞毒性T细胞" />
		</G>
		<G at={at[3]}>
			<Cell x={420} y={80} r={40} color={C.green} label="" />
			<text x={480} y={92} fontSize={28} fontWeight={900} fill={C.green}>辅助性T细胞</text>
			{[[440, 160], [465, 180], [430, 190]].map(([x, y]) => (
				<circle key={`${x}${y}`} cx={x} cy={y} r={8} fill={C.green} />
			))}
			<text x={490} y={190} fontSize={26} fontWeight={900} fill={C.green}>细胞因子（加速）</text>
		</G>
		<G at={at[2]}>
			<Arrow x1={475} y1={260} x2={800} y2={200} color={C.muted} />
			<Arrow x1={475} y1={290} x2={800} y2={420} color={C.muted} />
			<text x={640} y={300} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">分裂、分化</text>
			<Cell x={870} y={190} r={52} color={C.orange} label="新的细胞毒性T细胞" />
			<Cell x={860} y={440} r={36} color={C.orange} label="" />
			<text x={910} y={452} fontSize={30} fontWeight={900} fill={C.orange}>记忆T细胞</text>
		</G>
		<G at={at[4]}>
			<Arrow x1={930} y1={190} x2={1090} y2={190} color={C.red} marker="arrow-red" />
			<text x={1010} y={170} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">接触</text>
			{/* lysed target cell: broken outline */}
			<path d="M1150,120 A80,80 0 0,1 1240,150 M1255,190 A80,80 0 0,1 1200,265 M1160,270 A80,80 0 0,1 1100,180" fill="none" stroke={C.red} strokeWidth={6} />
			<text x={1180} y={320} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">靶细胞裂解</text>
			<text x={1180} y={355} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">（细胞凋亡）</text>
		</G>
		<G at={at[5]}>
			<Virus x={1320} y={150} />
			<Virus x={1350} y={210} s={0.8} />
			<text x={1340} y={95} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">病原体暴露</text>
			<Arrow x1={1385} y1={180} x2={1500} y2={130} color={C.green} marker="arrow-green" />
			<Arrow x1={1385} y1={200} x2={1500} y2={270} color={C.green} marker="arrow-green" />
			<text x={1520} y={140} fontSize={28} fontWeight={900} fill={C.green}>与抗体结合</text>
			<text x={1520} y={285} fontSize={28} fontWeight={900} fill={C.green}>被巨噬细胞</text>
			<text x={1520} y={320} fontSize={28} fontWeight={900} fill={C.green}>吞噬消灭</text>
		</G>
		<G at={at[6]}>
			<path d="M850,400 C 800,340 800,300 840,255" fill="none" stroke={C.orange} strokeWidth={5} strokeDasharray="12 8" markerEnd="url(#arrow-orange)" />
			<text x={700} y={545} fontSize={24} fontWeight={800} fill={C.orange}>再次遇到相同抗原：立即分化</text>
		</G>
	</svg>
);
