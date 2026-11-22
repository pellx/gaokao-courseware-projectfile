import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.structure;
const {st1, st2, st3, st4} = t.cue;

export const Structure: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">基因通过控制蛋白质结构直接控制性状</Header>
		<Flow
			style={{left: 90, top: 180}}
			fontSize={36}
			rows={[
				[
					{label: '基因', at: st1.from, color: C.brown},
					{label: '蛋白质的结构', at: st1.from + 20, color: C.red},
					{label: '性状', note: '直接控制', at: st1.from + 40, color: C.red},
				],
			]}
		/>
		<Flow
			style={{left: 90, top: 340}}
			fontSize={30}
			rows={[
				[
					{label: '囊性纤维化', at: st2.from, color: C.orange},
					{label: 'CFTR 基因缺失 3 个碱基对', at: st2.from + 20},
					{label: 'CFTR 蛋白结构异常', at: st2.from + 40},
					{label: '转运氯离子功能异常', at: st2.from + 60, color: C.red},
				],
				[
					{label: '镰状细胞贫血', at: st3.from, color: C.orange},
					{label: '血红蛋白基因突变', at: st3.from + 20},
					{label: '一个氨基酸被替换', at: st3.from + 40},
					{label: '红细胞呈镰刀状', at: st3.from + 60, color: C.red},
				],
			]}
			rowGap={40}
		/>
		<Tip at={st4.from} top={640} label="解题方法" fontSize={34}>
			结构蛋白、载体蛋白、血红蛋白等<Hl>非酶蛋白</Hl>结构改变 → <Hl>直接</Hl>控制性状
		</Tip>
		<Narration t={t} />
	</Scene>
);
