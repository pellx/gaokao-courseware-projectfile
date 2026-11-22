import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.history;
const {hs1, hs2, hs3, hs4, hs5} = t.cue;

export const History: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">关于酶本质的探索</Header>
		<Rows
			style={{left: 90, right: 90, top: 165}}
			fontSize={30}
			gap={12}
			items={[
				{at: hs1.from, color: C.muted, title: '巴斯德', children: <>发酵与<Hl c={C.orange}>活细胞</Hl>有关</>},
				{at: hs1.from + 60, color: C.muted, title: '李比希', children: <>酵母菌细胞中的某些物质，<Hl c={C.orange}>细胞死亡裂解后</Hl>才起作用</>},
				{at: hs2.from, color: C.orange, title: '毕希纳', children: <>酵母菌提取液也能发酵 → 引起发酵的物质称为<Hl c={C.orange}>酿酶</Hl></>},
				{at: hs3.from, color: C.red, title: '萨姆纳', children: <>提取<Hl>脲酶</Hl>结晶，证明脲酶是<Hl>蛋白质</Hl></>},
				{at: hs4.from, color: C.green, title: '切赫、奥尔特曼', children: <>少数 <Hl c={C.green}>RNA</Hl> 也有生物催化功能</>},
			]}
		/>
		<Tip at={hs5.from} top={710} label="易错">
			毕希纳证明酿酶<Hl>离开活细胞也能起作用</Hl>；证明酶是蛋白质的是<Hl>萨姆纳</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
