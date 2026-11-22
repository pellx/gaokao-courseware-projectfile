import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {Synapse} from '../components/Synapse';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Process: React.FC = () => {
	const frame = useCurrentFrame();
	const release = interpolate(frame, [tp1.from + 20, tp1.to], [0, 1], clamp);
	const bind = interpolate(frame, [tp2.from + 20, at(tp2.from, tp2.to, 0.6)], [0, 1], clamp);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点二">兴奋的传递过程</Header>
			<Appear at={tp1.from} style={{position: 'absolute', left: 60, top: 165}}>
				<Synapse release={release} bind={bind} />
			</Appear>
			<div style={{position: 'absolute', left: 1080, right: 80, top: 190, display: 'flex', flexDirection: 'column', gap: 18, fontSize: 30, lineHeight: 1.5}}>
				<Appear at={tp1.from}>
					① 突触小泡与前膜融合，<Hl>胞吐</Hl>释放递质
				</Appear>
				<Appear at={tp2.from}>
					② 递质扩散通过突触间隙
				</Appear>
				<Appear at={at(tp2.from, tp2.to, 0.4)}>
					③ 与后膜上的<Hl c={C.green}>特异性受体</Hl>结合
				</Appear>
				<Appear at={at(tp2.from, tp2.to, 0.7)}>
					④ 后膜电位变化 → 兴奋或抑制
				</Appear>
			</div>
			<Appear at={tp3.from} style={{position: 'absolute', left: 1080, top: 470}}>
				<Chain
					fontSize={30}
					gap={10}
					arrows={['突触小体', '突触后膜']}
					steps={[
						{label: '电信号', color: C.orange, at: tp3.from},
						{label: '化学信号', color: C.red, at: tp3.from + 15},
						{label: '电信号', color: C.green, at: tp3.from + 30},
					]}
				/>
			</Appear>
			<Appear at={tp4.from} style={{position: 'absolute', left: 1080, right: 80, top: 600}}>
				<Callout label="考法" style={{fontSize: 28, padding: '12px 22px'}}>
					胞吐<Hl c={C.orange}>消耗能量</Hl>、体现膜的<Hl c={C.orange}>流动性</Hl>；突触小体内<Hl c={C.orange}>线粒体</Hl>多
				</Callout>
			</Appear>
			<Appear at={tp5.from} style={{position: 'absolute', left: 90, width: 940, top: 780}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 27, padding: '12px 22px'}}>
					突触小体：<Hl c={C.orange}>电→化学</Hl>；突触后膜：<Hl c={C.green}>化学→电</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
