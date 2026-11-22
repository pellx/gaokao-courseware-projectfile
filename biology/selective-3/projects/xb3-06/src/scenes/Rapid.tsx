import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.rapid;
const {ra1, ra2, ra3, ra4, ra5} = t.cue;

export const Rapid: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">快速繁殖（微型繁殖）</Header>
		<Appear at={ra1.from} style={{position: 'absolute', left: 90, top: 175, width: 520, height: 500}}>
			<Photo src="images/jars.jpg" caption="组织培养瓶中的试管苗" style={{width: '100%', height: '100%'}} pos="60% center" />
		</Appear>
		<Bullets
			style={{left: 670, right: 90, top: 190}}
			fontSize={32}
			gap={28}
			items={[
				{at: ra1.from, children: <>用于<Hl c={C.orange}>快速繁殖优良品种</Hl>的植物组织培养技术</>},
				{at: ra2.from, color: C.red, children: <>属于<Hl>无性繁殖</Hl>：<Hl>保持优良品种的遗传特性</Hl></>},
				{at: ra3.from, color: C.green, children: <><Hl c={C.green}>高效、快速</Hl>地大量繁殖种苗；不受季节、气候限制</>},
				{at: ra4.from, children: <>对象：观赏植物、经济林木、无性繁殖作物、濒危植物</>},
			]}
		/>
		<Tip at={ra5.from} top={725} label="解题方法">
			问优点：<Hl>保持优良品种的遗传特性</Hl>；<Hl>高效、快速地实现种苗的大量繁殖</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
