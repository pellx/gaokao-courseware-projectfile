import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Mark, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {Orb} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pauli;
const {pa1, pa2, pa2b, pa3, pa4} = t.cue;

export const Pauli: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="电子自旋与泡利原理"
		callout={{label: '易错', at: pa4.from, text: <>一个方框里两个<Hl>同向</Hl>箭头 → 违反<Hl>泡利原理</Hl>（不是洪特规则）</>}}
		overlay={
			<AnimeBeat k="back" from={pa2b.from} to={pa2b.to}>
				同一轨道的两个电子{'\n'}<span style={{color: C.red}}>背靠背</span>：自旋相反 ↑↓
			</AnimeBeat>
		}
	>
		<Row gap={40} align="center">
			<Col gap={20}>
				<Appear at={pa1.from} style={{fontSize: 34, fontWeight: 800}}>
					电子自旋：两种状态，用 <Hl>↑</Hl> 和 <Hl c={C.orange}>↓</Hl> 表示
				</Appear>
				<Appear at={pa2.from} style={{fontSize: 36, fontWeight: 900, background: C.redSoft, borderRadius: 18, padding: '16px 26px'}}>
					泡利原理：一个原子轨道<Hl>最多 2 个电子</Hl>，且<Hl>自旋相反</Hl>
				</Appear>
			</Col>
		</Row>
		<Row gap={60} align="center">
			<Col>
				<Mark ok at={pa3.from} size={32}>
					<span style={{display: 'inline-flex', alignItems: 'center', gap: 20}}>
						<Orb at={pa3.from} size={70} levels={[{label: '1s', e: ['ud']}]} />
						一上一下
					</span>
				</Mark>
			</Col>
			<Col>
				<Mark ok={false} at={pa3.from + 20} size={32}>
					<span style={{display: 'inline-flex', alignItems: 'center', gap: 20}}>
						<Orb at={pa3.from + 20} size={70} levels={[{label: '1s', e: ['uu']}]} bad={[[0, 0]]} />
						同向：违反泡利
					</span>
				</Mark>
			</Col>
		</Row>
	</Board>
);
