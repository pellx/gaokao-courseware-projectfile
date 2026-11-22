import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.life;
const {li1, li2, li3, li4} = t.cue;

export const Life: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">生命活动离不开细胞</Header>
		<Cards
			top={190}
			height={380}
			fontSize={37}
			titleSize={42}
			items={[
				{title: '单细胞生物', color: C.orange, at: li1.from, body: <>如草履虫、变形虫<br /><Hl c={C.orange}>一个细胞</Hl>完成运动、摄食、繁殖等全部生命活动</>},
				{title: '多细胞生物', color: C.green, at: li2.from, body: <>依赖各种<Hl c={C.green}>分化的细胞密切合作</Hl><br />如缩手反射、生长发育</>},
				{title: '病毒', color: C.red, at: li3.from, body: <><Hl>没有细胞结构</Hl><br />必须<Hl>寄生在活细胞中</Hl>才能增殖</>},
			]}
		/>
		<Tip at={li4.from} top={640} label="易错">
			病毒<Hl>不能用普通培养基</Hl>直接培养，要用活细胞培养；病毒是生物，但<Hl>不属于</Hl>生命系统的任何结构层次
		</Tip>
		<Narration t={t} />
	</Scene>
);
