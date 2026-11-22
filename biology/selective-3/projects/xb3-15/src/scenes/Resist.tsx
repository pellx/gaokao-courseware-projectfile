import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.resist;
const {re1, re2, re3, re4, re5} = t.cue;

export const Resist: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">抗虫、抗病、抗除草剂植物</Header>
		<Cards
			top={190}
			height={400}
			titleSize={40}
			fontSize={31}
			gap={28}
			items={[
				{title: '抗虫', color: C.red, at: re2.from, body: <>转入 <Hl>Bt 抗虫蛋白基因</Hl>等<br />害虫取食后消化系统被破坏<br />例：转基因抗虫棉</>},
				{title: '抗病', color: C.orange, at: re3.from, body: <>转入<Hl c={C.orange}>抗病毒、抗真菌</Hl>的基因<br />如病毒外壳蛋白基因</>},
				{title: '抗除草剂', color: C.green, at: re4.from, body: <>转入抗除草剂基因<br />作物不受伤害，<Hl c={C.green}>杂草被清除</Hl></>},
			]}
		/>
		<Tip at={re5.from} top={650} label="易错">
			Bt 蛋白只对<Hl>特定的害虫</Hl>有毒，对人畜无害；长期种植可能使害虫产生抗性，要<Hl c={C.orange}>合理种植</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
