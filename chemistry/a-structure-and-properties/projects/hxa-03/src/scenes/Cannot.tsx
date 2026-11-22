import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Col, Mark, Row} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cannot;
const {cn1, cn2, cn3, cn4, cn5, cn6, cn7} = t.cue;

export const Cannot: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="不能用元素周期律解释的事实"
		callout={{label: '解题方法', at: cn7.from, text: <>先看是否<Hl>同周期、同主族</Hl>，再看比的是不是<Hl>最高价含氧酸、简单氢化物稳定性、金属性</Hl></>}}
	>
		<Big at={cn1.from} size={36}>北京卷经典设问：“下列事实<Hl>不能</Hl>用元素周期律解释的是”</Big>
		<Row gap={28}>
			<Col gap={12}>
				<div style={{fontSize: 30, fontWeight: 800, color: C.green}}>能解释（标准对象）</div>
				<Mark ok at={cn2.from} size={28}>酸性 {chem('HClO4 > H2SO4')}</Mark>
				<Mark ok at={cn2.from + 10} size={28}>稳定性 {chem('HCl > H2S')}</Mark>
				<Mark ok at={cn2.from + 20} size={28}>碱性 {chem('NaOH > Mg(OH)2')}</Mark>
			</Col>
			<Col gap={12}>
				<div style={{fontSize: 30, fontWeight: 800, color: C.red}}>不能解释</div>
				<Mark ok={false} at={cn3.from} size={28}>酸性 {chem('H2SO4 > H2SO3')}（同元素不同价）</Mark>
				<Mark ok={false} at={cn4.from} size={28}>稳定性 {chem('Na2CO3 > NaHCO3')}</Mark>
				<Mark ok={false} at={cn5.from} size={28}>酸性 {chem('HCl > H2S')}（水溶液酸性）</Mark>
				<Mark ok={false} at={cn6.from} size={28}>沸点 {chem('HF > HCl')}（<Hl c={C.orange}>氢键</Hl>）</Mark>
			</Col>
		</Row>
	</Board>
);
