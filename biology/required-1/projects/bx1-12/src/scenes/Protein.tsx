import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.protein;
const {pt1, pt2, pt3, pt4} = t.cue;

export const Protein: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">转运蛋白：载体蛋白与通道蛋白</Header>
		<Cards
			top={175}
			height={220}
			fontSize={32}
			titleSize={44}
			items={[
				{title: '载体蛋白', color: C.red, at: pt2.from, body: <>只容许与<Hl>结合部位</Hl>相适应的分子或离子通过</>, note: '每次转运都发生自身构象的改变'},
				{title: '通道蛋白', color: C.orange, at: pt3.from, body: <>只容许大小、形状、电荷<Hl c={C.orange}>相适宜</Hl>的分子或离子通过</>, note: '分子或离子不需要与通道蛋白结合（如水通道蛋白）'},
			]}
		/>
		<Tip at={pt4.from} top={450} label="易错">
			协助扩散速率还受<Hl>转运蛋白数量</Hl>限制：随浓度差增大，速率增加到一定程度后<Hl c={C.orange}>趋于平缓</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
