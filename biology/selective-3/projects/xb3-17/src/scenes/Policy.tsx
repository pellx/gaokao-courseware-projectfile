import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.policy;
const {po1, po2, po3, po4} = t.cue;

export const Policy: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">我国对转基因产品的管理</Header>
		<Bullets
			style={{left: 90, right: 90, top: 180}}
			fontSize={34}
			gap={30}
			items={[
				{at: po1.from, color: C.orange, children: <>法规：《农业转基因生物安全管理条例》等；实行<Hl>安全评价</Hl>制度</>},
				{at: po2.from, color: C.red, children: <>农业转基因生物实行<Hl>标识制度</Hl>，保障消费者的<Hl c={C.orange}>知情权和选择权</Hl></>},
			]}
		/>
		<Cards
			top={380}
			height={190}
			titleSize={44}
			fontSize={40}
			gap={24}
			items={[
				{title: '研究上', color: C.green, at: po3.from, body: '要大胆'},
				{title: '推广上', color: C.orange, at: po3.from + 20, body: '要慎重'},
				{title: '管理上', color: C.red, at: po3.from + 40, body: '要严格'},
			]}
		/>
		<Tip at={po4.from} top={630} label="易错">
			标识制度是为了保障<Hl>知情权和选择权</Hl>，并不代表这种产品不安全
		</Tip>
		<Narration t={t} />
	</Scene>
);
