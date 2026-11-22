import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.method;
const {mt1, mt3, mt4} = t.cue;

export const Method: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">类比推理与假说—演绎法</Header>
		<Cards
			top={190}
			height={300}
			fontSize={34}
			titleSize={44}
			items={[
				{title: '萨顿：类比推理', color: C.orange, at: mt1.from, body: <>根据基因与染色体行为的<Hl c={C.orange}>相似性</Hl>，推出基因在染色体上</>, note: <>结论<Hl>不一定正确</Hl>，需要实验检验</>},
				{title: '摩尔根：假说—演绎法', color: C.green, at: mt3.from, body: <>通过果蝇杂交实验和测交，<Hl c={C.green}>证明</Hl>基因在染色体上</>, note: '提出问题 → 假说 → 演绎 → 实验检验'},
			]}
		/>
		<Tip at={mt4.from} top={550} label="易错" fontSize={34}>
			萨顿<Hl>提出</Hl>假说，摩尔根<Hl>证明</Hl>假说；摩尔根起初并不相信孟德尔和萨顿的观点
		</Tip>
		<Narration t={t} />
	</Scene>
);
