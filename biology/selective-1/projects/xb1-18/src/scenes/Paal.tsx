import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Trials} from '../components/Trials';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.paal;
const {by1, by2, by3, by4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Paal: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">拜尔的实验</Header>
		<Appear at={by1.from} style={{position: 'absolute', left: 110, top: 175, width: 640, height: 530, borderRadius: 30, background: '#4a4540'}}>
			<div style={{position: 'absolute', left: 24, top: 16, color: '#f2ede6', fontSize: 30, fontWeight: 900}}>黑暗中</div>
		</Appear>
		<div style={{position: 'absolute', left: 140, top: 215}}>
			<Trials
				scale={1.1}
				gap={66}
				trials={[
					{p: {tip: 'left', bend: 45}, at: by1.from, result: '尖端在左 → 弯向右', color: '#ffd28a', resultAt: by2.from},
					{p: {tip: 'right', bend: -45}, at: at(by1.from, by1.to, 0.5), result: '尖端在右 → 弯向左', color: '#ffd28a', resultAt: at(by2.from, by2.to, 0.4)},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 820, right: 90, top: 220, display: 'flex', flexDirection: 'column', gap: 24}}>
			<Appear at={by1.from} style={{fontSize: 30, fontWeight: 700, lineHeight: 1.6}}>
				切下尖端，放在切面的<Hl c={C.orange}>一侧</Hl>
			</Appear>
			<Appear at={by2.from} style={{fontSize: 30, fontWeight: 700}}>
				结果：弯向<Hl>放尖端的对侧</Hl>
			</Appear>
			<Appear at={by3.from}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '20px 28px', background: C.greenSoft, fontSize: 32, fontWeight: 800, lineHeight: 1.5}}>
					结论：弯曲生长是因为尖端产生的影响在下部<Hl>分布不均匀</Hl>
				</div>
			</Appear>
		</div>
		<Appear at={by4.from} style={{position: 'absolute', left: 90, right: 90, top: 728}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '12px 24px'}}>
				在<Hl>黑暗中</Hl>进行，目的是<Hl c={C.orange}>排除光照的影响</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
