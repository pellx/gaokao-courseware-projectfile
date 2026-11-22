import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Col, Panel, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {Lewis} from '../components/sci';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.covalent;
const {cv1, cv2, cv2b, cv3, cv4, cv5, cv6} = t.cue;

export const Covalent: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="共价键"
		callout={{label: '易错', at: cv6.from, text: <>非极性键不只在单质里：{chem('H2O2')}、{chem('Na2O2')} 中的 <Hl>O—O</Hl> 也是非极性键</>}}
		overlay={
			<AnimeBeat k="share" from={cv2b.from} to={cv2b.to}>
				共价键 = <span style={{color: C.red}}>共撑一把伞</span>{'\n'}共用电子对{'\n'}属于两个原子
			</AnimeBeat>
		}
	>
		<Row gap={40} align="center">
			<Big at={cv1.from} size={38}>
				原子间通过<Hl>共用电子对</Hl>形成的相互作用
			</Big>
			<Lewis at={cv2.from} size={64} parts={[{sym: 'Cl', d: [2, 1, 2, 2], dc: [C.text, C.red, C.text, C.text]}, {sym: 'Cl', d: [2, 2, 2, 1], dc: [C.text, C.text, C.text, C.red]}]} />
		</Row>
		<Row gap={22}>
			<Col>
				<Panel title="非极性键" color={C.orange} at={cv3.from} size={30}>
					<Hl c={C.orange}>同种</Hl>原子，电子对不偏移
					<div style={{color: C.muted}}>Cl—Cl、H—H</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="极性键" color={C.red} at={cv4.from} size={30}>
					<Hl>不同</Hl>原子，电子对偏向吸引力强的一方
					<div style={{color: C.muted}}>H—Cl</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="共价化合物" color={C.green} at={cv5.from} size={30}>
					<Hl c={C.green}>只含</Hl>共价键
					<div style={{color: C.muted}}>酸、非金属氢化物与氧化物、多数有机物</div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
