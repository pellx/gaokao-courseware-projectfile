import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Panel, Row} from '../components/board';
import {chem} from '../components/chem';
import {BODY, Cell, CORNERS, FACES} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.novel;
const {nv1, nv2, nv3, nv4, nv5} = t.cue;

export const Novel: React.FC = () => (
	<Board
		t={t}
		zoom={1.2}
		tag="考点六"
		title="陌生晶胞综合分析"
		callout={{label: '易错', at: nv5.from, text: <>换一种取晶胞的方式（Ti 放顶点），坐标、位置会变，但<Hl>化学式和配位数不变</Hl></>}}
	>
		<Row gap={22}>
			<Col>
				<Panel title={<>钙钛矿 {chem('CaTiO3')}</>} color={C.red} at={nv1.from} size={28}>
					<div style={{display: 'flex', alignItems: 'center', gap: 10}}>
						<Cell s={220} at={nv1.from} atoms={[...CORNERS.map((p) => ({p, c: C.green, r: 16})), ...FACES.map((p) => ({p, c: C.red, r: 13})), ...BODY.map((p) => ({p, c: C.brown, r: 22}))]} />
						<div style={{lineHeight: 1.6}}>
							<span style={{color: C.green}}>●</span> Ca 顶点 <span style={{color: C.brown}}>●</span> Ti 体心 <span style={{color: C.red}}>●</span> O 面心
							<Appear at={nv2.from}>Ca 1，Ti 1，O 3 → <Hl>{chem('CaTiO3')}</Hl></Appear>
							<Appear at={nv3.from}>Ti 周围最近 O：<Hl>6</Hl>（八面体）</Appear>
							<Appear at={nv3.from + 40}>Ti 周围最近 Ti：<Hl c={C.orange}>6</Hl>，距离 a</Appear>
						</div>
					</div>
				</Panel>
			</Col>
			<Col width={560}>
				<Panel title="铁的两种晶胞" color={C.orange} at={nv4.from} size={30}>
					<div>α-Fe：<Hl>体心立方</Hl>，配位数 8，每晶胞 2 个</div>
					<div>γ-Fe：<Hl c={C.orange}>面心立方</Hl>，配位数 12，每晶胞 4 个</div>
					<div style={{color: C.muted}}>原子数之比 1 ∶ 2</div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
