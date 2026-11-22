import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Big, Board, Col, Panel, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.exp3;
const {ex1, ex2, ex3, ex4, ex5, ex5b, ex6} = t.cue;

export const Exp3: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="第三周期金属性的递变实验"
		callout={{label: '考法', at: ex6.from, text: <>写 Al(OH)<sub>3</sub> 与 NaOH 的离子方程式。<Hl>易错</Hl>：Al(OH)<sub>3</sub> 不溶于氨水，制 Al(OH)<sub>3</sub> 用铝盐 + <Hl>氨水</Hl></>}}
		overlay={
			<AnimeBeat k="lab" from={ex5b.from} to={ex5b.to}>
				碱性：{'\n'}<span style={{color: C.red}}>NaOH &gt; Mg(OH)<sub>2</sub> &gt; Al(OH)<sub>3</sub></span>{'\n'}金属性：Na &gt; Mg &gt; Al
			</AnimeBeat>
		}
	>
		<Row gap={24}>
			<Col>
				<Panel title="实验一：镁与水（滴酚酞）" color={C.red} at={ex1.from} size={29}>
					<div>冷水：反应<Hl c={C.orange}>很缓慢</Hl></div>
					<div>加热至沸腾：溶液<Hl>变红</Hl></div>
					<Appear at={ex2.from}>
						<div>钠与冷水就剧烈反应 → 金属性 <Hl>Na &gt; Mg</Hl></div>
					</Appear>
				</Panel>
			</Col>
			<Col>
				<Panel title="实验二：滴加 NaOH 溶液至过量" color={C.orange} at={ex3.from} size={29}>
					<div>MgCl<sub>2</sub>：白色沉淀，<Hl c={C.green}>不溶解</Hl></div>
					<Appear at={ex4.from}>
						<div>AlCl<sub>3</sub>：白色沉淀，过量后<Hl>溶解</Hl></div>
					</Appear>
					<Appear at={ex5.from}>
						<div>Al(OH)<sub>3</sub> 是<Hl c={C.orange}>两性氢氧化物</Hl></div>
					</Appear>
				</Panel>
			</Col>
		</Row>
		<Big at={ex5.from} size={34}>
			{chem('Al(OH)3 + 3H^+ = Al^3+ + 3H2O')}　　{chem('Al(OH)3 + OH^- = [Al(OH)4]^-')}
		</Big>
	</Board>
);
