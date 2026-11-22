import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning;
const {mn1, mn2, mn3} = t.cue;

export const Meaning: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">细胞分化的意义</Header>
		<Cards
			top={180}
			height={190}
			fontSize={34}
			titleSize={44}
			items={[
				{title: '个体发育的基础', color: C.red, at: mn1.from, body: <>形成不同的<Hl>组织和器官</Hl></>},
				{title: '细胞专门化', color: C.orange, at: mn2.from, body: <>有利于<Hl c={C.orange}>提高生理功能的效率</Hl></>},
			]}
		/>
		<Tip at={mn3.from} top={430} label="易错">
			分化后<Hl>核遗传物质不变</Hl>；分化<Hl c={C.orange}>不改变细胞数目</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
