import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {Bullets, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ph;
const {ph1, ph2, ph3, ph4} = t.cue;

const bell = (m: number, w: number) => (x: number) => Math.max(0, 0.85 * (1 - ((x - m) / w) ** 2));

export const Ph: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">pH 对酶活性的影响</Header>
		<div style={{position: 'absolute', left: 90, top: 170}}>
			<Plot
				id="ph"
				w={900}
				h={460}
				at={ph1.from}
				xLabel="pH"
				yLabel="酶活性"
				xTicks={[[0.107, '1.5'], [0.5, '7']]}
				curves={[
					{pts: sample(bell(0.107, 0.09), 0, 0.3), color: C.orange, at: ph3.from, label: '胃蛋白酶', lx: 0.107, ly: 0.93},
					{pts: sample(bell(0.5, 0.2), 0.25, 0.75), color: C.red, at: ph1.from + 10, label: '多数酶', lx: 0.5, ly: 0.93},
				]}
			/>
		</div>
		<Bullets
			style={{left: 1060, right: 90, top: 210}}
			fontSize={32}
			gap={24}
			items={[
				{at: ph1.from, color: C.red, children: <>每种酶都有<Hl>最适 pH</Hl></>},
				{at: ph2.from, color: C.red, children: <>过酸、过碱都使酶<Hl>变性失活</Hl></>},
				{at: ph3.from, color: C.orange, children: <>胃蛋白酶约 1.5；动物体内多数酶 6.5～8.0</>},
			]}
		/>
		<Tip at={ph4.from} top={680} label="易错">
			过碱调回最适 pH，活性<Hl>不能恢复</Hl>；改变温度<Hl c={C.orange}>不影响</Hl>酶的最适 pH
		</Tip>
		<Narration t={t} />
	</Scene>
);
