import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Items} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ionicliq;
const {il1, il2, il3} = t.cue;

export const IonicLiq: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="离子液体"
		gap={26}
		callout={{label: '考法', at: il3.from, text: <>离子液体熔点低：阴、阳离子<Hl>体积大</Hl>，离子键<Hl>较弱</Hl></>}}
	>
		<Big at={il1.from} size={40}>由<Hl>体积较大</Hl>的阴、阳离子构成 → 室温或稍高温度下呈液态</Big>
		<Items size={36} gap={18} items={[{at: il2.from, node: <><Hl c={C.orange}>难挥发</Hl>、导电性好</>}, {at: il2.from + 40, node: <>用作<Hl c={C.orange}>溶剂</Hl>、电池<Hl c={C.orange}>电解质</Hl></>}]} />
	</Board>
);
