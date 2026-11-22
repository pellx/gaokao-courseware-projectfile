import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pr1, pr2, pr3, pr4} = t.cue;

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">无氧呼吸的过程</Header>
		<Appear at={pr1.from} style={{position: 'absolute', left: 90, top: 160, fontSize: 33, fontWeight: 800}}>
			场所：两个阶段都在<Hl>细胞质基质</Hl>
		</Appear>
		<Flow
			style={{left: 90, top: 250}}
			fontSize={36}
			rowGap={30}
			arrows={[[undefined, '第一阶段', '第二阶段'], [undefined, '第一阶段', '第二阶段']]}
			rows={[
				[
					{label: '葡萄糖', at: pr2.from},
					{label: <>丙酮酸 ＋ [H]</>, note: '释放少量能量', color: C.orange, at: pr2.from + 20},
					{label: <>酒精 ＋ <F>CO2</F></>, note: '不释放能量', color: C.red, at: pr3.from},
				],
				[
					{label: '葡萄糖', at: pr2.from},
					{label: <>丙酮酸 ＋ [H]</>, note: '释放少量能量', color: C.orange, at: pr2.from + 20},
					{label: '乳酸', note: '不释放能量', color: C.red, at: pr3.from + 40},
				],
			]}
		/>
		<Tip at={pr4.from} top={600} label="易错">
			无氧呼吸<Hl>只在第一阶段释放少量能量</Hl>；大部分能量仍储存在酒精或乳酸中
		</Tip>
		<Narration t={t} />
	</Scene>
);
