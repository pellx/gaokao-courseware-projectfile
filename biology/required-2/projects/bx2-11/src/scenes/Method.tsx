import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.method;
const {me1, me2, me3, me4} = t.cue;

export const Method: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">实验中的科学方法</Header>
		<Cards
			top={190}
			height={330}
			fontSize={33}
			titleSize={40}
			items={[
				{title: '同位素标记技术', color: C.red, at: me1.from, body: <><sup>15</sup>N、<sup>14</sup>N 区分<Hl>亲代链和子代链</Hl></>},
				{title: '密度梯度离心', color: C.orange, at: me2.from, body: <>密度不同的 DNA 分成<Hl c={C.orange}>不同的带</Hl></>},
				{title: '假说—演绎法', color: C.green, at: me3.from, body: <>提出假说 → 预测离心结果 → <Hl c={C.green}>实验检验</Hl></>},
			]}
		/>
		<Tip at={me4.from} top={580} label="易错" fontSize={34}>
			<sup>15</sup>N、<sup>14</sup>N 是<Hl>稳定同位素</Hl>，<Hl>没有放射性</Hl>；靠<Hl>密度</Hl>区分，不是检测放射性
		</Tip>
		<Narration t={t} />
	</Scene>
);
