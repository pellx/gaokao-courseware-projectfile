import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.bioacc;
const {ba1, ba2, ba3, ba4} = t.cue;

// Relative concentration of a persistent toxin along a food chain (schematic).
const LEVELS: [string, number][] = [
	['水体', 8],
	['浮游植物', 30],
	['浮游动物', 70],
	['小鱼', 150],
	['大鱼', 250],
	['食鱼鸟', 360],
];

export const Bioacc: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">生物富集</Header>
		<Appear at={ba1.from} style={{position: 'absolute', left: 90, right: 90, top: 170, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			吸收、积蓄<Hl>难以降解</Hl>的元素或化合物，使体内浓度<Hl>超过环境浓度</Hl>
		</Appear>
		<svg width={1100} height={440} viewBox="0 0 1100 440" style={{position: 'absolute', left: 90, top: 250}}>
			<G at={ba3.from}>
				<line x1={20} y1={390} x2={1080} y2={390} stroke={C.text} strokeWidth={4} />
				{LEVELS.map(([name, h], i) => (
					<g key={name}>
						<rect x={40 + i * 175} y={390 - h} width={120} height={h} rx={8} fill={i === 0 ? C.muted : C.red} opacity={0.35 + i * 0.12} />
						<text x={100 + i * 175} y={426} fontSize={26} fontWeight={800} fill={C.text} textAnchor="middle">{name}</text>
					</g>
				))}
				<text x={40} y={60} fontSize={28} fontWeight={900} fill={C.red}>营养级越高，浓度越高 →</text>
			</G>
		</svg>
		<div style={{position: 'absolute', left: 1260, right: 80, top: 270, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 29, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={ba2.from}>
				<Hl c={C.orange}>重金属</Hl>：铅、镉、汞
				<br /><Hl c={C.orange}>有机物</Hl>：DDT、六六六
			</Appear>
			<Appear at={ba3.from}>
				难以降解、不易排出 → 沿食物链<Hl>逐级积累</Hl>
			</Appear>
		</div>
		<Appear at={ba4.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
			<Callout label="考法" style={{fontSize: 30}}>
				生物富集具有<Hl c={C.green}>全球性</Hl>（南极企鹅体内有 DDT）；可由浓度高低<Hl>反推营养级</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
