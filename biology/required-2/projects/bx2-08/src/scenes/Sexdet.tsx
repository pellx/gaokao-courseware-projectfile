import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sexdet;
const {sd1, sd2, sd3, sd4} = t.cue;

export const Sexdet: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">伴性遗传与性别决定</Header>
		<Def at={sd1.from} style={{left: 90, right: 90, top: 170}} fontSize={36}>
			位于<Hl>性染色体</Hl>上的基因控制的性状，在遗传上总是和<Hl>性别相关联</Hl>
		</Def>
		<Cards
			top={300}
			height={270}
			fontSize={36}
			titleSize={46}
			items={[
				{title: 'XY 型', color: C.red, at: sd2.from, body: <>雌：<Hl>XX</Hl>　雄：<Hl>XY</Hl></>, note: '人、果蝇、大多数雌雄异株植物'},
				{title: 'ZW 型', color: C.orange, at: sd3.from, body: <>雌：<Hl c={C.orange}>ZW</Hl>　雄：<Hl c={C.orange}>ZZ</Hl></>, note: '鸟类、蛾蝶类'},
			]}
		/>
		<Tip at={sd4.from} top={620} label="易错" fontSize={34}>
			性染色体上的基因<Hl>不一定决定性别</Hl>（如色盲基因）；雌雄同株植物<Hl>没有性染色体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
