import React from 'react';
import {C} from '../theme';
import {Defs} from './ui';

export type Level = 'up' | 'down';

const BOXES: [string, number, string][] = [
	['下丘脑', 20, C.brown],
	['垂体', 200, C.orange],
	['甲状腺', 380, C.red],
	['全身细胞', 560, C.muted],
];
const HORMONES: [string, string, number][] = [
	['TRH', 'TRH', 150],
	['TSH', 'TSH', 330],
	['TH', '甲状腺激素', 510],
];

// Hypothalamus → pituitary → thyroid → body cells. `stage` (1–4) is how many
// boxes are shown; `feedback` (0–1) draws the two negative-feedback arrows;
// `levels` marks hormones as raised or lowered; `mark` outlines one box.
export const Axis: React.FC<{
	stage?: number;
	feedback?: number;
	levels?: Partial<Record<'TRH' | 'TSH' | 'TH', Level>>;
	mark?: {box: string; note: string};
}> = ({stage = 4, feedback = 0, levels = {}, mark}) => (
	<svg width={760} height={640} viewBox="0 0 760 640">
		<Defs />
		{BOXES.slice(0, stage).map(([name, y, color]) => {
			const marked = mark?.box === name;
			return (
				<g key={name}>
					<rect x={260} y={y} width={240} height={80} rx={16} fill={marked ? C.redSoft : '#fff'} stroke={marked ? C.red : color} strokeWidth={marked ? 8 : 5} />
					<text x={380} y={y + 52} fontSize={34} fontWeight={900} fill={color} textAnchor="middle">{name}</text>
					{marked && (
						<text x={520} y={y + 52} fontSize={28} fontWeight={900} fill={C.red}>{mark.note}</text>
					)}
				</g>
			);
		})}
		{HORMONES.slice(0, Math.min(stage, 3)).map(([key, label, y]) => {
			const lv = levels[key as 'TRH'];
			return (
				<g key={key}>
					<line x1={380} y1={y - 48} x2={380} y2={y + 38} stroke={C.green} strokeWidth={7} markerEnd="url(#arrow-green)" />
					<text x={410} y={y + 10} fontSize={30} fontWeight={900} fill={C.green}>（+）{label}</text>
					{lv && (
						<text x={410 + (label.length + 3) * 30} y={y + 12} fontSize={44} fontWeight={900} fill={lv === 'up' ? C.red : C.green}>{lv === 'up' ? '↑' : '↓'}</text>
					)}
				</g>
			);
		})}
		{feedback > 0 && (
			<g opacity={feedback} fill="none" stroke={C.red} strokeWidth={6} strokeDasharray="14 9">
				<path d="M370,520 C200,500 170,330 252,248" markerEnd="url(#arrow-red)" />
				<path d="M370,520 C60,480 60,110 252,68" markerEnd="url(#arrow-red)" />
				<text x={175} y={330} fontSize={40} fontWeight={900} fill={C.red} stroke="none">（−）</text>
				<text x={20} y={250} fontSize={40} fontWeight={900} fill={C.red} stroke="none">（−）</text>
			</g>
		)}
	</svg>
);
