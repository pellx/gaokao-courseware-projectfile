import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Segment} from '../components/Polar';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.polar;
const {pl2, pl3, pl4, pl5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const PolarScene: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点九">实验：验证生长素的极性运输</Header>
		<Appear at={pl2.from} style={{position: 'absolute', left: 90, top: 190}}>
			<Segment resultAt={at(pl2.from, pl2.to, 0.7)} label="正放" />
		</Appear>
		<Appear at={pl3.from} style={{position: 'absolute', left: 500, top: 190}}>
			<Segment inverted resultAt={at(pl3.from, pl3.to, 0.75)} label="倒置" />
		</Appear>
		<Appear at={pl4.from} style={{position: 'absolute', left: 1000, right: 90, top: 260}}>
			<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '20px 28px', background: C.greenSoft, fontSize: 32, fontWeight: 800, lineHeight: 1.6}}>
				结论：生长素只能从
				<br />
				<Hl>形态学上端</Hl> → <Hl>形态学下端</Hl>
			</div>
		</Appear>
		<Appear at={pl5.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="解题方法" style={{fontSize: 29, padding: '12px 24px'}}>
				接收块放在<Hl c={C.orange}>去尖端胚芽鞘一侧</Hl>看是否弯曲；设置<Hl>倒置组</Hl>，排除重力的影响
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
