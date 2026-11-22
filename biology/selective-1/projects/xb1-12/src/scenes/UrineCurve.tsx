import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chart} from './Chart';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.urinecurve;
const {uc1, uc2, uc3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const UrineCurve: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点九">尿量与抗利尿激素的曲线</Header>
		<Appear at={uc1.from} style={{position: 'absolute', left: 70, top: 170}}>
			<Chart
				xLabel="时间/h"
				yLabel="相对量"
				ticks={[[0, '0'], [0.15, '饮水'], [0.4, '1'], [0.7, '2'], [1, '3']]}
				lines={[
					['抗利尿激素（饮清水）', C.green, [[0, 0.55], [0.15, 0.55], [0.3, 0.2], [0.55, 0.3], [1, 0.55]], at(uc1.from, uc1.to, 0.1), [0.82, 0.62], true],
					['尿量（饮清水）', C.red, [[0, 0.2], [0.15, 0.2], [0.4, 0.9], [0.7, 0.35], [1, 0.2]], at(uc1.from, uc1.to, 0.35), [0.4, 0.95]],
					['尿量（饮生理盐水）', C.orange, [[0, 0.2], [0.15, 0.2], [0.4, 0.26], [1, 0.2]], uc2.from, [0.75, 0.08]],
				]}
			/>
		</Appear>
		<div style={{position: 'absolute', left: 950, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={uc1.from}>
				饮大量清水 → 渗透压<Hl c={C.green}>↓</Hl> → 抗利尿激素<Hl c={C.green}>↓</Hl> → 尿量<Hl>↑</Hl>（约1 h达高峰）
			</Appear>
			<Appear at={uc2.from}>
				饮等量生理盐水 → 渗透压基本不变 → 尿量<Hl c={C.orange}>变化不大</Hl>
			</Appear>
		</div>
		<Appear at={uc3.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				抗利尿激素与尿量<Hl>变化相反</Hl>：激素多 → 尿少；激素少 → 尿多
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
