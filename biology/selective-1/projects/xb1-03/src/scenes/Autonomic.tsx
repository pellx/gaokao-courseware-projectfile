import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.autonomic;
const {au1, au2, au3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const FACTS = [
	{k: '支配对象', v: '内脏、血管和腺体', p: 0.15},
	{k: '性质', v: '传出神经', p: 0.4},
	{k: '特点', v: '活动不受意识支配', p: 0.6},
];

export const Autonomic: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">自主神经系统</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<div style={{display: 'flex', gap: 22}}>
				{FACTS.map((f) => (
					<Appear key={f.k} at={at(au1.from, au1.to, f.p)} style={{flex: 1}}>
						<div style={{background: C.panel, border: `3px solid ${C.line}`, borderRadius: 22, padding: '26px 30px'}}>
							<div style={{fontSize: 34, color: C.muted, fontWeight: 700}}>{f.k}</div>
							<div style={{fontSize: 48, fontWeight: 900, color: C.red, marginTop: 8}}>{f.v}</div>
						</div>
					</Appear>
				))}
			</div>
			<Appear at={au2.from} style={{marginTop: 56}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 26}}>
					<div style={{fontSize: 46, fontWeight: 900}}>组成：</div>
					<div style={{flex: 1, border: `5px solid ${C.orange}`, background: C.orangeSoft, borderRadius: 24, padding: '40px 0', textAlign: 'center', fontSize: 60, fontWeight: 900, color: C.orange}}>交感神经</div>
					<div style={{fontSize: 50, fontWeight: 900, color: C.muted}}>+</div>
					<div style={{flex: 1, border: `5px solid ${C.green}`, background: C.greenSoft, borderRadius: 24, padding: '40px 0', textAlign: 'center', fontSize: 60, fontWeight: 900, color: C.green}}>副交感神经</div>
				</div>
			</Appear>
			<Appear at={au3.from} style={{marginTop: 56}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 34}}>
					自主神经系统只包括<Hl>传出神经</Hl>，不包括传入神经；活动不受意识支配——无法随意让心跳变慢。
				</Callout>
			</Appear>
		</div>
		<Narration t={t} />
	</Scene>
);
