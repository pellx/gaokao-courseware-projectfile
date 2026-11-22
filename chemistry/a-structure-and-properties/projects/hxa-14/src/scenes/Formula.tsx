import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board, Col, Row} from '../components/board';
import {BODY, Cell, CORNERS, EDGES} from '../components/sci';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.formula;
const {fm1, fm2, fm3, fm4} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Formula: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="由晶胞求化学式"
		callout={{label: '解题方法', at: fm4.from, text: <>列表：位置 × 份数 × 个数，每种粒子一行；化学式原子个数比 = <Hl>晶胞中个数比</Hl></>}}
	>
		<Big at={fm1.from} size={34}>均摊法<Hl>分别数出</Hl>每种粒子个数 → 化成最简整数比</Big>
		<Row gap={30} align="center">
			<Cell
				s={250}
				at={fm2.from}
				atoms={[
					...CORNERS.map((p) => ({p, c: C.red, label: 'A'})),
					...EDGES.map((p) => ({p, c: C.orange, r: 12})),
					...BODY.map((p) => ({p, c: C.green, label: 'B', r: 22})),
				]}
			/>
			<Col>
				<Table
					head={['粒子', '位置', '计算', '个数']}
					cols="0.8fr 1fr 1.6fr 0.8fr"
					at={fm2.from}
					fontSize={32}
					rowHeight={60}
					rows={[
						{cells: [<Hl>A</Hl>, '顶点', '8 × 1/8', n('1')], at: fm2.from},
						{cells: [<Hl c={C.green}>B</Hl>, '体心', '1 × 1', n('1')], at: fm2.from + 20},
						{cells: [<Hl c={C.orange}>C</Hl>, '棱心', '12 × 1/4', n('3')], at: fm2.from + 40},
					]}
				/>
				<Big at={fm3.from} size={36}>化学式 <Hl>{chem('ABC3')}</Hl>（钙钛矿 {chem('CaTiO3')} 型）</Big>
			</Col>
		</Row>
	</Board>
);
