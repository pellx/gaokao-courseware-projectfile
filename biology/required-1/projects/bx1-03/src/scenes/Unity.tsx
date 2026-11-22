import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.unity;
const {un1, un2, un3, un4} = t.cue;

export const Unity: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">生物界与非生物界的统一性和差异性</Header>
		<Cards
			top={180}
			height={310}
			titleSize={52}
			fontSize={36}
			items={[
				{
					title: '统一性',
					color: C.red,
					at: un1.from,
					body: <>看<Hl>元素种类</Hl><br />组成细胞的元素在无机自然界中都能找到</>,
					note: <>没有一种元素为细胞所特有</>,
				},
				{
					title: '差异性',
					color: C.orange,
					at: un3.from,
					body: <>看<Hl c={C.orange}>元素含量</Hl><br />细胞中各元素的相对含量与无机自然界大不相同</>,
					note: <>如 Si 在地壳中很多，在细胞中极少</>,
				},
			]}
		/>
		<Tip at={un4.from} top={540} label="解题方法">
			<Hl>种类</Hl>相同 → 统一性；<Hl c={C.orange}>含量</Hl>不同 → 差异性
		</Tip>
		<Narration t={t} />
	</Scene>
);
