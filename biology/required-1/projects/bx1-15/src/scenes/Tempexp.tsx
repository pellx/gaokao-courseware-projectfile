import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.tempexp;
const {te1, te2, te3} = t.cue;

export const Tempexp: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">探究温度对酶活性的影响：选材与步骤</Header>
		<Flow
			style={{left: 90, top: 175}}
			fontSize={33}
			rows={[
				[
					{label: '淀粉、淀粉酶', note: '分别保温到各温度', color: C.orange, at: te2.from},
					{label: '混合', at: te2.from + 30},
					{label: '保温一段时间', at: te2.from + 50},
					{label: '滴加碘液', note: '看蓝色深浅判断剩余淀粉', color: C.red, at: te1.from},
				],
			]}
		/>
		<Cards
			top={340}
			height={210}
			fontSize={31}
			titleSize={38}
			items={[
				{title: '不用斐林试剂', color: C.red, at: te3.from, body: <>需要<Hl>水浴加热</Hl>，会改变实验温度</>},
				{title: '不用过氧化氢酶', color: C.red, at: te3.from + 60, body: <>H<sub>2</sub>O<sub>2</sub> <Hl>受热本身会分解</Hl></>},
			]}
		/>
		<Tip at={te3.from + 90} top={600} label="易错">
			一定要<Hl>先分别保温，再混合</Hl>，否则反应在未达设定温度时已经开始
		</Tip>
		<Narration t={t} />
	</Scene>
);
