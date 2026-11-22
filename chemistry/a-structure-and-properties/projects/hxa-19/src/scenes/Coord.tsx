import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {Cell, V3} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.coord;
const {co1, co2, co2b, co3, co4} = t.cue;
const O: V3 = [0, 0, 0];

export const Coord: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="原子分数坐标（课本外）"
		callout={{label: '易错', at: co4.from, text: <>坐标是<Hl>分数</Hl>不是长度；顶点原子通常只写原点 (0, 0, 0) 代表</>}}
		overlay={
			<AnimeBeat k="chess" from={co2b.from} to={co2b.to}>
				坐标像<span style={{color: C.red}}>棋盘格</span>：{'\n'}定好原点和方向，{'\n'}每个位置都有“门牌号”
			</AnimeBeat>
		}
	>
		<Row gap={30} align="center">
			<Cell
				s={300}
				at={co1.from}
				lines={[
					{a: O, b: [1.25, 0, 0], c: C.red, w: 4, at: co1.from},
					{a: O, b: [0, 1.25, 0], c: C.green, w: 4, at: co1.from},
					{a: O, b: [0, 0, 1.25], c: C.orange, w: 4, at: co1.from},
				]}
				atoms={[
					{p: O, c: C.text, r: 14, at: co2.from},
					{p: [0.5, 0.5, 0.5], c: C.red, r: 18, at: co2.from + 30},
					{p: [0.5, 0.5, 0], c: C.orange, r: 14, at: co3.from},
					{p: [0.5, 0, 0.5], c: C.orange, r: 14, at: co3.from + 20},
					{p: [0.5, 0, 0], c: C.green, r: 12, at: co3.from + 40},
				]}
			/>
			<Col>
				<Items
					size={32}
					gap={14}
					items={[
						{at: co1.from, node: <>顶点为原点，<Hl>晶胞边长 = 1</Hl>，写 (x, y, z)</>},
						{at: co2.from, node: <>每个值在 <Hl c={C.orange}>0～1</Hl> 之间；原点 (0, 0, 0)</>},
						{at: co2.from + 30, node: <>体心：<Hl>(1/2, 1/2, 1/2)</Hl></>},
						{at: co3.from, node: <>底面心 (1/2, 1/2, 0)；前面心 (1/2, 0, 1/2)</>},
						{at: co3.from + 40, node: <>棱心：(1/2, 0, 0)</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
