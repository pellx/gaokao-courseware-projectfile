import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.factors;
const {fc1, fc2, fc3, fc4} = t.cue;

const Pair: React.FC<{small: string; big: string; why: React.ReactNode; at: number}> = ({small, big, why, at}) => (
	<Appear at={at}>
		<div style={{display: 'flex', alignItems: 'center', gap: 24, fontSize: 32, fontWeight: 800}}>
			<span style={{border: `5px solid ${C.green}`, color: C.green, borderRadius: 16, padding: '10px 24px', width: 160, textAlign: 'center'}}>{small}</span>
			<span style={{color: C.muted}}>＜</span>
			<span style={{border: `5px solid ${C.red}`, color: C.red, borderRadius: 16, padding: '10px 24px', width: 160, textAlign: 'center'}}>{big}</span>
			<span style={{fontSize: 28, fontWeight: 700}}>{why}</span>
		</div>
	</Appear>
);

export const Factors: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">生态足迹的影响因素</Header>
		<Appear at={fc1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 32, fontWeight: 800}}>
			生态足迹与<Hl c={C.orange}>生活方式</Hl>密切相关
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 270, display: 'flex', flexDirection: 'column', gap: 36}}>
			<Pair small="步行" big="开车" why={<>汽车消耗资源，还需吸收尾气中的 CO<sub style={{fontSize: '0.6em'}}>2</sub></>} at={fc2.from} />
			<Pair small="多吃素" big="多吃肉" why={<>食物链越长，<Hl>散失的能量越多</Hl>，需要的耕地草场越多</>} at={fc3.from} />
		</div>
		<Appear at={fc4.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="考法" style={{fontSize: 30}}>
				减小生态足迹：<Hl c={C.green}>低碳出行、节约水电、减少浪费、适当多吃素食</Hl>；人口增长使总生态足迹增大
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
