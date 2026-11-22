import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.feature;
const {ft1, ft2, ft3, ft4, ft5} = t.cue;

export const Feature: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">衰老细胞的主要特征</Header>
		<Rows
			style={{left: 90, right: 90, top: 165}}
			fontSize={30}
			gap={12}
			items={[
				{at: ft1.from, color: C.red, title: '水分', children: <><Hl>减少</Hl>，细胞萎缩、体积变小，代谢减慢</>},
				{at: ft2.from, color: C.red, title: '酶', children: <><Hl>多种酶活性降低</Hl>（酪氨酸酶活性降低 → 头发变白）</>},
				{at: ft3.from, color: C.orange, title: '色素', children: <>色素<Hl c={C.orange}>积累</Hl>（老年斑）；呼吸速率减慢</>},
				{at: ft4.from, color: C.red, title: '细胞核', children: <><Hl>体积增大</Hl>，核膜内折，染色质收缩、染色加深</>},
				{at: ft4.from + 60, color: C.orange, title: '细胞膜', children: <>通透性改变，物质运输功能降低</>},
			]}
		/>
		<Tip at={ft5.from} top={690} label="易错">
			细胞体积<Hl>变小</Hl>、细胞核<Hl>变大</Hl>；白头发是酶活性降低，白化病是基因异常、不能合成酪氨酸酶
		</Tip>
		<Narration t={t} />
	</Scene>
);
