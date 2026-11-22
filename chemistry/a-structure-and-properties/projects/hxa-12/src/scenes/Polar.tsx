import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Panel, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {Geo} from './Geo';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.polar;
const {pl1, pl2, pl3b, pl4} = t.cue;

export const Polar: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="极性分子与非极性分子"
		callout={{label: '易错', at: pl4.from, text: <>极性键构成的分子<Hl>不一定</Hl>是极性分子；非极性键构成的 {chem('O3')} 却是<Hl>极性分子</Hl></>}}
		overlay={
			<AnimeBeat k="seesaw" from={pl3b.from} to={pl3b.to}>
				像<span style={{color: C.red}}>跷跷板</span>：{'\n'}两边一样重 → 平衡（非极性）{'\n'}一边重 → 翘起（极性）
			</AnimeBeat>
		}
	>
		<Panel title="看正电中心与负电中心是否重合" color={C.brown} at={pl1.from} size={32}>
			重合 → <Hl c={C.orange}>非极性分子</Hl>；不重合 → <Hl>极性分子</Hl>
		</Panel>
		<Row gap={24}>
			<Col>
				<Panel title={<>非极性：{chem('CO2')}、{chem('CH4')}、{chem('H2')}</>} color={C.orange} at={pl2.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 16}}>
						<Geo kind="linear" at={pl2.from} center="C" lig="O" n={[2, 2]} size={220} />
						<div>
							两个 C=O 极性<Hl c={C.green}>相互抵消</Hl>
							<br />
							<span style={{color: C.muted}}>直线形，对称</span>
						</div>
					</div>
				</Panel>
			</Col>
			<Col>
				<Panel title={<>极性：{chem('HCl')}、{chem('H2O')}、{chem('NH3')}</>} color={C.red} at={pl2.from + 30} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 16}}>
						<Geo kind="bent4" at={pl2.from + 30} center="O" lig="H" size={220} />
						<div>
							V 形，<Hl>不对称</Hl>
							<br />
							<span style={{color: C.muted}}>极性不能抵消</span>
						</div>
					</div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
