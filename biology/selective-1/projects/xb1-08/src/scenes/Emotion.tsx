import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {Chain} from '../components/kit';
import {Synapse} from '../components/Synapse';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.emotion;
const {em1, em2, em3, em4, em5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Emotion: React.FC = () => {
	const pumps = useRamp(em4.from, 16);
	const blocked = useRamp(at(em4.from, em4.to, 0.4), 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点五">情绪与抑郁</Header>
			<Appear at={em1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 34, fontWeight: 800}}>
				情绪：大脑的<Hl>高级功能</Hl>之一，是人对环境作出的反应
			</Appear>
			<div style={{position: 'absolute', left: 90, top: 270}}>
				<Chain
					fontSize={34}
					gap={12}
					arrows={['达到一定程度', '持续、得不到缓解']}
					steps={[
						{label: '消极情绪', at: em2.from},
						{label: '抑郁', color: C.orange, at: at(em2.from, em2.to, 0.2)},
						{label: '抑郁症', color: C.red, at: em3.from},
					]}
				/>
			</div>
			<Appear at={at(em2.from, em2.to, 0.5)} style={{position: 'absolute', left: 90, top: 400, width: 900, fontSize: 29, fontWeight: 700, lineHeight: 1.6}}>
				抑郁：通常短期，可通过<Hl c={C.green}>自我调适、他人支持、心理咨询</Hl>好转
				<Appear at={em3.from + 20} dy={0}>
					抑郁症：需要<Hl>专业治疗</Hl>
				</Appear>
			</Appear>
			<Appear at={em4.from} style={{position: 'absolute', left: 1090, top: 160}}>
				<div style={{transform: 'scale(0.75)', transformOrigin: 'top left'}}>
					<Synapse release={1} transporter={pumps} blocked={blocked} dot={C.green} labels={0} />
				</div>
			</Appear>
			<Appear at={at(em4.from, em4.to, 0.4)} style={{position: 'absolute', left: 1090, right: 90, top: 630, fontSize: 28, fontWeight: 700, lineHeight: 1.5}}>
				抗抑郁药：抑制前膜对<Hl c={C.green}>5-羟色胺</Hl>的回收 → 间隙中浓度维持在一定水平
			</Appear>
			<Appear at={em5.from} style={{position: 'absolute', left: 90, width: 940, top: 600}}>
				<Callout label="考法" style={{fontSize: 29}}>
					联系突触：抑制递质回收 → 递质在突触间隙中<Hl c={C.green}>保留更久</Hl>，作用更持久
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
