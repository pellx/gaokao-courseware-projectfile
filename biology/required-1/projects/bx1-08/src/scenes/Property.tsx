import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.property;
const {pp1, pp2, pp3, pp4} = t.cue;

export const Property: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">结构特点与功能特性</Header>
		<Cards
			top={175}
			height={240}
			fontSize={33}
			titleSize={42}
			items={[
				{title: '结构特点：流动性', color: C.orange, at: pp1.from, body: <>具有<Hl c={C.orange}>一定的流动性</Hl></>, note: <>实例：变形虫运动、胞吞胞吐、细胞融合、质壁分离</>},
				{title: '功能特性：选择透过性', color: C.red, at: pp3.from, body: <>与膜上<Hl>转运蛋白的种类和数量</Hl>有关</>},
			]}
		/>
		<Tip at={pp4.from} top={470} label="易错">
			<Hl>流动性 ＝ 结构特点</Hl>，<Hl>选择透过性 ＝ 功能特性</Hl>；流动性是选择透过性的基础
		</Tip>
		<Narration t={t} />
	</Scene>
);
