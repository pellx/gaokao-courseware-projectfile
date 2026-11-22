import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.steps;
const {sp1, sp2, sp3, sp4, sp5, sp6} = t.cue;

export const Steps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">胚胎移植的基本程序</Header>
		<Flow
			style={{left: 90, top: 190}}
			fontSize={32}
			rowGap={46}
			rows={[
				[
					{label: '供体、受体', note: '同期发情处理', color: C.red, at: sp1.from},
					{label: '供体超数排卵', note: '促性腺激素', color: C.red, at: sp2.from},
					{label: '配种或人工授精', at: sp3.from},
					{label: '冲卵', note: '冲出早期胚胎', color: C.orange, at: sp3.from + 40},
				],
				[
					{label: '胚胎质量检查', note: '桑葚胚或囊胚', color: C.orange, at: sp4.from},
					{label: '移植给受体', color: C.green, at: sp5.from},
					{label: '妊娠检查', at: sp5.from + 20},
					{label: '产下后代', color: C.green, at: sp5.from + 40},
				],
			]}
		/>
		<Tip at={sp6.from} top={560} label="易错">
			超数排卵用<Hl>促性腺激素</Hl>，不是性激素；“冲卵”冲出的是<Hl>胚胎</Hl>，不是卵子
		</Tip>
		<Narration t={t} />
	</Scene>
);
