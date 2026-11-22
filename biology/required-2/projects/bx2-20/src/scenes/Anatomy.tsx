import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.anatomy;
const {an1, an2, an3, an4} = t.cue;

export const Anatomy: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">比较解剖学证据：同源器官</Header>
		<Cards
			top={180}
			height={170}
			fontSize={30}
			titleSize={38}
			items={[
				{title: '蝙蝠的翼', color: C.brown, at: an1.from, body: '飞行'},
				{title: '鲸的鳍', color: C.brown, at: an1.from + 20, body: '游泳'},
				{title: '猫的前肢', color: C.brown, at: an1.from + 40, body: '行走'},
				{title: '人的上肢', color: C.brown, at: an1.from + 60, body: '抓握'},
			]}
		/>
		<Def at={an2.from} style={{left: 90, right: 90, top: 390}} fontSize={34} color={C.red} soft={C.redSoft}>
			外形和功能不同，但<Hl>骨骼组成和排列方式相似</Hl> → <Hl>同源器官</Hl>
		</Def>
		<Def at={an3.from} style={{left: 90, right: 90, top: 500}} fontSize={32}>
			说明由<Hl c={C.orange}>共同的原始祖先</Hl>进化而来，适应不同环境产生差异
		</Def>
		<Tip at={an4.from} top={640} label="易错" fontSize={33}>
			同源器官看<Hl>起源和结构</Hl>，不看功能；阑尾、鲸的后肢骨等<Hl>痕迹器官</Hl>也是比较解剖学证据
		</Tip>
		<Narration t={t} />
	</Scene>
);
