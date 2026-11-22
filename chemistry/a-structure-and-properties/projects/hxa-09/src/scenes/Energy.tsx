import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board, Col, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.energy;
const {en1, en2, en2b, en3, en4, en5} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Energy: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="键能与稳定性、反应热"
		callout={{label: '易错', at: en5.from, text: <>键能算 ΔH：<Hl>反应物 − 生成物</Hl>；能量算 ΔH：生成物 − 反应物 —— 正好相反</>}}
		overlay={
			<AnimeBeat k="hold" from={en2b.from} to={en2b.to}>
				键能大 ={'\n'}<span style={{color: C.red}}>手握得紧</span>：{'\n'}拆开要花大力气
			</AnimeBeat>
		}
	>
		<Row gap={30}>
			<Col width={760}>
				<Table
					head={['键', '键长 / pm', '键能 kJ/mol']}
					cols="1fr 1.2fr 1.4fr"
					at={en1.from}
					fontSize={30}
					rowHeight={58}
					rows={[
						{cells: ['H—F', n('92'), <Hl>568</Hl>], at: en1.from},
						{cells: ['H—Cl', n('127'), n('431')], at: en1.from + 10},
						{cells: ['H—Br', n('141'), n('366')], at: en1.from + 20},
						{cells: ['H—I', n('161'), n('298')], at: en1.from + 30},
						{cells: ['N≡N', n('110'), <Hl c={C.orange}>946</Hl>], at: en2.from, key: true},
					]}
					focus
				/>
			</Col>
			<Col gap={16}>
				<Big at={en1.from} size={32}>稳定性：{chem('HF > HCl > HBr > HI')}</Big>
				<Big at={en3.from} size={32} color={C.red} soft={C.redSoft}>ΔH = <Hl>反应物键能总和 − 生成物键能总和</Hl></Big>
				<Big at={en4.from} size={30}>{chem('H2 + Cl2 = 2HCl')}<br />ΔH = 436 + 243 − 2×431 = <Hl>−183</Hl> kJ/mol</Big>
			</Col>
		</Row>
	</Board>
);
