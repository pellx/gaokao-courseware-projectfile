import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Plot, sample} from '../components/plot';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.curve;
const {cv1, cv2, cv3} = t.cue;

const bump = (m: number) => (x: number) => 0.08 + 0.8 * Math.exp(-(((x - m) / 0.13) ** 2));
const BW = 70;
// Membrane area before (light) and after (dark) secretion.
const BARS: [string, number, number, string][] = [
	['内质网', 0.8, 0.45, C.orange],
	['高尔基体', 0.6, 0.6, C.red],
	['细胞膜', 0.5, 0.85, C.brown],
];

export const Curve: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">放射性出现的顺序与膜面积的变化</Header>
		<div style={{position: 'absolute', left: 90, top: 170}}>
			<Plot
				id="radio"
				w={860}
				h={440}
				at={cv1.from}
				xLabel="时间"
				yLabel="放射性强度"
				curves={[
					{pts: sample(bump(0.27)), color: C.orange, at: cv1.from + 10, label: '内质网', lx: 0.27, ly: 0.97},
					{pts: sample(bump(0.52)), color: C.red, at: cv1.from + 50, label: '高尔基体', lx: 0.52, ly: 0.97},
					{pts: sample(bump(0.77)), color: C.brown, at: cv1.from + 90, label: '囊泡', lx: 0.77, ly: 0.97},
				]}
			/>
		</div>
		<svg width={820} height={440} viewBox="0 0 820 440" style={{position: 'absolute', left: 1010, top: 170}}>
			<G at={cv2.from}>
				<text x={10} y={30} fontSize={28} fontWeight={800} fill={C.muted}>膜面积</text>
				<line x1={20} y1={380} x2={800} y2={380} stroke={C.text} strokeWidth={4} />
				{BARS.map(([name, a, b, c], i) => {
					const x = 80 + i * 250;
					return (
						<g key={name}>
							<rect x={x} y={380 - a * 300} width={BW} height={a * 300} fill={c} opacity={0.35} rx={6} />
							<rect x={x + BW + 10} y={380 - b * 300} width={BW} height={b * 300} fill={c} rx={6} />
							<text x={x + BW + 5} y={420} fontSize={28} fontWeight={900} fill={c} textAnchor="middle">{name}</text>
						</g>
					);
				})}
				<rect x={540} y={14} width={26} height={22} fill={C.muted} opacity={0.35} />
				<text x={574} y={33} fontSize={24} fontWeight={800} fill={C.muted}>分泌前</text>
				<rect x={660} y={14} width={26} height={22} fill={C.muted} />
				<text x={694} y={33} fontSize={24} fontWeight={800} fill={C.muted}>分泌后</text>
			</G>
		</svg>
		<Appear at={cv1.from} style={{position: 'absolute', left: 90, top: 630, fontSize: 30, fontWeight: 800}}>
			放射性依次出现：<Hl c={C.orange}>内质网</Hl> → <Hl>高尔基体</Hl> → <Hl c={C.brown}>靠近细胞膜的囊泡</Hl> → 细胞外
		</Appear>
		<Tip at={cv3.from} top={700} label="解题方法">
			膜面积：<Hl>减少 → 内质网</Hl>；<Hl>基本不变 → 高尔基体</Hl>；<Hl>增加 → 细胞膜</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
