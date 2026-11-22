import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.metab;
const {mb1, mb2, mb3} = t.cue;

export const Metab: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">细胞代谢</Header>
		<Cards
			top={180}
			height={250}
			fontSize={34}
			titleSize={46}
			items={[
				{title: '细胞代谢', color: C.red, at: mb1.from, body: <>细胞中每时每刻进行着的<Hl>许多化学反应</Hl>的统称</>},
				{title: '离不开酶', color: C.orange, at: mb2.from, body: <>酶使细胞代谢在<Hl c={C.orange}>温和条件下快速有序</Hl>地进行</>},
			]}
		/>
		<Tip at={mb3.from} top={490} label="易错">
			代谢的主要场所：<Hl>细胞质基质</Hl>；代谢的控制中心：<Hl c={C.orange}>细胞核</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
