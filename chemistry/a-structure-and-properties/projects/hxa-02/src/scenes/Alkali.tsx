import React from 'react';
import {Hl} from '../components/ui';
import {Chain, Table} from '../components/kit';
import {Big, Board, Col, Mark, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.alkali;
const {ak1, ak2, ak3, ak4, ak4b, ak5} = t.cue;
const n = (x: number) => <span>{x}</span>;

export const Alkali: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="碱金属的结构与化学性质"
		callout={{label: '易错', at: ak5.from, text: <>Li 与 O<sub>2</sub> 只生成 <Hl>Li<sub>2</sub>O</Hl>；Na 放入 CuSO<sub>4</sub> 溶液<Hl>先与水反应</Hl>，置换不出 Cu</>}}
		overlay={
			<AnimeBeat k="bomb" from={ak4b.from} to={ak4b.to}>
				越往下的碱金属{'\n'}遇水反应<span style={{color: C.red}}>越猛烈</span>！
			</AnimeBeat>
		}
	>
		<Row gap={30}>
			<Col width={700}>
				<Table
					head={['元素', '核电荷数', '电子层数', '最外层']}
					cols="1fr 1.2fr 1.2fr 1fr"
					at={ak1.from}
					fontSize={30}
					rowHeight={58}
					rows={[
						{cells: ['Li 锂', n(3), n(2), <Hl>1</Hl>], at: ak1.from},
						{cells: ['Na 钠', n(11), n(3), <Hl>1</Hl>], at: ak1.from + 6},
						{cells: ['K 钾', n(19), n(4), <Hl>1</Hl>], at: ak1.from + 12},
						{cells: ['Rb 铷', n(37), n(5), <Hl>1</Hl>], at: ak1.from + 18},
						{cells: ['Cs 铯', n(55), n(6), <Hl>1</Hl>], at: ak1.from + 24},
					]}
				/>
			</Col>
			<Col gap={18}>
				<Big at={ak2.from} size={36}>
					{chem('2M + 2H2O = 2MOH + H2↑')}
				</Big>
				<Mark ok at={ak4.from} size={28}>K 比 Na 更活泼：浮在水面、熔成小球，有<Hl>轻微爆炸声</Hl></Mark>
				<Mark ok at={ak4.from + 30} size={28}>K 在空气中燃烧：生成比过氧化物<Hl>更复杂</Hl>的氧化物</Mark>
			</Col>
		</Row>
		<Chain
			fontSize={30}
			gap={8}
			steps={[
				{label: '层数增多', at: ak3.from},
				{label: '半径增大', at: ak3.from + 12},
				{label: '核吸引减弱', at: ak3.from + 24},
				{label: '失电子更易', color: C.red, at: ak3.from + 36},
			]}
		/>
	</Board>
);
