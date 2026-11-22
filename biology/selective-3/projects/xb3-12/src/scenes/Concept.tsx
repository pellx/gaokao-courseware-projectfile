import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {co1, co2, co3, co4} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">基因工程的概念</Header>
		<Def at={co1.from} fontSize={30} style={{left: 90, width: 1250, top: 165}}>
			<Hl>基因工程</Hl>：按照人们的愿望，通过转基因等技术，赋予生物以<Hl>新的遗传特性</Hl>，创造出更符合人们需要的新的生物类型和生物产品
		</Def>
		<Appear at={co2.from} style={{position: 'absolute', left: 90, top: 340, fontSize: 31, fontWeight: 800}}>
			在 <Hl>DNA 分子水平</Hl>上设计和施工 → 又叫<Hl c={C.orange}>重组 DNA 技术</Hl>
		</Appear>
		<Cards
			right={590}
			top={420}
			height={180}
			titleSize={36}
			fontSize={28}
			items={[
				{title: '限制酶', color: C.red, at: co3.from, body: '分子手术刀'},
				{title: 'DNA 连接酶', color: C.orange, at: co3.from + 25, body: '分子缝合针'},
				{title: '载体', color: C.green, at: co3.from + 50, body: '分子运输车'},
			]}
		/>
		<Appear at={co1.from} style={{position: 'absolute', left: 1390, top: 165, width: 440, height: 520}}>
			<Photo src="images/berg.jpg" caption="保罗·伯格（1972 年首个重组 DNA）" style={{width: '100%', height: '100%'}} pos="center 30%" />
		</Appear>
		<Tip at={co4.from} top={725} label="易错">
			载体<Hl>不是酶</Hl>；基因工程的原理是<Hl c={C.orange}>基因重组</Hl>，能定向改造性状、打破物种界限
		</Tip>
		<Narration t={t} />
	</Scene>
);
