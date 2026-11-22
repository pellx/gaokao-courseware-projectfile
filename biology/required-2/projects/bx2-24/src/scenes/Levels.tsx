import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.levels;
const {lv1, lv3} = t.cue;

export const Levels: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">生物多样性的三个层次</Header>
		<Cards
			top={190}
			height={300}
			fontSize={32}
			titleSize={42}
			items={[
				{title: '遗传多样性', color: C.red, at: lv1.from, body: <>同种生物不同个体之间<Hl>基因的差异</Hl></>, note: '也叫基因多样性'},
				{title: '物种多样性', color: C.orange, at: lv1.from + 40, body: '地球上生物种类的丰富程度'},
				{title: '生态系统多样性', color: C.green, at: lv1.from + 80, body: '生境、生物群落和生态过程的多样'},
			]}
		/>
		<Tip at={lv3.from} top={560} label="易错" fontSize={34}>
			生物多样性的形成<Hl>不只是新物种的形成</Hl>，还包括遗传多样性和生态系统多样性
		</Tip>
		<Narration t={t} />
	</Scene>
);
