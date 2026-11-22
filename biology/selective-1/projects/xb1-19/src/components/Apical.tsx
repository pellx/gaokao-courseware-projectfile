import React from 'react';
import {C} from '../theme';
import {G} from './kit';
import {Defs} from './ui';

const STEM = '#5b8f3e';
const NODES = [200, 320, 440];

const Leaf: React.FC<{x: number; y: number; side: 1 | -1}> = ({x, y, side}) => (
	<path d={`M${x},${y} q${side * 60},-50 ${side * 120},-20 q${side * -50},40 ${side * -120},20 z`} fill="#8cc56a" stroke={STEM} strokeWidth={3} />
);

// A shoot with a terminal bud and three pairs of lateral buds. Auxin from the
// terminal bud piles up at the lateral buds, most at the top pair. With `cut`
// the terminal bud is gone and the top lateral bud grows into a branch.
export const Apical: React.FC<{dotsAt: number; cut?: boolean; flowAt?: number}> = ({dotsAt, cut, flowAt = dotsAt}) => (
	<svg width={420} height={600} viewBox="0 0 420 600">
		<Defs />
		<rect x={110} y={560} width={200} height={34} rx={6} fill="#c8a77e" />
		<line x1={210} y1={560} x2={210} y2={cut ? 150 : 100} stroke={STEM} strokeWidth={14} />
		{cut ? (
			<line x1={196} y1={150} x2={224} y2={150} stroke={C.red} strokeWidth={6} />
		) : (
			<ellipse cx={210} cy={88} rx={20} ry={30} fill="#a9d88a" stroke={STEM} strokeWidth={4} />
		)}
		{NODES.map((y) => (
			<g key={y}>
				<Leaf x={210} y={y} side={-1} />
				<Leaf x={210} y={y} side={1} />
				<circle cx={192} cy={y - 14} r={9} fill="#a9d88a" stroke={STEM} strokeWidth={3} />
				<circle cx={228} cy={y - 14} r={9} fill="#a9d88a" stroke={STEM} strokeWidth={3} />
			</g>
		))}
		{cut && (
			<G at={dotsAt}>
				<path d="M228,186 q40,-40 50,-110" fill="none" stroke={STEM} strokeWidth={9} />
				<ellipse cx={278} cy={66} rx={14} ry={22} fill="#a9d88a" stroke={STEM} strokeWidth={3} />
				<path d="M192,186 q-40,-40 -50,-110" fill="none" stroke={STEM} strokeWidth={9} />
				<ellipse cx={142} cy={66} rx={14} ry={22} fill="#a9d88a" stroke={STEM} strokeWidth={3} />
			</G>
		)}
		{!cut && (
			<>
				<G at={flowAt}>
					<line x1={250} y1={110} x2={250} y2={250} stroke={C.orange} strokeWidth={5} markerEnd="url(#arrow-orange)" />
				</G>
				<G at={dotsAt}>
					{NODES.map((y, i) =>
						Array.from({length: 4 - i}, (_, k) => (
							<g key={`${y}${k}`}>
								<circle cx={186 - k * 9} cy={y - 32} r={5} fill={C.orange} />
								<circle cx={234 + k * 9} cy={y - 32} r={5} fill={C.orange} />
							</g>
						)),
					)}
				</G>
			</>
		)}
	</svg>
);
