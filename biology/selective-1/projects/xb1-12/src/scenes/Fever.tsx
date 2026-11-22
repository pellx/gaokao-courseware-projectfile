import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Chart} from './Chart';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fever;
const {fv1, fv2, fv3, fv4, fv5} = t.cue;

const r = (s: string, color: string) => <span style={{color, fontWeight: 900}}>{s}</span>;

export const Fever: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点十">发热时的产热与散热</Header>
		<Appear at={fv1.from} style={{position: 'absolute', left: 70, top: 170}}>
			<Chart
				xLabel="时间"
				yLabel="体温/℃"
				ticks={[[0, '']]}
				bands={[
					[0.15, 0.38, '上升期', C.red, fv2.from],
					[0.38, 0.68, '持续期', C.orange, fv3.from],
					[0.68, 0.9, '下降期', C.green, fv4.from],
				]}
				lines={[
					['37 ℃', C.muted, [[0, 0.25], [1, 0.25]], fv1.from, [0.05, 0.3], true],
					['体温', C.red, [[0, 0.25], [0.15, 0.25], [0.38, 0.78], [0.68, 0.78], [0.9, 0.25], [1, 0.25]], fv1.from + 20, [0.53, 0.66]],
				]}
			/>
		</Appear>
		<div style={{position: 'absolute', left: 950, right: 90, top: 190}}>
			<Table
				head={['阶段', '产热与散热']}
				cols="1fr 1.4fr"
				at={fv2.from - 10}
				fontSize={32}
				rowHeight={86}
				rows={[
					{cells: [r('体温上升期', C.red), <span key="a">产热 <Hl>＞</Hl> 散热</span>], at: fv2.from},
					{cells: [r('高温持续期', C.orange), <span key="b">产热 <Hl c={C.orange}>＝</Hl> 散热</span>], at: fv3.from},
					{cells: [r('体温下降期', C.green), <span key="c">产热 <Hl c={C.green}>＜</Hl> 散热</span>], at: fv4.from},
				]}
			/>
		</div>
		<Appear at={fv5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				看体温的变化方向：升 → 产热＞散热；稳 → <Hl>相等</Hl>；降 → 产热＜散热。体温稳定（无论高低），产热都等于散热
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
