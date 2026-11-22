import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {svgChem} from '../components/chem';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.spread;
const {sd1, sd2, sd3, sd4, sd5} = t.cue;

const TUBES = [130, 360, 590, 820, 1050];
const LIQUID = ['#d9b98a', '#eedcbf', '#f3e6d0', '#f7eedf', '#faf4ea'];
const PLATES = [590, 820, 1050];

const Tube: React.FC<{x: number; fill: string}> = ({x, fill}) => (
	<g>
		<path d={`M${x - 32},40 V190 A32,32 0 0 0 ${x + 32},190 V40`} fill="#fff" stroke={C.text} strokeWidth={5} />
		<path d={`M${x - 29},110 V190 A29,29 0 0 0 ${x + 29},190 V110 z`} fill={fill} />
	</g>
);

// Plate seen from above, with `n` colonies scattered deterministically.
const Plate: React.FC<{x: number; y: number; n: number}> = ({x, y, n}) => (
	<g>
		<ellipse cx={x} cy={y} rx={90} ry={40} fill="#fdf6ea" stroke={C.text} strokeWidth={5} />
		{Array.from({length: n}, (_, i) => {
			const a = i * 2.39996;
			const r = 70 * Math.sqrt((i + 0.5) / n);
			return <circle key={i} cx={x + r * Math.cos(a)} cy={y + r * 0.42 * Math.sin(a)} r={5} fill={C.orange} />;
		})}
	</g>
);

export const Spread: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">稀释涂布平板法</Header>
		<svg width={1740} height={560} viewBox="0 0 1740 560" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={sd1.from}>
				<Tube x={TUBES[0]} fill={LIQUID[0]} />
				<text x={TUBES[0]} y={270} fontSize={28} fontWeight={900} fill={C.brown} textAnchor="middle">土壤悬液</text>
			</G>
			<G at={sd2.from}>
				{TUBES.slice(1).map((x, i) => (
					<g key={x}>
						<Tube x={x} fill={LIQUID[i + 1]} />
						<Arrow x1={TUBES[i] + 40} y1={60} x2={x - 40} y2={60} color={C.orange} marker="arrow-orange" width={5} />
						<text x={(TUBES[i] + x) / 2} y={36} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">1 mL</text>
						<text x={x} y={270} fontSize={28} fontWeight={900} fill={C.text} textAnchor="middle">{svgChem(`10^${i + 1}`, 28)}</text>
					</g>
				))}
				<text x={TUBES[1]} y={308} fontSize={23} fontWeight={800} fill={C.muted} textAnchor="middle">各装 9 mL 无菌水</text>
				<text x={1280} y={120} fontSize={28} fontWeight={900} fill={C.red}>每次稀释 10 倍</text>
			</G>
			<G at={sd3.from}>
				{PLATES.map((x, i) => (
					<g key={x}>
						<Arrow x1={x} y1={290} x2={x} y2={400} color={C.green} marker="arrow-green" width={5} />
						<Plate x={x} y={450} n={[40, 12, 3][i]} />
					</g>
				))}
				<text x={PLATES[0] - 110} y={440} fontSize={24} fontWeight={800} fill={C.green} textAnchor="end">各取 0.1 mL</text>
				<text x={PLATES[0] - 110} y={472} fontSize={24} fontWeight={800} fill={C.green} textAnchor="end">涂布均匀</text>
			</G>
			<G at={sd4.from}>
				<path d="M1330,470 L1420,470 M1420,470 L1600,350" stroke={C.text} strokeWidth={9} strokeLinecap="round" />
				<path d="M1250,440 C1240,410 1260,380 1270,360 C1285,390 1295,415 1280,440 z" fill={C.orange} />
				<text x={1460} y={290} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">涂布器</text>
				<text x={1470} y={530} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">浸酒精 → 引燃 → 冷却后涂布</text>
			</G>
		</svg>
		<Tip at={sd5.from} top={735} label="易错">
			涂布器是<Hl>引燃酒精</Hl>，不是灼烧到烧红；涂布法能<Hl c={C.orange}>分离又能计数</Hl>，平板划线法只能分离
		</Tip>
		<Narration t={t} />
	</Scene>
);
