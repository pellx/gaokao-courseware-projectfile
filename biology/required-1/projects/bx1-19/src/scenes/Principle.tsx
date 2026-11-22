import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.principle;
const {pc1, pc2, pc3} = t.cue;

export const Principle: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">色素提取和分离的原理</Header>
		<Cards
			top={175}
			height={300}
			fontSize={34}
			titleSize={44}
			items={[
				{title: '提取', color: C.green, at: pc1.from, body: <>色素能溶解在有机溶剂<Hl c={C.green}>无水乙醇</Hl>中</>},
				{title: '分离（纸层析法）', color: C.orange, at: pc2.from, body: <>各色素在<Hl c={C.orange}>层析液</Hl>中<Hl>溶解度不同</Hl>：溶解度高的扩散快</>},
			]}
		/>
		<Tip at={pc3.from} top={530} label="易错">
			<Hl>提取用无水乙醇，分离用层析液</Hl>，两者不能混用
		</Tip>
		<Narration t={t} />
	</Scene>
);
