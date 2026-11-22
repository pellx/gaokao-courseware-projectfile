import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.steps;
const {sp1, sp2, sp3, sp4, sp5} = t.cue;

export const Steps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">实验步骤与试剂的作用</Header>
		<Rows
			style={{left: 90, right: 90, top: 165}}
			fontSize={31}
			gap={14}
			items={[
				{at: sp1.from, color: C.green, title: '研磨', children: <><F>SiO2</F>：研磨充分；<F>CaCO3</F>：<Hl>防止色素被破坏</Hl>；无水乙醇：溶解色素</>},
				{at: sp2.from, color: C.green, title: '过滤', children: <>单层尼龙布过滤，收集滤液</>},
				{at: sp3.from, color: C.orange, title: '画滤液细线', children: <>细、直、齐；干后重复画一两次 → 色素<Hl c={C.orange}>多而集中</Hl></>},
				{at: sp4.from, color: C.red, title: '层析', children: <><Hl>层析液不能没及滤液细线</Hl>（否则色素溶入层析液）</>},
			]}
		/>
		<Tip at={sp5.from} top={640} label="解题方法">
			<F>SiO2</F> 助研磨，<F>CaCO3</F> 护色素，无水乙醇溶色素，层析液分色素
		</Tip>
		<Narration t={t} />
	</Scene>
);
