import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning;
const {me1, me2, me3, me4} = t.cue;

export const Meaning: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">细胞学说的意义</Header>
		<Flow
			style={{left: 90, top: 190}}
			fontSize={36}
			rows={[
				[
					{label: '动植物都由细胞构成', at: me1.from},
					{label: '动物和植物的统一性', color: C.orange, at: me1.from + 30},
					{label: '生物界的统一性', color: C.red, at: me1.from + 60},
				],
				[
					{label: '器官、组织水平', at: me2.from},
					{label: '细胞水平', color: C.orange, at: me2.from + 30},
					{label: '为分子水平打下基础', at: me2.from + 60},
				],
			]}
			arrows={[[undefined, '揭示', '阐明'], [undefined, '进入', '']]}
		/>
		<Cards
			top={470}
			height={210}
			fontSize={32}
			items={[
				{title: '揭示了', color: C.green, at: me3.from, body: <>生物界的<Hl c={C.green}>统一性</Hl>；为<Hl c={C.green}>生物进化论</Hl>的确立埋下伏笔（生物可能有共同祖先）</>},
				{title: '没有揭示', color: C.red, at: me4.from, body: <>生物界的<Hl>多样性</Hl>；动植物细胞的<Hl>区别</Hl>；原核细胞和病毒</>},
			]}
		/>
		<Tip at={me4.from} top={730} label="易错">
			见到“揭示了多样性”“揭示了动植物细胞的差异”就是<Hl>错误</Hl>说法——细胞学说讲的只有统一性
		</Tip>
		<Narration t={t} />
	</Scene>
);
