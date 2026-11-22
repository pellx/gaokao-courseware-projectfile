import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.prokaryotes;
const {pk1, pk2, pk3, pk4, pk5} = t.cue;

export const Prokaryotes: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">常见的原核生物</Header>
		<Cards
			top={170}
			height={340}
			fontSize={31}
			items={[
				{title: '细菌', color: C.orange, at: pk1.from, body: <>球菌、杆菌、螺旋菌<br />如<Hl c={C.orange}>大肠杆菌、乳酸菌</Hl></>, note: '多数为异养生物'},
				{
					title: '蓝细菌',
					color: C.green,
					at: pk2.from,
					body: <>色球蓝细菌、颤蓝细菌、念珠蓝细菌、<Hl c={C.green}>发菜</Hl></>,
					note: <><Hl c={C.red}>无叶绿体</Hl>，含<Hl c={C.red}>藻蓝素和叶绿素</Hl>，能光合作用，是自养生物</>,
				},
				{title: '支原体', color: C.red, at: pk4.from, body: <><Hl>没有细胞壁</Hl></>, note: '可能是最小、最简单的单细胞生物'},
			]}
		/>
		<Tip at={pk5.from} top={550} label="易错">
			能光合作用<Hl>不一定有叶绿体</Hl>（蓝细菌）；水华是蓝细菌等大量繁殖造成的
		</Tip>
		<Narration t={t} />
	</Scene>
);
