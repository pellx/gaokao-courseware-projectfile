import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.diversity;
const {dv1, dv2, dv3, dv4} = t.cue;

export const Diversity: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">DNA 的多样性、特异性和稳定性</Header>
		<Cards
			top={190}
			height={330}
			fontSize={34}
			titleSize={46}
			items={[
				{title: '多样性', color: C.orange, at: dv1.from, body: <>碱基对的<Hl c={C.orange}>排列顺序</Hl>千变万化</>, note: <>n 个碱基对 → 4<sup>n</sup> 种排列</>},
				{title: '特异性', color: C.red, at: dv2.from, body: <>每个 DNA 有<Hl>特定的</Hl>碱基排列顺序</>},
				{title: '稳定性', color: C.green, at: dv3.from, body: <>外侧骨架稳定，碱基对之间有<Hl c={C.green}>氢键</Hl></>},
			]}
		/>
		<Tip at={dv4.from} top={580} label="易错" fontSize={34}>
			4<sup>n</sup> 中的 n 是<Hl>碱基对数</Hl>，不是碱基数；遗传信息蕴藏在<Hl>碱基的排列顺序</Hl>中
		</Tip>
		<Narration t={t} />
	</Scene>
);
