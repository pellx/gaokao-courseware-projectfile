import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.relation;
const {rl1, rl2, rl3, rl4} = t.cue;

export const Relation: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">两种稳定性的关系</Header>
		<div style={{position: 'absolute', left: 80, top: 180}}>
			<Plot
				id="rl"
				w={860}
				h={450}
				xLabel="营养结构复杂程度"
				yLabel="稳定性"
				at={rl1.from}
				curves={[
					{pts: [[0.05, 0.1], [0.95, 0.9]], color: C.green, at: rl2.from, label: '抵抗力稳定性', lx: 0.78, ly: 0.98},
					{pts: [[0.05, 0.9], [0.95, 0.1]], color: C.orange, at: rl2.from + 15, label: '恢复力稳定性', lx: 0.78, ly: 0.04},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 1010, right: 80, top: 200, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 29, fontWeight: 700, lineHeight: 1.55}}>
			<Appear at={rl1.from}>组分越多、<Hl c={C.orange}>食物网越复杂</Hl> → 自我调节能力越强</Appear>
			<Appear at={rl2.from}>热带雨林：<Hl c={C.green}>抵抗力稳定性高</Hl>
				<br />草原：被破坏后<Hl c={C.orange}>恢复较快</Hl></Appear>
			<Appear at={rl3.from}>
				<div style={{border: `5px solid ${C.red}`, borderRadius: 20, padding: '14px 20px'}}>
					例外：<Hl>北极冻原、荒漠</Hl>
					<br />两种稳定性<Hl>都很低</Hl>
				</div>
			</Appear>
		</div>
		<Appear at={rl4.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				两者一般<Hl c={C.orange}>呈负相关</Hl>，但不绝对：不能说“抵抗力稳定性低，恢复力稳定性一定高”
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
