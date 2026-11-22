import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chart} from './Chart';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hiv;
const {hv1, hv2, hv3, hv4, hv5, hv6} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Hiv: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">HIV浓度与T细胞数量的曲线</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175, display: 'flex', gap: 16}}>
			{[
				['RNA病毒', hv2.from],
				['侵染辅助性T细胞', at(hv2.from, hv2.to, 0.3)],
				['逆转录 → DNA', at(hv2.from, hv2.to, 0.6)],
				['整合到染色体上', at(hv2.from, hv2.to, 0.85)],
			].map(([s, from]) => (
				<Appear key={s as string} at={from as number} dx={-20} dy={0}>
					<div style={{border: `4px solid ${C.red}`, borderRadius: 16, padding: '8px 20px', fontSize: 28, fontWeight: 800, color: C.red, background: '#fff'}}>{s}</div>
				</Appear>
			))}
		</div>
		<Appear at={hv1.from} style={{position: 'absolute', left: 70, top: 255}}>
			<Chart
				xLabel="时间/年"
				yLabel="相对量"
				ticks={[[0, '0'], [0.12, '1'], [0.75, '约9']]}
				bands={[
					[0, 0.12, '初期', C.orange, hv3.from],
					[0.12, 0.75, '潜伏期', C.brown, hv4.from],
					[0.75, 1, '后期', C.red, hv5.from],
				]}
				lines={[
					['T细胞数量', C.green, [[0, 0.85], [0.05, 0.6], [0.12, 0.8], [0.4, 0.62], [0.75, 0.38], [1, 0.05]], hv3.from, [0.45, 0.7]],
					['HIV浓度', C.red, [[0, 0.03], [0.05, 0.75], [0.12, 0.15], [0.4, 0.22], [0.75, 0.4], [1, 0.95]], at(hv3.from, hv3.to, 0.1), [0.45, 0.13]],
				]}
			/>
		</Appear>
		<div style={{position: 'absolute', left: 950, right: 90, top: 280, display: 'flex', flexDirection: 'column', gap: 18, fontSize: 29, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={hv3.from}><Hl c={C.orange}>初期</Hl>：HIV先升后降，T细胞先降后回升</Appear>
			<Appear at={hv4.from}><Hl c={C.brown}>潜伏期</Hl>：HIV缓慢上升，T细胞持续下降</Appear>
			<Appear at={hv5.from}><Hl>后期</Hl>：HIV迅速上升，免疫功能几乎全部丧失</Appear>
		</div>
		<Appear at={hv6.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="解题方法" style={{fontSize: 29, padding: '12px 24px'}}>
				先分三段：<Hl c={C.orange}>初期</Hl>先升后降 → <Hl c={C.brown}>潜伏期</Hl>缓升缓降 → <Hl>后期</Hl>HIV猛升、T细胞很低
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
