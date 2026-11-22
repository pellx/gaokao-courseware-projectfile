import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.kinds;
const {kd1, kd2, kd3, kd4, kd5} = t.cue;

export const Kinds: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">21 种氨基酸：必需与非必需</Header>
		<Cards
			top={170}
			height={230}
			fontSize={33}
			titleSize={44}
			items={[
				{title: '必需氨基酸  8 种', color: C.red, at: kd2.from, body: <>人体细胞<Hl>不能合成</Hl>，必须从外界环境中获取</>},
				{title: '非必需氨基酸  13 种', color: C.orange, at: kd3.from, body: <>人体细胞<Hl c={C.orange}>能够合成</Hl></>},
			]}
		/>
		<Def at={kd4.from} style={{left: 90, right: 90, top: 440}} fontSize={33}>
			口诀：<Hl c={C.orange}>甲 携 来 一 本 亮 色 书</Hl>
			<br />
			甲硫氨酸、缬氨酸、赖氨酸、异亮氨酸、苯丙氨酸、亮氨酸、色氨酸、苏氨酸
		</Def>
		<Tip at={kd5.from} top={650} label="解题方法">
			评价食物营养价值：看<Hl>必需氨基酸的种类和含量</Hl>（如玉米等谷类蛋白质缺少赖氨酸）
		</Tip>
		<Narration t={t} />
	</Scene>
);
