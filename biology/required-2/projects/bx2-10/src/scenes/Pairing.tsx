import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {BASE_COLOR, Base, HBonds} from './dnadraw';

const t = T.pairing;
const {pa1, pa2, pa3, pa4} = t.cue;

const Pair: React.FC<{x: number; a: string; b: string; n: number; at: number; label: string}> = ({x, a, b, n, at, label}) => (
	<G at={at}>
		<Base x={x - 130} y={110} w={150} h={90} label={a} color={BASE_COLOR[a]} />
		<Base x={x + 130} y={110} w={150} h={90} label={b} color={BASE_COLOR[b]} />
		<HBonds x1={x - 50} x2={x + 50} y={110} n={n} />
		<text x={x} y={210} fontSize={34} fontWeight={900} fill={C.green} textAnchor="middle">{label}</text>
	</G>
);

export const Pairing: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">碱基互补配对原则</Header>
		<svg width={1740} height={250} viewBox="0 0 1740 250" style={{position: 'absolute', left: 90, top: 170}}>
			<Pair x={430} a="A" b="T" n={2} at={pa1.from} label="2 个氢键" />
			<Pair x={1310} a="G" b="C" n={3} at={pa1.from + 40} label="3 个氢键" />
		</svg>
		<Def at={pa2.from} style={{left: 90, right: 90, top: 450}} fontSize={34}>
			A—T 之间 <Hl c={C.orange}>2 个</Hl>氢键，G—C 之间 <Hl c={C.orange}>3 个</Hl>氢键
		</Def>
		<Def at={pa3.from} style={{left: 90, right: 90, top: 560}} fontSize={34} color={C.green} soft={C.greenSoft}>
			总是<Hl c={C.green}>嘌呤（A、G）配嘧啶（T、C）</Hl>，碱基对宽度相同 → DNA 直径恒定
		</Def>
		<Tip at={pa4.from} top={690} label="考法" fontSize={34}>
			G—C 含量越高，氢键越多，DNA 结构越<Hl>稳定</Hl>，越耐高温
		</Tip>
		<Narration t={t} />
	</Scene>
);
