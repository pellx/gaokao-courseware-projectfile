import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Formula} from '../components/gene';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.xfreq;
const {xf1, xf2, xf3, xf4} = t.cue;

export const Xfreq: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">X 染色体上基因频率的计算</Header>
		<Def at={xf1.from} style={{left: 90, right: 90, top: 180}} fontSize={38}>
			男性只有一条 X，Y 上没有对应基因 → <Hl>男性只算一个</Hl>
		</Def>
		<Formula at={xf2.from} style={{left: 90, top: 320}} fontSize={42} color={C.orange}>
			{chem('X^[b]')} 的频率 ＝ {chem('X^[b]')} 的个数 ÷（女性人数 × 2 ＋ 男性人数）
		</Formula>
		<Def at={xf3.from} style={{left: 90, right: 90, top: 470}} fontSize={36} color={C.red} soft={C.redSoft}>
			男性色盲发病率 ＝ <Hl>{chem('X^[b]')} 的基因频率</Hl>：男性 8% → 女性约 8% × 8% ＝ 0.64%
		</Def>
		<Tip at={xf4.from} top={630} label="易错" fontSize={36}>
			分母不能写“总人数 × 2”——<Hl>男性只有一个 X</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
