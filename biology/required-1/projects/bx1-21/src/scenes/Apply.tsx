import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apply;
const {ap1, ap2, ap3, ap4} = t.cue;

export const Apply: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">光合作用原理的应用</Header>
		<Rows
			style={{left: 90, right: 90, top: 175}}
			fontSize={32}
			gap={18}
			items={[
				{at: ap1.from, color: C.green, title: '合理密植', children: <>充分利用光能，避免叶片相互遮挡</>},
				{at: ap2.from, color: C.green, title: '间作套种', children: <>充分利用光能</>},
				{at: ap2.from + 40, color: C.orange, title: '温室', children: <>适当增加光照、补充 <F>CO2</F></>},
				{at: ap3.from, color: C.red, title: '昼夜温差', children: <>白天适宜温度、夜晚低温 → <Hl>有机物积累多</Hl></>},
			]}
		/>
		<Tip at={ap4.from} top={630} label="易错">
			补光用<Hl>红光或蓝紫光</Hl>；阴天温室应<Hl c={C.orange}>适当降温</Hl>，减少呼吸消耗
		</Tip>
		<Narration t={t} />
	</Scene>
);
