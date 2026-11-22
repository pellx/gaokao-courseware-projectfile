import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.nucleotide;
const {nt1, nt2, nt3, nt4} = t.cue;

// Phosphate (circle) – pentose (pentagon) – base (rectangle).
const Nuc: React.FC<{x: number; y: number; s?: number; labels?: boolean}> = ({x, y, s = 1, labels}) => {
	const pent = [0, 1, 2, 3, 4].map((i) => {
		const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
		return `${x + 150 * s + Math.cos(a) * 60 * s},${y + Math.sin(a) * 60 * s}`;
	});
	return (
		<g>
			<line x1={x + 45 * s} y1={y} x2={x + 95 * s} y2={y} stroke={C.muted} strokeWidth={5} />
			<line x1={x + 205 * s} y1={y} x2={x + 250 * s} y2={y} stroke={C.muted} strokeWidth={5} />
			<circle cx={x} cy={y} r={45 * s} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
			<polygon points={pent.join(' ')} fill={C.redSoft} stroke={C.red} strokeWidth={5} />
			<rect x={x + 250 * s} y={y - 40 * s} width={130 * s} height={80 * s} rx={12} fill="#fff" stroke={C.green} strokeWidth={5} />
			{labels && (
				<>
					<text x={x} y={y + 11} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">P</text>
					<text x={x} y={y + 90} fontSize={28} fontWeight={800} fill={C.orange} textAnchor="middle">磷酸</text>
					<text x={x + 150} y={y + 100} fontSize={28} fontWeight={800} fill={C.red} textAnchor="middle">五碳糖</text>
					<text x={x + 315} y={y + 11} fontSize={30} fontWeight={900} fill={C.green} textAnchor="middle">碱基</text>
					<text x={x + 315} y={y + 90} fontSize={28} fontWeight={800} fill={C.green} textAnchor="middle">含氮碱基</text>
				</>
			)}
		</g>
	);
};

export const Nucleotide: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">核苷酸的组成</Header>
		<svg width={760} height={380} viewBox="0 0 760 380" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={nt2.from}>
				<g transform="scale(1.6)">
					<Nuc x={50} y={110} labels />
				</g>
			</G>
		</svg>
		<Bullets
			style={{left: 900, right: 90, top: 200}}
			fontSize={33}
			gap={26}
			items={[
				{at: nt1.from, color: C.red, children: <>核酸的基本单位：<Hl>核苷酸</Hl></>},
				{at: nt2.from, color: C.orange, children: <>1 分子磷酸 ＋ 1 分子五碳糖 ＋ 1 分子含氮碱基</>},
				{at: nt3.from, color: C.green, children: <>DNA：通常<Hl c={C.green}>两条</Hl>脱氧核苷酸链</>},
				{at: nt3.from + 40, color: C.green, children: <>RNA：通常<Hl c={C.green}>一条</Hl>核糖核苷酸链</>},
			]}
		/>
		<Tip at={nt4.from} top={620} label="易错">
			初步水解 → <Hl c={C.orange}>核苷酸</Hl>；彻底水解 → <Hl>磷酸、五碳糖、含氮碱基</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
