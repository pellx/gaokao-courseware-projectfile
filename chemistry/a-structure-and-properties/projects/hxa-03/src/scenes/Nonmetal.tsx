import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Col, Panel, Row} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.nonmetal;
const {nm1, nm2, nm3, nm4, nm5} = t.cue;

export const Nonmetal: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="非金属性强弱的判断"
		gap={28}
		callout={{label: '易错', at: nm5.from, text: <>必须是<Hl>最高价含氧酸</Hl>、<Hl>简单氢化物</Hl>的稳定性；HClO 酸性弱于 H<sub>2</sub>CO<sub>3</sub>，<Hl>不能</Hl>说明非金属性 Cl &lt; C</>}}
	>
		<Big at={nm1.from} size={40}>
			非金属性 = 原子<Hl>得电子</Hl>的能力
		</Big>
		<Row gap={24}>
			<Col>
				<Panel title="依据一" color={C.red} at={nm2.from} size={30}>
					与 H<sub>2</sub> 化合<Hl>越容易</Hl>
					<div>简单氢化物<Hl>越稳定</Hl></div>
					<div style={{color: C.muted}}>{chem('HF > HCl > HBr > HI')}</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="依据二" color={C.orange} at={nm3.from} size={30}>
					<Hl>最高价</Hl>含氧酸
					<div><Hl>酸性越强</Hl> → 非金属性越强</div>
					<div style={{color: C.muted}}>{chem('HClO4 > H2SO4')}</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="依据三" color={C.green} at={nm4.from} size={30}>
					非金属间的置换反应
					<div style={{color: C.muted, fontSize: 26}}>{chem('Cl2 + 2NaBr = 2NaCl + Br2')}</div>
					<div>→ 非金属性 <Hl>Cl &gt; Br</Hl></div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
