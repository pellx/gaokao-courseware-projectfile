import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.reaction;
const {rx1, rx2, rx3, rx4} = t.cue;

export const Reaction: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">吸能反应与放能反应</Header>
		<Cards
			top={175}
			height={260}
			fontSize={32}
			titleSize={42}
			items={[
				{title: '吸能反应 ↔ ATP 水解', color: C.red, at: rx1.from, body: <>由 ATP 水解<Hl>提供能量</Hl></>, note: '蛋白质合成、主动运输、肌肉收缩'},
				{title: '放能反应 ↔ ATP 合成', color: C.green, at: rx2.from, body: <>释放的能量<Hl c={C.green}>储存在 ATP 中</Hl></>, note: '葡萄糖的氧化分解'},
			]}
		/>
		<Def at={rx3.from} style={{left: 90, right: 90, top: 480}} fontSize={34}>
			能量通过 ATP 在两类反应之间流通 → ATP 是细胞的<Hl>能量“货币”</Hl>
		</Def>
		<Tip at={rx4.from} top={610} label="解题方法">
			<Hl>耗能</Hl>的反应伴随 ATP 水解，<Hl c={C.green}>放能</Hl>的反应伴随 ATP 合成
		</Tip>
		<Narration t={t} />
	</Scene>
);
