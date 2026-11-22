import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pr1, pr2, pr3, pr4, pr5, pr6} = t.cue;

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">单克隆抗体的制备流程</Header>
		<Flow
			style={{left: 90, top: 185}}
			fontSize={32}
			rowGap={44}
			arrows={[[undefined, '', '+ 骨髓瘤细胞'], [undefined, '第二次筛选', '']]}
			rows={[
				[
					{label: '特定抗原免疫小鼠', color: C.red, at: pr1.from},
					{label: '从脾中取 B 淋巴细胞', at: pr2.from},
					{label: '诱导融合', at: pr3.from},
					{label: '选择培养基筛选', note: '第一次筛选', color: C.orange, at: pr3.from + 30},
				],
				[
					{label: '杂交瘤细胞', color: C.red, at: pr3.from + 50},
					{label: '克隆化培养 + 抗体检测', color: C.orange, at: pr4.from},
					{label: '能产生所需抗体的杂交瘤细胞', color: C.red, at: pr4.from + 30},
				],
				[
					{label: '小鼠腹腔内增殖 / 体外培养', at: pr5.from},
					{label: '从腹水或培养液中提取单克隆抗体', color: C.green, at: pr5.from + 25},
				],
			]}
		/>
		<Tip at={pr6.from} top={640} label="解题方法">
			记住顺序：<Hl>免疫 → 取 B 细胞 → 融合 → 两次筛选 → 体内或体外培养</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
