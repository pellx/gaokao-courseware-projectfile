import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apply;
const {ap1, ap2, ap3, ap4} = t.cue;

export const Apply: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">质壁分离的应用与自动复原</Header>
		<Rows
			style={{left: 90, right: 90, top: 170}}
			fontSize={32}
			gap={18}
			items={[
				{at: ap1.from, color: C.green, title: '判断死活', children: <>能发生质壁分离的是<Hl c={C.green}>活细胞</Hl></>},
				{at: ap1.from + 50, color: C.green, title: '估测浓度', children: <>细胞液浓度介于<Hl c={C.green}>刚好不分离</Hl>和<Hl c={C.green}>刚好分离</Hl>的两种外界浓度之间</>},
				{at: ap2.from, color: C.red, title: '自动复原', children: <>一定浓度的 <F>KNO3</F> 溶液：先质壁分离，后<Hl>自动复原</Hl></>},
				{at: ap3.from, color: C.orange, children: <><F>K^+、NO3^-</F> 被细胞吸收 → 细胞液浓度升高 → 吸水；尿素、甘油、乙二醇同理</>},
			]}
		/>
		<Tip at={ap4.from} top={630} label="易错">
			外界浓度<Hl>过高</Hl>，细胞失水过多死亡，不能复原；动物细胞<Hl>无细胞壁</Hl>，不发生质壁分离
		</Tip>
		<Narration t={t} />
	</Scene>
);
