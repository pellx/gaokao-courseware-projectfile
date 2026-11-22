import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {co1, co2, co3} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">协同进化的概念</Header>
		<Cards
			top={185}
			height={230}
			fontSize={36}
			titleSize={44}
			items={[
				{title: '不同物种之间', color: C.red, at: co1.from, body: <>捕食、竞争、互利共生等<Hl>相互影响</Hl></>},
				{title: '生物与无机环境之间', color: C.orange, at: co1.from + 40, body: <>生物改变环境，环境选择生物</>},
			]}
		/>
		<Def at={co2.from} style={{left: 90, right: 90, top: 460}} fontSize={33} color={C.green} soft={C.greenSoft}>
			结果：出现千姿百态的物种，形成<Hl c={C.green}>多种多样的生态系统</Hl>
		</Def>
		<Tip at={co3.from} top={590} label="易错" fontSize={34}>
			协同进化<Hl>不只发生在生物之间</Hl>；同种生物之间的斗争<Hl>不属于</Hl>协同进化
		</Tip>
		<Narration t={t} />
	</Scene>
);
