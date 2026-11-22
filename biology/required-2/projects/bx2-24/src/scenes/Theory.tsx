import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.theory;
const {th1, th2, th3} = t.cue;

export const Theory: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">生物进化理论在发展</Header>
		<Cards
			top={190}
			height={270}
			fontSize={36}
			titleSize={46}
			items={[
				{title: '中性学说', color: C.red, at: th1.from, body: <>大量基因突变是<Hl>中性的</Hl>；决定进化方向的是中性突变的逐渐积累</>},
				{title: '间断平衡学说', color: C.orange, at: th2.from, body: <>物种长期稳定与迅速形成新种<Hl c={C.orange}>交替出现</Hl></>},
			]}
		/>
		<Tip at={th3.from} top={520} label="考法" fontSize={34}>
			仍有争论；更多学者认为<Hl>不能否认自然选择的作用</Hl>，自然选择学说仍是研究的基础
		</Tip>
		<Narration t={t} />
	</Scene>
);
