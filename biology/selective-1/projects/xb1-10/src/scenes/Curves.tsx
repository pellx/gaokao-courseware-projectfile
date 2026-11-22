import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.curves;
const {cu1, cu2, cu3, cu4} = t.cue;

// One chart: x 60–740, y 40–300. Each line is [label, colour, points (0–1, 0–1)].
// The last item is where the label goes (0–1, 0–1).
type Line = [string, string, [number, number][], number, [number, number]];

const path = (pts: [number, number][]) =>
	pts.map(([x, y], i) => `${i ? 'L' : 'M'}${60 + x * 680},${300 - y * 240}`).join(' ');

const Chart: React.FC<{title: string; lines: Line[]; xLabel: string; mark?: string}> = ({title, lines, xLabel, mark}) => {
	const frame = useCurrentFrame();
	return (
		<div>
			<div style={{fontSize: 34, fontWeight: 900, marginBottom: 6}}>{title}</div>
			<svg width={800} height={360} viewBox="0 0 800 360">
				<line x1={60} y1={20} x2={60} y2={300} stroke={C.text} strokeWidth={4} />
				<line x1={60} y1={300} x2={760} y2={300} stroke={C.text} strokeWidth={4} />
				<text x={720} y={340} fontSize={24} fontWeight={800} fill={C.muted}>{xLabel}</text>
				{mark && (
					<g>
						<line x1={180} y1={300} x2={180} y2={30} stroke={C.line} strokeWidth={3} strokeDasharray="8 6" />
						<text x={180} y={340} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">{mark}</text>
					</g>
				)}
				{lines.map(([label, color, pts, from, [lx, ly]]) => {
					const p = interpolate(frame, [from, from + 40], [0, 1], clamp);
					return (
						<g key={label} opacity={p > 0 ? 1 : 0}>
							<path d={path(pts)} fill="none" stroke={color} strokeWidth={7} strokeLinejoin="round" pathLength={1} strokeDasharray={`${p} 1`} />
							<text x={60 + lx * 680} y={300 - ly * 240} fontSize={26} fontWeight={900} fill={color} textAnchor="middle" opacity={p}>{label}</text>
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export const Curves: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">血糖与激素的曲线分析</Header>
		<Appear at={cu1.from} style={{position: 'absolute', left: 70, top: 170}}>
			<Chart
				title="进食后"
				xLabel="时间"
				mark="进食"
				lines={[
					['血糖', C.red, [[0, 0.4], [0.18, 0.4], [0.35, 0.85], [0.6, 0.5], [1, 0.42]], cu1.from, [0.33, 0.92]],
					['胰岛素', C.green, [[0, 0.25], [0.18, 0.25], [0.45, 0.75], [0.7, 0.4], [1, 0.3]], cu2.from, [0.6, 0.72]],
					['胰高血糖素', C.orange, [[0, 0.5], [0.18, 0.5], [0.45, 0.22], [0.75, 0.38], [1, 0.48]], cu2.from + 60, [0.45, 0.08]],
				]}
			/>
		</Appear>
		<Appear at={cu3.from} style={{position: 'absolute', left: 990, top: 170}}>
			<Chart
				title="运动（或饥饿）时"
				xLabel="时间"
				mark="开始运动"
				lines={[
					['血糖', C.red, [[0, 0.5], [0.18, 0.5], [0.35, 0.42], [0.6, 0.46], [1, 0.47]], cu3.from, [0.92, 0.53]],
					['胰高血糖素', C.orange, [[0, 0.3], [0.18, 0.3], [0.5, 0.75], [1, 0.82]], cu3.from + 20, [0.85, 0.9]],
					['胰岛素', C.green, [[0, 0.55], [0.18, 0.55], [0.5, 0.25], [1, 0.18]], cu3.from + 40, [0.88, 0.25]],
				]}
			/>
		</Appear>
		<Appear at={cu4.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				先看血糖变化，再推激素：血糖高 → <Hl c={C.green}>胰岛素多</Hl>；血糖低 → <Hl c={C.orange}>胰高血糖素多</Hl>；两条激素曲线<Hl>一升一降</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
