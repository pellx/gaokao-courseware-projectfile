import React from 'react';
import {Defs, Hl} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.diag;
const {dg1, dg2, dg3, dg3b, dg4, dg5} = t.cue;
const CELL = 110;
const SY = [['Li', 'Be', 'B', 'C'], ['Na', 'Mg', 'Al', 'Si']];
const PAIRS: [number, string][] = [[0, C.red], [1, C.orange], [2, C.green]];

const Mini: React.FC = () => (
	<svg width={4 * CELL + 20} height={2 * CELL + 60} viewBox={`0 0 ${4 * CELL + 20} ${2 * CELL + 60}`}>
		<Defs />
		<G at={dg1.from}>
			{SY.map((r, i) =>
				r.map((s, j) => {
					const pair = PAIRS.find(([k]) => (i === 0 && j === k) || (i === 1 && j === k + 1));
					return (
						<g key={s}>
							<rect x={10 + j * CELL} y={10 + i * CELL} width={CELL - 8} height={CELL - 8} rx={10} fill={pair ? pair[1] + '22' : C.panel} stroke={pair ? pair[1] : C.line} strokeWidth={4} />
							<text x={10 + j * CELL + (CELL - 8) / 2} y={10 + i * CELL + 66} fontSize={42} fontWeight={900} fill={pair ? pair[1] : C.muted} textAnchor="middle">{s}</text>
						</g>
					);
				}),
			)}
		</G>
		{PAIRS.map(([k, c], i) => (
			<G key={k} at={dg2.from + i * 15}>
				<Arrow x1={10 + k * CELL + 70} y1={10 + 70} x2={10 + (k + 1) * CELL + 30} y2={10 + CELL + 30} color={c} marker={c === C.red ? 'arrow-red' : c === C.orange ? 'arrow-orange' : 'arrow-green'} width={5} />
			</G>
		))}
	</svg>
);

export const Diag: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="对角线规则"
		callout={{label: '考法', at: dg5.from, text: <>由已知元素推对角线元素的性质，如写 {chem('Be(OH)2')} 与 NaOH 反应的方程式</>}}
		overlay={
			<AnimeBeat k="alike" from={dg3b.from} to={dg3b.to}>
				不是姐妹却很像：{'\n'}对角线上的元素{'\n'}<span style={{color: C.red}}>性质相似</span>
			</AnimeBeat>
		}
	>
		<Row gap={50} align="center">
			<Mini />
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: dg1.from, node: <>某些主族元素与<Hl>右下方</Hl>元素性质相似</>},
						{at: dg2.from, node: <><Hl>Li–Mg</Hl>、<Hl c={C.orange}>Be–Al</Hl>、<Hl c={C.green}>B–Si</Hl></>},
						{at: dg3.from, node: <>Li 燃烧只生成 {chem('Li2O')}（同 Mg）</>},
						{at: dg3.from + 50, node: <>{chem('Be(OH)2')} 与 {chem('Al(OH)3')} 都是<Hl c={C.orange}>两性</Hl></>},
						{at: dg4.from, node: <>原因：<Hl>电负性相近</Hl></>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
