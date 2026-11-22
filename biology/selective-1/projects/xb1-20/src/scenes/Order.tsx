import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chart} from './Chart';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.order;
const {od1, od2, od3, od4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// A bell-shaped peak centred at c.
const peak = (c: number, h: number): [number, number][] =>
	Array.from({length: 21}, (_, i) => {
		const x = i / 20;
		return [x, 0.05 + h * Math.exp(-((x - c) ** 2) / 0.012)];
	});

export const Order: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点九">激素调节的顺序性</Header>
		<Appear at={od1.from} style={{position: 'absolute', left: 70, top: 175}}>
			<Chart
				xLabel="时间"
				yLabel="激素含量"
				ticks={[[0.15, '分裂期'], [0.5, '伸长期'], [0.8, '成熟期']]}
				lines={[
					['细胞分裂素', C.orange, peak(0.15, 0.75), at(od2.from, od2.to, 0.2), [0.15, 0.92]],
					['生长素', C.red, peak(0.38, 0.7), at(od2.from, od2.to, 0.35), [0.38, 0.88]],
					['赤霉素', C.green, peak(0.6, 0.65), at(od2.from, od2.to, 0.5), [0.6, 0.83]],
					['脱落酸', C.brown, peak(0.85, 0.75), at(od2.from, od2.to, 0.65), [0.85, 0.92]],
				]}
			/>
		</Appear>
		<div style={{position: 'absolute', left: 950, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={od2.from}>猕猴桃果实发育：各激素<Hl>按次序</Hl>出现高峰，像接力一样</Appear>
			<Appear at={od3.from}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 20, padding: '16px 24px', background: C.greenSoft, fontWeight: 800}}>
					不是单一激素调节，而是<Hl c={C.green}>多种激素相互作用、共同调节</Hl>
				</div>
			</Appear>
		</div>
		<Appear at={od4.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="考法" style={{fontSize: 30}}>
				先找各激素<Hl c={C.orange}>出现高峰的时间</Hl>，再联系该时期果实在分裂、伸长还是成熟
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
