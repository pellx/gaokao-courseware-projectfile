import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.curve;
const {cv1, cv2, cv3, cv4, cv5, cv6} = t.cue;

// Chart coordinates: y(v) for v in mV (+40 at top, −90 at bottom).
const y = (v: number) => 50 + (40 - v) * 3.6;
const SEG = [
	{k: 'ab', d: `M150,${y(-70)} L330,${y(-70)}`, color: C.orange, cue: cv2},
	{k: 'bc', d: `M330,${y(-70)} C370,${y(-70)} 400,${y(30)} 440,${y(30)}`, color: C.green, cue: cv3},
	{k: 'cd', d: `M440,${y(30)} C485,${y(30)} 530,${y(-70)} 570,${y(-70)}`, color: C.red, cue: cv4},
	{k: 'de', d: `M570,${y(-70)} C600,${y(-70)} 615,${y(-82)} 650,${y(-82)} C720,${y(-82)} 780,${y(-70)} 860,${y(-70)}`, color: C.brown, cue: cv5},
];
const PTS: [string, number, number][] = [
	['a', 150, y(-70)],
	['b', 330, y(-70)],
	['c', 440, y(30)],
	['d', 570, y(-70)],
	['e', 860, y(-70)],
];

export const Curve: React.FC = () => {
	const frame = useCurrentFrame();
	const live = (cue: {from: number; to: number}) => frame >= cue.from && frame < cue.to + 20;
	return (
		<Scene duration={t.duration}>
			<Header tag="考点五">膜电位变化曲线</Header>
			<Appear at={cv1.from} style={{position: 'absolute', left: 70, top: 160}}>
				<svg width={960} height={560} viewBox="0 0 960 560">
					<line x1={110} y1={30} x2={110} y2={y(-90)} stroke={C.text} strokeWidth={4} />
					<line x1={110} y1={y(-90)} x2={940} y2={y(-90)} stroke={C.text} strokeWidth={4} />
					<text x={20} y={26} fontSize={26} fontWeight={800} fill={C.text}>膜电位/mV</text>
					<text x={880} y={y(-90) + 40} fontSize={26} fontWeight={800} fill={C.text}>时间</text>
					{[30, 0, -70].map((v) => (
						<g key={v}>
							<line x1={110} y1={y(v)} x2={940} y2={y(v)} stroke={C.line} strokeWidth={3} strokeDasharray="10 8" />
							<text x={98} y={y(v) + 9} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="end">{v > 0 ? `+${v}` : v}</text>
						</g>
					))}
					<line x1={330} y1={y(-90)} x2={330} y2={y(-90) - 30} stroke={C.red} strokeWidth={5} />
					<text x={330} y={y(-90) + 36} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">刺激</text>
					{SEG.map((s) => (
						<path key={s.k} d={s.d} fill="none" stroke={frame >= s.cue.from ? s.color : '#cfc6ba'} strokeWidth={live(s.cue) ? 12 : 7} strokeLinecap="round" />
					))}
					{PTS.map(([n, px, py]) => (
						<g key={n}>
							<circle cx={px} cy={py} r={9} fill={C.text} />
							<text x={px} y={n === 'c' ? py - 20 : py - 18} fontSize={32} fontWeight={900} fill={C.text} textAnchor="middle">{n}</text>
						</g>
					))}
				</svg>
			</Appear>
			<div style={{position: 'absolute', left: 1060, right: 90, top: 175}}>
				<Table
					head={['段', '变化', '原因']}
					cols="0.55fr 1.3fr 1.6fr"
					at={cv2.from - 10}
					fontSize={27}
					rowHeight={92}
					rows={[
						{cells: ['ab', '静息电位（外正内负）', 'K^+外流（协助扩散）'], at: cv2.from},
						{cells: ['bc', '去极化 → 外负内正', 'Na^+内流（协助扩散）'], at: cv3.from},
						{cells: ['cd', '恢复为外正内负', 'K^+外流（协助扩散）'], at: cv4.from},
						{cells: ['de', '恢复离子分布', '钠钾泵：泵出3Na^+、泵入2K^+（主动运输）'], at: cv5.from},
					]}
				/>
			</div>
			<Appear at={cv6.from} style={{position: 'absolute', left: 90, right: 90, top: 740}}>
				<Callout label="考法" style={{fontSize: 30}}>
					Na⁺内流、K⁺外流 → <Hl c={C.orange}>协助扩散</Hl>；钠钾泵 → <Hl c={C.brown}>主动运输</Hl>；峰值高低取决于<Hl>Na⁺内流的量</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
