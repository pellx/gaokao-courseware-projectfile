import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ie1def;
const {id1, id2, id3} = t.cue;

export const IeDef: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="第一电离能的定义"
		gap={30}
		callout={{label: '易错', at: id3.from, text: <>“<Hl>气态</Hl>”“<Hl>基态</Hl>”不能少；电离能衡量失电子的<Hl>难易</Hl>，不是多少</>}}
	>
		<Big at={id1.from} size={36}>
			<Hl>气态基态</Hl>原子失去一个电子，转化为<Hl>气态基态</Hl>正离子所需的<Hl>最低能量</Hl> —— 第一电离能 I<sub>1</sub>
		</Big>
		<Big at={id1.from + 40} size={44} color={C.orange} soft={C.orangeSoft}>
			{chem('M(g) − e^- → M^+(g)')}
		</Big>
		<Big at={id2.from} size={38}>
			I<sub>1</sub> 越<Hl>小</Hl> → 越<Hl>容易</Hl>失电子 → 金属性越强
		</Big>
	</Board>
);
