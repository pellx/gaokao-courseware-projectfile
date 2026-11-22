import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.variable;
const {vb1, vb2, vb3, vb4, vb5} = t.cue;

export const Variable: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">变量与对照实验</Header>
		<Rows
			style={{left: 90, right: 90, top: 170}}
			fontSize={31}
			gap={14}
			items={[
				{at: vb1.from, color: C.red, title: '自变量', children: <>人为改变的变量：温度、催化剂种类</>},
				{at: vb2.from, color: C.orange, title: '因变量', children: <>随自变量变化的变量：<F>H2O2</F> 分解速率（气泡多少、卫生香复燃程度）</>},
				{at: vb3.from, color: C.brown, title: '无关变量', children: <><F>H2O2</F> 的浓度和用量等，各组<Hl c={C.brown}>相同且适宜</Hl></>},
				{at: vb4.from, color: C.green, title: '对照实验', children: <>除自变量外其他因素都不变；分为<Hl c={C.green}>对照组</Hl>和实验组</>},
			]}
		/>
		<Tip at={vb5.from} top={640} label="解题方法">
			“探究<Hl>甲</Hl>对<Hl c={C.orange}>乙</Hl>的影响”：甲是自变量，乙是因变量；1 号试管是<Hl c={C.green}>对照组</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
