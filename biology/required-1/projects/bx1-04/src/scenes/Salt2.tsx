import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.salt2;
const {sb1, sb2, sb3, sb4} = t.cue;

export const Salt2: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">无机盐：维持细胞和生物体的生命活动</Header>
		<Cards
			top={170}
			height={260}
			fontSize={33}
			items={[
				{title: <F>血液中 Ca^2+</F>, color: C.red, at: sb1.from, body: <>含量<Hl>太低</Hl> → <Hl>抽搐</Hl></>, note: '含量太高 → 肌无力'},
				{title: <F>Na^+ 缺乏</F>, color: C.orange, at: sb2.from, body: <>神经、肌肉细胞<Hl c={C.orange}>兴奋性降低</Hl></>, note: '引发肌肉酸痛、无力等'},
				{title: '酸碱平衡和渗透压', color: C.green, at: sb3.from, body: <>维持细胞的<Hl c={C.green}>酸碱平衡</Hl>和<Hl c={C.green}>渗透压</Hl></>, note: <>生理盐水：质量分数 0.9% 的 <F>NaCl</F> 溶液</>},
			]}
		/>
		<Tip at={sb4.from} top={480} label="易错">
			无机盐<Hl>不能为细胞提供能量</Hl>；大量出汗后应补充<Hl c={C.orange}>淡盐水</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
