import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lyso;
const {ly1, ly2, ly3, ly4} = t.cue;

export const Lyso: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">溶酶体与液泡（单层膜）</Header>
		<Cards
			top={170}
			height={260}
			fontSize={32}
			titleSize={44}
			items={[
				{
					title: '溶酶体',
					color: C.red,
					at: ly1.from,
					body: <>含<Hl>多种水解酶</Hl>，“消化车间”</>,
					note: <>分解衰老、损伤的细胞器；吞噬并杀死侵入的病毒或细菌</>,
				},
				{
					title: '液泡',
					color: C.green,
					at: ly3.from,
					body: <>内有<Hl c={C.green}>细胞液</Hl>（糖类、无机盐、色素、蛋白质等）</>,
					note: <>调节细胞内的环境，使植物细胞保持坚挺</>,
				},
			]}
		/>
		<Tip at={ly4.from} top={480} label="易错">
			水解酶在<Hl>核糖体</Hl>上合成；花瓣、果实的颜色来自<Hl c={C.orange}>液泡中的色素</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
