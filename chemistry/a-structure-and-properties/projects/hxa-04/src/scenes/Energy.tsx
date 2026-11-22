import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Row, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.energy;
const {en1, en2, en3, en4, en5} = t.cue;
// 能级图：纵向为能量（示意，不按比例）。
const LV: [string, number, number, string][] = [
	['1s', 0, 530, C.red], ['2s', 0, 450, C.red], ['2p', 1, 415, C.orange], ['3s', 0, 345, C.red], ['3p', 1, 310, C.orange],
	['4s', 0, 240, C.red], ['3d', 2, 205, C.green], ['4p', 1, 150, C.orange],
];

const Diagram: React.FC = () => (
	<svg width={820} height={570} viewBox="0 0 820 570">
		<G at={en1.from}>
			<line x1={30} y1={540} x2={30} y2={130} stroke={C.muted} strokeWidth={3} />
			<text x={42} y={140} fontSize={24} fontWeight={800} fill={C.muted}>能量</text>
			{LV.map(([l, col, y, c]) => {
				const boxes = l.endsWith('s') ? 1 : l.endsWith('p') ? 3 : 5;
				const x0 = 110 + col * 170;
				return (
					<g key={l}>
						{Array.from({length: boxes}, (_, i) => (
							<rect key={i} x={x0 + i * 30} y={y - 12} width={26} height={24} fill="#fff" stroke={c} strokeWidth={3} />
						))}
						<text x={x0 - 12} y={y + 9} fontSize={26} fontWeight={900} fill={c} textAnchor="end">{l}</text>
					</g>
				);
			})}
		</G>
		<G at={en4.from}>
			<rect x={70} y={183} width={540} height={80} rx={14} fill="none" stroke={C.red} strokeWidth={4} strokeDasharray="10 7" />
			<text x={625} y={232} fontSize={28} fontWeight={900} fill={C.red}>交错：4s &lt; 3d</text>
		</G>
	</svg>
);

export const Energy: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="能级能量的比较"
		callout={{label: '解题方法', at: en5.from, text: <>先看同一能层？再看同种能级？跨层的 s、d：<Hl>ns &lt; (n−1)d &lt; np</Hl></>}}
	>
		<Row gap={30} align="center">
			<Diagram />
			<Col gap={18}>
				<Rule tag="同一能层" color={C.red} at={en1.from}><Hl>ns &lt; np &lt; nd &lt; nf</Hl></Rule>
				<Rule tag="同种能级" color={C.orange} at={en2.from}>1s &lt; 2s &lt; 3s &lt; 4s；2p &lt; 3p &lt; 4p</Rule>
				<Rule tag="同一能级" color={C.green} at={en3.from}>2p<sub>x</sub> = 2p<sub>y</sub> = 2p<sub>z</sub></Rule>
				<Rule tag="交错" color={C.red} at={en4.from}><Hl>4s &lt; 3d</Hl>，5s &lt; 4d</Rule>
			</Col>
		</Row>
	</Board>
);
