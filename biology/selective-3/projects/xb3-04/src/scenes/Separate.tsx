import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.separate;
const {sp1, sp2, sp3} = t.cue;

export const Separate: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">产品的分离和提纯</Header>
		<Cards
			top={200}
			height={300}
			titleSize={42}
			fontSize={34}
			gap={40}
			items={[
				{
					title: '产品是微生物细胞本身',
					color: C.orange,
					at: sp1.from,
					body: <>方法：<Hl>过滤、沉淀</Hl> → 分离菌体并干燥</>,
					note: '例：单细胞蛋白',
				},
				{
					title: '产品是代谢物',
					color: C.green,
					at: sp2.from,
					body: <>方法：根据产物性质，<Hl>提取、分离、纯化</Hl></>,
					note: '例：抗生素、氨基酸、酶制剂',
				},
			]}
		/>
		<Tip at={sp3.from} top={560} label="解题方法">
			先判断产品是<Hl c={C.orange}>菌体</Hl>还是<Hl c={C.green}>代谢物</Hl>：菌体用过滤、沉淀；代谢物用提取、分离、纯化
		</Tip>
		<Narration t={t} />
	</Scene>
);
