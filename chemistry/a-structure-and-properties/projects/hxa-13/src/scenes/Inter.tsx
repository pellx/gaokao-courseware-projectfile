import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.inter;
const {it1, it2, it3, it4} = t.cue;
// 氢化物沸点（℃），第 2～5 周期
const SER: {name: string; c: string; v: number[]; f: string[]}[] = [
	{name: 'ⅣA', c: C.muted, v: [-161, -112, -88, -52], f: ['CH4', 'SiH4', 'GeH4', 'SnH4']},
	{name: 'ⅤA', c: C.green, v: [-33, -88, -62, -17], f: ['NH3', 'PH3', 'AsH3', 'SbH3']},
	{name: 'ⅥA', c: C.red, v: [100, -60, -41, -2], f: ['H2O', 'H2S', 'H2Se', 'H2Te']},
	{name: 'ⅦA', c: C.orange, v: [20, -85, -67, -35], f: ['HF', 'HCl', 'HBr', 'HI']},
];
const W = 720;
const H = 460;
const X = (i: number) => 120 + i * 170;
const Y = (v: number) => 40 + ((110 - v) / 290) * (H - 110);

const Chart: React.FC = () => (
	<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
		<G at={it1.from}>
			<line x1={70} y1={H - 60} x2={W - 20} y2={H - 60} stroke={C.muted} strokeWidth={3} />
			<line x1={70} y1={H - 60} x2={70} y2={20} stroke={C.muted} strokeWidth={3} />
			<text x={W - 20} y={30} fontSize={22} fontWeight={700} fill={C.muted} textAnchor="end">沸点 / ℃</text>
			{SER.map((s, i) => (
				<text key={s.name} x={W - 20 - (3 - i) * 70} y={62} fontSize={24} fontWeight={900} fill={s.c} textAnchor="end">{s.name}</text>
			))}
			{[100, 0, -100].map((v) => (
				<g key={v}>
					<line x1={66} y1={Y(v)} x2={W - 20} y2={Y(v)} stroke={C.line} strokeWidth={2} />
					<text x={60} y={Y(v) + 8} fontSize={22} fill={C.muted} textAnchor="end">{v}</text>
				</g>
			))}
			{['2', '3', '4', '5'].map((p, i) => (
				<text key={p} x={X(i)} y={H - 28} fontSize={24} fontWeight={800} fill={C.text} textAnchor="middle">第{p}周期</text>
			))}
			{SER.map((s) => (
				<g key={s.name}>
					<polyline points={s.v.map((v, i) => `${X(i)},${Y(v)}`).join(' ')} fill="none" stroke={s.c} strokeWidth={4} />
					{s.v.map((v, i) => <circle key={i} cx={X(i)} cy={Y(v)} r={8} fill={s.c} />)}

				</g>
			))}
			{SER.slice(1).map((s) => (
				<text key={s.f[0]} x={X(0) + 18} y={Y(s.v[0]) + (s.f[0] === 'NH3' ? 30 : -8)} fontSize={26} fontWeight={900} fill={s.c}>
					{svgChem(s.f[0], 26)}
				</text>
			))}
		</G>
	</svg>
);

export const Inter: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="分子间氢键使熔沸点升高"
		callout={{label: '考法', at: it4.from, text: <>H<sub>2</sub>O 沸点为何比 H<sub>2</sub>S 高？—— <Hl>H<sub>2</sub>O 分子间存在氢键</Hl></>}}
	>
		<Row gap={30} align="center">
			<Chart />
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: it1.from, node: <>H<sub>2</sub>O、HF、NH<sub>3</sub> 沸点<Hl>反常地高</Hl></>},
						{at: it2.from, node: <>ⅥA：H<sub>2</sub>S → H<sub>2</sub>Te 随相对分子质量升高，<Hl>H<sub>2</sub>O 最高</Hl></>},
						{at: it3.from, node: <>NH<sub>3</sub> <Hl c={C.orange}>易液化</Hl>，液氨作制冷剂</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
