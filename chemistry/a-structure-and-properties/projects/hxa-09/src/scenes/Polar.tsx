import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Col, Panel, Row} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.polar;
const {po1, po2, po3, po4, po5} = t.cue;

export const Polar: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="极性键与非极性键"
		callout={{label: '考法', at: po5.from, text: <>判断键的类型。<Hl>易错</Hl>：键的极性看<Hl>成键原子是否相同</Hl>，不看分子是否对称</>}}
	>
		<Big at={po1.from} size={38}>看成键原子的<Hl>电负性</Hl>是否相同</Big>
		<Row gap={24}>
			<Col>
				<Panel title="非极性键" color={C.orange} at={po2.from} size={32}>
					<Hl c={C.orange}>同种</Hl>原子，电子对不偏移
					<div style={{color: C.muted}}>H—H、C—C、O—O</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="极性键" color={C.red} at={po3.from} size={32}>
					<Hl>不同</Hl>原子，偏向电负性大的一方
					<div>电负性差越大，极性越强</div>
				</Panel>
			</Col>
		</Row>
		<Big at={po4.from} size={36}>
			键的极性：H—F &gt; H—Cl &gt; H—Br &gt; H—I
		</Big>
	</Board>
);
