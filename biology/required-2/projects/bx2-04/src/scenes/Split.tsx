import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {Formula} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.split;
const {sp1, sp2, sp3, sp4, sp5} = t.cue;

export const Split: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">拆分法（分解组合法）</Header>
		<Def at={sp1.from} style={{left: 90, right: 90, top: 165}} fontSize={36}>
			例：AaBbCc × AaBbcc，求子代中 <Hl>AAbbCc</Hl> 所占的比例
		</Def>
		<Cards
			top={290}
			height={200}
			fontSize={36}
			titleSize={40}
			items={[
				{title: "Aa × Aa", color: C.red, at: sp2.from, body: <>AA 占 <Hl>1/4</Hl></>},
				{title: 'Bb × Bb', color: C.orange, at: sp3.from, body: <>bb 占 <Hl c={C.orange}>1/4</Hl></>},
				{title: 'Cc × cc', color: C.green, at: sp3.from + 40, body: <>Cc 占 <Hl c={C.green}>1/2</Hl></>},
			]}
		/>
		<Formula at={sp4.from} style={{left: 90, top: 530}} fontSize={46}>
			AAbbCc = 1/4 × 1/4 × 1/2 = 1/32
		</Formula>
		<Tip at={sp5.from} top={680} label="解题方法" fontSize={34}>
			<Hl>先拆后乘</Hl>；前提是各对基因<Hl>独立遗传</Hl>（位于不同对的同源染色体上）
		</Tip>
		<Narration t={t} />
	</Scene>
);
