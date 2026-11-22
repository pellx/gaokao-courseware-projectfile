import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mechanism;
const {mc2, mc3, mc4, mc5, mc6} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const SYSTEMS = ['消化系统', '呼吸系统', '循环系统', '泌尿系统'];
const HUB = {x: 400, y: 250};
const NODES = [
	{label: '神经调节', x: 400, y: 70, color: C.red},
	{label: '体液调节', x: 150, y: 400, color: C.orange},
	{label: '免疫调节', x: 650, y: 400, color: C.green},
];

export const Mechanism: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三、四">稳态的调节机制与限度</Header>
		<div style={{position: 'absolute', left: 90, top: 170, width: 820}}>
			<div style={{display: 'flex', gap: 14}}>
				{SYSTEMS.map((s, i) => (
					<Appear key={s} at={at(mc2.from, mc2.to, 0.2 + i * 0.12)} dy={10} style={{flex: 1}}>
						<div style={{textAlign: 'center', border: `3px solid ${C.orange}`, borderRadius: 14, padding: '10px 0', fontSize: 32, fontWeight: 800, color: C.orange, background: C.orangeSoft}}>{s}</div>
					</Appear>
				))}
			</div>
			<Appear at={mc2.from} style={{fontSize: 26, color: C.muted, marginTop: 8}}>
				直接参与维持内环境稳态的系统
			</Appear>
			<Appear at={mc3.from} style={{fontSize: 26, color: C.muted, marginTop: 6, textAlign: 'center', width: 800}}>
				三种调节相互联系，构成调节网络
			</Appear>
			<svg width={800} height={480} viewBox="0 0 800 480" style={{marginTop: 10}}>
				<Defs />
				<G at={mc3.from}>
					<polygon points={NODES.map((n) => `${n.x},${n.y}`).join(' ')} fill="none" stroke="#cfc6ba" strokeWidth={4} strokeDasharray="12 10" />
					{NODES.map((n) => (
						<Arrow key={n.label} x1={n.x} y1={n.y} x2={HUB.x} y2={HUB.y} trim={[50, 102]} color={n.color} marker={n.color === C.red ? 'arrow-red' : n.color === C.orange ? 'arrow-orange' : 'arrow-green'} width={6} />
					))}
					<circle cx={HUB.x} cy={HUB.y} r={95} fill={C.redSoft} stroke={C.red} strokeWidth={5} />
					<text x={HUB.x} y={HUB.y - 6} fontSize={34} fontWeight={900} fill={C.red} textAnchor="middle">内环境</text>
					<text x={HUB.x} y={HUB.y + 36} fontSize={34} fontWeight={900} fill={C.red} textAnchor="middle">稳态</text>
					{NODES.map((n) => (
						<g key={n.label}>
							<rect x={n.x - 100} y={n.y - 40} width={200} height={80} rx={20} fill="#fff" stroke={n.color} strokeWidth={5} />
							<text x={n.x} y={n.y + 12} fontSize={34} fontWeight={900} fill={n.color} textAnchor="middle">{n.label}</text>
						</g>
					))}
				</G>
			</svg>
		</div>
		<div style={{position: 'absolute', left: 980, right: 90, top: 170}}>
			<Appear at={mc3.from + 20}>
				<div style={{fontSize: 34, fontWeight: 800, lineHeight: 1.5, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 18, padding: '14px 22px'}}>
					主要调节机制：<Hl>神经—体液—免疫调节网络</Hl>
				</div>
			</Appear>
			<Appear at={mc4.from} style={{marginTop: 22}}>
				<div style={{border: `4px solid ${C.red}`, borderRadius: 20, padding: '16px 22px', background: '#fff'}}>
					<div style={{fontSize: 36, fontWeight: 900, color: C.red}}>考点四：调节能力有一定限度</div>
					<div style={{fontSize: 30, lineHeight: 1.6, marginTop: 8}}>
						外界环境变化<Hl c={C.orange}>过于剧烈</Hl>
						<br />
						或自身调节功能<Hl c={C.orange}>出现障碍</Hl>
						<br />→ 内环境稳态<Hl>遭到破坏</Hl>
					</div>
				</div>
			</Appear>
			<Appear at={mc5.from} style={{marginTop: 22}}>
				<div style={{fontSize: 30, lineHeight: 1.5, background: C.orangeSoft, borderRadius: 16, padding: '12px 22px'}}>
					<b style={{color: C.orange}}>例：高原反应</b> —— 头痛、乏力、心跳加快
				</div>
			</Appear>
			<Appear at={mc6.from} style={{marginTop: 22}}>
				<Callout label="考法" style={{fontSize: 31}}>
					“稳态能一直维持”“调节能力无限”都<Hl>错</Hl>。
				</Callout>
			</Appear>
		</div>
		<Narration t={t} />
	</Scene>
);
