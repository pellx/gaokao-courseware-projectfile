import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Punnett} from '../components/gene';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.explain;
const {ex1, ex2, ex3, ex4} = t.cue;
const tone = (g: string) => (g.includes('W') ? C.red : C.brown);
const note = (g: string) => (g.includes('Y') ? (g.includes('W') ? '红眼♂' : '白眼♂') : '红眼♀');

export const Explain: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">摩尔根的解释：白眼基因位于 X 染色体上</Header>
		<Rows
			style={{left: 90, width: 900, top: 175}}
			fontSize={31}
			gap={18}
			items={[
				{at: ex1.from, color: C.red, title: '假设', children: <>白眼基因 w 在 <Hl>X 染色体</Hl>上，<Hl>Y 上没有它的等位基因</Hl></>},
				{at: ex2.from, color: C.orange, title: 'P', children: <>{chem('X^[W]X^[W]')}（红眼♀）× {chem('X^[w]Y')}（白眼♂）</>},
				{at: ex2.from + 60, color: C.orange, title: <>F<sub>1</sub></>, children: <>{chem('X^[W]X^[w]')}（红眼♀）、{chem('X^[W]Y')}（红眼♂）</>},
				{at: ex3.from, color: C.brown, title: <>F<sub>2</sub></>, children: <>雌全红眼；雄红眼∶白眼 ＝ 1∶1，<Hl c={C.brown}>白眼只在雄性</Hl></>},
			]}
		/>
		<Punnett
			style={{left: 1100, top: 210}}
			at={ex3.from}
			cell={140}
			fontSize={36}
			corner="♀  ♂"
			cols={['X^[W]', 'Y']}
			rows={['X^[W]', 'X^[w]']}
			cells={[['X^[W]X^[W]', 'X^[W]Y'], ['X^[W]X^[w]', 'X^[w]Y']]}
			color={tone}
			note={note}
		/>
		<Tip at={ex4.from} top={720} label="考法" fontSize={32}>
			伴性遗传的基因写在 <Hl>X 的右上角</Hl>（如 {chem('X^[W]')}）；雄性写成 {chem('X^[w]Y')}，Y 上不写基因
		</Tip>
		<Narration t={t} />
	</Scene>
);
