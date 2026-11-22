import React from 'react';
import {C} from '../theme';
import {G} from './kit';
import {Defs} from './ui';

// One coleoptile segment with a donor agar block on top and a receiver below.
// `inverted` puts the morphological base on top. The receiver turns orange
// (auxin arrived) at `resultAt` unless inverted.
export const Segment: React.FC<{inverted?: boolean; resultAt: number; label: string}> = ({inverted, resultAt, label}) => (
	<svg width={360} height={460} viewBox="0 0 360 460">
		<Defs />
		<rect x={140} y={40} width={80} height={44} fill="#f6c27a" stroke="#b58b45" strokeWidth={3} />
		{[160, 180, 200].map((x) => (
			<circle key={x} cx={x} cy={62} r={6} fill={C.orange} />
		))}
		<text x={235} y={70} fontSize={22} fontWeight={800} fill={C.orange}>含生长素</text>
		<rect x={150} y={88} width={60} height={250} fill="#dcefc8" stroke="#3f7d3a" strokeWidth={4} />
		<text x={135} y={110} fontSize={22} fontWeight={800} fill={C.text} textAnchor="end">{inverted ? '形态学下端' : '形态学上端'}</text>
		<text x={135} y={330} fontSize={22} fontWeight={800} fill={C.text} textAnchor="end">{inverted ? '形态学上端' : '形态学下端'}</text>
		<path d={inverted ? 'M180,300 L180,130' : 'M180,130 L180,300'} stroke={inverted ? C.muted : C.orange} strokeWidth={5} markerEnd={inverted ? 'url(#arrow)' : 'url(#arrow-orange)'} opacity={0.8} />
		<rect x={140} y={342} width={80} height={44} fill="#f3e3b5" stroke="#b58b45" strokeWidth={3} />
		{!inverted && (
			<G at={resultAt}>
				{[160, 180, 200].map((x) => (
					<circle key={x} cx={x} cy={364} r={6} fill={C.orange} />
				))}
			</G>
		)}
		<G at={resultAt}>
			<text x={235} y={372} fontSize={22} fontWeight={900} fill={inverted ? C.red : C.green}>{inverted ? '无生长素' : '有生长素'}</text>
		</G>
		<text x={180} y={440} fontSize={26} fontWeight={900} fill={C.text} textAnchor="middle">{label}</text>
	</svg>
);
