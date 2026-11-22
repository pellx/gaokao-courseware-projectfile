import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board, Col, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {BODY, Cell, CORNERS, EDGES, FACES} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.share;
const {sh1, sh2, sh3, sh3b, sh4, sh5, sh6} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Share: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="均摊法"
		callout={{label: '易错', at: sh6.from, text: <>1/8、1/4、1/2 只适用于<Hl>立方（平行六面体）</Hl>晶胞；六棱柱顶点 <Hl c={C.orange}>1/6</Hl>（课外）</>}}
		overlay={
			<AnimeBeat k="cake" from={sh3b.from} to={sh3b.to}>
				均摊 = <span style={{color: C.red}}>分蛋糕</span>：{'\n'}顶点那块 8 个晶胞分，{'\n'}每个只拿 1/8
			</AnimeBeat>
		}
	>
		<Row gap={30} align="center">
			<Cell
				s={260}
				at={sh1.from}
				atoms={[
					...CORNERS.map((p) => ({p, c: C.red, at: sh2.from})),
					...EDGES.slice(0, 4).map((p) => ({p, c: C.orange, at: sh2.from + 30})),
					...FACES.slice(0, 2).map((p) => ({p, c: C.green, at: sh3.from})),
					...BODY.map((p) => ({p, c: C.brown, at: sh3.from + 30})),
				]}
			/>
			<Col>
				<Table
					head={['位置', '共用晶胞数', '计入']}
					cols="1fr 1fr 1fr"
					at={sh2.from}
					fontSize={32}
					rowHeight={60}
					rows={[
						{cells: [<Hl>顶点</Hl>, n('8'), <Hl>1/8</Hl>], at: sh2.from},
						{cells: [<Hl c={C.orange}>棱</Hl>, n('4'), <Hl c={C.orange}>1/4</Hl>], at: sh2.from + 30},
						{cells: [<Hl c={C.green}>面</Hl>, n('2'), <Hl c={C.green}>1/2</Hl>], at: sh3.from},
						{cells: [<Hl c={C.brown}>体内</Hl>, n('1'), <Hl c={C.brown}>1</Hl>], at: sh3.from + 30},
						{cells: ['六棱柱顶点（课外）', n('6'), n('1/6')], at: sh5.from},
					]}
				/>
			</Col>
		</Row>
		<Big at={sh4.from} size={36}>铜（面心立方）：8 × 1/8 + 6 × 1/2 = <Hl>4</Hl> 个 Cu</Big>
	</Board>
);
