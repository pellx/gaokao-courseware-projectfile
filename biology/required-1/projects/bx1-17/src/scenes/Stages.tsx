import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.stages;
const {sg1, sg2, sg3, sg4} = t.cue;

export const Stages: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">有氧呼吸的三个阶段</Header>
		<Appear at={sg1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={sg1.from}
				cols="190px 280px 1fr 1fr 200px"
				fontSize={31}
				rowHeight={90}
				head={['阶段', '场所', '反应物', '产物', '能量']}
				rows={[
					{at: sg1.from, cells: ['第一阶段', <Hl>细胞质基质</Hl>, '葡萄糖', '丙酮酸、少量 [H]', '少量']},
					{at: sg2.from, cells: ['第二阶段', <Hl>线粒体基质</Hl>, <>丙酮酸、<Hl c={C.orange}>水</Hl></>, <><F>CO2</F>、[H]</>, '少量']},
					{at: sg3.from, cells: ['第三阶段', <Hl>线粒体内膜</Hl>, <>[H]、<Hl c={C.orange}><F>O2</F></Hl></>, <Hl c={C.orange}>水</Hl>, <Hl>大量</Hl>]},
				]}
			/>
		</Appear>
		<Tip at={sg4.from} top={600} label="解题方法">
			<Hl>水：二耗三生</Hl>；<F>O2</F> 只在第三阶段参与；<F>CO2</F> 在第二阶段产生
		</Tip>
		<Narration t={t} />
	</Scene>
);
