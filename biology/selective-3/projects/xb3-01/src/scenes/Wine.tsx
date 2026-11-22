import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Chem} from '../components/chem';
import {Bullets, Cards, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.wine;
const {wi1, wi2, wi3, wi4, wi5, wi6} = t.cue;

export const Wine: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">果酒的制作</Header>
		<Cards
			top={170}
			height={200}
			fontSize={28}
			titleSize={34}
			items={[
				{title: '酵母菌 · 兼性厌氧', color: C.orange, at: wi1.from, body: <>有氧：<Hl c={C.green}>大量繁殖</Hl><br />无氧：<Chem>C6H12O6</Chem> → 2 <Chem>C2H5OH</Chem> + 2 <Chem>CO2</Chem></>},
				{title: '温度', color: C.red, at: wi2.from, body: <span style={{fontSize: 64, fontWeight: 900, color: C.red}}>18～30 ℃</span>},
			]}
		/>
		<Flow
			style={{left: 90, top: 410}}
			fontSize={34}
			rows={[
				[
					{label: '冲洗', at: wi3.from},
					{label: '去枝梗', at: wi3.from + 8},
					{label: '榨汁', at: wi3.from + 16},
					{label: '装瓶', note: '留约 1/3 空间', color: C.red, at: wi4.from},
					{label: '密封发酵', note: '每隔 12 h 左右拧松瓶盖', color: C.orange, at: wi5.from},
				],
			]}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 560}}
			fontSize={29}
			gap={10}
			items={[
				{at: wi3.from, children: <>先冲洗后去枝梗、<Hl c={C.orange}>不反复冲洗</Hl>：保留葡萄皮上的野生酵母菌，减少杂菌污染</>},
				{at: wi4.from, color: C.red, children: <>留 1/3 空间：酵母菌<Hl>先有氧繁殖</Hl>；防止产生的 <Chem>CO2</Chem> 使发酵液<Hl>溢出</Hl></>},
			]}
		/>
		<Tip at={wi6.from} top={735} label="易错">
			排气是<Hl>拧松瓶盖</Hl>，不是打开瓶盖（打开会进入空气和杂菌）；先通气后密封：先繁殖、后产酒
		</Tip>
		<Narration t={t} />
	</Scene>
);
