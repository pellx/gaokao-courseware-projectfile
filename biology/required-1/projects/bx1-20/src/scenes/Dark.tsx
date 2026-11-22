import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.dark;
const {dk1, dk2, dk3, dk4, dk5} = t.cue;

export const Dark: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">暗反应</Header>
		<Rows
			style={{left: 90, right: 90, top: 170}}
			fontSize={31}
			gap={14}
			items={[
				{at: dk1.from, color: C.green, title: '场所', children: <><Hl c={C.green}>叶绿体基质</Hl>；有光无光都能进行</>},
				{at: dk2.from, color: C.red, title: <>CO<sub>2</sub> 的固定</>, children: <><F>CO2</F> ＋ <F>C5</F> → <Hl>2<F>C3</F></Hl></>},
				{at: dk3.from, color: C.red, title: <>C<sub>3</sub> 的还原</>, children: <>2<F>C3</F> → <Hl>(CH<sub>2</sub>O)</Hl> ＋ <F>C5</F>（需 ATP、NADPH）</>},
				{at: dk4.from, color: C.orange, title: '能量变化', children: <>ATP、NADPH 中的化学能 → <Hl c={C.orange}>糖类等有机物中的化学能</Hl></>},
			]}
		/>
		<Tip at={dk5.from} top={610} label="易错">
			暗反应<Hl>不是只在黑暗中进行</Hl>；没有光，光反应停止，暗反应很快也停止
		</Tip>
		<Narration t={t} />
	</Scene>
);
