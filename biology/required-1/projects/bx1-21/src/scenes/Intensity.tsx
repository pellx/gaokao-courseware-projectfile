import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.intensity;
const {it1, it2, it3} = t.cue;

export const Intensity: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">光合作用强度</Header>
		<Def at={it1.from} style={{left: 90, right: 90, top: 165}} fontSize={34}>
			植物在<Hl>单位时间内</Hl>通过光合作用制造糖类的数量
		</Def>
		<Cards
			top={300}
			height={200}
			fontSize={33}
			titleSize={40}
			items={[
				{title: '原料的消耗量', color: C.orange, at: it2.from, body: <><F>CO2</F> 的吸收量</>},
				{title: '产物的生成量', color: C.green, at: it2.from + 50, body: <><F>O2</F> 的释放量、有机物的积累量</>},
			]}
		/>
		<Tip at={it3.from} top={550} label="易错">
			实际测得的 CO<sub>2</sub> 吸收量、O<sub>2</sub> 释放量是<Hl>净光合速率</Hl>（同时在进行呼吸作用）
		</Tip>
		<Narration t={t} />
	</Scene>
);
