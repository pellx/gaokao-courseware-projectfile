import React from 'react';
import {Defs, Hl} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Board, Col, Row, Rule} from '../components/board';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.aufbau;
const {au1, au2, au3, au4, au5} = t.cue;
const ROWS = [['1s'], ['2s', '2p'], ['3s', '3p', '3d'], ['4s', '4p', '4d', '4f'], ['5s', '5p', '5d'], ['6s', '6p'], ['7s']];
// 对角线：起点 (n, l) 的 l 从 0 开始；每条对角线 n + l 相同。
const X = (l: number) => 80 + l * 110;
const Y = (n: number) => 40 + (n - 1) * 62;

const Diag: React.FC = () => (
	<svg width={560} height={480} viewBox="0 0 560 480">
		<Defs />
		<G at={au1.from}>
			{ROWS.map((r, i) =>
				r.map((lv, l) => (
					<text key={lv} x={X(l)} y={Y(i + 1) + 12} fontSize={34} fontWeight={900} fill={lv === '4s' || lv === '3d' ? C.red : C.text} textAnchor="middle">
						{lv}
					</text>
				)),
			)}
		</G>
		<G at={au4.from}>
			{[1, 2, 3, 4, 5, 6, 7].map((k) => {
				// 对角线从 (l = 0, n = ceil) 斜向左下
				const lMax = Math.floor((k - 1) / 2);
				const nTop = k - lMax;
				const x1 = X(lMax) + 34;
				const y1 = Y(nTop) - 14;
				const x2 = X(0) - 34;
				const y2 = Y(nTop + lMax) + 26;
				return <Arrow key={k} x1={x1} y1={y1} x2={x2} y2={y2} color={C.orange} marker="arrow-orange" width={3} />;
			})}
		</G>
	</svg>
);

export const Aufbau: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="构造原理与能级交错"
		callout={{label: '易错', at: au5.from, text: <>构造原理是<Hl>填电子的顺序</Hl>；书写按<Hl c={C.orange}>能层顺序</Hl>：Fe 写 …{ec('3d6 4s2')}，不写 …{ec('4s2 3d6')}</>}}
	>
		<Row gap={40} align="center">
			<Diag />
			<Col gap={16}>
				<Rule tag="顺序" color={C.red} at={au2.from}>1s 2s 2p 3s 3p <Hl>4s 3d</Hl> 4p 5s 4d 5p 6s 4f 5d 6p</Rule>
				<Rule tag="交错" color={C.orange} at={au3.from}><Hl>4s 先于 3d</Hl>，5s 先于 4d</Rule>
				<Rule tag="记法" color={C.green} at={au4.from}>斜线法：沿对角线从右上往左下读</Rule>
			</Col>
		</Row>
	</Board>
);
