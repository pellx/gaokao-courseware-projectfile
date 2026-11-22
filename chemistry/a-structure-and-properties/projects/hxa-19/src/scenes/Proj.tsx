import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.proj;
const {pj1, pj1b, pj2, pj3, pj4, pj5} = t.cue;
const S = 300;
const P = (x: number, y: number) => [30 + x * S, 30 + (1 - y) * S];

const Square: React.FC = () => (
	<svg width={S + 60} height={S + 60} viewBox={`0 0 ${S + 60} ${S + 60}`}>
		<G at={pj1.from}>
			<rect x={30} y={30} width={S} height={S} fill={C.panel} stroke={C.text} strokeWidth={4} />
		</G>
		<G at={pj2.from}>
			{[[0, 0], [1, 0], [0, 1], [1, 1], [0.5, 0.5]].map(([x, y], i) => {
				const [cx, cy] = P(x, y);
				return <circle key={i} cx={cx} cy={cy} r={18} fill={C.red} />;
			})}
			{[[0.5, 0], [0.5, 1], [0, 0.5], [1, 0.5]].map(([x, y], i) => {
				const [cx, cy] = P(x, y);
				return <circle key={i} cx={cx} cy={cy} r={18} fill={C.orange} />;
			})}
		</G>
		<G at={pj3.from}>
			{[[0.25, 0.25], [0.75, 0.75], [0.75, 0.25], [0.25, 0.75]].map(([x, y], i) => {
				const [cx, cy] = P(x, y);
				return <circle key={i} cx={cx} cy={cy} r={14} fill={C.green} />;
			})}
		</G>
	</svg>
);
const Hex: React.FC = () => {
	const pts = Array.from({length: 6}, (_, i) => [150 + 120 * Math.cos((Math.PI / 3) * i + Math.PI / 6), 150 + 120 * Math.sin((Math.PI / 3) * i + Math.PI / 6)]);
	return (
		<svg width={300} height={300} viewBox="0 0 300 300">
			<G at={pj4.from}>
				<polygon points={pts.map((p) => p.join(',')).join(' ')} fill={C.panel} stroke={C.text} strokeWidth={4} />
				{pts.map(([x, y], i) => (
					<g key={i}>
						<line x1={150} y1={150} x2={x} y2={y} stroke={C.line} strokeWidth={3} />
						<circle cx={x} cy={y} r={14} fill={C.brown} />
					</g>
				))}
				<circle cx={150} cy={150} r={20} fill={C.red} />
				<text x={150} y={292} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">两顶点重合于中心</text>
			</G>
		</svg>
	);
};

export const Proj: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="晶胞投影图（课本外）"
		callout={{label: '易错', at: pj5.from, text: <>一个投影点可能对应<Hl>多个原子</Hl>：不能用投影图直接数原子个数</>}}
		overlay={
			<AnimeBeat k="shadow" from={pj1b.from} to={pj1b.to}>
				投影 = <span style={{color: C.red}}>影子</span>：{'\n'}立体被“压扁”，{'\n'}上下重叠的点落在一起
			</AnimeBeat>
		}
	>
		<Row gap={20} align="center">
			<Square />
			<Hex />
			<Col>
				<Items
					size={29}
					gap={12}
					items={[
						{at: pj1.from, node: <>沿 <Hl>z 轴</Hl>：从正上方往下看</>},
						{at: pj2.from, node: <>面心立方：<Hl>四角 + 中心</Hl>，侧面心落在<Hl c={C.orange}>边中点</Hl></>},
						{at: pj3.from, node: <>金刚石型：再加 <Hl c={C.green}>4 个 1/4、3/4 位</Hl></>},
						{at: pj4.from, node: <>沿<Hl c={C.brown}>体对角线</Hl>：投影成正六边形</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
