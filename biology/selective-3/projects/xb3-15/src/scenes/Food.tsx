import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.food;
const {fo1, fo2, fo3, fo4} = t.cue;

export const Food: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">在食品工业方面的应用</Header>
		<Cards
			top={190}
			height={230}
			titleSize={40}
			fontSize={32}
			gap={30}
			items={[
				{title: '食品工业用酶', color: C.red, at: fo1.from, body: <>如生产奶酪用的<Hl>凝乳酶</Hl></>},
				{title: '食品添加剂', color: C.orange, at: fo2.from, body: <>氨基酸、维生素等</>},
			]}
		/>
		<Cards
			top={460}
			height={150}
			titleSize={36}
			fontSize={32}
			items={[{title: '优点（与从动物组织中提取相比）', color: C.green, at: fo3.from, body: <><Hl c={C.green}>产量高、成本低</Hl>，不受原料来源的限制</>}]}
		/>
		<Tip at={fo4.from} top={670} label="解题方法">
			答优点时，从<Hl>产量、成本、原料</Hl>三个角度作答
		</Tip>
		<Narration t={t} />
	</Scene>
);
