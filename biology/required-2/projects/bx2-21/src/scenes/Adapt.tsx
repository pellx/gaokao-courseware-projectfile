import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.adapt;
const {ad1, ad2, ad3, ad4} = t.cue;

export const Adapt: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">适应的普遍性和相对性</Header>
		<Def at={ad1.from} style={{left: 90, right: 90, top: 165}} fontSize={30}>
			适应：形态结构适合完成一定的功能；形态结构及功能适合该生物在<Hl c={C.orange}>一定环境</Hl>中生存和繁殖
		</Def>
		<Cards
			top={290}
			height={270}
			fontSize={32}
			titleSize={42}
			items={[
				{title: '普遍性', color: C.orange, at: ad2.from, body: <>枯叶蝶像枯叶；仙人掌叶变成刺；雷鸟冬季换白羽</>},
				{title: '相对性', color: C.red, at: ad3.from, body: <>降雪推迟时，白色雷鸟在褐色地面上<Hl>反而显眼</Hl></>},
			]}
		/>
		<Tip at={ad4.from} top={610} label="考法" fontSize={34}>
			适应的相对性来自<Hl>遗传的稳定性</Hl>与<Hl>环境的不断变化</Hl>之间的矛盾
		</Tip>
		<Narration t={t} />
	</Scene>
);
