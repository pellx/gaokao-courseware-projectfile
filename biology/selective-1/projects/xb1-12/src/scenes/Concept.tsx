import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cn1, cn2, cn3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const KINDS: [string, boolean][] = [
	['激素（主要）', true],
	['组胺', false],
	['气体分子（如NO）', false],
	['CO₂等代谢产物', false],
];

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">体液调节的概念</Header>
		<Appear at={cn1.from} style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Card style={{fontSize: 34, lineHeight: 1.6}}>
				激素等化学物质，通过<Hl>体液传送</Hl>的方式对生命活动进行调节 → <Hl>体液调节</Hl>
			</Card>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 340, display: 'flex', gap: 20}}>
			{KINDS.map(([k, main], i) => (
				<Appear key={k} at={at(cn2.from, cn2.to, 0.05 + i * 0.2)} style={{flex: 1}}>
					<div style={{border: `4px solid ${C.orange}`, borderRadius: 18, padding: '16px 0', textAlign: 'center', fontSize: 32, fontWeight: 900, color: C.orange, background: main ? C.orangeSoft : '#fff'}}>{k}</div>
				</Appear>
			))}
		</div>
		<div style={{position: 'absolute', left: 90, top: 500}}>
			<Chain
				fontSize={32}
				gap={12}
				steps={[
					{label: '血液中CO₂浓度升高', color: C.orange, at: cn3.from},
					{label: '刺激呼吸中枢', at: cn3.from + 20},
					{label: '呼吸加深加快', color: C.green, at: cn3.from + 40},
				]}
			/>
		</div>
		<Appear at={at(cn3.from, cn3.to, 0.6)} style={{position: 'absolute', left: 90, right: 90, top: 660}}>
			<Callout label="考法" style={{fontSize: 30}}>
				临床输氧时常混入约<Hl>5%的CO₂</Hl>，目的是<Hl c={C.green}>刺激呼吸中枢</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
