import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Duplex} from '../components/dna';
import {svgChem} from '../components/chem';
import {Formula} from '../components/gene';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.calc1;
const {c11, c12, c13, c14} = t.cue;

export const Calc1: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">碱基计算（一）：嘌呤 ＝ 嘧啶</Header>
		<svg width={700} height={260} viewBox="0 0 700 260" style={{position: 'absolute', left: 90, top: 190}}>
			<G at={c11.from}>
				<text x={0} y={70} fontSize={30} fontWeight={900} fill={C.muted}>1 链</text>
				<text x={0} y={140} fontSize={30} fontWeight={900} fill={C.muted}>2 链</text>
				<Duplex x={90} y={30} top="AGCTTAGC" bottom="TCGAATCG" fontSize={30} />
			</G>
			<G at={c14.from}>
				<text x={90} y={210} fontSize={26} fontWeight={800} fill={C.red}>{svgChem('A1 ＝ T2　T1 ＝ A2　G1 ＝ C2　C1 ＝ G2', 26)}</text>
			</G>
		</svg>
		<Formula at={c11.from + 30} style={{left: 900, top: 190}} fontSize={38}>
			双链：A ＝ T，G ＝ C → 嘌呤 ＝ 嘧啶 ＝ 50%
		</Formula>
		<Formula at={c12.from} style={{left: 900, top: 320}} fontSize={38} color={C.orange}>
			整个 DNA：(A＋G)/(T＋C) ＝ 1
		</Formula>
		<Formula at={c13.from} style={{left: 900, top: 450}} fontSize={38} color={C.green}>
			1 链 ＝ a → 2 链 ＝ 1/a（互为倒数）
		</Formula>
		<Tip at={c14.from} top={640} label="解题方法" fontSize={34}>
			<Hl>画出两条链</Hl>，标 1 链、2 链，利用 A<sub>1</sub> ＝ T<sub>2</sub>、G<sub>1</sub> ＝ C<sub>2</sub> 逐项代换
		</Tip>
		<Narration t={t} />
	</Scene>
);
