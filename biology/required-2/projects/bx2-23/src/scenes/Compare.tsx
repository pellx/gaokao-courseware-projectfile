import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cp1, cp2, cp3} = t.cue;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">生物进化与物种形成的辨析</Header>
		<Cards
			top={190}
			height={260}
			fontSize={36}
			titleSize={46}
			items={[
				{title: '生物进化', color: C.orange, at: cp1.from, body: <>标志：种群<Hl c={C.orange}>基因频率的改变</Hl></>},
				{title: '新物种形成', color: C.red, at: cp2.from, body: <>标志：<Hl>生殖隔离</Hl>的形成</>},
			]}
		/>
		<Tip at={cp3.from} top={510} label="解题方法" fontSize={34}>
			<Hl>进化不一定形成新物种</Hl>（如桦尺蛾黑色型增多），但新物种形成<Hl>一定发生了进化</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
