import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {Cell, CORNERS} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.unitcell;
const {uc1, uc2, uc2b, uc3, uc4} = t.cue;

export const UnitCell: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="晶胞"
		callout={{label: '易错', at: uc4.from, text: <>不同晶体的晶胞大小、形状<Hl>可以不同</Hl>；同一晶体的所有晶胞<Hl c={C.orange}>完全相同</Hl></>}}
		overlay={
			<AnimeBeat k="box" from={uc2b.from} to={uc2b.to}>
				晶胞 = 装粒子的<span style={{color: C.red}}>小纸箱</span>：{'\n'}整整齐齐摞起来、{'\n'}不留空 → 整块晶体
			</AnimeBeat>
		}
	>
		<Row gap={40} align="center">
			<Cell s={300} at={uc1.from} atoms={CORNERS.map((p) => ({p, c: C.red}))} />
			<Col>
				<Items
					size={34}
					gap={18}
					items={[
						{at: uc1.from, node: <>晶胞：描述晶体结构的<Hl>基本单元</Hl>，常规是<Hl c={C.orange}>平行六面体</Hl></>},
						{at: uc2.from, node: <><Hl>无隙并置</Hl>：相邻晶胞无间隙、平行排列、取向相同</>},
						{at: uc3.from, node: <>顶点、棱、面上的粒子被<Hl c={C.orange}>相邻晶胞共用</Hl></>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
