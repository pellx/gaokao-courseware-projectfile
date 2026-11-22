import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Row, Rule} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.en;
const {en1, en2, en3, en3b, en4} = t.cue;
const EN: [string, string][][] = [
	[['Li', '1.0'], ['Be', '1.5'], ['B', '2.0'], ['C', '2.5'], ['N', '3.0'], ['O', '3.5'], ['F', '4.0']],
	[['Na', '0.9'], ['Mg', '1.2'], ['Al', '1.5'], ['Si', '1.8'], ['P', '2.1'], ['S', '2.5'], ['Cl', '3.0']],
	[['K', '0.8'], ['Ca', '1.0'], ['Ga', '1.6'], ['Ge', '1.8'], ['As', '2.0'], ['Se', '2.4'], ['Br', '2.8']],
];
const S = 116;
const heat = (v: number) => {
	const k = (v - 0.7) / 3.3;
	return `rgba(214, 64, 47, ${0.08 + k * 0.75})`;
};

const Grid: React.FC = () => (
	<svg width={7 * S + 10} height={3 * S + 10} viewBox={`0 0 ${7 * S + 10} ${3 * S + 10}`}>
		<G at={en2.from}>
			{EN.map((r, i) =>
				r.map(([s, v], j) => (
					<g key={s}>
						<rect x={5 + j * S} y={5 + i * S} width={S - 8} height={S - 8} rx={12} fill={heat(+v)} stroke={s === 'F' ? C.red : C.line} strokeWidth={s === 'F' ? 5 : 2} />
						<text x={5 + j * S + (S - 8) / 2} y={5 + i * S + 46} fontSize={32} fontWeight={900} fill={+v > 2.6 ? '#fff' : C.text} textAnchor="middle">{s}</text>
						<text x={5 + j * S + (S - 8) / 2} y={5 + i * S + 88} fontSize={30} fontWeight={800} fill={+v > 2.6 ? '#fff' : C.muted} textAnchor="middle">{v}</text>
					</g>
				)),
			)}
		</G>
	</svg>
);

export const En: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="电负性"
		callout={{label: '易错', at: en4.from, text: <>电负性大的元素在化合物中显<Hl>负价</Hl>；稀有气体一般不讨论电负性</>}}
		overlay={
			<AnimeBeat k="pull" from={en3b.from} to={en3b.to}>
				电负性 = <span style={{color: C.red}}>拉电子的力气</span>{'\n'}力气大的一方{'\n'}把共用电子拉过去
			</AnimeBeat>
		}
	>
		<Rule tag="定义" color={C.red} at={en1.from} size={32}>原子对<Hl>键合电子</Hl>吸引力的大小，越大吸引力越强</Rule>
		<Row gap={30} align="center">
			<Grid />
			<Col gap={14}>
				<Rule tag="标准" color={C.brown} at={en2.from} size={28}>鲍林：F = <Hl>4.0</Hl>，Li = 1.0</Rule>
				<Rule tag="同周期 →" color={C.red} at={en3.from} size={28}>逐渐<Hl>增大</Hl></Rule>
				<Rule tag="同主族 ↓" color={C.orange} at={en3.from + 30} size={28}>逐渐<Hl c={C.orange}>减小</Hl></Rule>
				<Rule tag="最值" color={C.green} at={en3.from + 60} size={28}>F 最大，Cs 最小</Rule>
			</Col>
		</Row>
	</Board>
);
