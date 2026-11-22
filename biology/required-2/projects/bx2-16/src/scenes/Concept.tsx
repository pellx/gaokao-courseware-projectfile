import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cn1, cn2, cn3, cn4} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">基因突变的概念</Header>
		<Def at={cn1.from} style={{left: 90, right: 90, top: 170}} fontSize={35}>
			DNA 分子中发生碱基的<Hl>替换、增添或缺失</Hl>，而引起的<Hl>基因碱基序列的改变</Hl>
		</Def>
		<Rows
			style={{left: 90, right: 90, top: 310}}
			fontSize={33}
			gap={20}
			items={[
				{at: cn2.from, color: C.orange, title: '结果', children: <>产生<Hl c={C.orange}>新基因</Hl>（往往是原基因的等位基因）</>},
				{at: cn3.from, color: C.green, title: '时间', children: <>主要发生在 <Hl c={C.green}>DNA 复制</Hl>时（有丝分裂前的间期、减数分裂Ⅰ前的间期）</>},
			]}
		/>
		<Tip at={cn4.from} top={580} label="易错" fontSize={34}>
			DNA 上<Hl>非基因片段</Hl>的碱基改变不叫基因突变；基因突变在光学显微镜下<Hl>看不到</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
