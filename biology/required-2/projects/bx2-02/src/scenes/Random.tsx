import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.random;
const {ra1, ra2, ra3, ra4} = t.cue;

export const Random: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">自交与自由交配</Header>
		<Def at={ra1.from} style={{left: 90, right: 90, top: 165}} fontSize={36}>
			群体中 AA∶Aa = 1∶2，即 AA 占 1/3，Aa 占 2/3
		</Def>
		<Cards
			top={280}
			height={360}
			fontSize={33}
			titleSize={42}
			items={[
				{
					title: '自交',
					color: C.orange,
					at: ra2.from,
					body: (
						<>
							只有 Aa 自交产生 aa：<br />
							aa = 2/3 × 1/4 = <Hl>1/6</Hl>
							<br />
							AA∶Aa∶aa = <Hl c={C.orange}>3∶2∶1</Hl>
						</>
					),
					note: '同种基因型之间交配',
				},
				{
					title: '自由交配（配子法）',
					color: C.green,
					at: ra3.from,
					body: (
						<>
							配子 A = 2/3，a = 1/3
							<br />
							aa = 1/3 × 1/3 = <Hl>1/9</Hl>
							<br />
							AA∶Aa∶aa = <Hl c={C.green}>4∶4∶1</Hl>
						</>
					),
					note: '所有个体随机交配',
				},
			]}
		/>
		<Tip at={ra4.from} top={680} label="易错" fontSize={33}>
			自交 ≠ 自由交配；自由交配用<Hl>配子法</Hl>：先算配子比例，再随机结合，不要逐对相加
		</Tip>
		<Narration t={t} />
	</Scene>
);
