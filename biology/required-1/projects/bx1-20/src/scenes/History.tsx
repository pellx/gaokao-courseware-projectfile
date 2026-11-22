import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.history;
const {hs1, hs2, hs3, hs4, hs5} = t.cue;

export const History: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">探索光合作用原理的部分实验</Header>
		<Rows
			style={{left: 90, right: 90, top: 165}}
			fontSize={30}
			gap={14}
			items={[
				{at: hs1.from, color: C.orange, title: '希尔', children: <>离体叶绿体 ＋ 铁盐等氧化剂，光照下释放 <F>O2</F>（<Hl c={C.orange}>希尔反应</Hl>）</>},
				{at: hs2.from, color: C.red, title: '鲁宾和卡门', children: <><F>^18O</F> 分别标记 <F>H2O</F> 和 <F>CO2</F> → <Hl><F>O2</F> 全部来自水</Hl></>},
				{at: hs3.from, color: C.orange, title: '阿尔农', children: <>光照下叶绿体合成 ATP，总与<Hl c={C.orange}>水的光解相伴随</Hl></>},
				{at: hs4.from, color: C.green, title: '卡尔文', children: <><F>^14C</F> 标记 <F>CO2</F> → 探明碳的转移途径（<Hl c={C.green}>卡尔文循环</Hl>）</>},
			]}
		/>
		<Tip at={hs5.from} top={640} label="易错">
			<F>^18O</F> 是<Hl>稳定同位素</Hl>，无放射性；<F>^14C</F> 有放射性
		</Tip>
		<Narration t={t} />
	</Scene>
);
