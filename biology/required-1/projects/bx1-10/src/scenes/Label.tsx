import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Flow, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.label;
const {lb1, lb2, lb3} = t.cue;

export const Label: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">研究方法：同位素标记法</Header>
		<Flow
			style={{left: 90, top: 190}}
			fontSize={38}
			rows={[
				[
					{label: '豚鼠胰腺腺泡细胞', at: lb1.from},
					{label: <F>注射 ^3H 标记的亮氨酸</F>, color: C.red, at: lb1.from + 40},
					{label: '追踪放射性出现的位置', color: C.orange, at: lb2.from},
					{label: '确定运输途径', color: C.green, at: lb2.from + 50},
				],
			]}
		/>
		<Def at={lb2.from + 50} style={{left: 90, right: 90, top: 340}} fontSize={34}>
			亮氨酸是合成<Hl>蛋白质</Hl>的原料，放射性在哪里出现，蛋白质就到了哪里
		</Def>
		<Tip at={lb3.from} top={480} label="易错">
			标记<Hl>亮氨酸</Hl> → 追踪蛋白质；标记<Hl c={C.orange}>胸腺嘧啶 → DNA</Hl>，标记<Hl c={C.orange}>尿嘧啶 → RNA</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
