import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.jcurve;
const {jc1, jc2, jc3, jc4} = t.cue;

const s = {fontSize: '0.6em'};

export const JCurve: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">“J”形增长</Header>
		<div style={{position: 'absolute', left: 90, top: 180}}>
			<Plot id="jc" w={720} h={480} xLabel="时间" yLabel="种群数量" at={jc1.from} curves={[{pts: sample((x) => (Math.exp(x * 4) - 1) / (Math.exp(4) - 1)), color: C.red, at: jc2.from, dur: 50, label: '“J”形', lx: 0.72, ly: 0.75}]} />
		</div>
		<div style={{position: 'absolute', left: 880, right: 90, top: 185, display: 'flex', flexDirection: 'column', gap: 22}}>
			<Appear at={jc1.from}>
				<Card style={{fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
					<Hl c={C.orange}>理想条件</Hl>：食物和空间充裕、气候适宜、没有天敌和其他竞争物种
				</Card>
			</Appear>
			<Appear at={jc2.from}>
				<Card style={{textAlign: 'center'}}>
					<div style={{fontSize: 54, fontWeight: 900, color: C.red}}>
						N<sub style={s}>t</sub> = N<sub style={s}>0</sub>λ<sup style={s}>t</sup>
					</div>
					<div style={{fontSize: 24, fontWeight: 700, color: C.muted, marginTop: 6}}>
						N<sub style={s}>0</sub>：初始数量　t：时间（年）　N<sub style={s}>t</sub>：t 年后的数量
					</div>
				</Card>
			</Appear>
			<Appear at={jc3.from}>
				<Card style={{fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
					<Hl>λ</Hl>：该种群数量是<Hl c={C.orange}>前一年种群数量的倍数</Hl>
					<br />
					λ &gt; 1 且<Hl c={C.orange}>保持不变</Hl> → “J”形
				</Card>
			</Appear>
		</div>
		<Appear at={jc4.from} style={{position: 'absolute', left: 90, right: 90, top: 705}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				增长率 = λ − 1，<Hl>保持不变</Hl>；增长速率（单位时间增加的个体数）<Hl c={C.orange}>越来越大</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
