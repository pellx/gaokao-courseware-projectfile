import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C} from '../theme';
import {T} from '../timeline';
import {Big, Board, Col, Row, Rule} from '../components/board';
import {rich} from '../components/auto';
import {Fringes} from './fringe';

// 考点二：Δx = lλ/d。屏上的红光干涉条纹，标出相邻两条亮条纹的间距 Δx。
const t = T.principle;
const cue = (id: string) => t.cue[id].from;
const W = 760;
const P = 120;
const X0 = W / 2;

export const Principle: React.FC = () => {
	const f = useCurrentFrame();
	const op = (id: string) => interpolate(f, [cue(id), cue(id) + 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return (
		<Board t={t} tag="考点二" title="实验原理" callout={{label: '要点', at: cue('q4'), text: rich('d 已知，测出 {l} 和 {Δx}，就能算出波长')}}>
			<Row gap={36} align="center">
				<Col gap={18}>
					<svg width={W} height={300} viewBox={`0 0 ${W} 300`} style={{opacity: op('q1')}}>
						<Fringes x={0} y={20} w={W} h={170} x0={X0} period={P} />
						<g stroke={C.orange} strokeWidth={4} fill="none">
							<line x1={X0} y1={200} x2={X0} y2={250} />
							<line x1={X0 + P} y1={200} x2={X0 + P} y2={250} />
							<line x1={X0 + 6} y1={232} x2={X0 + P - 6} y2={232} />
							<path d={`M${X0 + 20},${222} L${X0 + 6},${232} L${X0 + 20},${242}`} />
							<path d={`M${X0 + P - 20},${222} L${X0 + P - 6},${232} L${X0 + P - 20},${242}`} />
						</g>
						<text x={X0 + P / 2} y={290} fontSize={34} fontWeight={900} fill={C.orange} textAnchor="middle">Δx</text>
						<text x={X0 - 10} y={290} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="end">相邻两条亮条纹</text>
					</svg>
				</Col>
				<Col gap={18}>
					<Big at={cue('q1')} size={54}>{rich('{Δx = lλ/d}')}</Big>
					<Rule tag="d" at={cue('q2')} size={30}>双缝间距（{rich('{已知}')}）</Rule>
					<Rule tag="l" at={cue('q2')} size={30} color={C.orange}>双缝到屏的距离</Rule>
					<Big at={cue('q3')} size={50}>{rich('{λ = dΔx/l}')}</Big>
				</Col>
			</Row>
		</Board>
	);
};
