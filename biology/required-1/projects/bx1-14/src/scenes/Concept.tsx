import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Compare} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cn1, cn2, cn3} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">酶的概念</Header>
		<Def at={cn1.from} style={{left: 90, right: 90, top: 165}} fontSize={36} color={C.red} soft={C.redSoft}>
			酶：<Hl>活细胞</Hl>产生的、具有<Hl>催化作用</Hl>的<Hl>有机物</Hl>
		</Def>
		<Compare
			top={300}
			height={220}
			fontSize={33}
			cols={[
				{title: '绝大多数：蛋白质', color: C.orange, at: cn1.from + 60, lines: [{at: cn2.from, children: <>基本单位：<Hl c={C.orange}>氨基酸</Hl></>}]},
				{title: '少数：RNA', color: C.green, at: cn1.from + 90, lines: [{at: cn2.from, children: <>基本单位：<Hl c={C.green}>核糖核苷酸</Hl></>}]},
			]}
		/>
		<Tip at={cn3.from} top={570} label="易错">
			酶在<Hl>细胞内外</Hl>都能起作用（如消化酶）；酶只有催化作用，<Hl>没有调节作用</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
