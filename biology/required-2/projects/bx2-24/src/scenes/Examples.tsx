import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.examples;
const {ex1, ex2, ex3, ex4} = t.cue;

export const Examples: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">协同进化的实例</Header>
		<Appear at={ex1.from} style={{position: 'absolute', left: 90, top: 170, width: 420, height: 520}}>
			<Photo src="images/orchid.jpg" caption="长花距的兰花" style={{width: '100%', height: '100%'}} pos="center 45%" />
		</Appear>
		<Rows
			style={{left: 560, right: 90, top: 180}}
			fontSize={30}
			gap={18}
			items={[
				{at: ex1.from, color: C.orange, title: '兰花与蛾', children: <>花距细长 → 推测有口器同样细长的昆虫；约 50 年后发现了这种蛾</>},
				{at: ex2.from, color: C.red, title: '捕食者与猎物', children: <>猎豹与羚羊越跑越快；<Hl c={C.orange}>收割理论</Hl>：捕食者的存在<Hl>有利于增加物种多样性</Hl></>},
				{at: ex3.from, color: C.green, title: '生物与环境', children: <>光合生物产生氧气 → 为<Hl c={C.green}>好氧生物</Hl>的出现创造条件</>},
			]}
		/>
		<Tip at={ex4.from} top={730} label="考法" fontSize={33}>
			判断是否属于协同进化：看是否是<Hl>两者相互影响</Hl>、共同变化
		</Tip>
		<Narration t={t} />
	</Scene>
);
