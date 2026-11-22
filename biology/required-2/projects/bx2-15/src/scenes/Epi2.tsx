import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.epi2;
const {eq1, eq2, eq3, eq4} = t.cue;

export const Epi2: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">表观遗传的机制与特点</Header>
		<Cards
			top={185}
			height={330}
			fontSize={32}
			titleSize={40}
			items={[
				{title: 'DNA 甲基化', color: C.red, at: eq1.from, body: <>某些碱基连接甲基基团 → <Hl>抑制表达</Hl></>, note: '如柳穿鱼 Lcyc、小鼠 Avy'},
				{title: '组蛋白修饰', color: C.orange, at: eq2.from, body: <>组蛋白甲基化、乙酰化等 → 影响基因表达</>},
				{title: '特点', color: C.green, at: eq3.from, body: <><Hl c={C.green}>可遗传</Hl>；碱基序列不变；受环境影响</>, note: '如吸烟使精子 DNA 甲基化水平升高'},
			]}
		/>
		<Tip at={eq4.from} top={580} label="易错" fontSize={34}>
			甲基化<Hl>不改变碱基序列</Hl>，<Hl>不是基因突变</Hl>；主要抑制转录，而不是 DNA 复制
		</Tip>
		<Narration t={t} />
	</Scene>
);
