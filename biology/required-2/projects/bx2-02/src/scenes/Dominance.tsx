import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.dominance;
const {do1, do2, do3, do4} = t.cue;

export const Dominance: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">显隐性的判断</Header>
		<Cards
			top={180}
			height={340}
			fontSize={33}
			titleSize={42}
			items={[
				{title: '定义法（杂交）', color: C.red, at: do1.from, body: <>纯合亲本：高茎 × 矮茎<br />→ F<sub>1</sub> 全为高茎<br />→ <Hl>高茎为显性</Hl></>, note: 'F1 表现出的性状是显性'},
				{title: '性状分离法（自交）', color: C.orange, at: do2.from, body: <>高茎 × 高茎<br />→ 后代出现矮茎<br />→ <Hl c={C.orange}>矮茎为隐性</Hl></>, note: '亲本没有、子代新出现的是隐性'},
				{title: '比例法', color: C.green, at: do3.from, body: <>后代 高∶矮 = 3∶1<br />→ <Hl c={C.green}>占 3 的为显性</Hl></>, note: '适用于大量统计的结果'},
			]}
		/>
		<Tip at={do4.from} top={570} label="解题方法" fontSize={36}>
			<Hl>无中生有为隐性</Hl>：“无”＝亲本没有，“有”＝子代出现
		</Tip>
		<Narration t={t} />
	</Scene>
);
