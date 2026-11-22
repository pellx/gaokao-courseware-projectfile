import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hbond;
const {hb1, hb2, hb2b, hb3, hb4} = t.cue;

// 两个水分子：左边 O—H 的 H 指向右边分子的 O，中间画虚线氢键。
const Water: React.FC<{x: number; y: number; rot: number}> = ({x, y, rot}) => (
	<g transform={`translate(${x},${y}) rotate(${rot})`}>
		<line x1={0} y1={0} x2={80} y2={0} stroke={C.text} strokeWidth={6} />
		<line x1={0} y1={0} x2={-20} y2={78} stroke={C.text} strokeWidth={6} />
		<circle cx={0} cy={0} r={34} fill={C.red} />
		<text x={0} y={11} fontSize={32} fontWeight={900} fill="#fff" textAnchor="middle">O</text>
		<circle cx={80} cy={0} r={22} fill="#bfb6aa" />
		<text x={80} y={8} fontSize={22} fontWeight={900} fill="#fff" textAnchor="middle">H</text>
		<circle cx={-20} cy={78} r={22} fill="#bfb6aa" />
		<text x={-20} y={86} fontSize={22} fontWeight={900} fill="#fff" textAnchor="middle">H</text>
	</g>
);

export const Hbond: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="氢键"
		callout={{label: '易错', at: hb4.from, text: <>氢键<Hl>不是化学键</Hl>，属于分子间作用力；虚线连 H 与另一分子中的 N、O、F</>}}
		overlay={
			<AnimeBeat k="hug" from={hb2b.from} to={hb2b.to}>
				氢键像<span style={{color: C.red}}>搭肩</span>：{'\n'}不是一体，{'\n'}却靠得很近、彼此牵制
			</AnimeBeat>
		}
	>
		<Row gap={30} align="center">
			<svg width={560} height={300} viewBox="0 0 560 300">
				<G at={hb1.from}>
					<Water x={110} y={110} rot={0} />
					<Water x={400} y={110} rot={20} />
				</G>
				<G at={hb2.from}>
					<line x1={212} y1={110} x2={362} y2={110} stroke={C.orange} strokeWidth={6} strokeDasharray="12 9" />
					<text x={290} y={88} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">氢键</text>
					<text x={280} y={260} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">O—H … O</text>
				</G>
			</svg>
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: hb1.from, node: <>H 与<Hl>电负性大、半径小</Hl>的原子相连，几乎成为裸露质子</>},
						{at: hb2.from, node: <>只限 H 连 <Hl>N、O、F</Hl>；表示为 X—H…Y</>},
						{at: hb3.from, node: <>强度：化学键 &gt; <Hl c={C.orange}>氢键</Hl> &gt; 范德华力</>},
						{at: hb3.from + 40, node: <>有<Hl c={C.orange}>方向性</Hl>和<Hl c={C.orange}>饱和性</Hl></>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
