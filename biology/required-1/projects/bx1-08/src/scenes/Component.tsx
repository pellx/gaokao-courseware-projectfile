import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.component;
const {co1, co2, co3, co4, co5} = t.cue;

export const Component: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">对细胞膜成分的探索</Header>
		<Rows
			style={{left: 90, right: 90, top: 170}}
			fontSize={31}
			gap={16}
			items={[
				{at: co1.from, color: C.orange, title: '欧文顿', children: <>溶于脂质的物质更易穿过细胞膜 → 膜的主要成分中有<Hl>脂质</Hl></>},
				{at: co2.from, color: C.orange, title: '化学分析', children: <>膜中的脂质主要是<Hl c={C.orange}>磷脂</Hl></>},
				{at: co3.from, color: C.red, title: '红细胞实验', children: <>单分子层面积 ＝ 红细胞表面积的 <Hl>2 倍</Hl> → 磷脂排列为<Hl>连续的两层</Hl></>},
				{at: co4.from, color: C.green, title: '表面张力', children: <>细胞表面张力低于油—水界面 → 膜中还附有<Hl c={C.green}>蛋白质</Hl></>},
			]}
		/>
		<Tip at={co5.from} top={620} label="考法">
			选哺乳动物<Hl>成熟红细胞</Hl>制备细胞膜：没有细胞核和众多细胞器，得到的膜较纯净
		</Tip>
		<Narration t={t} />
	</Scene>
);
