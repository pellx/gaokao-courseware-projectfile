import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.evaluate;
const {ev1, ev2, ev4} = t.cue;

export const Evaluate: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">达尔文学说的意义和局限性</Header>
		<Cards
			top={185}
			height={330}
			fontSize={31}
			titleSize={42}
			items={[
				{title: '意义', color: C.green, at: ev1.from, body: <>摆脱神学束缚；统一性源于<Hl c={C.green}>共同祖先</Hl>，多样性和适应性是<Hl c={C.green}>进化的结果</Hl></>},
				{
					title: '局限性',
					color: C.red,
					at: ev2.from,
					body: (
						<>
							① 不能科学解释<Hl>遗传和变异的本质</Hl>
							<br />② 局限于<Hl>个体水平</Hl>
							<br />③ 强调渐变，难以解释物种大爆发
						</>
					),
				},
			]}
		/>
		<Tip at={ev4.from} top={570} label="易错" fontSize={34}>
			现代生物进化理论：进化的基本单位是<Hl>种群</Hl>，不是个体
		</Tip>
		<Narration t={t} />
	</Scene>
);
