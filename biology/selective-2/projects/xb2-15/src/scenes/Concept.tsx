import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cc1, cc2, cc3, cc4} = t.cue;

const TRAITS: [string, string][] = [
	['少消耗', C.green],
	['多效益', C.orange],
	['可持续', C.red],
];

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">生态工程的概念</Header>
		<Appear at={cc1.from} style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Card style={{fontSize: 30, fontWeight: 700, lineHeight: 1.6}}>
				应用<Hl c={C.orange}>生态学和系统学</Hl>等原理和方法，对人工生态系统进行分析、设计和调控，或对被破坏的生态环境进行<Hl c={C.orange}>修复、重建</Hl>
			</Card>
		</Appear>
		<Appear at={cc2.from} style={{position: 'absolute', left: 90, top: 345, fontSize: 31, fontWeight: 800}}>
			目的：促进人类社会与自然环境<Hl c={C.green}>和谐发展</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 420, display: 'flex', gap: 28}}>
			{TRAITS.map(([s, c], i) => (
				<Appear key={s} at={cc3.from + i * 15}>
					<div style={{border: `6px solid ${c}`, color: c, borderRadius: 22, padding: '16px 40px', fontSize: 46, fontWeight: 900}}>{s}</div>
				</Appear>
			))}
		</div>
		<Appear at={cc4.from} style={{position: 'absolute', left: 90, right: 90, top: 590}}>
			<Callout label="考法" style={{fontSize: 30}}>
				特点：<Hl>少消耗、多效益、可持续</Hl>；四个基本原理：<Hl c={C.orange}>自生、循环、协调、整体</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
