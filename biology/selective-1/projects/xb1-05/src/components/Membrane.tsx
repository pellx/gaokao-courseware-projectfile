import React from 'react';
import {C} from '../theme';
import {Defs} from './ui';

const EDGE = C.brown;
const K = C.orange;
const NA = C.green;

// Pseudo-random but fixed ion positions.
const spread = (n: number, x0: number, x1: number, y0: number, y1: number, seed: number) =>
	Array.from({length: n}, (_, i) => {
		const r = (k: number) => {
			const v = Math.sin((i + 1) * 12.9898 * k + seed * 78.233) * 43758.5453;
			return v - Math.floor(v);
		};
		return [x0 + r(1) * (x1 - x0), y0 + r(2) * (y1 - y0)] as const;
	});

const KIN = spread(14, 70, 960, 340, 520, 1);
const KOUT = spread(4, 70, 960, 40, 200, 2);
const NAOUT = spread(14, 70, 960, 40, 200, 3);
const NAIN = spread(4, 70, 960, 340, 520, 4);

const Ion: React.FC<{x: number; y: number; color: string; label: string}> = ({x, y, color, label}) => (
	<g>
		<circle cx={x} cy={y} r={22} fill={color} opacity={0.9} />
		<text x={x} y={y + 8} fontSize={20} fontWeight={800} fill="#fff" textAnchor="middle">{label}</text>
	</g>
);

// Membrane patch with a K⁺ channel (left) and a Na⁺ channel (right).
// `mode` sets which channel is open and the charge signs on each side;
// `flow` (0–1) shows the ion arrow through the open channel.
export const Membrane: React.FC<{mode: 'rest' | 'action'; signs?: number; flow?: number}> = ({mode, signs = 1, flow = 0}) => {
	const out = mode === 'rest' ? '+' : '−';
	const inn = mode === 'rest' ? '−' : '+';
	const heads = Array.from({length: 42}, (_, i) => 30 + i * 24).filter((x) => Math.abs(x - 330) > 50 && Math.abs(x - 690) > 50);
	const channel = (x: number, color: string, open: boolean, label: string) => (
		<g>
			<rect x={x - 48} y={238} width={36} height={84} rx={14} fill={color} opacity={0.85} />
			<rect x={x + (open ? 12 : 0)} y={238} width={36} height={84} rx={14} fill={color} opacity={0.85} />
			<text x={x} y={232} fontSize={22} fontWeight={800} fill={color} textAnchor="middle">{label}</text>
		</g>
	);
	return (
		<svg width={1000} height={560} viewBox="0 0 1000 560">
			<Defs />
			<text x={20} y={30} fontSize={30} fontWeight={900} fill={C.muted}>膜外</text>
			<text x={20} y={548} fontSize={30} fontWeight={900} fill={C.muted}>膜内</text>
			{heads.map((x) => (
				<g key={x}>
					<line x1={x} y1={258} x2={x} y2={278} stroke="#d8b98f" strokeWidth={3} />
					<line x1={x} y1={282} x2={x} y2={302} stroke="#d8b98f" strokeWidth={3} />
					<circle cx={x} cy={252} r={10} fill="#e6c79c" stroke={EDGE} strokeWidth={2} />
					<circle cx={x} cy={308} r={10} fill="#e6c79c" stroke={EDGE} strokeWidth={2} />
				</g>
			))}
			{channel(330, K, mode === 'rest', 'K⁺通道')}
			{channel(690, NA, mode === 'action', 'Na⁺通道')}
			{KIN.map(([x, y], i) => <Ion key={`ki${i}`} x={x} y={y} color={K} label="K⁺" />)}
			{KOUT.map(([x, y], i) => <Ion key={`ko${i}`} x={x} y={y} color={K} label="K⁺" />)}
			{NAOUT.map(([x, y], i) => <Ion key={`no${i}`} x={x} y={y} color={NA} label="Na⁺" />)}
			{NAIN.map(([x, y], i) => <Ion key={`ni${i}`} x={x} y={y} color={NA} label="Na⁺" />)}
			<g opacity={signs} fontSize={44} fontWeight={900} textAnchor="middle">
				{[130, 230, 450, 550, 830, 930].map((x) => (
					<React.Fragment key={x}>
						<text x={x} y={232} fill={out === '+' ? C.red : C.brown}>{out}</text>
						<text x={x} y={358} fill={inn === '+' ? C.red : C.brown}>{inn}</text>
					</React.Fragment>
				))}
			</g>
			{flow > 0 && mode === 'rest' && (
				<line x1={348} y1={420} x2={348} y2={120} stroke={K} strokeWidth={12} opacity={flow} markerEnd="url(#arrow-orange)" />
			)}
			{flow > 0 && mode === 'action' && (
				<line x1={708} y1={120} x2={708} y2={440} stroke={NA} strokeWidth={12} opacity={flow} markerEnd="url(#arrow-green)" />
			)}
		</svg>
	);
};
