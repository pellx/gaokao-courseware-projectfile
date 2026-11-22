import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.protoplast;
const {pp1, pp2, pp3, pp4} = t.cue;

// Plant cell with a thick wall, and the same cell as a round protoplast.
const WallCell: React.FC<{x: number; y: number; color: string; soft: string}> = ({x, y, color, soft}) => (
	<g>
		<rect x={x - 80} y={y - 70} width={160} height={140} rx={14} fill="#fff" stroke={C.brown} strokeWidth={14} />
		<rect x={x - 66} y={y - 56} width={132} height={112} rx={10} fill={soft} stroke={color} strokeWidth={4} />
		<circle cx={x} cy={y} r={22} fill={color} />
	</g>
);
const Proto: React.FC<{x: number; y: number; color: string; soft: string}> = ({x, y, color, soft}) => (
	<g>
		<circle cx={x} cy={y} r={70} fill={soft} stroke={color} strokeWidth={4} />
		<circle cx={x} cy={y} r={22} fill={color} />
	</g>
);

export const Protoplast: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">植物体细胞杂交：去除细胞壁</Header>
		<Def at={pp1.from} fontSize={31} style={{left: 90, right: 90, top: 165}}>
			<Hl>植物体细胞杂交</Hl>：将<Hl c={C.orange}>不同来源的植物体细胞</Hl>融合成杂种细胞，再把杂种细胞培育成新植物体
		</Def>
		<svg width={1740} height={420} viewBox="0 0 1740 420" style={{position: 'absolute', left: 90, top: 300}}>
			<Defs />
			<G at={pp1.from}>
				<WallCell x={150} y={100} color={C.green} soft={C.greenSoft} />
				<WallCell x={150} y={300} color={C.orange} soft={C.orangeSoft} />
				<text x={280} y={110} fontSize={28} fontWeight={900} fill={C.green}>植物甲</text>
				<text x={280} y={310} fontSize={28} fontWeight={900} fill={C.orange}>植物乙</text>
			</G>
			<G at={pp2.from}>
				<Arrow x1={420} y1={200} x2={820} y2={200} color={C.red} marker="arrow-red" />
				<text x={620} y={170} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">纤维素酶和果胶酶</text>
				<text x={620} y={245} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">细胞壁：纤维素 + 果胶</text>
			</G>
			<G at={pp3.from}>
				<Proto x={950} y={100} color={C.green} soft={C.greenSoft} />
				<Proto x={950} y={300} color={C.orange} soft={C.orangeSoft} />
				<text x={1070} y={210} fontSize={36} fontWeight={900} fill={C.red}>原生质体</text>
			</G>
		</svg>
		<Tip at={pp4.from} top={740} label="考法">
			酶解去壁要在<Hl>等渗或略高渗</Hl>溶液中进行，防止原生质体<Hl>吸水涨破</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
