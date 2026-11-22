import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Tip} from '../components/lib';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.link;
const {lk1, lk2, lk3} = t.cue;

const T1 = (x: number, y: number, s: string, c: string, size = 30, anchor: 'middle' | 'start' | 'end' = 'middle') => (
	<text x={x} y={y} fontSize={size} fontWeight={900} fill={c} textAnchor={anchor}>
		{svgChem(s, size)}
	</text>
);

export const Link: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">光反应与暗反应的联系</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={lk1.from}>
				<rect x={260} y={110} width={380} height={260} rx={30} fill={C.greenSoft} stroke={C.green} strokeWidth={5} />
				{T1(450, 165, '光反应', C.green, 38)}
				{T1(450, 210, '（类囊体薄膜）', C.muted, 26)}
				<rect x={1100} y={110} width={380} height={260} rx={30} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
				{T1(1290, 165, '暗反应', C.orange, 38)}
				{T1(1290, 210, '（叶绿体基质）', C.muted, 26)}
				{T1(1290, 280, 'CO2 + C5 → 2C3', C.text, 30)}
				{T1(1290, 330, '2C3 → (CH2O) + C5', C.text, 30)}
				<Arrow x1={650} y1={190} x2={1090} y2={190} trim={[0, 0]} color={C.red} marker="arrow-red" width={8} />
				{T1(870, 170, 'ATP、NADPH', C.red, 32)}
				<Arrow x1={1090} y1={300} x2={650} y2={300} trim={[0, 0]} color={C.brown} width={6} />
				{T1(870, 345, 'ADP、Pi、NADP^+', C.brown, 30)}
				{T1(450, 290, 'H2O → O2', C.text, 30)}
				<Arrow x1={140} y1={60} x2={300} y2={120} trim={[0, 0]} color={C.orange} marker="arrow-orange" />
				{T1(120, 50, '光', C.orange, 32)}
				{T1(450, 440, 'O2 释放', C.green, 30)}
				<Arrow x1={450} y1={375} x2={450} y2={410} trim={[0, 0]} color={C.green} marker="arrow-green" width={5} />
				{T1(1290, 60, 'CO2', C.text, 32)}
				<Arrow x1={1290} y1={72} x2={1290} y2={106} trim={[0, 0]} width={5} />
				{T1(1290, 440, '(CH2O)', C.orange, 32)}
				<Arrow x1={1290} y1={375} x2={1290} y2={410} trim={[0, 0]} color={C.orange} marker="arrow-orange" width={5} />
			</G>
		</svg>
		<Tip at={lk2.from} top={670} label="解题方法">
			光反应 → 暗反应：<Hl>ATP、NADPH</Hl>；暗反应 → 光反应：<Hl c={C.brown}>ADP、Pi、NADP<sup>+</sup></Hl>；相互依存
		</Tip>
		<Narration t={t} />
	</Scene>
);
