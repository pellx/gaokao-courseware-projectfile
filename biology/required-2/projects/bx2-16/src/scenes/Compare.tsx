import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cm1, cm2, cm3, cm4} = t.cue;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">基因突变与基因重组的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={cm1.from}
				cols="220px 1fr 1fr"
				fontSize={33}
				rowHeight={90}
				head={['比较项目', '基因突变', '基因重组']}
				rows={[
					{at: cm1.from, cells: ['本质', '基因碱基序列改变', '原有基因重新组合']},
					{at: cm2.from, cells: ['结果', <Hl>产生新基因</Hl>, <Hl c={C.orange}>产生新基因型</Hl>]},
					{at: cm3.from, cells: ['意义', <>变异的<Hl>根本来源</Hl></>, <>变异的<Hl c={C.orange}>来源之一</Hl></>]},
				]}
			/>
		</div>
		<Tip at={cm4.from} top={600} label="解题方法" fontSize={34}>
			后代出现<Hl>亲代没有的基因</Hl> → 基因突变；只是出现<Hl>新的组合</Hl> → 基因重组
		</Tip>
		<Narration t={t} />
	</Scene>
);
