import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.traps;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

const CARDS: [string, React.ReactNode, number][] = [
	['植物 ≠ 生产者', <>菟丝子：寄生 → <Hl>消费者</Hl></>, tp2.from],
	['动物 ≠ 消费者', <>蚯蚓、蜣螂：吃腐殖质、粪便 → <Hl c={C.brown}>分解者</Hl></>, tp3.from],
	['细菌 ≠ 分解者', <>硝化细菌：化能合成 → <Hl c={C.green}>生产者</Hl><br />寄生细菌 → <Hl>消费者</Hl></>, tp4.from],
];

export const Traps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">成分判断的三个“不一定”</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 26}}>
			{CARDS.map(([head, body, at]) => (
				<Appear key={head} at={Math.max(at, tp1.from)} style={{flex: 1}}>
					<div style={{border: `5px solid ${C.red}`, borderRadius: 24, padding: '22px 26px', height: 280, boxSizing: 'border-box', background: '#fff'}}>
						<div style={{fontSize: 40, fontWeight: 900, color: C.red}}>{head}</div>
						<div style={{fontSize: 30, fontWeight: 700, marginTop: 18, lineHeight: 1.6}}>{body}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={tp5.from} style={{position: 'absolute', left: 90, right: 90, top: 540}}>
			<Callout label="解题方法" style={{fontSize: 31}}>
				只看<Hl>营养方式</Hl>：自己合成有机物 → 生产者；以<Hl c={C.orange}>活的生物</Hl>为食 → 消费者；以<Hl c={C.brown}>遗体、排遗物</Hl>为食 → 分解者
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
