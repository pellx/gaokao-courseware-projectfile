import React from 'react';
import {Board, Col, Row} from '../components/board';
import {Appear, Hl} from '../components/ui';
import {BODY, Cell, CORNERS, FACES} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.packing;
const {pk1, pk2, pk3, pk4, pk5} = t.cue;

const Card: React.FC<{at: number; title: string; cn: string; eff: string; ex: string; children: React.ReactNode; c: string}> = ({at, title, cn, eff, ex, children, c}) => (
	<Appear at={at}>
		<div style={{background: '#fff', border: `4px solid ${c}`, borderRadius: 20, padding: '10px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<div style={{fontSize: 32, fontWeight: 900, color: c}}>{title}</div>
			{children}
			<div style={{fontSize: 28, fontWeight: 800}}>配位数 <Hl c={c}>{cn}</Hl>　利用率 <Hl c={c}>{eff}</Hl></div>
			<div style={{fontSize: 26, fontWeight: 700, color: C.muted}}>{ex}</div>
		</div>
	</Appear>
);

export const Packing: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="金属原子的堆积方式（课本外）"
		callout={{label: '易错', at: pk5.from, text: <>面心立方与六方最密：配位数、利用率<Hl>都相同</Hl>（12、74%），区别是层的排列 ABCABC 与 ABAB</>}}
	>
		<Row gap={18}>
			<Col>
				<Card at={pk1.from} title="简单立方" cn="6" eff="52%" ex="Po" c={C.brown}>
					<Cell s={180} at={pk1.from} atoms={CORNERS.map((p) => ({p, c: C.brown, r: 22}))} />
				</Card>
			</Col>
			<Col>
				<Card at={pk2.from} title="体心立方" cn="8" eff="68%" ex="Na、K、Fe" c={C.orange}>
					<Cell s={180} at={pk2.from} atoms={[...CORNERS, ...BODY].map((p) => ({p, c: C.orange, r: 22}))} />
				</Card>
			</Col>
			<Col>
				<Card at={pk3.from} title="面心立方最密" cn="12" eff="74%" ex="Cu、Ag、Au" c={C.red}>
					<Cell s={180} at={pk3.from} atoms={[...CORNERS, ...FACES].map((p) => ({p, c: C.red, r: 18}))} />
				</Card>
			</Col>
		</Row>
		<Appear at={pk4.from} style={{fontSize: 32, fontWeight: 800, textAlign: 'center'}}>
			空间利用率 = <Hl>晶胞中原子总体积 ÷ 晶胞体积</Hl>　（六方最密：Mg、Zn，也是 12、74%）
		</Appear>
	</Board>
);
