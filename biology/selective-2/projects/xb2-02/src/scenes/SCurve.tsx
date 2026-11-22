import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.scurve;
const {sc1, sc2, sc3, sc4, sc5} = t.cue;

// Logistic curve reaching K = 0.8 (data space), inflection at x = 0.4.
export const logistic = (x: number) => 0.8 / (1 + Math.exp(-12 * (x - 0.4)));

export const SCurve: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">“S”形增长与环境容纳量</Header>
		<div style={{position: 'absolute', left: 90, top: 180}}>
			<Plot
				id="sc"
				w={760}
				h={480}
				xLabel="时间"
				yLabel="种群数量"
				at={sc1.from}
				curves={[
					{pts: sample((x) => 0.0065 * Math.exp(12 * x), 0, 0.42), color: C.muted, dash: true, width: 5, at: sc1.from, label: '“J”形', lx: 0.25, ly: 0.9},
					{pts: sample(logistic), color: C.green, at: sc3.from, dur: 50, label: '“S”形', lx: 0.86, ly: 0.7},
				]}
				hrefs={[{y: 0.8, label: 'K', color: C.red, at: sc4.from}]}
			/>
		</div>
		<Appear at={sc2.from} style={{position: 'absolute', left: 428, top: 330, width: 48, fontSize: 24, lineHeight: 1.15, fontWeight: 900, color: C.orange, textAlign: 'center'}}>
			环境阻力
		</Appear>
		<div style={{position: 'absolute', left: 910, right: 60, top: 190, display: 'flex', flexDirection: 'column', gap: 26}}>
			<Appear at={sc1.from} style={{fontSize: 30, fontWeight: 800}}>
				资源和空间<Hl c={C.orange}>有限</Hl>
			</Appear>
			<Chain fontSize={27} gap={10} steps={[{label: '密度增大', at: sc2.from}, {label: '种内竞争加剧、天敌增多', color: C.red, at: sc2.from + 20}]} />
			<Chain fontSize={27} gap={10} steps={[{label: '出生率↓ 死亡率↑', color: C.red, at: sc3.from}, {label: '出生率 = 死亡率', at: sc3.from + 20}, {label: '稳定', color: C.green, at: sc3.from + 40}]} />
			<Appear at={sc4.from} style={{fontSize: 30, fontWeight: 700, lineHeight: 1.5, background: C.redSoft, borderRadius: 16, padding: '14px 22px'}}>
				<Hl>K值（环境容纳量）</Hl>：一定的环境条件所能维持的种群最大数量
			</Appear>
		</div>
		<Appear at={sc5.from} style={{position: 'absolute', left: 90, right: 90, top: 705}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				K值<Hl>随环境改变</Hl>：环境破坏 K↓，环境改善 K↑；达到K值后在K值附近<Hl c={C.orange}>上下波动</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
