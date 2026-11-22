import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.phexp;
const {pe1, pe2, pe3} = t.cue;

export const Phexp: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">探究 pH 对酶活性的影响：选材与步骤</Header>
		<Flow
			style={{left: 90, top: 175}}
			fontSize={33}
			rows={[
				[
					{label: '过氧化氢酶', note: '肝脏研磨液', color: C.orange, at: pe1.from},
					{label: '不同 pH 缓冲液处理', color: C.red, at: pe2.from},
					{label: '加入过氧化氢溶液', at: pe2.from + 40},
					{label: '观察气泡多少', color: C.green, at: pe1.from + 30},
				],
			]}
		/>
		<Cards
			top={340}
			height={200}
			fontSize={32}
			titleSize={38}
			items={[{title: '一般不用淀粉和淀粉酶', color: C.red, at: pe3.from, body: <>淀粉在<Hl>酸性条件下也会水解</Hl>，干扰结果</>}]}
		/>
		<Tip at={pe3.from + 50} top={590} label="易错">
			要<Hl>先调 pH，再加底物</Hl>；温度是无关变量，各组相同且适宜
		</Tip>
		<Narration t={t} />
	</Scene>
);
