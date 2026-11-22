import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.spatial;
const {sp1, sp2, sp3, sp4, sp5} = t.cue;

const GROUND = 400;
const Tree: React.FC<{x: number}> = ({x}) => (
	<g>
		<rect x={x - 9} y={150} width={18} height={GROUND - 150} fill={C.brown} />
		<ellipse cx={x} cy={110} rx={70} ry={58} fill={C.green} />
	</g>
);
const Shrub: React.FC<{x: number}> = ({x}) => (
	<g>
		<rect x={x - 5} y={290} width={10} height={GROUND - 290} fill={C.brown} />
		<ellipse cx={x} cy={280} rx={44} ry={32} fill="#5bb26f" />
	</g>
);
const Grass: React.FC<{x: number}> = ({x}) => (
	<path d={`M${x - 14},${GROUND} L${x - 6},${GROUND - 46} L${x},${GROUND} L${x + 6},${GROUND - 52} L${x + 14},${GROUND}`} fill="#8cc97a" />
);

const LAYERS: [string, number][] = [
	['乔木层', 110],
	['灌木层', 280],
	['草本层', 370],
	['地被层', 418],
];

// Top view of a grassland: patches of different species.
const PATCHES: [number, number, number, number, string][] = [
	[110, 115, 70, 45, C.green],
	[265, 105, 65, 42, C.orange],
	[425, 120, 80, 50, '#8cc97a'],
	[140, 240, 80, 48, C.gold],
	[300, 225, 70, 45, C.green],
	[455, 260, 55, 40, C.orange],
	[310, 315, 70, 26, '#8cc97a'],
];

export const Spatial: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">群落的空间结构</Header>
		<svg width={860} height={470} viewBox="0 0 860 470" style={{position: 'absolute', left: 70, top: 175}}>
			<Defs />
			<G at={sp1.from}>
				<text x={300} y={30} fontSize={32} fontWeight={900} fill={C.orange} textAnchor="middle">垂直结构：分层</text>
			</G>
			<G at={sp2.from}>
				<rect x={20} y={GROUND} width={580} height={30} fill={C.brown} opacity={0.5} />
				{[90, 300, 510].map((x) => (
					<Tree key={x} x={x} />
				))}
				{[190, 410].map((x) => (
					<Shrub key={x} x={x} />
				))}
				{[40, 140, 250, 350, 460, 560].map((x) => (
					<Grass key={x} x={x} />
				))}
				{LAYERS.map(([s, y]) => (
					<g key={s}>
						<line x1={615} y1={y} x2={650} y2={y} stroke={C.muted} strokeWidth={3} />
						<text x={660} y={y + 10} fontSize={28} fontWeight={800} fill={C.text}>{s}</text>
					</g>
				))}
			</G>
			<G at={sp3.from}>
				<path d="M60,60 q12,-12 24,0 q12,-12 24,0" fill="none" stroke={C.text} strokeWidth={4} />
				<path d="M240,230 q10,-10 20,0 q10,-10 20,0" fill="none" stroke={C.text} strokeWidth={4} />
				<ellipse cx={330} cy={412} rx={16} ry={9} fill={C.text} />
			</G>
		</svg>
		<svg width={560} height={420} viewBox="0 0 560 420" style={{position: 'absolute', left: 1270, top: 175}}>
			<G at={sp4.from}>
				<text x={280} y={30} fontSize={32} fontWeight={900} fill={C.green} textAnchor="middle">水平结构：镶嵌分布</text>
				<rect x={20} y={50} width={520} height={300} rx={20} fill={C.panel} stroke={C.line} strokeWidth={4} />
				{PATCHES.map(([x, y, rx, ry, c], i) => (
					<ellipse key={i} cx={x} cy={y} rx={rx} ry={ry} fill={c} opacity={0.75} />
				))}
				<text x={280} y={395} fontSize={23} fontWeight={700} fill={C.muted} textAnchor="middle">地形、土壤湿度和盐碱度、光照等不同</text>
			</G>
		</svg>
		<Appear at={sp2.from} style={{position: 'absolute', left: 960, top: 300, width: 290, fontSize: 28, fontWeight: 800, lineHeight: 1.45}}>
			植物分层：<Hl>光照</Hl>
		</Appear>
		<Appear at={sp3.from} style={{position: 'absolute', left: 960, top: 380, width: 290, fontSize: 28, fontWeight: 800, lineHeight: 1.45}}>
			动物分层：<Hl>栖息空间和食物条件</Hl>
		</Appear>
		<Appear at={sp5.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				竹林中竹子高低错落<Hl>不是</Hl>垂直结构——竹子是<Hl>一个种群</Hl>；空间结构是<Hl c={C.orange}>群落</Hl>的特征
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
