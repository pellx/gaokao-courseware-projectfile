import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.differ;
const {df1, df2, df3, df4} = t.cue;

export const Differ: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">克隆动物与供体性状不完全相同</Header>
		<Cards
			top={190}
			height={220}
			titleSize={40}
			fontSize={34}
			gap={30}
			items={[
				{title: '① 细胞质基因', color: C.red, at: df1.from, body: <>来自<Hl>受体卵母细胞</Hl>，不来自供体</>},
				{title: '② 环境因素', color: C.orange, at: df2.from, body: <>表型 = 基因型 + <Hl c={C.orange}>环境</Hl></>},
				{title: '③ 变异', color: C.brown, at: df3.from, body: <>发育过程中可能发生<Hl c={C.brown}>基因突变</Hl>等</>},
			]}
		/>
		<Tip at={df4.from} top={480} label="解题方法">
			从<Hl>细胞质遗传</Hl>和<Hl>环境影响</Hl>两个方面作答，就能拿到主要分数
		</Tip>
		<Narration t={t} />
	</Scene>
);
