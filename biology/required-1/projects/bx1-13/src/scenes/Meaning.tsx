import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Rows, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning;
const {mn1, mn2, mn3} = t.cue;

export const Meaning: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">主动运输的意义与实例</Header>
		<Def at={mn1.from} style={{left: 90, right: 90, top: 165}} fontSize={33} color={C.red} soft={C.redSoft}>
			保证细胞<Hl>按照生命活动的需要</Hl>，主动选择吸收营养物质，排出代谢废物和有害物质
		</Def>
		<Rows
			style={{left: 90, right: 90, top: 320}}
			fontSize={32}
			gap={16}
			items={[
				{at: mn2.from, color: C.orange, children: <>小肠上皮细胞吸收<Hl c={C.orange}>葡萄糖、氨基酸</Hl></>},
				{at: mn2.from + 40, color: C.orange, children: <>植物根细胞吸收<Hl c={C.orange}>矿质离子</Hl></>},
				{at: mn2.from + 80, color: C.orange, children: <>轮藻细胞中 <F>K^+</F> 浓度比周围水高 63 倍</>},
			]}
		/>
		<Tip at={mn3.from} top={640} label="考法">
			加呼吸抑制剂后吸收速率下降 → <Hl>主动运输</Hl>（受能量影响的只有主动运输和胞吞、胞吐）
		</Tip>
		<Narration t={t} />
	</Scene>
);
