import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.law;
const {la1, la2, la3, la4} = t.cue;

export const Law: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">分离定律的内容与适用范围</Header>
		<Def at={la1.from} style={{left: 90, right: 90, top: 170}} fontSize={36}>
			体细胞中，控制同一性状的遗传因子<Hl c={C.orange}>成对存在、不相融合</Hl>；<br />
			在<Hl>形成配子</Hl>时，成对的遗传因子<Hl>发生分离</Hl>，分别进入不同的配子中，随配子遗传给后代
		</Def>
		<Cards
			top={400}
			height={170}
			fontSize={30}
			titleSize={40}
			items={[
				{title: '真核生物', color: C.orange, at: la3.from, body: '原核生物、病毒不遵循'},
				{title: '有性生殖', color: C.orange, at: la3.from + 20, body: '无性生殖不遵循'},
				{title: '细胞核遗传', color: C.orange, at: la3.from + 40, body: '细胞质遗传不遵循'},
				{title: '一对相对性状', color: C.orange, at: la3.from + 60, body: '一对遗传因子控制'},
			]}
		/>
		<Tip at={la4.from} top={620} label="易错" fontSize={33}>
			原核生物、病毒、细胞质遗传<Hl>不遵循</Hl>分离定律；分离发生在<Hl>形成配子时</Hl>，不是受精时
		</Tip>
		<Narration t={t} />
	</Scene>
);
