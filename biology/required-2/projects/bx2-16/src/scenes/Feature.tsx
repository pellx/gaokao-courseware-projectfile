import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.feature;
const {fe1, fe2, fe3, fe4} = t.cue;

export const Feature: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">基因突变的原因和特点</Header>
		<Def at={fe1.from} style={{left: 90, right: 90, top: 165}} fontSize={30}>
			诱发因素：<Hl c={C.orange}>物理</Hl>（紫外线、X 射线）、<Hl c={C.orange}>化学</Hl>（亚硝酸盐、碱基类似物）、<Hl c={C.orange}>生物</Hl>（某些病毒）
		</Def>
		<Def at={fe2.from} style={{left: 90, right: 90, top: 265}} fontSize={30} color={C.muted} soft={C.panel}>
			无外界诱发时，DNA 复制偶尔出错 → <Hl c={C.text}>自发突变</Hl>
		</Def>
		<Cards
			top={370}
			height={180}
			fontSize={28}
			titleSize={38}
			items={[
				{title: '普遍性', color: C.red, at: fe3.from, body: '所有生物都可能发生'},
				{title: '随机性', color: C.red, at: fe3.from + 40, body: '任何时期、任何 DNA、任何部位'},
				{title: '不定向性', color: C.red, at: fe3.from + 80, body: '可突变成多个等位基因'},
				{title: '低频性', color: C.red, at: fe3.from + 120, body: '自然状态下频率很低'},
			]}
		/>
		<Tip at={fe4.from} top={600} label="易错" fontSize={34}>
			基因突变<Hl>不定向</Hl>；外界因素只<Hl>提高突变频率</Hl>，不能决定突变方向
		</Tip>
		<Narration t={t} />
	</Scene>
);
