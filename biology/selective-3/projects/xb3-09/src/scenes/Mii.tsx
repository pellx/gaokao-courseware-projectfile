import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mii;
const {mi1, mi2, mi3, mi4, mi5} = t.cue;

export const Mii: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">为什么用 MⅡ 期卵母细胞</Header>
		<Cards
			top={185}
			height={200}
			titleSize={38}
			fontSize={31}
			gap={28}
			items={[
				{title: '体积大', color: C.orange, at: mi1.from, body: '便于显微操作'},
				{title: '细胞质特殊', color: C.red, at: mi2.from, body: <>含有<Hl>促使细胞核全能性表达的物质</Hl></>},
				{title: '营养丰富', color: C.green, at: mi3.from, body: '为早期胚胎发育提供营养'},
			]}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 470}}
			fontSize={32}
			items={[{at: mi4.from, color: C.red, children: <>MⅡ 期没有核膜，“去核”去除的是<Hl>纺锤体—染色体复合物</Hl></>}]}
		/>
		<Tip at={mi5.from} top={620} label="易错">
			去核的目的：保证克隆动物的<Hl>核遗传物质全部来自供体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
