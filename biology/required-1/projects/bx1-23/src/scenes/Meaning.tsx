import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning;
const {mn1, mn2, mn3} = t.cue;

export const Meaning: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">有丝分裂的意义</Header>
		<Cards
			top={180}
			height={250}
			fontSize={34}
			titleSize={44}
			items={[
				{title: '过程', color: C.orange, at: mn1.from, body: <>染色体复制后<Hl c={C.orange}>精确地平均分配</Hl>到两个子细胞中</>},
				{title: '意义', color: C.red, at: mn2.from, body: <>保持亲子代细胞之间<Hl>遗传的稳定性</Hl></>},
			]}
		/>
		<Tip at={mn3.from} top={490} label="易错">
			平均分配的是<Hl>细胞核中的 DNA</Hl>；细胞质 DNA（如线粒体 DNA）<Hl c={C.orange}>随机、不均等</Hl>分配
		</Tip>
		<Narration t={t} />
	</Scene>
);
