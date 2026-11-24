import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C} from '../theme';
import {T} from '../timeline';
import {Board, Col, Rule} from '../components/board';
import {Row} from '../components/board';
import {rich} from '../components/auto';

// 考点七：单位圆法。以入射点 O 为圆心画圆，交入射光线于 E、交折射光线于 F，
// 过 E、F 向法线作垂线 EH、FG，n = EH/FG。
const t = T.circle;
const cue = (id: string) => t.cue[id].from;

const O = {x: 420, y: 290};
const R = 220;
const S1 = Math.sin((55 * Math.PI) / 180);
const C1 = Math.cos((55 * Math.PI) / 180);
const S2 = S1 / 1.5;
const C2 = Math.sqrt(1 - S2 * S2);
const E = {x: O.x - R * S1, y: O.y - R * C1};
const F = {x: O.x + R * S2, y: O.y + R * C2};
const H = {x: O.x, y: E.y};
const G = {x: O.x, y: F.y};

export const Circle: React.FC = () => {
	const f = useCurrentFrame();
	const op = (id: string) => interpolate(f, [cue(id), cue(id) + 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return (
		<Board t={t} tag="考点七" title="不用量角器：画圆法" callout={{label: '要点', at: cue('c4'), text: rich('同一个圆，半径相同：{n = EH/FG}')}}>
			<Row gap={40} align="center">
				<svg width={840} height={580} viewBox="0 0 840 580">
					<g opacity={op('c1')}>
						<rect x={60} y={O.y} width={720} height={270} fill="#fbf1e2" />
						<line x1={60} y1={O.y} x2={780} y2={O.y} stroke={C.text} strokeWidth={4} />
						<line x1={O.x} y1={20} x2={O.x} y2={560} stroke={C.muted} strokeWidth={3} strokeDasharray="10 8" />
						<text x={740} y={O.y + 40} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="end">玻璃</text>
						<text x={740} y={O.y - 16} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="end">空气</text>
						<line x1={O.x - 260 * S1} y1={O.y - 260 * C1} x2={O.x} y2={O.y} stroke={C.orange} strokeWidth={6} />
						<line x1={O.x} y1={O.y} x2={O.x + 260 * S2} y2={O.y + 260 * C2} stroke={C.red} strokeWidth={6} />
						<circle cx={O.x} cy={O.y} r={R} fill="none" stroke={C.brown} strokeWidth={3} />
						<text x={O.x + 18} y={O.y - 14} fontSize={30} fontWeight={900} fill={C.text}>O</text>
					</g>
					<g opacity={op('c2')}>
						<line x1={E.x} y1={E.y} x2={H.x} y2={H.y} stroke={C.orange} strokeWidth={7} />
						<circle cx={E.x} cy={E.y} r={9} fill={C.orange} />
						<text x={E.x - 4} y={E.y - 20} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">E</text>
						<text x={H.x + 22} y={H.y + 10} fontSize={30} fontWeight={900} fill={C.orange}>H</text>
					</g>
					<g opacity={op('c3')}>
						<line x1={F.x} y1={F.y} x2={G.x} y2={G.y} stroke={C.red} strokeWidth={7} />
						<circle cx={F.x} cy={F.y} r={9} fill={C.red} />
						<text x={F.x + 26} y={F.y + 10} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">F</text>
						<text x={G.x - 24} y={G.y + 10} fontSize={30} fontWeight={900} fill={C.red} textAnchor="end">G</text>
					</g>
				</svg>
				<Col gap={18}>
					<Rule tag="画圆" at={cue('c1')} size={32}>以 O 为圆心，半径 R</Rule>
					<Rule tag="垂线" at={cue('c2')} size={32} color={C.orange}>{rich('EH = R sinθ_1')}</Rule>
					<Rule tag="垂线" at={cue('c3')} size={32}>{rich('FG = R sinθ_2')}</Rule>
					<Rule tag="结果" at={cue('c3')} size={34}>{rich('{n = EH/FG}')}</Rule>
				</Col>
			</Row>
		</Board>
	);
};
