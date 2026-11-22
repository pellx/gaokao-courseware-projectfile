import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {Formula} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.order;
const {or1, or2, or3, or4} = t.cue;

export const Order: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">变异在前，选择在后</Header>
		<Formula at={or1.from} style={{left: 90, top: 180}} fontSize={48}>
			变异在前，选择在后
		</Formula>
		<Flow
			style={{left: 90, top: 340}}
			fontSize={36}
			arrows={[[undefined, '喷洒农药', '繁殖']]}
			rows={[
				[
					{label: '害虫中本来就有抗药个体', note: '变异不定向', at: or2.from, color: C.orange},
					{label: '不抗药的被杀死', note: '农药起选择作用', at: or2.from + 60, color: C.red},
					{label: '抗药基因频率逐代升高', at: or3.from, color: C.red},
				],
			]}
		/>
		<Tip at={or4.from} top={540} label="易错" fontSize={34}>
			“农药使害虫产生抗药性变异”✗ —— 变异<Hl>不定向</Hl>，环境只起<Hl>选择作用</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
