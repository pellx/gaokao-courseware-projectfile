import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.autophagy;
const {au1, au2, au3, au4} = t.cue;

export const Autophagy: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">细胞自噬</Header>
		<Def at={au1.from} style={{left: 90, right: 90, top: 160}} fontSize={32}>
			受损或功能退化的细胞结构等，通过<Hl>溶酶体</Hl>降解后再利用
		</Def>
		<Rows
			style={{left: 90, right: 90, top: 290}}
			fontSize={31}
			gap={14}
			items={[
				{at: au2.from, color: C.green, title: '营养缺乏时', children: <>获得维持生存所需的<Hl c={C.green}>物质和能量</Hl></>},
				{at: au2.from + 60, color: C.green, title: '清除', children: <>受损细胞器、感染的微生物和毒素 → 维持细胞内部环境稳定</>},
				{at: au3.from, color: C.red, title: '激烈自噬', children: <>可能<Hl>诱导细胞凋亡</Hl></>},
			]}
		/>
		<Tip at={au4.from} top={610} label="易错">
			自噬<Hl>不一定导致细胞死亡</Hl>；参与自噬的主要细胞器是<Hl c={C.orange}>溶酶体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
