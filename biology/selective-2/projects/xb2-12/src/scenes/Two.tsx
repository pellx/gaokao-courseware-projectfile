import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.two;
const {tw1, tw2, tw3, tw4, tw5} = t.cue;

// Function level: normal at 0.7, a disturbance at x = 0.2 pushes it down,
// then it recovers.
const curve = (x: number) => {
	if (x < 0.2) return 0.7 + 0.03 * Math.sin(x * 60);
	if (x < 0.35) return 0.7 - 0.38 * Math.sin(((x - 0.2) / 0.15) * (Math.PI / 2));
	if (x < 0.75) return 0.32 + 0.38 * (1 - Math.cos(((x - 0.35) / 0.4) * Math.PI)) / 2;
	return 0.7 + 0.03 * Math.sin(x * 60);
};

export const Two: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">抵抗力稳定性与恢复力稳定性</Header>
		<div style={{position: 'absolute', left: 80, top: 180}}>
			<Plot
				id="tw"
				w={900}
				h={460}
				xLabel="时间"
				yLabel="生态系统功能"
				at={tw1.from}
				curves={[{pts: sample(curve), color: C.green, at: tw1.from, dur: 60}]}
				hrefs={[{y: 0.7, label: '正常', color: C.muted, at: tw1.from}]}
				vrefs={[
					{x: 0.35, color: C.green, at: tw4.from},
					{x: 0.75, color: C.orange, at: tw4.from},
				]}
				dots={[
					{x: 0.35, y: 0.32, color: C.green, at: tw4.from, label: '偏离幅度', dx: -10, dy: 44},
					{x: 0.55, y: 0.5, color: C.orange, at: tw4.from + 20, label: '恢复时间', dx: 90, dy: 10},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 1040, right: 80, top: 200, display: 'flex', flexDirection: 'column', gap: 22}}>
			<Appear at={tw2.from}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 20, padding: '16px 22px', fontSize: 29, fontWeight: 700, lineHeight: 1.5}}>
					<Hl c={C.green}>抵抗力稳定性</Hl>：抵抗干扰，<Hl c={C.green}>保持原状</Hl>
					<br /><span style={{color: C.muted}}>偏离幅度越小越强</span>
				</div>
			</Appear>
			<Appear at={tw3.from}>
				<div style={{border: `5px solid ${C.orange}`, borderRadius: 20, padding: '16px 22px', fontSize: 29, fontWeight: 700, lineHeight: 1.5}}>
					<Hl c={C.orange}>恢复力稳定性</Hl>：受破坏后<Hl c={C.orange}>恢复原状</Hl>
					<br /><span style={{color: C.muted}}>恢复时间越短越强</span>
				</div>
			</Appear>
		</div>
		<Appear at={tw5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				看是“<Hl c={C.green}>保持原状</Hl>”还是“<Hl c={C.orange}>恢复原状</Hl>”：破坏之前比抵抗，破坏之后比恢复
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
