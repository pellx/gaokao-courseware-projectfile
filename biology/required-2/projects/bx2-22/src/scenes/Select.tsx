import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.select;
const {se1, se2, se3, se4} = t.cue;

export const Select: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">自然选择决定生物进化的方向</Header>
		<Appear at={se1.from} style={{position: 'absolute', left: 90, top: 170, width: 560, height: 420}}>
			<Photo src="images/moths.jpg" caption="桦尺蛾的黑色型与浅色型" style={{width: '100%', height: '100%'}} pos="55% 50%" />
		</Appear>
		<Rows
			style={{left: 700, right: 90, top: 180}}
			fontSize={30}
			gap={18}
			items={[
				{at: se1.from, color: C.brown, title: '污染前', children: <>树干浅色，浅色蛾不易被发现 → s 频率高</>},
				{at: se2.from, color: C.red, title: '污染后', children: <>树干变黑，黑色蛾存活繁殖多 → S 频率<Hl>逐代升高</Hl></>},
				{at: se3.from, color: C.orange, title: '结论', children: <>自然选择使基因频率<Hl c={C.orange}>定向改变</Hl></>},
			]}
		/>
		<Tip at={se4.from} top={660} label="考法" fontSize={33}>
			进化的实质：种群<Hl>基因频率</Hl>的改变（不是基因型频率）；基因频率改变 ＝ 生物进化了
		</Tip>
		<Narration t={t} />
	</Scene>
);
