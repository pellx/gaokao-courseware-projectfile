import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.prepare;
const {pr1, pr2, pr3, pr4} = t.cue;

export const Prepare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">受精前的准备</Header>
		<Def at={pr1.from} fontSize={31} style={{left: 90, right: 90, top: 165}}>
			<Hl>受精</Hl>：精子与卵子结合形成合子（受精卵）的过程，在<Hl c={C.orange}>输卵管</Hl>内完成
		</Def>
		<Cards
			top={300}
			height={300}
			titleSize={38}
			fontSize={31}
			gap={30}
			items={[
				{title: '精子：获能', color: C.red, at: pr2.from, body: <>刚排出的精子不能立即受精，要在雌性生殖道中发生生理变化后，才<Hl>获得受精能力</Hl></>},
				{title: '卵子：成熟到 MⅡ 期', color: C.orange, at: pr3.from, body: <>在输卵管内进一步成熟，到<Hl>MⅡ 期</Hl>时才具备与精子受精的能力</>},
			]}
		/>
		<Tip at={pr4.from} top={660} label="易错">
			获能不是获得能量，而是<Hl>获得受精能力</Hl>；体外受精时精子也要先<Hl>获能处理</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
