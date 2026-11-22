import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Panel, Row} from '../components/board';
import {chem} from '../components/chem';
import {Cell, CORNERS, FACES, TETRA_ALL, TETRA_ALT} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.caf2;
const {cf1, cf2, cf3, cf4} = t.cue;

export const Caf2: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="萤石与闪锌矿晶胞（课本外）"
		callout={{label: '易错', at: cf4.from, text: <>配位数之比 = 化学式离子个数的<Hl>反比</Hl>：{chem('CaF2')} 中 8 ∶ 4 = 2 ∶ 1</>}}
	>
		<Row gap={24}>
			<Col>
				<Panel title={<>{chem('CaF2')}（萤石型）</>} color={C.red} at={cf1.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 14}}>
						<Cell s={230} at={cf1.from} atoms={[...CORNERS.map((p) => ({p, c: C.red, r: 18})), ...FACES.map((p) => ({p, c: C.red, r: 18})), ...TETRA_ALL.map((p) => ({p, c: C.green, r: 12}))]} />
						<div style={{fontSize: 28, lineHeight: 1.6}}>
							<span style={{color: C.red}}>●</span> {chem('Ca^2+')} 4 个　<span style={{color: C.green}}>●</span> {chem('F^-')} 8 个
							<Appear at={cf2.from}>{chem('Ca^2+')} 配位数 <Hl>8</Hl></Appear>
							<Appear at={cf2.from + 30}>{chem('F^-')} 配位数 <Hl c={C.orange}>4</Hl></Appear>
						</div>
					</div>
				</Panel>
			</Col>
			<Col>
				<Panel title={<>ZnS（闪锌矿型）</>} color={C.green} at={cf3.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 14}}>
						<Cell s={230} at={cf3.from} atoms={[...CORNERS.map((p) => ({p, c: C.gold, r: 18})), ...FACES.map((p) => ({p, c: C.gold, r: 18})), ...TETRA_ALT.map((p) => ({p, c: C.brown, r: 14}))]} />
						<div style={{fontSize: 28, lineHeight: 1.6}}>
							<span style={{color: C.gold}}>●</span> {chem('S^2-')} 4 个　<span style={{color: C.brown}}>●</span> {chem('Zn^2+')} 4 个
							<div>配位数都是 <Hl c={C.green}>4</Hl></div>
							<div style={{color: C.muted}}>与金刚石结构类似</div>
						</div>
					</div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
