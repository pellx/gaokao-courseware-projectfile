import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apply;
const {ap1, ap2, ap3, ap4, ap5} = t.cue;

export const Apply: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">蛋白质工程的应用</Header>
		<Cards
			top={180}
			height={420}
			titleSize={34}
			fontSize={28}
			gap={20}
			items={[
				{title: '速效胰岛素', color: C.red, at: ap1.from, body: <>天然胰岛素易形成二聚体或六聚体，起效慢<br />→ 改变<Hl>氨基酸序列</Hl>，得到速效胰岛素类似物</>},
				{title: '干扰素', color: C.orange, at: ap2.from, body: <>一个半胱氨酸 → 丝氨酸<br /><Hl c={C.orange}>提高储存稳定性</Hl></>},
				{title: '工业用酶', color: C.brown, at: ap3.from, body: <>提高酶的<Hl c={C.brown}>热稳定性</Hl><br />如洗涤剂中耐热、耐碱的蛋白酶</>},
				{title: '农业', color: C.green, at: ap4.from, body: <>改造调控光合作用的酶<br />提高<Hl c={C.green}>光合作用效率</Hl></>},
			]}
		/>
		<Tip at={ap5.from} top={660} label="解题方法">
			给出改造实例问思路：按<Hl>“功能 → 结构 → 氨基酸序列 → 基因”</Hl>四步说清楚
		</Tip>
		<Narration t={t} />
	</Scene>
);
