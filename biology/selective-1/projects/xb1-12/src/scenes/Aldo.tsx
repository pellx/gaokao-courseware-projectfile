import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.aldo;
const {al1, al2, al3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Aldo: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">醛固酮：保钠排钾</Header>
		<div style={{position: 'absolute', left: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 50}}>
			<Chain
				fontSize={32}
				gap={12}
				steps={[
					{label: '细胞外液量↓ 或 血钠↓', color: C.green, at: al1.from},
					{label: '肾上腺皮质', color: C.orange, at: at(al1.from, al1.to, 0.4)},
					{label: '醛固酮↑', color: C.orange, at: at(al1.from, al1.to, 0.7)},
					{label: '肾小管、集合管重吸收Na⁺↑', color: C.orange, at: al2.from},
				]}
			/>
			<Chain
				fontSize={32}
				gap={12}
				steps={[
					{label: '血钾↑', color: C.red, at: at(al2.from, al2.to, 0.55)},
					{label: '醛固酮↑', color: C.orange, at: at(al2.from, al2.to, 0.65)},
					{label: '促进K⁺排出', color: C.red, at: at(al2.from, al2.to, 0.8)},
				]}
			/>
		</div>
		<Appear at={al3.from} style={{position: 'absolute', left: 90, top: 470}}>
			<div style={{display: 'inline-block', background: C.red, color: '#fff', fontSize: 64, fontWeight: 900, borderRadius: 24, padding: '16px 50px'}}>保钠排钾</div>
		</Appear>
		<Appear at={al3.from + 20} style={{position: 'absolute', left: 90, right: 90, top: 660}}>
			<Callout label="记忆" style={{fontSize: 30}}>
				醛固酮“<Hl>保钠排钾</Hl>”，由<Hl c={C.orange}>肾上腺皮质</Hl>分泌（不是肾上腺髓质）
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
