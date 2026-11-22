import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Col, Panel, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.metal;
const {mt1, mt2, mt3, mt4, mt4b, mt5} = t.cue;

export const Metal: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="金属性强弱的判断"
		gap={28}
		callout={{label: '易错', at: mt5.from, text: <>看失电子的<Hl>难易</Hl>，不看<Hl c={C.orange}>多少</Hl>：Al 失 3 个、Na 失 1 个，但金属性 <Hl>Na &gt; Al</Hl></>}}
		overlay={
			<AnimeBeat k="versus" from={mt4b.from} to={mt4b.to}>
				比金属性＝同台对决：{'\n'}谁更易与水反应？{'\n'}谁的碱更强？{'\n'}谁能<span style={{color: C.red}}>置换</span>对方？
			</AnimeBeat>
		}
	>
		<Big at={mt1.from} size={40}>
			金属性 = 原子<Hl>失电子</Hl>的能力
		</Big>
		<Row gap={24}>
			<Col>
				<Panel title="依据一" color={C.red} at={mt2.from} size={30}>
					与水或酸反应置换出 H<sub>2</sub>
					<div><Hl>越容易</Hl> → 金属性越强</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="依据二" color={C.orange} at={mt3.from} size={30}>
					最高价氧化物的水化物
					<div><Hl>碱性越强</Hl> → 金属性越强</div>
					<div style={{color: C.muted}}>{chem('NaOH > Mg(OH)2')}</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="依据三" color={C.green} at={mt4.from} size={30}>
					金属间的置换反应
					<div><Hl>强置换弱</Hl></div>
					<div style={{color: C.muted}}>{chem('Fe + CuSO4 = FeSO4 + Cu')}</div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
