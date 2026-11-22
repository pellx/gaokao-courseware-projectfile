import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.target;
const {ta1, ta2, ta3, ta4} = t.cue;

export const Target: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">目的基因的筛选与获取</Header>
		<Def at={ta1.from} fontSize={31} style={{left: 90, right: 90, top: 165}}>
			目的基因：主要是<Hl>编码蛋白质的基因</Hl>，如苏云金杆菌的 <Hl c={C.orange}>Bt 抗虫蛋白基因</Hl>
		</Def>
		<Def at={ta2.from} fontSize={31} color={C.green} soft={C.greenSoft} style={{left: 90, right: 90, top: 280}}>
			筛选：从相关的<Hl c={C.green}>已知结构和功能清晰</Hl>的基因中筛选
		</Def>
		<div style={{position: 'absolute', left: 90, top: 400}}>
			<Tree
				width={1100}
				height={270}
				colWidth={440}
				boxWidth={380}
				boxHeight={78}
				fontSize={32}
				root={{
					label: '获取目的基因',
					color: C.orange,
					at: ta3.from,
					children: [
						{label: 'PCR 扩增', note: '最常用', color: C.red, at: ta3.from + 10},
						{label: '人工合成', at: ta3.from + 20},
						{label: '构建基因文库', at: ta3.from + 30},
					],
				}}
			/>
		</div>
		<Tip at={ta4.from} top={720} label="解题方法">
			已知目的基因两端的序列、需要大量扩增时，首选 <Hl>PCR</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
