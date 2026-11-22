import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {Bullets, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.factor;
const {fc1, fc2, fc3, fc4} = t.cue;

const anaer = (x: number) => (x < 0.3 ? 0.9 * (1 - x / 0.3) ** 2 : 0);
const aer = (x: number) => 0.8 * (1 - Math.exp(-x * 3));
const total = (x: number) => anaer(x) + aer(x);
// Minimum of the total near x≈0.24.
const XMIN = 0.24;

export const Factor: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">影响细胞呼吸的因素</Header>
		<div style={{position: 'absolute', left: 90, top: 170}}>
			<Plot
				id="o2"
				w={900}
				h={460}
				at={fc2.from}
				xLabel="氧气浓度"
				yLabel="二氧化碳释放量"
				vrefs={[{x: XMIN, label: '有机物消耗最少', color: C.green, at: fc2.from + 90}]}
				curves={[
					{pts: sample(total), color: C.red, at: fc2.from + 10, label: '总量', lx: 0.17, ly: 0.74},
					{pts: sample(anaer, 0, 0.3), color: C.orange, at: fc2.from + 40, dash: true, label: '无氧呼吸', lx: 0.22, ly: 0.2},
					{pts: sample(aer), color: C.brown, at: fc2.from + 60, label: '有氧呼吸', lx: 0.85, ly: 0.66},
				]}
			/>
		</div>
		<Bullets
			style={{left: 1060, right: 90, top: 200}}
			fontSize={31}
			gap={22}
			items={[
				{at: fc1.from, color: C.red, children: <>温度：影响<Hl>呼吸酶的活性</Hl></>},
				{at: fc2.from, color: C.orange, children: <>O<sub>2</sub> 为 0：只进行无氧呼吸；O<sub>2</sub> 增加，无氧呼吸受抑制</>},
				{at: fc3.from, color: C.green, children: <>自由水多 → 呼吸旺盛；CO<sub>2</sub> 浓度高 → 抑制呼吸</>},
			]}
		/>
		<Tip at={fc4.from} top={680} label="考法">
			储存果蔬：<Hl>低温、低氧、适宜湿度</Hl>；储存种子：<Hl>低温、低氧、干燥</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
