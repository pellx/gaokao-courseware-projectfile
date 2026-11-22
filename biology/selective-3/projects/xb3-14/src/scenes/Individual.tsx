import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.individual;
const {in4, in5, in6, in7} = t.cue;

export const Individual: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">个体生物学水平的鉴定</Header>
		<Def at={in4.from} fontSize={32} style={{left: 90, right: 90, top: 175}}>
			分子检测成功 ≠ 基因工程成功，还要在<Hl>个体水平</Hl>上鉴定
		</Def>
		<Cards
			top={320}
			height={220}
			titleSize={38}
			fontSize={31}
			gap={28}
			items={[
				{title: '抗虫接种实验', color: C.red, at: in5.from, body: '如抗虫棉：看棉花是否具有抗虫特性'},
				{title: '抗病接种实验', color: C.orange, at: in6.from, body: '抗病植物：接种病原体，看是否抗病'},
				{title: '活性比较', color: C.green, at: in6.from + 30, body: '与天然产品的功能活性比较'},
			]}
		/>
		<Tip at={in7.from} top={600} label="易错">
			检测到目的基因甚至蛋白质，<Hl>不等于</Hl>获得了所需性状；最终要在<Hl>个体水平</Hl>上鉴定
		</Tip>
		<Narration t={t} />
	</Scene>
);
