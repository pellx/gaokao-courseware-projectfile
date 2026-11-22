import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.feedback;
const {fb1, fb2, fb3, fb4} = t.cue;

const NODES: [number, number, string, string][] = [
	[300, 80, '胰岛素分泌增加', C.green],
	[560, 300, '血糖降低', C.green],
	[300, 520, '胰岛素分泌减少', C.orange],
	[40, 300, '血糖回升', C.orange],
];

export const Feedback: React.FC = () => {
	const loop = useRamp(fb2.from, 20);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点四">反馈调节</Header>
			<Appear at={fb1.from} style={{position: 'absolute', left: 90, top: 180, width: 860}}>
				<div style={{fontSize: 32, fontWeight: 700, lineHeight: 1.7, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 20, padding: '20px 28px'}}>
					系统本身工作的<Hl>效果</Hl>，反过来又作为<Hl>信息</Hl>调节该系统的工作 → <Hl>反馈调节</Hl>
				</div>
			</Appear>
			<Appear at={fb3.from} style={{position: 'absolute', left: 90, top: 420, width: 860, fontSize: 32, fontWeight: 700, lineHeight: 1.7}}>
				<Hl c={C.green}>负反馈</Hl>：普遍存在，对<Hl c={C.green}>维持稳态</Hl>有重要意义
			</Appear>
			<Appear at={fb4.from} style={{position: 'absolute', left: 90, top: 510, width: 860}}>
				<div style={{border: `4px solid ${C.orange}`, borderRadius: 20, padding: '16px 26px', fontSize: 30, fontWeight: 700, lineHeight: 1.6, background: C.orangeSoft}}>
					<Hl c={C.orange}>正反馈</Hl>：排尿反射、分娩、血液凝固
					<br />
					使原来的变化<Hl c={C.orange}>越来越强</Hl>
				</div>
			</Appear>
			<svg width={860} height={640} viewBox="0 0 860 640" style={{position: 'absolute', left: 1000, top: 160, opacity: loop}}>
				<Defs />
				<path d="M520,130 C600,180 640,230 650,262" fill="none" stroke={C.green} strokeWidth={6} markerEnd="url(#arrow-green)" />
				<path d="M650,340 C640,420 600,470 520,500" fill="none" stroke={C.green} strokeWidth={6} markerEnd="url(#arrow-green)" />
				<path d="M240,520 C170,490 140,420 130,342" fill="none" stroke={C.orange} strokeWidth={6} markerEnd="url(#arrow-orange)" />
				<path d="M130,262 C140,190 180,130 248,110" fill="none" stroke={C.orange} strokeWidth={6} strokeDasharray="12 8" markerEnd="url(#arrow-orange)" />
				{NODES.map(([x, y, label, color]) => (
					<g key={label}>
						<rect x={x - 10} y={y - 40} width={label.length * 34 + 30} height={80} rx={18} fill="#fff" stroke={color} strokeWidth={5} />
						<text x={x + 5} y={y + 12} fontSize={32} fontWeight={900} fill={color}>{label}</text>
					</g>
				))}
				<text x={420} y={320} fontSize={34} fontWeight={900} fill={C.green} textAnchor="middle">负反馈</text>
			</svg>
			<Narration t={t} />
		</Scene>
	);
};
