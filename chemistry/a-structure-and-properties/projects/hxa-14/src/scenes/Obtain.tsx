import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Panel, Row} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.obtain;
const {ob1, ob2, ob3, ob4} = t.cue;

export const Obtain: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="获得晶体的三条途径"
		callout={{label: '考法', at: ob4.from, text: <>判断某方法得到的是否为晶体，或把<Hl>途径与实例</Hl>对应</>}}
	>
		<Row gap={22}>
			<Col>
				<Panel title="① 熔融态凝固" color={C.red} at={ob1.from} size={34}>
					熔融的<Hl>硫</Hl>冷却 → 硫晶体
				</Panel>
			</Col>
			<Col>
				<Panel title="② 凝华（气 → 固）" color={C.orange} at={ob2.from} size={34}>
					<Hl c={C.orange}>碘</Hl>蒸气凝华 → 碘晶体
				</Panel>
			</Col>
			<Col>
				<Panel title="③ 溶液中析出" color={C.green} at={ob3.from} size={34}>
					饱和 <Hl c={C.green}>NaCl</Hl> 溶液 → 食盐晶体
				</Panel>
			</Col>
		</Row>
	</Board>
);
