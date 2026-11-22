import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Col, Panel, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {ec, Orb} from '../components/sci';
import {IeChart} from './IeTrend';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ieanom;
const {ia1, ia2, ia3, ia3b, ia4, ia5} = t.cue;

export const IeAnom: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="第一电离能的反常"
		callout={{label: '易错', at: ia5.from, text: <>反常只在 <Hl>ⅡA&gt;ⅢA、ⅤA&gt;ⅥA</Hl>，不要推广到其他相邻元素</>}}
		overlay={
			<AnimeBeat k="hug" from={ia3b.from} to={ia3b.to}>
				半满、全满的电子{'\n'}被<span style={{color: C.red}}>紧紧抱住</span>：{'\n'}拉走它要更多能量
			</AnimeBeat>
		}
	>
		<Row gap={24} align="center">
			<IeChart at={ia1.from} hl={[3, 6, 11, 14]} hlAt={ia1.from + 20} />
			<Col gap={14}>
				<Panel title="Mg > Al（ⅡA > ⅢA）" color={C.red} at={ia2.from} size={27}>
					Mg {ec('3s2')} <Hl>全充满</Hl>
					<Orb at={ia2.from} size={40} levels={[{label: '3s', e: ['ud'], color: C.red}, {label: '3p', e: ['', '', '']}]} />
				</Panel>
				<Panel title="N > O（ⅤA > ⅥA）" color={C.orange} at={ia3.from} size={27}>
					N {ec('2p3')} <Hl>半充满</Hl>
					<Orb at={ia3.from} size={40} levels={[{label: '2s', e: ['ud']}, {label: '2p', e: ['u', 'u', 'u'], color: C.red}]} />
				</Panel>
			</Col>
		</Row>
		<Big at={ia4.from} size={34}>第二周期 I<sub>1</sub>：Li &lt; <Hl>B &lt; Be</Hl> &lt; C &lt; <Hl>O &lt; N</Hl> &lt; F &lt; Ne</Big>
	</Board>
);
