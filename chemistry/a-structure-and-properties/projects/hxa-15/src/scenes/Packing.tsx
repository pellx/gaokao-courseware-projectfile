import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Panel, Row} from '../components/board';
import {chem} from '../components/chem';
import {Cell, CORNERS, FACES} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.packing;
const {pk1, pk2, pk4} = t.cue;

export const Packing: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="分子晶体的两种结构"
		callout={{label: '考法', at: pk4.from, text: <>干冰中一个 {chem('CO2')} 周围紧邻 <Hl>12</Hl> 个；冰中一个 {chem('H2O')} 周围 <Hl c={C.orange}>4</Hl> 个</>}}
	>
		<Row gap={24}>
			<Col>
				<Panel title="只有范德华力：分子密堆积" color={C.red} at={pk1.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 16}}>
						<Cell s={220} at={pk1.from} atoms={[...CORNERS.map((p) => ({p, c: C.red, r: 18})), ...FACES.map((p) => ({p, c: C.orange, r: 18}))]} />
						<div>
							干冰 {chem('CO2')}、{chem('C60')}
							<br />
							面心立方
							<br />
							紧邻 <Hl>12</Hl> 个分子
						</div>
					</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="有氢键：方向性 → 非密堆积" color={C.orange} at={pk2.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 16, minHeight: 300}}>
						<svg width={200} height={220} viewBox="-100 -110 200 220">
							{[[0, -80], [-75, 35], [75, 35], [0, 80]].map(([x, y], i) => (
								<g key={i}>
									<line x1={0} y1={0} x2={x * 0.75} y2={y * 0.75} stroke={C.orange} strokeWidth={5} strokeDasharray="9 6" />
									<circle cx={x} cy={y} r={20} fill={C.red} opacity={0.8} />
								</g>
							))}
							<circle cx={0} cy={0} r={24} fill={C.red} />
						</svg>
						<div>
							冰 {chem('H2O')}
							<br />
							四面体，周围 <Hl c={C.orange}>4</Hl> 个
							<br />
							<span style={{color: C.muted}}>空隙大 → 密度比水小</span>
						</div>
					</div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
