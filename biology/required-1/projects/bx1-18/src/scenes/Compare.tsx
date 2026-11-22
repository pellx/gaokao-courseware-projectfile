import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cm1, cm2, cm3, cm4} = t.cue;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">有氧呼吸与无氧呼吸的比较</Header>
		<Appear at={cm1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={cm1.from}
				cols="240px 1fr 1fr"
				fontSize={32}
				rowHeight={76}
				head={['比较项目', '有氧呼吸', '无氧呼吸']}
				rows={[
					{at: cm1.from, cells: ['条件', '需要 O2', <Hl c={C.orange}>不需要 O<sub>2</sub></Hl>]},
					{at: cm2.from, cells: ['场所', '细胞质基质、线粒体', <Hl c={C.orange}>细胞质基质</Hl>]},
					{at: cm3.from, cells: ['产物', 'CO2、H2O', <>酒精和 CO<sub>2</sub>，或乳酸</>]},
					{at: cm3.from + 40, cells: ['能量', <Hl>大量</Hl>, '少量']},
					{at: cm4.from, cells: ['联系', <Hl>第一阶段完全相同</Hl>, <Hl>第一阶段完全相同</Hl>]},
				]}
			/>
		</Appear>
		<Tip at={cm4.from + 30} top={630} label="解题方法">
			实质相同：<Hl>分解有机物，释放能量</Hl>；区别看 O<sub>2</sub>、场所、产物和能量
		</Tip>
		<Narration t={t} />
	</Scene>
);
