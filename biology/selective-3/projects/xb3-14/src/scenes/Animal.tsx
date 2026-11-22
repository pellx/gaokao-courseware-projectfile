import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.animal;
const {an1, an2, an3, an4} = t.cue;

export const Animal: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">导入动物细胞：显微注射法</Header>
		<Flow
			style={{left: 90, top: 220}}
			fontSize={42}
			rowGap={70}
			arrows={[[undefined, '显微注射'], [undefined, '胚胎移植', '']]}
			rows={[
				[
					{label: '提纯的基因表达载体', at: an1.from},
					{label: '受精卵', color: C.red, at: an2.from},
				],
				[
					{label: '早期胚胎', at: an3.from},
					{label: '雌性动物输卵管或子宫', color: C.orange, at: an3.from + 20},
					{label: '转基因动物', color: C.green, at: an3.from + 40},
				],
			]}
		/>
		<Tip at={an4.from} top={600} label="解题方法">
			为什么选受精卵？<Hl>全能性最高</Hl>，能发育成完整个体，且由它发育来的<Hl>每个细胞都含有目的基因</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
