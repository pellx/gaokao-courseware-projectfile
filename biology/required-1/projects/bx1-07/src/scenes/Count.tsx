import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.count;
const {ct1, ct2, ct3, ct4} = t.cue;

export const Count: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">不同生物的碱基和核苷酸种类</Header>
		<Appear at={ct1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={ct1.from}
				cols="300px 1fr 200px 220px 220px"
				fontSize={33}
				rowHeight={88}
				head={['生物', '核酸', '碱基', '核苷酸', '五碳糖']}
				rows={[
					{at: ct1.from, cells: ['细胞生物', 'DNA 和 RNA', <Hl>5 种</Hl>, <Hl>8 种</Hl>, '2 种']},
					{at: ct3.from, cells: ['DNA 病毒', '只有 DNA', <Hl c={C.orange}>4 种</Hl>, <Hl c={C.orange}>4 种</Hl>, '1 种']},
					{at: ct3.from + 30, cells: ['RNA 病毒', '只有 RNA', <Hl c={C.orange}>4 种</Hl>, <Hl c={C.orange}>4 种</Hl>, '1 种']},
				]}
			/>
		</Appear>
		<Tip at={ct4.from} top={560} label="易错">
			碱基 5 种、核苷酸 8 种：<Hl>A、G、C 各对应两种核苷酸</Hl>，T 只在 DNA 中，U 只在 RNA 中
		</Tip>
		<Narration t={t} />
	</Scene>
);
