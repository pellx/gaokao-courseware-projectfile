import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Col, Items, Row} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.displace;
const {dp1, dp2, dp3, dp4, dp5} = t.cue;

export const Displace: React.FC = () => (
	<Board
		gap={34}
		t={t}
		tag="考点六"
		title="卤素单质间的置换反应（实验 4-1）"
		callout={{label: '考法', at: dp5.from, text: <>由置换现象比较氧化性。<Hl>易错</Hl>：F<sub>2</sub> 不能从 NaCl 溶液中置换出 Cl<sub>2</sub>（F<sub>2</sub> 先与水反应）</>}}
	>
		<Row gap={30}>
			<Col width={820} style={{paddingTop: 10}}>
				<Items
					size={34}
					items={[
						{at: dp1.from, node: <>少量<Hl c={C.orange}>新制氯水</Hl>分别加入 KBr、KI 溶液，振荡</>},
						{at: dp2.from, node: <>KBr 溶液变<Hl c={C.orange}>橙黄色</Hl>：生成了 Br<sub>2</sub></>},
						{at: dp2.from + 40, node: <>KI 溶液变<Hl c={C.brown}>棕黄色</Hl>：生成了 I<sub>2</sub></>},
						{at: dp3.from, node: <>溴水加入 KI 溶液，也变棕黄色</>},
					]}
				/>
			</Col>
			<Col gap={20}>
				<Big at={dp2.from} size={36}>{chem('Cl2 + 2KBr = 2KCl + Br2')}</Big>
				<Big at={dp2.from + 40} size={36}>{chem('Cl2 + 2KI = 2KCl + I2')}</Big>
				<Big at={dp3.from} size={36}>{chem('Br2 + 2KI = 2KBr + I2')}</Big>
			</Col>
		</Row>
		<Big at={dp4.from} size={42} color={C.red} soft={C.redSoft}>
			氧化性：{chem('F2 > Cl2 > Br2 > I2')}　　还原性：{chem('F^- < Cl^- < Br^- < I^-')}
		</Big>
	</Board>
);
