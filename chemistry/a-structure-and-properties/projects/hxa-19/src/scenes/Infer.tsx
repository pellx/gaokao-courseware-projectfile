import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Items, Row} from '../components/board';
import {Cell, CORNERS, FACES, TETRA_ALT} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.infer;
const {in_1, in_2, in_3, in_4} = t.cue;

export const Infer: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="由已知坐标推其他原子的坐标"
		callout={{label: '解题方法', at: in_4.from, text: <>找到已知坐标的原子 → 定 x、y、z 方向 → 把目标原子<Hl>投到三个轴上读数</Hl></>}}
	>
		<Row gap={30} align="center">
			<Cell
				s={300}
				at={in_1.from}
				lines={[0.5].flatMap((m) => [
					{a: [m, 0, 0] as [number, number, number], b: [m, 1, 0] as [number, number, number], c: C.line, w: 2, dash: true, at: in_3.from},
					{a: [0, m, 0] as [number, number, number], b: [1, m, 0] as [number, number, number], c: C.line, w: 2, dash: true, at: in_3.from},
				])}
				atoms={[
					...[...CORNERS, ...FACES].map((p) => ({p, c: C.muted, r: 13})),
					...TETRA_ALT.map((p, i) => ({p, c: C.red, r: 17, at: in_2.from + i * 15})),
				]}
			/>
			<Col>
				<Items
					size={32}
					gap={14}
					items={[
						{at: in_1.from, node: <>先看已知点的位置，再用<Hl>对称性</Hl>推</>},
						{at: in_2.from, node: <>金刚石型、ZnS 型四面体空隙：<Hl>(1/4, 1/4, 1/4)</Hl></>},
						{at: in_2.from + 30, node: <>(3/4, 3/4, 1/4)、(3/4, 1/4, 3/4)、(1/4, 3/4, 3/4)</>},
						{at: in_3.from, node: <>即 8 个小立方体中<Hl c={C.orange}>交替 4 个</Hl>的体心</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
