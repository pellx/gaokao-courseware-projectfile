import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.light;
const {lt1, lt2, lt3, lt4} = t.cue;

export const Light: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">光反应</Header>
		<Rows
			style={{left: 90, right: 90, top: 170}}
			fontSize={31}
			gap={14}
			items={[
				{at: lt1.from, color: C.green, title: '场所', children: <><Hl c={C.green}>类囊体薄膜</Hl>；条件：光、色素、酶</>},
				{at: lt2.from, color: C.red, title: '水的光解', children: <><F>H2O</F> → <F>O2</F> ＋ <F>H^+</F></>},
				{at: lt2.from + 40, color: C.red, title: 'NADPH 形成', children: <><F>NADP^+</F> ＋ <F>H^+</F> → <Hl>NADPH</Hl></>},
				{at: lt2.from + 80, color: C.red, title: 'ATP 形成', children: <>ADP ＋ Pi → <Hl>ATP</Hl></>},
				{at: lt3.from, color: C.orange, title: '能量变化', children: <>光能 → <Hl c={C.orange}>ATP 和 NADPH 中的化学能</Hl></>},
			]}
		/>
		<Tip at={lt4.from} top={700} label="易错">
			<F>O2</F> 释放到外界或用于呼吸；<Hl>ATP 和 NADPH</Hl> 用于暗反应
		</Tip>
		<Narration t={t} />
	</Scene>
);
