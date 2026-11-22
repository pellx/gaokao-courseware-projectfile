import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.beer;
const {be1, be2, be3, be4, be5, be6} = t.cue;

export const Beer: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">在食品工业上的应用：啤酒生产</Header>
		<Flow
			style={{left: 90, top: 190}}
			fontSize={32}
			rows={[
				[
					{label: '发芽', note: '产生淀粉酶', at: be1.from},
					{label: '焙烤', note: '杀死胚，酶不失活', color: C.red, at: be2.from},
					{label: '碾磨', at: be2.from + 20},
					{label: '糖化', note: '淀粉 → 糖浆', at: be2.from + 40},
					{label: '蒸煮', note: '风味、终止酶、灭菌', color: C.orange, at: be3.from},
					{label: '发酵', note: '主发酵 + 后发酵', color: C.green, at: be4.from},
					{label: '消毒、终止', at: be4.from + 40},
				],
			]}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 360}}
			fontSize={30}
			gap={18}
			items={[
				{at: be4.from, color: C.green, children: <><Hl c={C.green}>主发酵</Hl>：酵母菌繁殖、大部分糖的分解和代谢物的生成</>},
				{at: be4.from + 40, color: C.green, children: <><Hl c={C.green}>后发酵</Hl>：在低温、密闭的环境下储存一段时间</>},
				{at: be5.from, children: <>其他：<Hl c={C.orange}>酱油</Hl>等传统产品；<Hl c={C.orange}>柠檬酸、味精</Hl>等食品添加剂；<Hl c={C.orange}>淀粉酶</Hl>等酶制剂</>},
			]}
		/>
		<Tip at={be6.from} top={700} label="易错">
			焙烤要<Hl>杀死种子的胚</Hl>，但<Hl>不能使淀粉酶失活</Hl>；蒸煮才对糖浆灭菌
		</Tip>
		<Narration t={t} />
	</Scene>
);
