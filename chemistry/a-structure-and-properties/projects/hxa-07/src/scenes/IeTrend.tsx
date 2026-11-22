import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Row, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ietrend;
const {it1, it2, it3, it4} = t.cue;
export const IE1: [string, number][] = [
	['H', 1312], ['He', 2372], ['Li', 520], ['Be', 900], ['B', 801], ['C', 1086], ['N', 1402], ['O', 1314], ['F', 1681], ['Ne', 2081],
	['Na', 496], ['Mg', 738], ['Al', 578], ['Si', 787], ['P', 1012], ['S', 1000], ['Cl', 1251], ['Ar', 1521], ['K', 419], ['Ca', 590],
];
const W = 980;
const H = 470;
const X = (i: number) => 70 + i * ((W - 100) / 19);
const Y = (v: number) => H - 50 - (v / 2500) * (H - 90);

export const IeChart: React.FC<{at: number; hl?: number[]; hlAt?: number}> = ({at, hl = [], hlAt = 0}) => (
	<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
		<G at={at}>
			<line x1={50} y1={H - 50} x2={W - 10} y2={H - 50} stroke={C.muted} strokeWidth={3} />
			<line x1={50} y1={H - 50} x2={50} y2={20} stroke={C.muted} strokeWidth={3} />
			<text x={60} y={30} fontSize={22} fontWeight={700} fill={C.muted}>第一电离能（kJ/mol）</text>
			<polyline points={IE1.map(([, v], i) => `${X(i)},${Y(v)}`).join(' ')} fill="none" stroke={C.orange} strokeWidth={4} />
			{IE1.map(([s, v], i) => (
				<g key={s}>
					<circle cx={X(i)} cy={Y(v)} r={7} fill={['He', 'Ne', 'Ar'].includes(s) ? C.red : ['Li', 'Na', 'K'].includes(s) ? C.green : C.orange} />
					<text x={X(i)} y={H - 20} fontSize={22} fontWeight={800} fill={C.text} textAnchor="middle">{s}</text>
				</g>
			))}
		</G>
		{hl.length > 0 && (
			<G at={hlAt}>
				{hl.map((i) => (
					<circle key={i} cx={X(i)} cy={Y(IE1[i][1])} r={20} fill="none" stroke={C.red} strokeWidth={4} />
				))}
			</G>
		)}
	</svg>
);

export const IeTrend: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="第一电离能的递变"
		callout={{label: '考法', at: it4.from, text: <>比较 I<sub>1</sub>：先看<Hl>位置</Hl>（同周期 / 同主族），再看有没有<Hl>反常</Hl></>}}
	>
		<Row gap={24} align="center">
			<IeChart at={it1.from} />
			<Col gap={14}>
				<Rule tag="同周期 →" color={C.red} at={it1.from} size={28}><Hl>总体增大</Hl>：碱金属最小，稀有气体最大</Rule>
				<Rule tag="同主族 ↓" color={C.orange} at={it2.from} size={28}>逐渐<Hl c={C.orange}>减小</Hl>：半径增大，吸引减弱</Rule>
				<Rule tag="碱金属" color={C.green} at={it3.from} size={28}>Li → Cs 越来越小，越来越活泼</Rule>
			</Col>
		</Row>
	</Board>
);
