import React from 'react';
import {Appear, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.alga;
const {ag1, ag2, ag3, ag4} = t.cue;

// Umbrella alga: cap on top, stalk, rhizoid (with the nucleus) at the bottom.
const Alga: React.FC<{x: number; cap: 'smooth' | 'scallop'; capColor: string; stalk: string; root: string; label: string}> = ({x, cap, capColor, stalk, root, label}) => (
	<g>
		{cap === 'smooth' ? (
			<ellipse cx={x} cy={60} rx={80} ry={26} fill={capColor} opacity={0.85} />
		) : (
			<path d={`M${x - 80},60 ${Array.from({length: 8}, (_, i) => `L${x - 80 + i * 20 + 10},${i % 2 ? 40 : 34} L${x - 80 + (i + 1) * 20},60`).join(' ')} Q${x},90 ${x - 80},60 z`} fill={capColor} opacity={0.85} />
		)}
		<rect x={x - 7} y={80} width={14} height={180} rx={6} fill={stalk} />
		<path d={`M${x - 30},300 Q${x - 40},262 ${x - 8},258 L${x + 8},258 Q${x + 40},262 ${x + 30},300 Q${x},318 ${x - 30},300 z`} fill={root} />
		<circle cx={x} cy={290} r={9} fill="#fff" />
		<text x={x} y={350} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">{label}</text>
	</g>
);

export const AlgaScene: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">变形虫切割与伞藻嫁接、核移植</Header>
		<Appear at={ag1.from} style={{position: 'absolute', left: 90, top: 170, width: 560, height: 460, boxSizing: 'border-box', border: `5px solid ${C.orange}`, borderRadius: 24, padding: '18px 24px'}}>
			<div style={{fontSize: 34, fontWeight: 900, color: C.orange}}>变形虫切割实验</div>
			<div style={{fontSize: 30, fontWeight: 700, lineHeight: 1.6, marginTop: 14}}>
				有核的一半：摄食、对刺激有反应、生长和分裂
				<br />
				无核的一半：不能
				<br />→ 细胞核控制细胞的<Hl>生命活动</Hl>
			</div>
		</Appear>
		<svg width={1150} height={460} viewBox="0 0 1150 460" style={{position: 'absolute', left: 690, top: 165}}>
			<Defs />
			<G at={ag2.from}>
				<Alga x={110} cap="scallop" capColor={C.orange} stalk={C.orange} root={C.orange} label="菊花形帽" />
				<Alga x={330} cap="smooth" capColor={C.green} stalk={C.green} root={C.green} label="伞形帽" />
				<text x={220} y={410} fontSize={28} fontWeight={900} fill={C.text} textAnchor="middle">柄 ＋ 假根（含细胞核）</text>
				<Arrow x1={440} y1={180} x2={580} y2={180} trim={[0, 0]} />
				<text x={510} y={160} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">嫁接</text>
				<Alga x={700} cap="smooth" capColor={C.green} stalk={C.orange} root={C.green} label="长出伞形帽" />
			</G>
			<G at={ag3.from}>
				<rect x={860} y={60} width={280} height={250} rx={20} fill={C.redSoft} stroke={C.red} strokeWidth={4} />
				<text x={1000} y={120} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">还需核移植</text>
				<text x={1000} y={170} fontSize={26} fontWeight={800} fill={C.text} textAnchor="middle">排除假根中</text>
				<text x={1000} y={210} fontSize={26} fontWeight={800} fill={C.text} textAnchor="middle">细胞质的影响</text>
				<text x={1000} y={270} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">→ 由细胞核控制</text>
			</G>
		</svg>
		<Tip at={ag4.from} top={680} label="解题方法">
			嫁接只能说明伞帽形状与<Hl>假根</Hl>有关；<Hl>核移植</Hl>才能说明由细胞核控制
		</Tip>
		<Narration t={t} />
	</Scene>
);
