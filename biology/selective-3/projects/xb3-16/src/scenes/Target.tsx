import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.target;
const {ta1, ta2, ta3, ta4} = t.cue;

export const Target: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">操作对象是基因</Header>
		<Def at={ta1.from} fontSize={40} color={C.red} soft={C.redSoft} style={{left: 90, right: 90, top: 185}}>
			蛋白质工程的操作对象是<Hl>基因</Hl>，不是直接改造蛋白质
		</Def>
		<Cards
			top={340}
			height={250}
			titleSize={38}
			fontSize={32}
			gap={30}
			items={[
				{title: '原因一：难度', color: C.orange, at: ta2.from, body: <>蛋白质结构十分复杂，<Hl c={C.orange}>直接改造非常困难</Hl></>},
				{title: '原因二：遗传', color: C.green, at: ta3.from, body: <>改造的蛋白质<Hl>不能遗传</Hl>；改造基因后，可<Hl c={C.green}>遗传给下一代</Hl></>},
			]}
		/>
		<Tip at={ta4.from} top={650} label="解题方法">
			问“为什么改造基因而不直接改造蛋白质”：从<Hl>可遗传</Hl>和<Hl c={C.orange}>操作难度</Hl>两方面作答
		</Tip>
		<Narration t={t} />
	</Scene>
);
