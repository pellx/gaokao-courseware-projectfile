import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.types;
const {ty1, ty2, ty3} = t.cue;

export const Types: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">染色体变异的类型</Header>
		<div style={{position: 'absolute', left: 90, top: 180}}>
			<Tree
				width={1500}
				height={420}
				colWidth={460}
				boxWidth={400}
				boxHeight={96}
				fontSize={32}
				root={{
					label: '染色体变异',
					color: C.red,
					at: ty1.from,
					children: [
						{
							label: '数目变异',
							color: C.red,
							at: ty1.from + 20,
							children: [
								{label: '个别染色体增减', note: '如 21 三体综合征', color: C.orange, at: ty2.from},
								{label: '以染色体组成倍增减', note: '如三倍体无子西瓜', color: C.orange, at: ty2.from + 80},
							],
						},
						{label: '结构变异', note: '下期讲', color: C.muted, at: ty1.from + 40},
					],
				}}
			/>
		</div>
		<Tip at={ty3.from} top={660} label="考法" fontSize={34}>
			染色体变异在<Hl>光学显微镜下可见</Hl>，基因突变不可见 → 区分二者的常用依据
		</Tip>
		<Narration t={t} />
	</Scene>
);
