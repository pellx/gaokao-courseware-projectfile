import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.modern;
const {mo1, mo2, mo3, mo4} = t.cue;

export const Modern: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">现代生物进化理论的主要内容</Header>
		<Rows
			style={{left: 90, right: 90, top: 175}}
			fontSize={30}
			gap={14}
			items={[
				{at: mo1.from, color: C.orange, children: <>适应是<Hl c={C.orange}>自然选择</Hl>的结果；<Hl>种群</Hl>是进化的基本单位</>},
				{at: mo3.from, color: C.green, children: <>进化是<Hl c={C.green}>协同进化</Hl>的过程；进化导致<Hl c={C.green}>生物多样性</Hl></>},
			]}
		/>
		<Flow
			style={{left: 90, top: 380}}
			fontSize={32}
			rows={[
				[
					{label: '突变和基因重组', note: '原材料', at: mo2.from, color: C.orange},
					{label: '自然选择', note: '决定方向', at: mo2.from + 30, color: C.red},
					{label: '基因频率定向改变', note: '进化实质', at: mo2.from + 60, color: C.red},
					{label: '隔离', at: mo2.from + 90, color: C.orange},
					{label: '新物种', at: mo2.from + 120, color: C.green},
				],
			]}
		/>
		<Tip at={mo4.from} top={580} label="解题方法" fontSize={34}>
			答进化题抓主线：<Hl>突变重组 → 自然选择 → 基因频率改变 → 隔离 → 新物种</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
