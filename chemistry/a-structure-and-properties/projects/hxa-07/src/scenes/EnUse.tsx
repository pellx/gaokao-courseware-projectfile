import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Col, Panel, Row} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.enuse;
const {eu1, eu2, eu3, eu4, eu5} = t.cue;

export const EnUse: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="电负性的应用"
		callout={{label: '易错', at: eu5.from, text: <>1.7 是<Hl>经验界线</Hl>：HF 差值 1.9，仍是共价化合物</>}}
	>
		<Row gap={22}>
			<Col>
				<Panel title="① 金属性 / 非金属性" color={C.red} at={eu1.from} size={29}>
					金属一般 <Hl>&lt; 1.8</Hl>
					<div>非金属一般 <Hl>&gt; 1.8</Hl></div>
					<div style={{color: C.muted}}>类金属约 1.8</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="② 化合价正负" color={C.orange} at={eu2.from} size={29}>
					电负性大的显<Hl>负价</Hl>
					<div>{chem('ICl')}：Cl <Hl>−1</Hl>，I <Hl c={C.orange}>+1</Hl></div>
				</Panel>
			</Col>
			<Col>
				<Panel title="③ 化学键类型" color={C.green} at={eu3.from} size={29}>
					差值 <Hl>&gt; 1.7</Hl>：一般离子键
					<div>差值 <Hl c={C.green}>&lt; 1.7</Hl>：一般共价键</div>
				</Panel>
			</Col>
		</Row>
		<Big at={eu4.from} size={36}>
			{chem('AlCl3')}：3.0 − 1.5 = 1.5 &lt; 1.7 → <Hl>共价化合物</Hl>
		</Big>
	</Board>
);
