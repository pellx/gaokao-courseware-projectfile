import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.contrast;
const {ct1, ct2, ct3} = t.cue;

export const Contrast: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">科学方法：对比实验</Header>
		<Def at={ct1.from} style={{left: 90, right: 90, top: 165}} fontSize={33}>
			设置<Hl>两个或两个以上的实验组</Hl>，通过对结果的比较分析，探究某种因素对实验对象的影响
		</Def>
		<Cards
			top={330}
			height={190}
			fontSize={34}
			titleSize={40}
			items={[
				{title: '有氧组', color: C.red, at: ct2.from, body: '实验组'},
				{title: '无氧组', color: C.orange, at: ct2.from + 30, body: '实验组'},
			]}
		/>
		<Tip at={ct3.from} top={570} label="易错">
			对比实验<Hl>没有单独的空白对照组</Hl>；鲁宾和卡门的同位素标记实验也是对比实验
		</Tip>
		<Narration t={t} />
	</Scene>
);
