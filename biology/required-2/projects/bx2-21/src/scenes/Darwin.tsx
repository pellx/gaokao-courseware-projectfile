import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.darwin;
const {da1, da2, da3, da4, da5} = t.cue;

export const Darwin: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">达尔文的自然选择学说</Header>
		<Appear at={da1.from} style={{position: 'absolute', left: 90, top: 170, width: 400, height: 500}}>
			<Photo src="images/darwin.jpg" caption="达尔文" style={{width: '100%', height: '100%'}} pos="center 25%" />
		</Appear>
		<Rows
			style={{left: 540, right: 90, top: 180}}
			fontSize={31}
			gap={18}
			items={[
				{at: da1.from, color: C.orange, title: '过度繁殖', children: <>生物都有很强的繁殖能力 —— <Hl c={C.orange}>前提</Hl></>},
				{at: da2.from, color: C.orange, title: '生存斗争', children: <>资源有限，为生存而斗争 —— <Hl c={C.orange}>动力</Hl></>},
				{at: da3.from, color: C.orange, title: '遗传变异', children: <>个体间存在有利或不利变异 —— <Hl c={C.orange}>内因</Hl></>},
				{at: da4.from, color: C.red, title: '适者生存', children: <>有利变异个体存活并留下后代 —— <Hl>结果</Hl></>},
			]}
		/>
		<Tip at={da5.from} top={730} label="考法" fontSize={33}>
			过度繁殖是<Hl>前提</Hl>，生存斗争是<Hl>动力</Hl>，遗传变异是<Hl>内因</Hl>，适者生存是<Hl>结果</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
