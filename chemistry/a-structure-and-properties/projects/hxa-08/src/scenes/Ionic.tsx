import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Big, Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {Lewis} from '../components/sci';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ionic;
const {io1, io2, io3, io3b, io4, io5} = t.cue;

export const Ionic: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="离子键"
		callout={{label: '易错', at: io5.from, text: <>{chem('NH4Cl')} 全由非金属组成，却是<Hl>离子化合物</Hl>；{chem('AlCl3')} 含金属，却是<Hl c={C.orange}>共价化合物</Hl></>}}
		overlay={
			<AnimeBeat k="gift" from={io3b.from} to={io3b.to}>
				离子键 = <span style={{color: C.red}}>送电子</span>：{'\n'}Na 送出 → Na<sup>+</sup>{'\n'}Cl 收下 → Cl<sup>−</sup>
			</AnimeBeat>
		}
	>
		<Big at={io1.from} size={38}>
			<Hl>阴、阳离子</Hl>之间的相互作用 = 离子键
		</Big>
		<Row gap={40} align="center">
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: io2.from, node: <>本质：<Hl>静电作用</Hl>（吸引 + 排斥）</>},
						{at: io4.from, node: <>离子化合物：活泼金属 + 活泼非金属、强碱、大多数盐、<Hl c={C.orange}>铵盐</Hl></>},
					]}
				/>
			</Col>
			<Appear at={io3.from}>
				<div style={{display: 'flex', alignItems: 'center', gap: 20, fontSize: 52, fontWeight: 800, background: C.panel, borderRadius: 20, padding: '20px 30px'}}>
					<span>
						Na<sup style={{fontSize: '0.5em'}}>+</sup>
					</span>
					<Lewis at={io3.from} size={60} parts={[{bracket: [{sym: 'Cl', d: [2, 2, 2, 2], dc: [C.text, C.text, C.text, C.red]}], charge: '−'}]} />
				</div>
			</Appear>
		</Row>
	</Board>
);
