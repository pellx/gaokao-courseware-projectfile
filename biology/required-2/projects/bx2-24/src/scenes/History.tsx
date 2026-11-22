import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Flow, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.history;
const {hi1, hi2, hi3, hi4} = t.cue;

export const History: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">生物多样性的形成</Header>
		<Def at={hi1.from} style={{left: 90, right: 90, top: 165}} fontSize={34} color={C.red} soft={C.redSoft}>
			生物多样性是<Hl>协同进化</Hl>的结果
		</Def>
		<Flow
			style={{left: 90, top: 280}}
			fontSize={32}
			rows={[
				[
					{label: '原核 → 真核', at: hi2.from, color: C.orange},
					{label: '单细胞 → 多细胞', at: hi2.from + 20, color: C.orange},
					{label: '水生 → 陆生', at: hi2.from + 40, color: C.orange},
					{label: '简单 → 复杂', at: hi2.from + 60, color: C.orange},
				],
			]}
		/>
		<Rows
			style={{left: 90, right: 90, top: 410}}
			fontSize={31}
			gap={16}
			items={[
				{at: hi3.from, color: C.red, title: '有性生殖', children: <>出现后，生物进化速度<Hl>明显加快</Hl></>},
				{at: hi3.from + 60, color: C.brown, title: '寒武纪大爆发', children: <>大量动物在短时间内出现</>},
			]}
		/>
		<Tip at={hi4.from} top={630} label="考法" fontSize={34}>
			有性生殖实现<Hl>基因重组</Hl>，增强变异的多样性 → 进化速度加快
		</Tip>
		<Narration t={t} />
	</Scene>
);
