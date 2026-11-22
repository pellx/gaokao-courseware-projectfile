import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.xd;
const {xd1, xd2, xd3, xd4, xd5} = t.cue;

export const Xd: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">伴 X 显性遗传：抗维生素 D 佝偻病</Header>
		<Def at={xd1.from} style={{left: 90, right: 90, top: 170}} fontSize={34}>
			致病基因 D 为<Hl>显性</Hl>，位于 <Hl>X 染色体</Hl>上：女患者 X<sup>D</sup>X<sup>D</sup>、X<sup>D</sup>X<sup>d</sup>，男患者 X<sup>D</sup>Y
		</Def>
		<Cards
			top={300}
			height={280}
			fontSize={33}
			titleSize={42}
			items={[
				{title: '女多于男', color: C.red, at: xd2.from, body: <>只要有一个 X<sup>D</sup> 就患病；X<sup>D</sup>X<sup>d</sup> 病症较轻</>},
				{title: '连续遗传', color: C.orange, at: xd3.from, body: <>往往<Hl c={C.orange}>代代都有</Hl>患者</>},
				{title: '男病母女必病', color: C.red, at: xd4.from, body: <>男患者的 X<sup>D</sup> 来自母亲、传给女儿</>},
			]}
		/>
		<Tip at={xd5.from} top={630} label="解题方法" fontSize={33}>
			有男患者的<Hl>母亲或女儿正常</Hl> → 一定<Hl>不是</Hl>伴 X 显性遗传
		</Tip>
		<Narration t={t} />
	</Scene>
);
