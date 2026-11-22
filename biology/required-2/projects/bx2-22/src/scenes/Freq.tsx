import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Formula} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.freq;
const {fq1, fq2, fq3, fq4} = t.cue;

export const Freq: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">基因频率的计算</Header>
		<Formula at={fq1.from} style={{left: 90, top: 175}} fontSize={38} color={C.orange}>
			方法一：A 的频率 ＝ A 的个数 ÷（A ＋ a 的总数）
		</Formula>
		<Def at={fq2.from} style={{left: 90, right: 90, top: 290}} fontSize={31}>
			例：AA 30 个、Aa 60 个、aa 10 个 → A ＝ 30 × 2 ＋ 60 ＝ 120 个，总数 200 → A ＝ <Hl>60%</Hl>
		</Def>
		<Formula at={fq3.from} style={{left: 90, top: 410}} fontSize={38} color={C.green}>
			方法二：A ＝ AA ＋ 1/2 Aa ＝ 30% ＋ 30% ＝ 60%
		</Formula>
		<Tip at={fq4.from} top={560} label="易错" fontSize={34}>
			A ＋ a 的频率 ＝ <Hl>1</Hl>；各基因型频率之和也 ＝ <Hl>1</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
