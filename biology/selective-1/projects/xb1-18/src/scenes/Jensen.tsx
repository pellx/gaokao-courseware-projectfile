import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Trials} from '../components/Trials';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.jensen;
const {bj1, bj2, bj3, bj4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Jensen: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">鲍森·詹森的实验</Header>
		<div style={{position: 'absolute', left: 140, top: 165}}>
			<Trials
				scale={1.15}
				gap={60}
				trials={[
					{p: {light: 'left', sheet: 'agar', bend: -45, label: '尖端与下部隔琼脂片'}, at: bj1.from, result: '向光弯曲', resultAt: bj2.from},
					{p: {light: 'left', sheet: 'mica', label: '换成云母片'}, at: bj4.from, result: '不生长不弯曲', color: C.red, resultAt: at(bj4.from, bj4.to, 0.4)},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 820, right: 90, top: 220, display: 'flex', flexDirection: 'column', gap: 24}}>
			<Appear at={bj3.from}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '20px 28px', background: C.greenSoft, fontSize: 32, fontWeight: 800, lineHeight: 1.5}}>
					结论：尖端产生的影响<Hl c={C.green}>可以透过琼脂片</Hl>传递给下部
				</div>
			</Appear>
			<Appear at={at(bj4.from, bj4.to, 0.6)}>
				<div style={{border: `4px solid ${C.line}`, borderRadius: 22, padding: '18px 28px', background: C.panel, fontSize: 30, fontWeight: 700, lineHeight: 1.6}}>
					<Hl c={C.orange}>琼脂片</Hl>：化学物质能通过
					<br />
					<Hl>云母片</Hl>：化学物质不能通过
				</div>
			</Appear>
		</div>
		<Appear at={bj4.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="考法" style={{fontSize: 30, padding: '12px 24px'}}>
				琼脂片换成<Hl>云母片</Hl> → 影响无法向下传递 → 胚芽鞘<Hl>不生长也不弯曲</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
