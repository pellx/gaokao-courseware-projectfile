import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Row, Rule} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.radius;
const {ra1, ra2, ra3, ra4, ra4b, ra5} = t.cue;
// 主族原子半径（pm）：第 2～4 周期，ⅠA～ⅦA。
const ROWS: [string, number][][] = [
	[['Li', 152], ['Be', 111], ['B', 88], ['C', 77], ['N', 70], ['O', 66], ['F', 64]],
	[['Na', 186], ['Mg', 160], ['Al', 143], ['Si', 117], ['P', 110], ['S', 104], ['Cl', 99]],
	[['K', 227], ['Ca', 197], ['Ga', 122], ['Ge', 122], ['As', 121], ['Se', 117], ['Br', 114]],
];
const DX = 128;
const DY = 150;

const Grid: React.FC = () => (
	<svg width={7 * DX + 20} height={3 * DY + 30} viewBox={`0 0 ${7 * DX + 20} ${3 * DY + 30}`}>
		{ROWS.map((r, i) => (
			<G key={i} at={ra3.from + i * 10}>
				{r.map(([s, v], j) => {
					const x = 70 + j * DX;
					const y = 80 + i * DY;
					return (
						<g key={s}>
							<circle cx={x} cy={y} r={v * 0.27} fill={i === 2 ? C.orangeSoft : C.redSoft} stroke={i === 2 ? C.orange : C.red} strokeWidth={3} />
							<text x={x} y={y + 10} fontSize={28} fontWeight={900} fill={C.text} textAnchor="middle">{s}</text>
						</g>
					);
				})}
			</G>
		))}
	</svg>
);

export const Radius: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="原子半径的周期性"
		callout={{label: '解题方法', at: ra5.from, text: <>写清<Hl>能层数多少</Hl>，或<Hl c={C.orange}>核电荷数大小、核对外层电子的吸引力强弱</Hl></>}}
		overlay={
			<AnimeBeat k="height" from={ra4b.from} to={ra4b.to}>
				比半径像比身高：{'\n'}先看<span style={{color: C.red}}>层数</span>，{'\n'}层数相同再比<span style={{color: C.orange}}>核电荷数</span>
			</AnimeBeat>
		}
	>
		<Row gap={30} align="center">
			<Grid />
			<Col gap={14}>
				<Rule tag="两个因素" color={C.brown} at={ra1.from} size={28}>能层数 vs 核电荷数</Rule>
				<Rule tag="层数多" color={C.orange} at={ra2.from} size={28}>离核远 → 半径<Hl c={C.orange}>大</Hl></Rule>
				<Rule tag="核电荷大" color={C.red} at={ra2.from + 40} size={28}>吸引强 → 半径<Hl>小</Hl></Rule>
				<Rule tag="同周期 →" color={C.red} at={ra3.from} size={28}>逐渐<Hl>减小</Hl></Rule>
				<Rule tag="同主族 ↓" color={C.orange} at={ra4.from} size={28}>逐渐<Hl c={C.orange}>增大</Hl></Rule>
			</Col>
		</Row>
	</Board>
);
