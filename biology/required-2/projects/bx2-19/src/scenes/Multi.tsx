import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.multi;
const {mu1, mu2, mu3, mu4} = t.cue;

export const Multi: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">多基因遗传病</Header>
		<Cards
			top={190}
			height={330}
			fontSize={32}
			titleSize={40}
			items={[
				{title: '概念', color: C.red, at: mu1.from, body: <>受<Hl>两对或两对以上</Hl>等位基因控制</>},
				{title: '实例', color: C.orange, at: mu2.from, body: <>原发性高血压、冠心病、哮喘、<Hl c={C.orange}>青少年型糖尿病</Hl></>},
				{title: '特点', color: C.green, at: mu3.from, body: <>群体中<Hl c={C.green}>发病率较高</Hl>；易受环境影响；家族聚集</>},
			]}
		/>
		<Tip at={mu4.from} top={580} label="易错" fontSize={33}>
			多基因遗传病不呈简单的分离比 → 调查遗传病时一般<Hl>不选多基因遗传病</Hl>，而选发病率较高的单基因遗传病
		</Tip>
		<Narration t={t} />
	</Scene>
);
