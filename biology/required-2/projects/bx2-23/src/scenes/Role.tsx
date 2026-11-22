import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.role;
const {ro1, ro2, ro3, ro4} = t.cue;

export const Role: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">隔离在物种形成中的作用</Header>
		<Def at={ro1.from} style={{left: 90, right: 90, top: 170}} fontSize={36}>
			<Hl>隔离</Hl>是物种形成的<Hl>必要条件</Hl>
		</Def>
		<Def at={ro2.from} style={{left: 90, right: 90, top: 280}} fontSize={36} color={C.red} soft={C.redSoft}>
			<Hl>生殖隔离</Hl>是新物种形成的<Hl>标志</Hl>
		</Def>
		<Cards
			top={400}
			height={150}
			fontSize={30}
			titleSize={38}
			items={[
				{title: '突变和基因重组', color: C.orange, at: ro3.from, body: '提供原材料'},
				{title: '自然选择', color: C.orange, at: ro3.from + 30, body: '决定进化方向'},
				{title: '隔离', color: C.red, at: ro3.from + 60, body: '物种形成的必要条件'},
			]}
		/>
		<Tip at={ro4.from} top={600} label="易错" fontSize={33}>
			地理隔离<Hl>不是</Hl>必要条件，<Hl>生殖隔离</Hl>才是
		</Tip>
		<Narration t={t} />
	</Scene>
);
