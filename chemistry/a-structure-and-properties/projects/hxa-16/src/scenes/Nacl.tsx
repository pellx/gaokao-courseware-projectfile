import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Panel, Row} from '../components/board';
import {chem} from '../components/chem';
import {BODY, Cell, CORNERS, EDGES, FACES} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.nacl;
const {nc1, nc2, nc3, nc4, nc5, nc6} = t.cue;

export const Nacl: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="NaCl 与 CsCl 晶胞"
		callout={{label: '易错', at: nc6.from, text: <>NaCl 配位数 <Hl>6</Hl>（不是 8）；最近的<Hl c={C.orange}>同种离子</Hl> 12 个——看清问异种还是同种</>}}
	>
		<Row gap={24}>
			<Col>
				<Panel title="NaCl" color={C.red} at={nc1.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 14}}>
						<Cell
							s={230}
							at={nc1.from}
							atoms={[
								...CORNERS.map((p) => ({p, c: C.green, r: 20})),
								...FACES.map((p) => ({p, c: C.green, r: 20})),
								...EDGES.map((p) => ({p, c: C.red, r: 12})),
								...BODY.map((p) => ({p, c: C.red, r: 12})),
							]}
						/>
						<div style={{fontSize: 28, lineHeight: 1.6}}>
							<span style={{color: C.green}}>●</span> {chem('Cl^-')} <span style={{color: C.red}}>●</span> {chem('Na^+')}
							<Appear at={nc2.from}>每晶胞 <Hl>4 个 NaCl</Hl></Appear>
							<Appear at={nc3.from}>配位数 <Hl>6</Hl></Appear>
							<Appear at={nc4.from}>最近 {chem('Na^+')}：<Hl c={C.orange}>12</Hl> 个</Appear>
						</div>
					</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="CsCl" color={C.orange} at={nc5.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 14}}>
						<Cell s={230} at={nc5.from} atoms={[...CORNERS.map((p) => ({p, c: C.green, r: 20})), ...BODY.map((p) => ({p, c: C.orange, r: 26}))]} />
						<div style={{fontSize: 28, lineHeight: 1.6}}>
							<span style={{color: C.green}}>●</span> {chem('Cl^-')} <span style={{color: C.orange}}>●</span> {chem('Cs^+')}
							<div>每晶胞 <Hl>1 个 CsCl</Hl></div>
							<div>配位数 <Hl>8</Hl></div>
						</div>
					</div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
