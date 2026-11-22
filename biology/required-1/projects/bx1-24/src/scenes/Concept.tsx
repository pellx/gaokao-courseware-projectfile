import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cn1, cn2, cn3, cn4} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">细胞分化的概念和特点</Header>
		<Def at={cn1.from} style={{left: 90, right: 90, top: 165}} fontSize={32}>
			一个或一种细胞增殖产生的后代，在<Hl>形态、结构和生理功能上发生稳定性差异</Hl>的过程
		</Def>
		<Cards
			top={320}
			height={170}
			fontSize={30}
			titleSize={40}
			items={[
				{title: '持久性', color: C.orange, at: cn2.from, body: <>一种<Hl c={C.orange}>持久性的变化</Hl></>},
				{title: '普遍性', color: C.green, at: cn2.from + 60, body: <>生物界普遍存在的生命现象</>},
				{title: '稳定性', color: C.red, at: cn3.from, body: <>一般保持分化后的状态<Hl>直到死亡</Hl></>},
			]}
		/>
		<Tip at={cn4.from} top={540} label="易错">
			分化使细胞<Hl>种类增加</Hl>；分裂使细胞<Hl c={C.orange}>数目增加</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
