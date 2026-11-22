import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.efficiency;
const {ef1, ef2, ef3, ef4} = t.cue;

const NOTES = ['用同化量，不用摄入量', '营养级之间，不是个体之间', '同一营养级的所有生物都算'];

export const Efficiency: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">传递效率的计算</Header>
		<Appear at={ef1.from} style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Card style={{textAlign: 'center', fontSize: 40, fontWeight: 900}}>
				传递效率 = <Hl>下一营养级同化量</Hl> ÷ <Hl c={C.orange}>上一营养级同化量</Hl> × 100%
			</Card>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 330}}>
			<Chain fontSize={32} steps={[{label: '生产者同化 1000 kJ', color: C.green, at: ef2.from}, {label: '初级消费者同化 150 kJ', color: C.orange, at: ef2.from + 25}, {label: '150 ÷ 1000 = 15%', color: C.red, at: ef2.from + 50}]} />
		</div>
		<div style={{position: 'absolute', left: 90, right: 90, top: 450, display: 'flex', gap: 24}}>
			{NOTES.map((n, i) => (
				<Appear key={n} at={ef3.from + i * 25} style={{flex: 1}}>
					<div style={{border: `4px solid ${C.red}`, borderRadius: 18, padding: '14px 18px', fontSize: 29, fontWeight: 800, color: C.red, textAlign: 'center'}}>{n}</div>
				</Appear>
			))}
		</div>
		<Appear at={ef4.from} style={{position: 'absolute', left: 90, right: 90, top: 580}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				题目给“摄入量”或“粪便量”时，先算出<Hl>同化量</Hl>再代入，否则结果偏大
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
