import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cn1, cn2, cn3} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">演替的概念</Header>
		<Appear at={cn1.from} style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Card style={{fontSize: 32, fontWeight: 700}}>
				<Hl>群落演替</Hl>：随着时间的推移，<Hl c={C.orange}>一个群落被另一个群落代替</Hl>的过程
			</Card>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 300}}>
			<Chain fontSize={34} steps={[{label: '群落甲（优势种 A）', color: C.orange, at: cn1.from + 20}, {label: '群落乙（优势种 B）', color: C.green, at: cn1.from + 50}]} arrows={['时间推移']} />
		</div>
		<Appear at={cn2.from} style={{position: 'absolute', left: 90, right: 90, top: 420, fontSize: 30, fontWeight: 700, lineHeight: 1.7}}>
			原因：<Hl c={C.orange}>环境不断变化</Hl>；生物的繁殖、迁移等活动；<Hl c={C.orange}>种内和种间关系</Hl>变化；<Hl>人类活动</Hl>干扰
		</Appear>
		<Appear at={cn3.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				演替是<Hl>优势取代</Hl>，不是“取而代之”：原来的物种<Hl c={C.orange}>不一定消失</Hl>，只是不再占优势
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
