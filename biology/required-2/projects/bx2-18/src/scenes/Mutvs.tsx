import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mutvs;
const {mv1, mv2, mv4} = t.cue;

export const Mutvs: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">基因突变与染色体结构变异的区分</Header>
		<Cards
			top={190}
			height={330}
			fontSize={32}
			titleSize={42}
			items={[
				{title: '基因突变', color: C.red, at: mv1.from, body: <>发生在<Hl>基因内部</Hl>（碱基变化）<br />基因数目和位置不变</>, note: <>例：A → a（出现新的等位基因）</>},
				{title: '染色体结构变异', color: C.orange, at: mv2.from, body: <><Hl c={C.orange}>染色体片段</Hl>变化，涉及一个或多个基因<br />基因数目或排列顺序改变</>, note: <>例：A 所在片段丢失（缺失）</>},
			]}
		/>
		<Tip at={mv4.from} top={580} label="解题方法" fontSize={33}>
			出现<Hl>新的等位基因</Hl> → 基因突变；基因<Hl>数目或位置</Hl>改变 → 染色体结构变异；显微镜下能否看到也可帮助判断
		</Tip>
		<Narration t={t} />
	</Scene>
);
