import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.seedless;
const {sl1, sl2, sl3, sl4, sl5} = t.cue;

export const Seedless: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">多倍体育种：三倍体无子西瓜</Header>
		<Flow
			style={{left: 90, top: 185}}
			fontSize={36}
			rowGap={60}
			arrows={[[undefined, '秋水仙素', '♀ × 二倍体♂'], [undefined, '授二倍体花粉', '联会紊乱']]}
			rows={[
				[
					{label: '二倍体幼苗', note: '第一年', at: sl1.from},
					{label: '四倍体植株', at: sl1.from + 40, color: C.orange},
					{label: '三倍体种子', note: '结在四倍体植株上', at: sl2.from, color: C.red},
				],
				[
					{label: '三倍体植株', note: '第二年', at: sl3.from, color: C.red},
					{label: '子房发育成果实', note: '花粉刺激', at: sl3.from + 50, color: C.orange},
					{label: '无子西瓜', note: '不能形成正常配子', at: sl4.from, color: C.green},
				],
			]}
		/>
		<Tip at={sl5.from} top={600} label="易错" fontSize={33}>
			第二年授粉是为了<Hl>刺激子房发育</Hl>，不是受精；四倍体植株上结的西瓜，<Hl>果肉是四倍体</Hl>，种子才是三倍体
		</Tip>
		<Narration t={t} />
	</Scene>
);
