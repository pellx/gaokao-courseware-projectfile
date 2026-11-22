import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.aging;
const {ag1, ag2, ag3} = t.cue;

export const Aging: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">个体衰老与细胞衰老的关系</Header>
		<Cards
			top={175}
			height={200}
			fontSize={33}
			titleSize={44}
			items={[
				{title: '单细胞生物', color: C.orange, at: ag1.from, body: <>细胞的衰老或死亡 ＝ <Hl c={C.orange}>个体的衰老或死亡</Hl></>},
				{title: '多细胞生物', color: C.red, at: ag2.from, body: <>两者<Hl>不是一回事</Hl>；个体衰老是细胞<Hl>普遍衰老</Hl>的过程</>},
			]}
		/>
		<Tip at={ag3.from} top={430} label="易错">
			幼年个体中也有衰老的细胞；老年个体中也有新生的细胞（如造血干细胞仍在分裂）
		</Tip>
		<Narration t={t} />
	</Scene>
);
