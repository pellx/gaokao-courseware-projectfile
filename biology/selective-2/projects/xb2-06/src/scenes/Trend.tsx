import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.trend;
const {tr1, tr2, tr3, tr4} = t.cue;

const rise = (k: number, m: number) => (x: number) => 0.85 / (1 + Math.exp(-k * (x - m)));

export const Trend: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">演替的趋势</Header>
		<div style={{position: 'absolute', left: 80, top: 175}}>
			<Plot
				id="tr"
				w={900}
				h={460}
				xLabel="演替时间"
				yLabel="相对值"
				at={tr1.from}
				curves={[
					{pts: sample(rise(9, 0.35)), color: C.green, at: tr1.from, label: '物种丰富度', lx: 0.78, ly: 0.96},
					{pts: sample((x) => 0.8 * rise(8, 0.45)(x)), color: C.orange, at: tr2.from, label: '有机物总量、稳定性', lx: 0.75, ly: 0.45},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 1040, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 26, fontSize: 30, fontWeight: 700, lineHeight: 1.55}}>
			<Appear at={tr1.from}>
				方向：<Hl c={C.green}>物种增多、结构复杂</Hl>
			</Appear>
			<Appear at={tr2.from}>
				结果：达到与环境相适应的<Hl c={C.orange}>相对稳定状态</Hl>
			</Appear>
			<Appear at={tr3.from}>
				终点取决于<Hl>气候</Hl>等条件：干旱地区可能只到<Hl c={C.orange}>草本或灌木阶段</Hl>
			</Appear>
		</div>
		<Appear at={tr4.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				稳定后物种组成<Hl c={C.orange}>仍在变化</Hl>；演替终点<Hl>不一定是森林</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
