import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.result;
const {rs1, rs2, rs3, rs4} = t.cue;

export const Result: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">染色体结构变异的结果</Header>
		<Rows
			style={{left: 90, right: 90, top: 185}}
			fontSize={33}
			gap={22}
			items={[
				{at: rs1.from, color: C.red, title: '结果', children: <>染色体上<Hl>基因的数目或排列顺序</Hl>改变 → 性状变异</>},
				{at: rs2.from, color: C.orange, title: '影响', children: <>大多数对生物体<Hl c={C.orange}>不利</Hl>，有的甚至导致死亡</>},
				{at: rs3.from, color: C.brown, title: '实例', children: <><Hl>猫叫综合征</Hl>：人的 5 号染色体部分缺失</>},
			]}
		/>
		<Tip at={rs4.from} top={600} label="考法" fontSize={33}>
			结构变异<Hl>不改变基因的结构</Hl>，改变基因的数目和排列顺序；基因突变改变基因内部的碱基序列
		</Tip>
		<Narration t={t} />
	</Scene>
);
