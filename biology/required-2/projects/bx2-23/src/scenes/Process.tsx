import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pr1, pr2, pr3, pr4, pr5} = t.cue;

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">物种形成的一般过程（地雀）</Header>
		<Appear at={pr1.from} style={{position: 'absolute', left: 90, top: 170, width: 520, height: 420}}>
			<Photo src="images/finches.jpg" caption="不同岛屿地雀的喙形不同" style={{width: '100%', height: '100%', background: '#fff'}} fit="contain" />
		</Appear>
		<Rows
			style={{left: 660, right: 90, top: 175}}
			fontSize={29}
			gap={14}
			badge={(i) => i + 1}
			items={[
				{at: pr1.from, color: C.orange, title: '地理隔离', children: <>迁到各岛，种群间无基因交流</>},
				{at: pr2.from, color: C.orange, title: '突变和重组', children: <>各种群出现不同的可遗传变异</>},
				{at: pr3.from, color: C.red, title: '自然选择', children: <>环境不同，基因频率<Hl>向不同方向</Hl>改变</>},
				{at: pr4.from, color: C.red, title: '生殖隔离', children: <>基因库差异很大 → <Hl>新物种</Hl></>},
			]}
		/>
		<Tip at={pr5.from} top={650} label="考法" fontSize={32}>
			地理隔离 → 突变和重组 ＋ 自然选择 → 基因库差异 → <Hl>生殖隔离</Hl>（新物种）
		</Tip>
		<Narration t={t} />
	</Scene>
);
