import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Tip} from '../components/lib';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.dehydrate;
const {dh1, dh2, dh3} = t.cue;

const S = 46;
const Y = 170;
const A = (x: number, s: React.ReactNode, color: string = C.text, y = Y) => (
	<text x={x} y={y} fontSize={S} fontWeight={900} fill={color} textAnchor="middle">
		{s}
	</text>
);
const bond = (x1: number, x2: number, y = Y - 16) => <line x1={x1} y1={y} x2={x2} y2={y} stroke={C.text} strokeWidth={4} />;
const vbond = (x: number, y1: number, y2: number) => <line x1={x} y1={y1} x2={x} y2={y2} stroke={C.text} strokeWidth={4} />;

// One amino acid: amino group at x0, alpha carbon, carboxyl carbon with =O, then OH.
const Amino: React.FC<{x0: number; r: string; left: React.ReactNode; leftColor?: string}> = ({x0, r, left, leftColor}) => (
	<g>
		{A(x0, left, leftColor)}
		{bond(x0 + 50, x0 + 100)}
		{A(x0 + 125, 'C')}
		{vbond(x0 + 125, Y - 52, Y - 92)}
		{A(x0 + 125, svgChem(r, S), C.red, Y - 104)}
		{vbond(x0 + 125, Y + 6, Y + 46)}
		{A(x0 + 125, 'H', C.text, Y + 92)}
		{bond(x0 + 150, x0 + 200)}
		{A(x0 + 225, 'C')}
		<line x1={x0 + 217} y1={Y - 52} x2={x0 + 217} y2={Y - 92} stroke={C.text} strokeWidth={4} />
		<line x1={x0 + 233} y1={Y - 52} x2={x0 + 233} y2={Y - 92} stroke={C.text} strokeWidth={4} />
		{A(x0 + 225, 'O', C.text, Y - 104)}
		{bond(x0 + 250, x0 + 290)}
	</g>
);

export const Dehydrate: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">脱水缩合与肽键</Header>
		<svg width={1740} height={520} viewBox="0 0 1740 520" style={{position: 'absolute', left: 90, top: 150}}>
			<Defs />
			<G at={dh1.from}>
				<Amino x0={60} r="R1" left={svgChem('H2N', S)} />
				{A(390, 'OH', C.orange)}
				<Amino x0={620} r="R2" left="N" />
				{A(540, 'H', C.orange)}
				{bond(565, 600)}
				{vbond(620, Y + 6, Y + 46)}
				{A(620, 'H', C.text, Y + 92)}
				{A(970, 'OH')}
				<text x={472} y={Y} fontSize={S} fontWeight={900} fill={C.muted} textAnchor="middle">＋</text>
				<rect x={340} y={Y - 62} width={232} height={82} rx={30} fill="none" stroke={C.red} strokeWidth={5} strokeDasharray="12 8" />
				<Arrow x1={462} y1={Y + 30} x2={462} y2={Y + 140} trim={[4, 4]} color={C.red} marker="arrow-red" />
				<text x={462} y={Y + 190} fontSize={44} fontWeight={900} fill={C.red} textAnchor="middle">{svgChem('H2O', 44)}</text>
			</G>
			<G at={dh2.from}>
				<text x={1380} y={70} fontSize={34} fontWeight={900} fill={C.text} textAnchor="middle">肽键</text>
				<text x={1380} y={140} fontSize={48} fontWeight={900} fill={C.red} textAnchor="middle">—CO—NH—</text>
				<text x={1380} y={250} fontSize={30} fontWeight={800} fill={C.muted} textAnchor="middle">2 个氨基酸 → 二肽</text>
				<text x={1380} y={300} fontSize={30} fontWeight={800} fill={C.muted} textAnchor="middle">多个氨基酸 → 多肽（肽链）</text>
			</G>
		</svg>
		<Tip at={dh3.from} top={690} label="易错">
			水中的 <Hl>H 来自氨基和羧基，O 来自羧基</Hl>；脱水缩合的场所是<Hl c={C.orange}>核糖体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
