import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sio2;
const {si1, si2, si3, si4, si5} = t.cue;
const O4: [number, number][] = [[0, -125], [-115, 50], [115, 50], [0, 105]];

const Tetra: React.FC = () => (
	<svg width={420} height={345} viewBox="-210 -165 420 345">
		<G at={si2.from}>
			<polygon points={O4.slice(0, 3).map((p) => p.join(',')).join(' ')} fill={C.orangeSoft} stroke={C.orange} strokeWidth={3} />
			{O4.map(([x, y], i) => (
				<g key={i}>
					<line x1={0} y1={0} x2={x} y2={y} stroke={C.text} strokeWidth={5} />
				</g>
			))}
			<circle cx={0} cy={0} r={28} fill={C.brown} />
			<text x={0} y={10} fontSize={26} fontWeight={900} fill="#fff" textAnchor="middle">Si</text>
			{O4.map(([x, y], i) => (
				<g key={i}>
					<circle cx={x} cy={y} r={22} fill={C.red} />
					<text x={x} y={y + 9} fontSize={24} fontWeight={900} fill="#fff" textAnchor="middle">O</text>
				</g>
			))}
			<text x={0} y={162} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">硅氧四面体，O 再连别的 Si</text>
		</G>
	</svg>
);

export const Sio2: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="二氧化硅晶体"
		callout={{label: '易错', at: si5.from, text: <>“{chem('SiO2')}”是<Hl>化学式</Hl>（Si∶O = 1∶2），晶体中<Hl>不存在 {chem('SiO2')} 分子</Hl></>}}
	>
		<Row gap={30} align="center">
			<Tetra />
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: si1.from, node: <>晶体硅的每个 Si—Si 键中间<Hl>插入一个 O</Hl></>},
						{at: si2.from, node: <>每个 Si 连 <Hl>4 个 O</Hl>，每个 O 连 <Hl>2 个 Si</Hl></>},
						{at: si3.from, node: <>Si ∶ Si—O 键 = <Hl>1 ∶ 4</Hl>；1 mol {chem('SiO2')} 含 4 mol Si—O</>},
						{at: si4.from, node: <>最小环：<Hl c={C.orange}>12 元环</Hl>（6 Si + 6 O）</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
