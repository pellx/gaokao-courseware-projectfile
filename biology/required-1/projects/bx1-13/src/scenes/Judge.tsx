import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.judge;
const {jd1, jd2, jd3, jd4} = t.cue;

export const Judge: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">判断物质运输方式</Header>
		<Rows
			style={{left: 90, right: 90, top: 175}}
			fontSize={33}
			gap={20}
			badge={(i) => ['一看', '二看', '三看'][i]}
			items={[
				{at: jd1.from, color: C.brown, title: '分子大小', children: <>大分子、颗粒物 → <Hl c={C.brown}>胞吞、胞吐</Hl></>},
				{at: jd2.from, color: C.red, title: '浓度梯度', children: <>逆浓度梯度 → <Hl>主动运输</Hl></>},
				{at: jd3.from, color: C.orange, title: '蛋白和能量', children: <>要蛋白不耗能 → 协助扩散；都要 → 主动运输；都不要 → 自由扩散</>},
			]}
		/>
		<Tip at={jd4.from} top={560} label="易错">
			葡萄糖进入<Hl>红细胞</Hl>是协助扩散，进入<Hl>小肠上皮细胞</Hl>是主动运输
		</Tip>
		<Narration t={t} />
	</Scene>
);
