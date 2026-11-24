import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C} from '../theme';
import {T} from '../timeline';
import {Big, Board, Col, Row, Rule} from '../components/board';
import {rich} from '../components/auto';
import {Fringes} from './fringe';

// 考点六：分划板中心刻线先对准第 1 条亮条纹（读数 x1），再对准第 6 条（读数 x2），
// a = x2 − x1，6 条亮条纹之间有 5 个间距，Δx = a/(n − 1)。
const t = T.measure;
const cue = (id: string) => t.cue[id].from;
const W = 980;
const P = 150;
const X1 = 115;
const X2 = X1 + 5 * P;

const Reticle: React.FC<{x: number; label: React.ReactNode; o: number}> = ({x, label, o}) => (
	<g opacity={o}>
		<circle cx={x} cy={125} r={92} fill="none" stroke="#ffe7c2" strokeWidth={4} />
		<line x1={x} y1={33} x2={x} y2={217} stroke="#ffe7c2" strokeWidth={4} />
		<text x={x} y={272} fontSize={34} fontWeight={900} fill={C.orange} textAnchor="middle">{label}</text>
	</g>
);

export const Measure: React.FC = () => {
	const f = useCurrentFrame();
	const op = (id: string) => interpolate(f, [cue(id), cue(id) + 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return (
		<Board
			t={t}
			tag="考点六"
			title="测条纹间距"
			callout={{label: '要点', at: cue('m5'), text: rich('n 条亮条纹之间有 {n − 1} 个间距')}}
		>
			<Col gap={20}>
				<svg width={W} height={370} viewBox={`0 0 ${W} 370`} style={{margin: '0 auto', overflow: 'visible'}}>
					<Fringes x={0} y={40} w={W} h={170} x0={X1} period={P} />
					{[1, 2, 3, 4, 5, 6].map((k) => (
						<text key={k} x={X1 + (k - 1) * P} y={28} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">{k}</text>
					))}
					<Reticle x={X1} label={<>x<tspan dy={8} fontSize={24}>1</tspan></>} o={op('m1')} />
					<Reticle x={X2} label={<>x<tspan dy={8} fontSize={24}>2</tspan></>} o={op('m2')} />
					<g opacity={op('m3')} stroke={C.red} strokeWidth={4} fill="none">
						<line x1={X1 + 6} y1={325} x2={X2 - 6} y2={325} />
						<path d={`M${X1 + 22},315 L${X1 + 6},325 L${X1 + 22},335`} />
						<path d={`M${X2 - 22},315 L${X2 - 6},325 L${X2 - 22},335`} />
					</g>
					<text x={(X1 + X2) / 2} y={312} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle" opacity={op('m3')}>a = x<tspan dy={8} fontSize={22}>2</tspan><tspan dy={-8}> − x</tspan><tspan dy={8} fontSize={22}>1</tspan><tspan dy={-8}>（6 条亮条纹，5 个间距）</tspan></text>
				</svg>
				<Row gap={26} align="stretch">
					<Big at={cue('m3')} size={46} style={{flex: 1}}>{rich('{Δx = a/(n − 1)}')}</Big>
					<Col gap={12}>
						<Rule tag="手轮" at={cue('m1')} size={28}>转动手轮，读两次</Rule>
						<Rule tag="l" at={cue('m4')} size={28} color={C.orange}>双缝到屏，用刻度尺量</Rule>
					</Col>
				</Row>
			</Col>
		</Board>
	);
};
