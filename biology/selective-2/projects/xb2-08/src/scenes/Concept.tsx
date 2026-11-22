import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {co1, co2, co3, co4, co5} = t.cue;

const STEPS: [string, string, React.ReactNode, number][] = [
	['输入', C.green, <>生产者<Hl>固定</Hl>的太阳能总量<br /><span style={{color: C.muted, fontSize: 26}}>（人工生态系统 + 人工输入的有机物）</span></>, co2.from],
	['传递', C.orange, <>沿食物链、食物网<br />以<Hl c={C.orange}>有机物中的化学能</Hl>形式</>, co3.from],
	['转化', C.gold, <>太阳能 → 化学能 → 热能</>, co4.from],
	['散失', C.red, <>以<Hl>热能</Hl>形式<br />通过呼吸作用散失</>, co4.from + 30],
];

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">能量流动的概念</Header>
		<Appear at={co1.from} style={{position: 'absolute', left: 90, right: 90, top: 170, fontSize: 31, fontWeight: 700}}>
			能量流动：生态系统中能量的<Hl>输入、传递、转化和散失</Hl>的过程
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 240, display: 'flex', gap: 22}}>
			{STEPS.map(([head, color, body, at]) => (
				<Appear key={head} at={at} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 22, padding: '18px 22px', height: 270, boxSizing: 'border-box', background: '#fff'}}>
						<div style={{fontSize: 44, fontWeight: 900, color}}>{head}</div>
						<div style={{fontSize: 29, fontWeight: 700, marginTop: 14, lineHeight: 1.55}}>{body}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={co5.from} style={{position: 'absolute', left: 90, right: 90, top: 570}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				总能量是生产者<Hl>固定</Hl>的太阳能，不是照射到生产者上的太阳能，也不是生产者<Hl>积累</Hl>的能量
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
