import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {Cell, CORNERS, FACES, TETRA_ALT, V3} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.covalent;
const {cv1, cv1b, cv2, cv3, cv4, cv5} = t.cue;
const OFF: V3[] = [[-1, -1, -1], [1, 1, -1], [1, -1, 1], [-1, 1, 1]];
const BONDS = TETRA_ALT.flatMap((a) => OFF.map((o) => ({a, b: [a[0] + o[0] / 4, a[1] + o[1] / 4, a[2] + o[2] / 4] as V3})));

export const Covalent: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="共价晶体：金刚石、晶体硅、SiC"
		callout={{label: '考法', at: cv5.from, text: <>1 mol 金刚石含 <Hl>2 mol C—C 键</Hl>；12 g 金刚石含 <Hl>2N<sub>A</sub></Hl> 个共价键</>}}
		overlay={
			<AnimeBeat k="yarn" from={cv1b.from} to={cv1b.to}>
				共价晶体像<span style={{color: C.red}}>毛线网</span>：{'\n'}每个原子都被共价键{'\n'}牢牢织进去
			</AnimeBeat>
		}
	>
		<Row gap={30} align="center">
			<Cell
				s={300}
				at={cv2.from}
				lines={BONDS.map((b) => ({...b, c: C.text, w: 5}))}
				atoms={[...CORNERS.map((p) => ({p, c: C.muted, r: 14})), ...FACES.map((p) => ({p, c: C.muted, r: 14})), ...TETRA_ALT.map((p) => ({p, c: C.red, r: 16}))]}
			/>
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: cv1.from, node: <>原子间全部以<Hl>共价键</Hl>结合，空间立体网状</>},
						{at: cv2.from, node: <>C 原子 <Hl>sp<sup>3</sup></Hl>，与 4 个 C 成正四面体，109°28′</>},
						{at: cv3.from, node: <>最小环：<Hl c={C.orange}>6 元环</Hl></>},
						{at: cv3.from + 40, node: <>C 原子数 ∶ C—C 键数 = <Hl>1 ∶ 2</Hl>（4 个键 × 1/2）</>},
						{at: cv4.from, node: <>晶体硅、SiC：结构与金刚石类似</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
