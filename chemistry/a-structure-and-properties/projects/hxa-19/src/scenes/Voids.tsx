import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board, Col, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {BODY, Cell, CORNERS, EDGES, FACES, TETRA_ALL} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.voids;
const {vd1, vd1b, vd2, vd3, vd4} = t.cue;

export const Voids: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="四面体空隙与八面体空隙（课本外）"
		callout={{label: '考法', at: vd4.from, text: <>某原子填在<Hl>哪种空隙</Hl>、填充率多少、配位多面体是什么形状</>}}
		overlay={
			<AnimeBeat k="hide" from={vd1b.from} to={vd1b.to}>
				空隙像纸箱里的<span style={{color: C.red}}>空位</span>：{'\n'}别的原子可以“躲”进去
			</AnimeBeat>
		}
	>
		<Row gap={30} align="center">
			<Cell
				s={280}
				at={vd1.from}
				atoms={[
					...[...CORNERS, ...FACES].map((p) => ({p, c: C.muted, r: 15})),
					...TETRA_ALL.map((p) => ({p, c: C.red, r: 11, at: vd2.from})),
					...[...BODY, ...EDGES].map((p) => ({p, c: C.orange, r: 11, at: vd2.from + 40})),
				]}
			/>
			<Col>
				<Table
					head={['面心立方', '围成原子数', '每晶胞个数', '位置']}
					cols="1.3fr 1fr 1fr 1.8fr"
					at={vd1.from}
					fontSize={30}
					rowHeight={62}
					rows={[
						{cells: [<Hl>四面体空隙</Hl>, <span>4</span>, <Hl>8</Hl>, '8 个小立方体体心'], at: vd2.from},
						{cells: [<Hl c={C.orange}>八面体空隙</Hl>, <span>6</span>, <Hl c={C.orange}>4</Hl>, '体心 + 12 棱心'], at: vd2.from + 40},
					]}
				/>
				<div style={{height: 16}} />
				<Table
					head={['晶体', '填充情况']}
					cols="1fr 2.6fr"
					at={vd3.from}
					fontSize={30}
					rowHeight={58}
					rows={[
						{cells: [chem('NaCl'), <>{chem('Na^+')} 填满<Hl c={C.orange}>八面体</Hl>空隙</>], at: vd3.from},
						{cells: ['ZnS', <>{chem('Zn^2+')} 填<Hl>一半</Hl>四面体空隙</>], at: vd3.from + 25},
						{cells: [chem('CaF2'), <>{chem('F^-')} 填满<Hl>全部</Hl>四面体空隙</>], at: vd3.from + 50},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
