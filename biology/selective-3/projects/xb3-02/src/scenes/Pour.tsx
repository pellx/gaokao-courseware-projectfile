import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pour;
const {po1, po2, po3, po4} = t.cue;

const AGAR = '#f3d9a8';
const W = 300;

// Petri dish centred on x with its base bottom at y. Upright: lid on top; inverted: lid underneath.
const Dish: React.FC<{x: number; y: number; inverted?: boolean; drops?: boolean}> = ({x, y, inverted, drops}) => {
	const l = x - W / 2;
	if (!inverted) {
		return (
			<g>
				<path d={`M${l},${y - 60} V${y} H${l + W} V${y - 60}`} fill="none" stroke={C.text} strokeWidth={5} />
				<rect x={l + 4} y={y - 34} width={W - 8} height={31} fill={AGAR} />
				<path d={`M${l - 12},${y - 52} V${y - 80} H${l + W + 12} V${y - 52}`} fill="none" stroke={C.muted} strokeWidth={5} />
				{drops &&
					[0.2, 0.45, 0.7].map((f) => (
						<g key={f}>
							<circle cx={l + W * f} cy={y - 68} r={7} fill={C.orange} />
							<line x1={l + W * f} y1={y - 56} x2={l + W * f} y2={y - 40} stroke={C.orange} strokeWidth={4} strokeDasharray="4 4" />
						</g>
					))}
			</g>
		);
	}
	return (
		<g>
			<path d={`M${l},${y - 80} V${y - 20} H${l + W} V${y - 80}`} transform={`rotate(180 ${x} ${y - 50})`} fill="none" stroke={C.text} strokeWidth={5} />
			<rect x={l + 4} y={y - 77} width={W - 8} height={31} fill={AGAR} />
			<path d={`M${l - 12},${y - 28} V${y} H${l + W + 12} V${y - 28}`} fill="none" stroke={C.muted} strokeWidth={5} />
			{drops && [0.2, 0.45, 0.7].map((f) => <circle key={f} cx={l + W * f} cy={y - 8} r={7} fill={C.orange} />)}
		</g>
	);
};

export const Pour: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">倒平板</Header>
		<svg width={1740} height={500} viewBox="0 0 1740 500" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={po1.from}>
				<rect x={60} y={300} width={110} height={90} rx={14} fill="#fff" stroke={C.text} strokeWidth={5} />
				<path d="M115,300 C80,260 95,215 115,180 C135,215 150,260 115,300 z" fill={C.orange} />
				<text x={115} y={440} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">酒精灯火焰旁</text>
				<text x={290} y={60} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">培养基冷却到 50 ℃ 左右</text>
			</G>
			<G at={po2.from}>
				<path d="M210,330 V390 H490 V330" fill="none" stroke={C.text} strokeWidth={5} />
				<path d="M200,300 L470,250" stroke={C.muted} strokeWidth={5} />
				<path d="M330,120 L390,120 L370,200 L350,200 z" fill={AGAR} stroke={C.text} strokeWidth={4} />
				<path d="M358,200 Q356,280 360,360" stroke={AGAR} strokeWidth={10} fill="none" />
				<rect x={214} y={356} width={272} height={30} fill={AGAR} />
				<text x={350} y={440} fontSize={28} fontWeight={900} fill={C.text} textAnchor="middle">皿盖打开一条缝</text>
			</G>
			<G at={po3.from}>
				<Dish x={800} y={360} drops />
				<text x={800} y={200} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">正放：冷凝水会滴落</text>
				<text x={800} y={440} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">污染培养基 ✗</text>
				<Dish x={1360} y={390} inverted drops />
				<text x={1360} y={200} fontSize={30} fontWeight={900} fill={C.green} textAnchor="middle">倒置：皿盖在下</text>
				<text x={1360} y={440} fontSize={28} fontWeight={800} fill={C.green} textAnchor="middle">冷凝水留在皿盖上 ✓</text>
			</G>
		</svg>
		<Tip at={po4.from} top={710} label="考法">
			平板为什么要倒置？防止皿盖上的<Hl>冷凝水落入培养基</Hl>造成污染（也能减少培养基中水分的蒸发）
		</Tip>
		<Narration t={t} />
	</Scene>
);
