import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Bullets, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {co1, co2, co3, co4, co5} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">蛋白质工程的概念</Header>
		<Def at={co1.from} fontSize={30} style={{left: 90, width: 1200, top: 165}}>
			以蛋白质分子的<Hl c={C.orange}>结构规律及其与生物功能的关系</Hl>为基础，通过<Hl>改造或合成基因</Hl>，来改造现有蛋白质，或制造一种<Hl>新的蛋白质</Hl>
		</Def>
		<Bullets
			style={{left: 90, width: 1200, top: 380}}
			fontSize={31}
			gap={24}
			items={[
				{at: co3.from, children: <>在基因工程基础上延伸出来 → <Hl c={C.orange}>第二代基因工程</Hl></>},
				{at: co4.from, color: C.red, children: <>需要它的原因：基因工程原则上只能生产<Hl c={C.orange}>自然界已存在的蛋白质</Hl>，不一定符合人类需要</>},
			]}
		/>
		<Appear at={co1.from} style={{position: 'absolute', left: 1350, top: 165, width: 480, height: 520}}>
			<Photo src="images/insulin.png" caption="胰岛素单体的空间结构" style={{width: '100%', height: '100%', background: '#fff'}} fit="contain" />
		</Appear>
		<Tip at={co5.from} top={725} label="解题方法">
			抓住“<Hl>改造或合成基因</Hl>”：蛋白质工程的落脚点永远是基因
		</Tip>
		<Narration t={t} />
	</Scene>
);
