import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.composition;
const {cp1, cp2, cp3, cp4} = t.cue;

// Two communities: A has 6 species, B has 3 (marked by shape/colour).
const SHAPES = [C.orange, C.green, C.red, C.brown, C.gold, C.muted];
const mark = (k: number, x: number, y: number) => {
	const c = SHAPES[k];
	switch (k % 3) {
		case 0:
			return <circle key={`${x}-${y}`} cx={x} cy={y} r={13} fill={c} />;
		case 1:
			return <rect key={`${x}-${y}`} x={x - 12} y={y - 12} width={24} height={24} fill={c} />;
		default:
			return <path key={`${x}-${y}`} d={`M${x},${y - 15} l14,26 h-28 z`} fill={c} />;
	}
};
const grid = (n: number, kinds: number, ox: number) =>
	Array.from({length: n}, (_, i) => mark(i % kinds, ox + 40 + (i % 6) * 54, 60 + Math.floor(i / 6) * 56));

export const Composition: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">群落的物种组成</Header>
		<Appear at={cp1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Card style={{fontSize: 31, fontWeight: 700}}>
				<Hl>群落</Hl>：相同时间聚集在一定地域中<Hl c={C.orange}>各种生物种群的集合</Hl>
			</Card>
		</Appear>
		<svg width={760} height={330} viewBox="0 0 760 330" style={{position: 'absolute', left: 90, top: 290}}>
			<G at={cp2.from}>
				<rect x={10} y={20} width={350} height={250} rx={20} fill={C.greenSoft} stroke={C.green} strokeWidth={4} />
				{grid(24, 6, 10)}
				<text x={185} y={312} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">群落甲：6 个物种</text>
				<rect x={400} y={20} width={350} height={250} rx={20} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
				{grid(24, 3, 400)}
				<text x={575} y={312} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">群落乙：3 个物种</text>
			</G>
		</svg>
		<div style={{position: 'absolute', left: 920, right: 90, top: 310, display: 'flex', flexDirection: 'column', gap: 22}}>
			<Appear at={cp2.from} style={{fontSize: 31, fontWeight: 700, lineHeight: 1.5}}>
				<Hl>物种组成</Hl>：区别不同群落的<Hl>重要特征</Hl>
			</Appear>
			<Appear at={cp3.from} style={{fontSize: 31, fontWeight: 700, lineHeight: 1.5}}>
				<Hl c={C.orange}>物种丰富度</Hl>：群落中<Hl c={C.orange}>物种数目</Hl>的多少
				<br />
				<span style={{color: C.muted, fontSize: 27}}>越靠近热带，丰富度一般越高</span>
			</Appear>
		</div>
		<Appear at={cp4.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				丰富度看<Hl>物种数目</Hl>，不看个体数目；群落包括该地域的<Hl c={C.orange}>全部生物</Hl>（动物、植物、微生物）
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
