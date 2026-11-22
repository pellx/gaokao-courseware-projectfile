import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.vectors;
const {ve1, ve2, ve3, ve4} = t.cue;

export const Vectors: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">其他载体</Header>
		<Cards
			top={190}
			height={200}
			titleSize={40}
			fontSize={30}
			gap={28}
			items={[
				{title: '质粒', color: C.brown, at: ve1.from, body: '最常用'},
				{title: '噬菌体', color: C.orange, at: ve1.from + 20, body: '侵染细菌的病毒'},
				{title: '动植物病毒', color: C.orange, at: ve1.from + 40, body: '侵染动植物细胞'},
			]}
		/>
		<Cards
			top={430}
			height={170}
			titleSize={34}
			fontSize={30}
			items={[
				{
					title: '人工改造',
					color: C.red,
					at: ve2.from,
					body: <>载体往往在天然载体基础上改造：病毒去除<Hl>致病性</Hl>，保留<Hl c={C.green}>侵染宿主细胞、整合 DNA</Hl> 的能力</>,
				},
			]}
		/>
		<Tip at={ve4.from} top={660} label="解题方法">
			判断能否作载体，看三个条件：<Hl>能复制、有切点、有标记</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
