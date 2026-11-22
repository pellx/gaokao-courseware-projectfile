import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.law;
const {lw1, lw2, lw3, lw4} = t.cue;

export const Law: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">自由组合定律的内容</Header>
		<Def at={lw1.from} style={{left: 90, right: 90, top: 170}} fontSize={36}>
			控制不同性状的遗传因子的分离和组合是<Hl c={C.orange}>互不干扰</Hl>的；
			<br />
			在<Hl>形成配子</Hl>时，决定同一性状的成对的遗传因子<Hl>彼此分离</Hl>，决定不同性状的遗传因子<Hl>自由组合</Hl>
		</Def>
		<Cards
			top={410}
			height={180}
			fontSize={32}
			titleSize={40}
			items={[
				{title: '时间', color: C.red, at: lw3.from, body: <>形成配子时</>},
				{title: '关系', color: C.orange, at: lw3.from + 30, body: <>分离与组合同时进行</>},
				{title: '对象', color: C.green, at: lw3.from + 60, body: <>控制不同性状的遗传因子</>},
			]}
		/>
		<Tip at={lw4.from} top={640} label="易错" fontSize={34}>
			自由组合发生在<Hl>形成配子时</Hl>；受精时雌雄配子的<Hl>随机结合</Hl>不叫自由组合
		</Tip>
		<Narration t={t} />
	</Scene>
);
