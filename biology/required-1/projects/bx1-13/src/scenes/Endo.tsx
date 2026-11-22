import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.endo;
const {en1, en2, en3, en4} = t.cue;

// Membrane as a thick line with an inward pocket (endocytosis) or a fusing vesicle (exocytosis).
const mem = (x: number, pocket: number) =>
	`M${x},100 L${x + 220},100 C${x + 230},${100 + pocket} ${x + 380},${100 + pocket} ${x + 390},100 L${x + 600},100`;

export const Endo: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">胞吞与胞吐</Header>
		<svg width={1740} height={420} viewBox="0 0 1740 420" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={en2.from}>
				<text x={300} y={30} fontSize={34} fontWeight={900} fill={C.red} textAnchor="middle">胞吞</text>
				<path d={mem(0, 150)} fill="none" stroke={C.orange} strokeWidth={14} strokeLinecap="round" />
				<circle cx={305} cy={150} r={38} fill={C.brown} />
				<circle cx={305} cy={330} r={56} fill="none" stroke={C.orange} strokeWidth={12} />
				<circle cx={305} cy={330} r={30} fill={C.brown} />
				<Arrow x1={420} y1={230} x2={380} y2={300} trim={[0, 0]} color={C.red} marker="arrow-red" />
				<text x={440} y={330} fontSize={26} fontWeight={800} fill={C.red}>形成囊泡进入细胞</text>
				<text x={20} y={80} fontSize={24} fontWeight={800} fill={C.muted}>细胞外</text>
				<text x={20} y={140} fontSize={24} fontWeight={800} fill={C.muted}>细胞内</text>
			</G>
			<G at={en3.from}>
				<text x={1100} y={40} fontSize={34} fontWeight={900} fill={C.orange} textAnchor="middle">胞吐</text>
				<path d={mem(990, -10)} fill="none" stroke={C.orange} strokeWidth={14} strokeLinecap="round" />
				<circle cx={1290} cy={300} r={56} fill="none" stroke={C.orange} strokeWidth={12} />
				<circle cx={1290} cy={300} r={30} fill={C.red} />
				<Arrow x1={1290} y1={230} x2={1290} y2={140} trim={[0, 0]} color={C.red} marker="arrow-red" />
				<circle cx={1350} cy={50} r={26} fill={C.red} />
				<text x={1380} y={300} fontSize={26} fontWeight={800} fill={C.red}>囊泡与细胞膜融合，排出大分子</text>
			</G>
		</svg>
		<Tip at={en4.from} top={640} label="易错">
			胞吞、胞吐<Hl>消耗能量</Hl>，需要<Hl>膜上蛋白质参与</Hl>，依赖膜的<Hl c={C.orange}>流动性</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
