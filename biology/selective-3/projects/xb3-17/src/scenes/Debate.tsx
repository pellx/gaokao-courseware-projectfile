import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.debate;
const {de1, de2, de3, de4, de5} = t.cue;

export const Debate: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">对安全性的争论</Header>
		<Cards
			top={175}
			height={290}
			titleSize={38}
			fontSize={28}
			gap={24}
			items={[
				{title: '食物安全', color: C.red, at: de1.from, body: <>会不会产生<Hl>新的过敏原</Hl>或毒性蛋白？营养成分会不会改变？</>},
				{title: '生物安全', color: C.orange, at: de2.from, body: <>外源基因会不会通过<Hl c={C.orange}>花粉扩散</Hl>到近缘物种？会不会成为“入侵物种”？</>},
				{title: '环境安全', color: C.green, at: de3.from, body: <>会不会<Hl c={C.green}>打破生态平衡</Hl>？抗除草剂基因转入杂草 → “超级杂草”</>},
			]}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 500}}
			fontSize={30}
			items={[{at: de4.from, color: C.red, children: <>减少基因污染：目的基因导入<Hl>叶绿体 DNA</Hl> —— 花粉中一般<Hl>不含叶绿体</Hl>，不会随花粉扩散</>}]}
		/>
		<Tip at={de5.from} top={640} label="解题方法">
			看影响对象：<Hl>人</Hl> → 食物安全；<Hl c={C.orange}>其他生物</Hl> → 生物安全；<Hl c={C.green}>生态系统</Hl> → 环境安全
		</Tip>
		<Narration t={t} />
	</Scene>
);
