import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.poly;
const {po1, po2, po3, po4, po5} = t.cue;

export const Poly: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">多糖</Header>
		<Cards
			top={165}
			height={210}
			fontSize={29}
			titleSize={40}
			gap={20}
			items={[
				{title: '淀粉', color: C.orange, at: po1.from, body: <>植物细胞中的<Hl c={C.orange}>储能物质</Hl></>},
				{title: '糖原', color: C.red, at: po1.from + 50, body: <>人和动物细胞的<Hl>储能物质</Hl></>, note: '主要在肝脏和肌肉中'},
				{title: '纤维素', color: C.green, at: po2.from, body: <>植物<Hl c={C.green}>细胞壁</Hl>的主要成分</>, note: '人体很难消化'},
				{title: '几丁质', color: C.brown, at: po4.from, body: <>甲壳类、昆虫的<Hl c={C.brown}>外骨骼</Hl></>, note: '可用于废水处理'},
			]}
		/>
		<Def at={po3.from} style={{left: 90, right: 90, top: 410}} fontSize={34}>
			淀粉、糖原、纤维素的基本单位都是<Hl>葡萄糖</Hl>，连接方式不同，性质不同
		</Def>
		<Tip at={po5.from} top={540} label="易错">
			肝糖原可分解补充血糖，<Hl>肌糖原不能直接分解成葡萄糖</Hl>；纤维素不是储能物质
		</Tip>
		<Narration t={t} />
	</Scene>
);
