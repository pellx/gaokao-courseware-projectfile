import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chart} from './Chart';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.curve;
const {cv1, cv2, cv3, cv4, cv5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Curve: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">二次免疫的曲线</Header>
		<Appear at={cv1.from} style={{position: 'absolute', left: 70, top: 170}}>
			<Chart
				xLabel="时间"
				yLabel="相对量"
				ticks={[[0.05, '第一次接触'], [0.55, '第二次接触']]}
				lines={[
					['抗体浓度', C.red, [[0.05, 0.04], [0.15, 0.06], [0.28, 0.3], [0.4, 0.18], [0.55, 0.14], [0.6, 0.3], [0.7, 0.92], [0.85, 0.75], [1, 0.6]], cv1.from, [0.2, 0.42]],
					['患病程度', C.orange, [[0.05, 0.04], [0.12, 0.3], [0.2, 0.55], [0.32, 0.12], [0.55, 0.04], [0.6, 0.1], [0.68, 0.04], [1, 0.02]], cv3.from, [0.32, 0.62], true],
				]}
			/>
		</Appear>
		<Appear at={cv2.from} style={{position: 'absolute', left: 560, top: 175, fontSize: 28, fontWeight: 900, color: C.red}}>
			二次免疫：更快、更高
		</Appear>
		<div style={{position: 'absolute', left: 950, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={cv1.from}>初次免疫：抗体上升<Hl c={C.orange}>慢</Hl>，峰值<Hl c={C.orange}>低</Hl></Appear>
			<Appear at={cv2.from}>二次免疫：抗体上升<Hl>快</Hl>，峰值<Hl>高</Hl></Appear>
			<Appear at={cv3.from}>患病程度：二次免疫时<Hl c={C.green}>很轻甚至不发病</Hl></Appear>
			<Appear at={cv4.from}>
				<div style={{border: `4px solid ${C.orange}`, borderRadius: 18, padding: '12px 20px', background: C.orangeSoft}}>
					疫苗 = 先经历一次<Hl c={C.orange}>初次免疫</Hl>，留下记忆细胞和抗体
				</div>
			</Appear>
		</div>
		<Appear at={cv5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				上升<Hl>更快、峰值更高</Hl>的一段 = 二次免疫；画图时从<Hl c={C.orange}>第二次接触抗原</Hl>开始上升
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
