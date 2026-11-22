import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Big, Board, Col, Panel, Row} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.intra;
const {in_1, in_2, in_3, in_4} = t.cue;
const R = 62;
const hex = (cx: number, cy: number) => Array.from({length: 6}, (_, i) => [cx + R * Math.cos((Math.PI / 3) * i - Math.PI / 2), cy + R * Math.sin((Math.PI / 3) * i - Math.PI / 2)]);

const Ring: React.FC<{ortho: boolean; at: number}> = ({ortho, at}) => {
	const P = hex(170, 150);
	const v1 = P[0];
	const v2 = ortho ? P[1] : P[3];
	const dir = (p: number[]) => [(p[0] - 170) / R, (p[1] - 150) / R];
	const [d1x, d1y] = dir(v1);
	const [d2x, d2y] = dir(v2);
	const o1 = [v1[0] + d1x * 60, v1[1] + d1y * 60];
	const o2 = [v2[0] + d2x * 60, v2[1] + d2y * 60];
	return (
		<svg width={340} height={300} viewBox="0 0 340 300">
			<G at={at}>
				<polygon points={P.map((p) => p.join(',')).join(' ')} fill="none" stroke={C.text} strokeWidth={4} />
				<circle cx={170} cy={150} r={36} fill="none" stroke={C.text} strokeWidth={3} />
				<line x1={v1[0]} y1={v1[1]} x2={o1[0]} y2={o1[1] + 14} stroke={C.text} strokeWidth={4} />
				<line x1={v2[0]} y1={v2[1]} x2={o2[0] - (ortho ? 10 : 0)} y2={o2[1]} stroke={C.text} strokeWidth={4} />
				<text x={o1[0]} y={o1[1]} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">OH</text>
				<text x={o2[0] + (ortho ? 26 : 0)} y={o2[1] + (ortho ? 6 : 30)} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">CHO</text>
				{ortho && <path d={`M ${o1[0] + 30} ${o1[1] - 6} Q ${o1[0] + 90} ${o1[1] + 10} ${o2[0] + 20} ${o2[1] - 22}`} fill="none" stroke={C.red} strokeWidth={5} strokeDasharray="10 7" />}
			</G>
		</svg>
	);
};

export const Intra: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="分子内氢键使熔沸点降低"
		callout={{label: '易错', at: in_4.from, text: <>看见氢键不能一律说“沸点高”：先判断<Hl>分子间</Hl>还是<Hl c={C.orange}>分子内</Hl></>}}
	>
		<Big at={in_1.from} size={36} color={C.orange} soft={C.orangeSoft}>分子<Hl c={C.orange}>内</Hl>氢键 → 熔沸点<Hl c={C.orange}>降低</Hl></Big>
		<Row gap={24}>
			<Col>
				<Panel title="邻羟基苯甲醛：分子内氢键" color={C.orange} at={in_2.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 10}}>
						<Ring ortho at={in_2.from} />
						<div>“自己抱自己”<br />沸点<Hl c={C.orange}>较低</Hl></div>
					</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="对羟基苯甲醛：分子间氢键" color={C.red} at={in_2.from + 40} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 10}}>
						<Ring ortho={false} at={in_2.from + 40} />
						<div>分子之间“抱团”<br />沸点<Hl>较高</Hl></div>
					</div>
				</Panel>
			</Col>
		</Row>
		<Big at={in_3.from} size={36}>沸点：<Hl>邻羟基苯甲醛 &lt; 对羟基苯甲醛</Hl></Big>
	</Board>
);
