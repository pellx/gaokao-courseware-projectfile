import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Col, Panel, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.supra;
const {su1, su2, su3, su3b, su4, su5} = t.cue;

export const Supra: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="超分子"
		callout={{label: '易错', at: su5.from, text: <>超分子靠<Hl>分子间相互作用</Hl>（不是共价键）；“分子”包括<Hl c={C.orange}>离子</Hl></>}}
		overlay={
			<AnimeBeat k="cup" from={su3b.from} to={su3b.to}>
				杯酚像<span style={{color: C.red}}>杯子</span>：{'\n'}大小刚好的 C<sub>60</sub> 泡得进，{'\n'}C<sub>70</sub> 太大进不来
			</AnimeBeat>
		}
	>
		<Big at={su1.from} size={34}>两种或以上的分子（含离子）通过<Hl>分子间相互作用</Hl>形成的聚集体</Big>
		<Big at={su2.from} size={34} color={C.orange} soft={C.orangeSoft}>两个特征：<Hl c={C.orange}>分子识别</Hl>、<Hl c={C.orange}>自组装</Hl></Big>
		<Row gap={22}>
			<Col>
				<Panel title={<>杯酚分离 C<sub>60</sub> 和 C<sub>70</sub></>} color={C.red} at={su3.from} size={30}>
					空腔大小适合 {chem('C60')} → 形成超分子；{chem('C70')} 进不去
				</Panel>
			</Col>
			<Col>
				<Panel title="冠醚识别碱金属离子" color={C.green} at={su4.from} size={30}>
					空腔大小匹配离子大小：18-冠-6 适合 {chem('K^+')}
				</Panel>
			</Col>
		</Row>
	</Board>
);
