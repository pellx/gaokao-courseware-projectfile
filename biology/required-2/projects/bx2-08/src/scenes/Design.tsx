import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.design;
const {dg1, dg3, dg4} = t.cue;

export const Design: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">判断基因在常染色体还是 X 染色体上</Header>
		<Cards
			top={185}
			height={300}
			fontSize={36}
			titleSize={44}
			items={[
				{
					title: '已知显隐性',
					color: C.red,
					at: dg1.from,
					body: (
						<>
							<Hl>隐性雌 × 显性雄</Hl>
							<br />
							子代雌全显、雄全隐 → X 染色体
							<br />
							子代雌雄表现相同 → 常染色体
						</>
					),
				},
				{
					title: '未知显隐性',
					color: C.orange,
					at: dg3.from,
					body: (
						<>
							<Hl c={C.orange}>正交和反交</Hl>
							<br />
							结果相同 → 常染色体
							<br />
							结果不同且与性别有关 → X 染色体
						</>
					),
				},
			]}
		/>
		<Tip at={dg4.from} top={540} label="考法" fontSize={34}>
			实验设计题写全<Hl>实验思路</Hl>和<Hl>预期结果及结论</Hl>，结论与结果一一对应
		</Tip>
		<Narration t={t} />
	</Scene>
);
