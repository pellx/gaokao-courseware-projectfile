import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C} from '../theme';
import {T} from '../timeline';
import {AnimeBeat} from '../components/anime';
import {Board, Col, Row, Rule} from '../components/board';
import {rich} from '../components/auto';

// 考点四：插针法确定光路。玻璃砖上界面 aa′、下界面 bb′，A、B 在入射光线上，C、D 在出射光线上。
const t = T.path;
const cue = (id: string) => t.cue[id].from;
const {g5b} = t.cue;

const TOP = 190;
const BOT = 410;
const O = {x: 400, y: TOP};
const S1 = Math.sin((50 * Math.PI) / 180);
const C1 = Math.cos((50 * Math.PI) / 180);
const S2 = S1 / 1.5;
const T2 = S2 / Math.sqrt(1 - S2 * S2);
const O2 = {x: O.x + (BOT - TOP) * T2, y: BOT};
const on = (p: {x: number; y: number}, k: number) => ({x: p.x + k * S1, y: p.y + k * C1});
const A = on(O, -230);
const B = on(O, -120);
const Cp = on(O2, 110);
const D = on(O2, 220);

const Pin: React.FC<{p: {x: number; y: number}; label: string; dx?: number}> = ({p, label, dx = -38}) => (
	<g>
		<circle cx={p.x} cy={p.y} r={11} fill={C.red} stroke="#fff" strokeWidth={3} />
		<text x={p.x + dx} y={p.y + 10} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">{label}</text>
	</g>
);

export const Path: React.FC = () => {
	const f = useCurrentFrame();
	const op = (id: string) => interpolate(f, [cue(id), cue(id) + 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return (
		<Board
			t={t}
			tag="考点四"
			title="确定光路：插针法"
			callout={{label: '要点', at: cue('g6'), text: rich('C 挡住 A、B 的像，D 挡住 C 和 A、B 的像；{OO′} 就是折射光线')}}
			overlay={
				<AnimeBeat k="peek" from={g5b.from} to={g5b.to}>
					{rich('透过玻璃看过去\n{挡住像|red}，就在同一条光线上')}
				</AnimeBeat>
			}
		>
			<Row gap={30} align="center">
				<svg width={900} height={600} viewBox="0 0 900 600">
					<g opacity={op('g1')}>
						<rect x={150} y={TOP} width={520} height={BOT - TOP} fill="#fbf1e2" stroke={C.brown} strokeWidth={4} />
						<line x1={90} y1={TOP} x2={740} y2={TOP} stroke={C.text} strokeWidth={4} />
						<text x={70} y={TOP + 10} fontSize={30} fontWeight={800} fill={C.muted} textAnchor="middle">a</text>
						<text x={765} y={TOP + 10} fontSize={30} fontWeight={800} fill={C.muted} textAnchor="middle">a′</text>
						<line x1={O.x} y1={40} x2={O.x} y2={BOT + 40} stroke={C.muted} strokeWidth={3} strokeDasharray="10 8" />
						<text x={O.x + 24} y={TOP - 10} fontSize={30} fontWeight={900} fill={C.text}>O</text>
						<text x={O.x - 22} y={60} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="end">法线</text>
					</g>
					<g opacity={op('g2')}>
						<line x1={90} y1={BOT} x2={740} y2={BOT} stroke={C.text} strokeWidth={4} />
						<text x={70} y={BOT + 10} fontSize={30} fontWeight={800} fill={C.muted} textAnchor="middle">b</text>
						<text x={765} y={BOT + 10} fontSize={30} fontWeight={800} fill={C.muted} textAnchor="middle">b′</text>
					</g>
					<g opacity={op('g3')}>
						<line x1={A.x - 30 * S1} y1={A.y - 30 * C1} x2={O.x} y2={O.y} stroke={C.orange} strokeWidth={6} />
						<Pin p={A} label="A" />
						<Pin p={B} label="B" />
						<text x={O.x - 46} y={O.y - 70} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">θ<tspan dy={8} fontSize={21}>1</tspan></text>
					</g>
					<g opacity={op('g4')}>
						<line x1={O2.x} y1={O2.y} x2={D.x + 40 * S1} y2={D.y + 40 * C1} stroke={C.orange} strokeWidth={6} />
						<Pin p={Cp} label="C" dx={40} />
						<Pin p={D} label="D" dx={40} />
						<text x={O2.x - 26} y={BOT + 40} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">O′</text>
					</g>
					<g opacity={op('g6')}>
						<line x1={O.x} y1={O.y} x2={O2.x} y2={O2.y} stroke={C.red} strokeWidth={8} />
						<text x={O.x + 40} y={O.y + 110} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">θ<tspan dy={8} fontSize={21}>2</tspan></text>
					</g>
				</svg>
				<Col gap={18}>
					<Rule tag="①" at={cue('g1')} size={31}>画界面 {rich('{aa′}')}、法线和入射光线</Rule>
					<Rule tag="②" at={cue('g2')} size={31}>放玻璃砖，画另一界面 {rich('{bb′}')}</Rule>
					<Rule tag="③" at={cue('g3')} size={31}>入射光线上插 {rich('{A、B}')}</Rule>
					<Rule tag="④" at={cue('g4')} size={31} color={C.orange}>另一侧插 C、D，挡住像</Rule>
					<Rule tag="⑤" at={cue('g6')} size={31}>连 {rich('{OO′}')}：玻璃中的折射光线</Rule>
				</Col>
			</Row>
		</Board>
	);
};
