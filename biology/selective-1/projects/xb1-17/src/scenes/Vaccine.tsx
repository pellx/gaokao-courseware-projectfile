import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.vaccine;
const {vc1, vc2, vc3, vc4, vc5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Vaccine: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">疫苗的原理</Header>
		<Appear at={vc1.from} style={{position: 'absolute', right: 90, top: 175, width: 560, height: 380}}>
			<Photo src="images/jenner.jpg" caption="1796年，琴纳接种牛痘" style={{width: '100%', height: '100%'}} pos="50% 40%" />
		</Appear>
		<Appear at={vc1.from} style={{position: 'absolute', left: 90, width: 1110, top: 180, fontSize: 32, fontWeight: 800, lineHeight: 1.5}}>
			疫苗：<Hl c={C.orange}>灭活的</Hl>或<Hl c={C.orange}>减毒的</Hl>病原体制成的生物制品
			<br />
			<Appear at={vc2.from} dy={8}>
				保留<Hl>抗原性</Hl>，但<Hl c={C.green}>不使人患病</Hl>
			</Appear>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 330}}>
			<Chain
				fontSize={30}
				gap={10}
				steps={[
					{label: '接种疫苗', color: C.orange, at: at(vc2.from, vc2.to, 0.5)},
					{label: '抗体 + 记忆细胞', color: C.red, at: at(vc2.from, vc2.to, 0.75)},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 90, top: 430}}>
			<Chain
				fontSize={30}
				gap={10}
				steps={[
					{label: '病原体侵入', color: C.red, at: vc3.from},
					{label: '记忆细胞增殖、分化', color: C.orange, at: at(vc3.from, vc3.to, 0.3)},
					{label: '二次免疫', color: C.green, at: at(vc3.from, vc3.to, 0.6)},
				]}
			/>
		</div>
		<Appear at={vc4.from} style={{position: 'absolute', left: 90, width: 1110, top: 540, fontSize: 30, fontWeight: 700}}>
			多次接种 → 产生<Hl c={C.orange}>更多的抗体和记忆细胞</Hl>，增强免疫效果
		</Appear>
		<Appear at={vc5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				疫苗相当于<Hl>抗原</Hl>，不是抗体；接种间隔太短，前次的抗体会与疫苗结合，影响效果
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
