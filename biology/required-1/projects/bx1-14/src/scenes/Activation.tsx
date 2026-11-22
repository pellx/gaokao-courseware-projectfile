import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.activation;
const {av1, av2, av3, av4} = t.cue;

export const Activation: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">酶的作用原理：降低活化能</Header>
		<Def at={av1.from} style={{left: 90, right: 90, top: 165}} fontSize={33}>
			<Hl>活化能</Hl>：分子从常态转变为容易发生化学反应的活跃状态所需要的能量
		</Def>
		<Cards
			top={310}
			height={230}
			fontSize={32}
			titleSize={40}
			items={[
				{title: '加热', color: C.orange, at: av2.from, body: <>为反应物<Hl c={C.orange}>提供能量</Hl></>},
				{title: '无机催化剂', color: C.brown, at: av2.from + 40, body: <><Hl c={C.brown}>降低活化能</Hl></>},
				{title: '酶', color: C.red, at: av3.from, body: <>降低活化能的作用<Hl>更显著</Hl> → 高效</>},
			]}
		/>
		<Tip at={av4.from} top={590} label="易错">
			酶<Hl>不提供能量</Hl>，不改变反应的平衡点，只加快反应速率
		</Tip>
		<Narration t={t} />
	</Scene>
);
