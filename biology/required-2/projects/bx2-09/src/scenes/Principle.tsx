import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.principle;
const {pp1, pp3, pp4} = t.cue;

export const Principle: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">控制自变量：加法原理与减法原理</Header>
		<Cards
			top={185}
			height={360}
			fontSize={33}
			titleSize={44}
			items={[
				{title: '加法原理', color: C.orange, at: pp1.from, body: <>与常态比较，人为<Hl c={C.orange}>增加</Hl>某种影响因素</>, note: <>例：比较过氧化氢在不同条件下的分解（加热、加 FeCl<sub>3</sub>、加肝脏研磨液）</>},
				{title: '减法原理', color: C.red, at: pp3.from, body: <>与常态比较，人为<Hl>去除</Hl>某种影响因素</>, note: '例：艾弗里用酶分别去除蛋白质、RNA、酯类、DNA'},
			]}
		/>
		<Tip at={pp4.from} top={600} label="解题方法" fontSize={34}>
			看实验组比对照组“<Hl>多了</Hl>”还是“<Hl>少了</Hl>”一个因素；去除某物质后结果消失 → 该物质起作用
		</Tip>
		<Narration t={t} />
	</Scene>
);
