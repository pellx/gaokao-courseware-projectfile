import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.content;
const {wc1, wc2, wc3, wc4} = t.cue;

export const Content: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">水的含量特点</Header>
		<Def at={wc1.from} style={{left: 90, right: 90, top: 170}} fontSize={38} color={C.red} soft={C.redSoft}>
			水是细胞中<Hl>含量最多的化合物</Hl>，一般占细胞鲜重的 <Hl>70%～90%</Hl>
		</Def>
		<Cards
			top={320}
			height={260}
			fontSize={33}
			items={[
				{title: '不同生物', color: C.orange, at: wc2.from, body: <><Hl c={C.orange}>水生生物 ＞ 陆生生物</Hl></>, note: '水母的含水量可达 97%'},
				{title: '同一生物', color: C.green, at: wc3.from, body: <>幼儿 ＞ 成年人<br /><Hl c={C.green}>代谢旺盛的器官</Hl>含水量高</>},
			]}
		/>
		<Tip at={wc4.from} top={630} label="解题方法">
			比较含水量：一般<Hl>代谢越旺盛，含水量越高</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
