import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mechanism;
const {mc1, mc2, mc3, mc4} = t.cue;

// Three neurons in a loop; a signal dot runs round it (short-term memory).
const Loop: React.FC<{phase: number}> = ({phase}) => {
	const pts = [
		[150, 90],
		[300, 260],
		[60, 260],
	];
	const seg = Math.floor(phase * 3) % 3;
	const f = (phase * 3) % 1;
	const [x1, y1] = pts[seg];
	const [x2, y2] = pts[(seg + 1) % 3];
	return (
		<svg width={380} height={330} viewBox="0 0 380 330">
			{pts.map(([x, y], i) => {
				const [nx, ny] = pts[(i + 1) % 3];
				return <line key={i} x1={x} y1={y} x2={nx} y2={ny} stroke={C.brown} strokeWidth={6} />;
			})}
			{pts.map(([x, y]) => (
				<circle key={x + y} cx={x} cy={y} r={36} fill="#f6d7b0" stroke={C.brown} strokeWidth={5} />
			))}
			<circle cx={x1 + (x2 - x1) * f} cy={y1 + (y2 - y1) * f} r={14} fill={C.orange} />
		</svg>
	);
};

// Two neurons; `grow` adds new synaptic contacts between them (long-term memory).
const Grow: React.FC<{grow: number}> = ({grow}) => (
	<svg width={420} height={330} viewBox="0 0 420 330">
		<circle cx={80} cy={165} r={50} fill="#f6d7b0" stroke={C.brown} strokeWidth={5} />
		<circle cx={340} cy={165} r={50} fill="#f6d7b0" stroke={C.brown} strokeWidth={5} />
		<path d="M130,165 L250,165" stroke={C.brown} strokeWidth={7} />
		<circle cx={262} cy={165} r={12} fill={C.brown} />
		{[
			['M120,130 Q200,70 262,100', 262, 100],
			['M120,200 Q200,260 262,230', 262, 230],
		].map(([d, x, y]) => (
			<g key={d as string} opacity={grow}>
				<path d={d as string} stroke={C.red} strokeWidth={7} fill="none" />
				<circle cx={x as number} cy={y as number} r={13} fill={C.red} />
			</g>
		))}
		<text x={262} y={310} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle" opacity={grow}>新突触</text>
	</svg>
);

export const Mechanism: React.FC = () => {
	const frame = useCurrentFrame();
	const grow = useRamp(mc3.from + 30, 20);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点四">短时记忆与长时记忆的机制</Header>
			<Appear at={mc2.from} style={{position: 'absolute', left: 90, top: 190, width: 820}}>
				<div style={{border: `5px solid ${C.orange}`, borderRadius: 28, padding: '22px 30px', background: C.orangeSoft, height: 470, boxSizing: 'border-box'}}>
					<div style={{fontSize: 44, fontWeight: 900, color: C.orange}}>短时记忆</div>
					<div style={{display: 'flex', alignItems: 'center', gap: 20}}>
						<Loop phase={(frame / 60) % 1} />
						<div style={{fontSize: 30, fontWeight: 700, lineHeight: 1.6}}>
							神经元之间<Hl c={C.orange}>即时的信息交流</Hl>
							<br />
							与<Hl c={C.orange}>海马</Hl>脑区有关
						</div>
					</div>
				</div>
			</Appear>
			<Appear at={mc3.from} style={{position: 'absolute', left: 1010, right: 90, top: 190}}>
				<div style={{border: `5px solid ${C.red}`, borderRadius: 28, padding: '22px 30px', background: C.redSoft, height: 470, boxSizing: 'border-box'}}>
					<div style={{fontSize: 44, fontWeight: 900, color: C.red}}>长时记忆</div>
					<div style={{display: 'flex', alignItems: 'center', gap: 10}}>
						<Grow grow={grow} />
						<div style={{fontSize: 30, fontWeight: 700, lineHeight: 1.6}}>
							突触形态、功能改变
							<br />
							<Hl>新突触的建立</Hl>
						</div>
					</div>
				</div>
			</Appear>
			<Appear at={mc1.from} style={{position: 'absolute', left: 910, top: 400, width: 100, textAlign: 'center', fontSize: 30, fontWeight: 900, color: C.green}}>
				<Appear at={mc4.from} dy={0}>
					强化
					<div style={{fontSize: 48, lineHeight: 1}}>→</div>
				</Appear>
			</Appear>
			<Appear at={mc4.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
				<Callout label="考法" style={{fontSize: 30}}>
					短时 → 长时：<Hl c={C.green}>反复运用、强化</Hl>；长时记忆的结构基础：<Hl>新突触的建立</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
