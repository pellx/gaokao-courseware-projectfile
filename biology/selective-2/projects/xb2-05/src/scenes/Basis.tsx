import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.basis;
const {bs1, bs2, bs3, bs4} = t.cue;

const TYPES: [string, string, string][] = [
	['荒漠', C.orange, '物种少、结构非常简单'],
	['草原', C.gold, '种类较少、结构相对简单'],
	['森林', C.green, '结构非常复杂且相对稳定'],
];

export const Basis: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">群落类型的划分</Header>
		<Appear at={bs1.from} style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Card style={{fontSize: 31, fontWeight: 700}}>
				划分依据：群落的<Hl>外貌和物种组成</Hl>等方面的差异 → 陆地群落：荒漠、草原、森林等
			</Card>
		</Appear>
		<Appear at={bs2.from} style={{position: 'absolute', left: 90, right: 90, top: 300}}>
			<div style={{height: 22, borderRadius: 11, background: `linear-gradient(90deg, ${C.orange}, ${C.gold}, ${C.green})`}} />
			<div style={{display: 'flex', justifyContent: 'space-between', fontSize: 28, fontWeight: 800, marginTop: 8}}>
				<span style={{color: C.orange}}>干旱</span>
				<span style={{color: C.muted}}>水分（降水量）、温度</span>
				<span style={{color: C.green}}>湿润</span>
			</div>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 400, display: 'flex', gap: 28}}>
			{TYPES.map(([name, color, note], i) => (
				<Appear key={name} at={bs3.from + i * 18} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, padding: '20px 26px', background: '#fff'}}>
						<div style={{fontSize: 46, fontWeight: 900, color}}>{name}</div>
						<div style={{fontSize: 28, fontWeight: 700, marginTop: 8}}>{note}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={bs4.from} style={{position: 'absolute', left: 90, right: 90, top: 650}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				判断群落类型：先看<Hl>水分</Hl>，再看物种多少、结构是否复杂
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
