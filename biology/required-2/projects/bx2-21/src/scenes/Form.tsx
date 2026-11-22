import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.form;
const {fm1, fm2, fm3, fm4} = t.cue;

export const Form: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">适应的形成（以长颈鹿为例）</Header>
		<Flow
			style={{left: 90, top: 200}}
			fontSize={38}
			rowGap={60}
			arrows={[[undefined, '食物缺乏'], [undefined, '一代代选择']]}
			rows={[
				[
					{label: '祖先中有颈长、颈短的变异', note: '可遗传变异，本来就有', at: fm1.from, color: C.orange},
					{label: '颈长的存活繁殖，颈短的被淘汰', note: '自然选择', at: fm2.from, color: C.red},
				],
				[
					{label: '有利变异逐代积累', at: fm3.from, color: C.red},
					{label: '形成长颈鹿', at: fm3.from + 50, color: C.green},
				],
			]}
		/>
		<Tip at={fm4.from} top={600} label="考法" fontSize={33}>
			适应是<Hl>自然选择</Hl>的结果；<Hl>可遗传的有利变异</Hl>和<Hl>环境的定向选择</Hl>是适应形成的必要条件
		</Tip>
		<Narration t={t} />
	</Scene>
);
