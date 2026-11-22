import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.embryo;
const {em1, em2, em3} = t.cue;

export const Embryo: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">胚胎学证据</Header>
		<Cards
			top={190}
			height={300}
			fontSize={36}
			titleSize={46}
			items={[
				{title: '现象', color: C.red, at: em1.from, body: <>人、鱼、鸡、猪等脊椎动物，胚胎发育<Hl>早期都很相似</Hl></>},
				{title: '例', color: C.orange, at: em2.from, body: <>胚胎早期都有<Hl c={C.orange}>鳃裂和尾</Hl>；人的鳃裂和尾后来消失</>},
			]}
		/>
		<Tip at={em3.from} top={550} label="考法" fontSize={34}>
			早期胚胎相似 → 有<Hl>共同祖先</Hl>；鱼的鳃裂发育成鳃、人的消失 → 人和鱼的祖先都生活在<Hl>水中</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
