import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.diverse;
const {dv1, dv2, dv3, dv4} = t.cue;

const COL = [C.red, C.orange, C.green, C.brown, C.gold];
const Beads: React.FC<{seq: number[]; r?: number}> = ({seq, r = 20}) => (
	<svg width={seq.length * (r * 2 + 6)} height={r * 2 + 8}>
		{seq.map((c, i) => (
			<circle key={i} cx={r + 3 + i * (r * 2 + 6)} cy={r + 4} r={r} fill={COL[c]} />
		))}
	</svg>
);

const Panel: React.FC<{at: number; x: number; title: string; children: React.ReactNode}> = ({at, x, title, children}) => (
	<Appear at={at} style={{position: 'absolute', left: x, top: 170, width: 400, height: 330, boxSizing: 'border-box', border: `4px solid ${C.line}`, borderRadius: 22, background: C.panel, padding: '16px 20px'}}>
		<div style={{fontSize: 34, fontWeight: 900, color: C.red, marginBottom: 16}}>{title}</div>
		<div style={{display: 'flex', flexDirection: 'column', gap: 18}}>{children}</div>
	</Appear>
);

export const Diverse: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">蛋白质结构多样性的原因</Header>
		<Panel at={dv1.from} x={90} title="氨基酸种类不同">
			<Beads seq={[0, 0, 0, 0, 0, 0]} />
			<Beads seq={[2, 2, 2, 2, 2, 2]} />
		</Panel>
		<Panel at={dv1.from + 40} x={530} title="氨基酸数目不同">
			<Beads seq={[0, 1, 2, 3]} />
			<Beads seq={[0, 1, 2, 3, 0, 1, 2]} />
		</Panel>
		<Panel at={dv1.from + 80} x={970} title="排列顺序不同">
			<Beads seq={[0, 1, 2, 3, 4, 0]} />
			<Beads seq={[3, 0, 4, 1, 0, 2]} />
		</Panel>
		<Panel at={dv2.from} x={1410} title="空间结构不同">
			<svg width={360} height={200} viewBox="0 0 360 200">
				<path d="M20,160 C60,20 120,20 140,100 S220,190 250,90 S330,20 340,150" fill="none" stroke={C.orange} strokeWidth={14} strokeLinecap="round" />
			</svg>
		</Panel>
		<Def at={dv3.from} style={{left: 90, right: 90, top: 540}} fontSize={34}>
			结构多样性 → 功能多样性：<Hl>结构与功能相适应</Hl>
		</Def>
		<Tip at={dv4.from} top={670} label="易错">
			<Hl>脱水缩合的方式都相同</Hl>，肽键结构也相同，不是多样性的原因
		</Tip>
		<Narration t={t} />
	</Scene>
);
