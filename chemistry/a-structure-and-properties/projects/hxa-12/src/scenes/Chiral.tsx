import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chiral;
const {ch1, ch1b, ch2, ch3, ch4, ch5} = t.cue;

// 乳酸的一对手性异构体（楔形示意）：中心 C，四个不同基团。
const Lactic: React.FC<{x: number; flip?: boolean}> = ({x, flip}) => {
	const s = flip ? -1 : 1;
	const G4: [number, number, string, string][] = [
		[0, -100, 'H', C.muted],
		[s * -110, 50, 'OH', C.red],
		[s * 110, 50, 'CH3', C.text],
		[s * 20, 105, 'COOH', C.orange],
	];
	return (
		<g transform={`translate(${x},150)`}>
			{G4.map(([dx, dy], i) => (
				<line key={i} x1={0} y1={0} x2={dx * 0.62} y2={dy * 0.62} stroke={C.text} strokeWidth={i === 3 ? 9 : 5} strokeDasharray={i === 0 ? '8 6' : undefined} />
			))}
			<circle cx={0} cy={0} r={28} fill={C.red} />
			<text x={0} y={10} fontSize={30} fontWeight={900} fill="#fff" textAnchor="middle">C*</text>
			{G4.map(([dx, dy, l, c], i) => (
				<text key={i} x={dx} y={dy + 10} fontSize={30} fontWeight={900} fill={c} textAnchor="middle" stroke="#fff" strokeWidth={6} paintOrder="stroke">
					{svgChem(l, 30)}
				</text>
			))}
		</g>
	);
};

export const Chiral: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="手性"
		callout={{label: '考法', at: ch5.from, text: <>数手性碳。<Hl>易错</Hl>：双键碳、苯环碳、连两个 H 的碳<Hl>不可能</Hl>是手性碳</>}}
		overlay={
			<AnimeBeat k="mirror" from={ch1b.from} to={ch1b.to}>
				互为<span style={{color: C.red}}>镜像</span>，{'\n'}却<span style={{color: C.red}}>不能重合</span>：{'\n'}这就是手性
			</AnimeBeat>
		}
	>
		<Row gap={30} align="center">
			<svg width={640} height={320} viewBox="0 0 640 320">
				<G at={ch1.from}>
					<Lactic x={160} />
					<line x1={320} y1={20} x2={320} y2={300} stroke={C.muted} strokeWidth={3} strokeDasharray="12 8" />
					<text x={320} y={316} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">镜面</text>
					<Lactic x={480} flip />
				</G>
			</svg>
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: ch1.from, node: <>互为<Hl>镜像</Hl>、<Hl>不能重叠</Hl> → 手性异构体</>},
						{at: ch2.from, node: <>手性碳：连有<Hl>四个不同</Hl>原子或基团的碳（标 *）</>},
						{at: ch3.from, node: <>乳酸 CH<sub>3</sub>C*H(OH)COOH：连 —H、—OH、—CH<sub>3</sub>、—COOH</>},
						{at: ch4.from, node: <>数手性碳：只看<Hl c={C.orange}>饱和碳</Hl>，逐个检查</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
