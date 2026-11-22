import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.extract;
const {ex1, ex2, ex3, ex4, ex5} = t.cue;

export const Extract: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">探究实践：DNA 的粗提取与鉴定</Header>
		<Cards
			top={170}
			height={150}
			titleSize={32}
			fontSize={28}
			items={[
				{title: '原理一', color: C.red, at: ex1.from, body: <><Hl>DNA 不溶于酒精</Hl>，某些蛋白质溶于酒精</>},
				{title: '原理二', color: C.orange, at: ex2.from, body: <>DNA 能溶于 <Hl c={C.orange}>2 mol/L 的 NaCl 溶液</Hl></>},
			]}
		/>
		<Flow
			style={{left: 90, top: 360}}
			fontSize={31}
			rowGap={36}
			rows={[
				[
					{label: '洋葱研磨', at: ex3.from},
					{label: '过滤取上清液', at: ex3.from + 15},
					{label: '加等体积预冷酒精', color: C.red, at: ex3.from + 30},
					{label: '白色丝状物（DNA）', color: C.orange, at: ex3.from + 45},
				],
				[
					{label: '溶于 2 mol/L NaCl', at: ex4.from},
					{label: '加二苯胺试剂', color: C.red, at: ex4.from + 15},
					{label: '沸水浴加热', color: C.orange, at: ex4.from + 30},
					{label: '溶液变蓝', note: '说明含有 DNA', color: C.brown, at: ex4.from + 45},
				],
			]}
		/>
		<Tip at={ex5.from} top={680} label="易错">
			不选哺乳动物成熟红细胞（<Hl>无细胞核</Hl>）；二苯胺鉴定要<Hl>沸水浴</Hl>，并设置不加 DNA 的对照
		</Tip>
		<Narration t={t} />
	</Scene>
);
