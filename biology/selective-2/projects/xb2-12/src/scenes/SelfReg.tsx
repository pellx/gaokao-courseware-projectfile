import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.selfreg;
const {sr1, sr2, sr3} = t.cue;

export const SelfReg: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">生态系统的稳定性与自我调节能力</Header>
		<Appear at={sr1.from} style={{position: 'absolute', left: 90, right: 90, top: 180, fontSize: 31, fontWeight: 700, lineHeight: 1.55}}>
			<Hl>稳定性</Hl>：生态系统<Hl>维持或恢复</Hl>自身结构与功能处于相对平衡状态的能力
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 300}}>
			<Chain
				fontSize={34}
				steps={[
					{label: '负反馈调节', color: C.red, at: sr2.from},
					{label: '自我调节能力', color: C.orange, at: sr2.from + 25},
					{label: '稳定性', color: C.green, at: sr2.from + 50},
				]}
				arrows={['基础', '使其具有']}
			/>
		</div>
		<Appear at={sr3.from} style={{position: 'absolute', left: 90, right: 90, top: 470}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				自我调节能力<Hl>有一定限度</Hl>：干扰超过限度，调节能力迅速丧失，生态系统难以恢复
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
