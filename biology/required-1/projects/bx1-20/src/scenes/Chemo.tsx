import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Flow, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chemo;
const {ch1, ch2, ch3, ch4} = t.cue;

export const Chemo: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">化能合成作用</Header>
		<Flow
			style={{left: 90, top: 175}}
			fontSize={33}
			rows={[
				[
					{label: <F>NH3</F>, at: ch2.from},
					{label: <F>HNO2</F>, at: ch2.from + 20},
					{label: <F>HNO3</F>, note: '两步氧化释放能量', color: C.orange, at: ch2.from + 40},
					{label: <><F>CO2 + H2O</F> → 糖类</>, color: C.red, at: ch2.from + 70},
				],
			]}
			arrows={[[undefined, '氧化', '氧化', '利用化学能']]}
		/>
		<Cards
			top={340}
			height={210}
			fontSize={31}
			titleSize={38}
			items={[
				{title: '自养生物', color: C.green, at: ch3.from, body: <>能用无机物合成有机物：<Hl c={C.green}>绿色植物、硝化细菌</Hl></>},
				{title: '异养生物', color: C.brown, at: ch3.from + 60, body: <>只能利用现成的有机物：人、动物、真菌、大多数细菌</>},
			]}
		/>
		<Tip at={ch4.from} top={600} label="易错">
			硝化细菌是<Hl>自养生物</Hl>，利用的是<Hl>化学能</Hl>而不是光能；原核生物，无叶绿体
		</Tip>
		<Narration t={t} />
	</Scene>
);
