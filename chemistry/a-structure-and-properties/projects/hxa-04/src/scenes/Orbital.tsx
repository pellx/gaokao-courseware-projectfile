import React from 'react';
import {Hl} from '../components/ui';
import {G, Table} from '../components/kit';
import {Board, Col, Row} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.orbital;
const {ob1, ob2, ob3, ob4, ob5} = t.cue;
const n = (x: string) => <span>{x}</span>;

const Lobe: React.FC<{ang: number; c: string; cx: number; cy: number}> = ({ang, c, cx, cy}) => (
	<g transform={`rotate(${ang} ${cx} ${cy})`}>
		<ellipse cx={cx + 62} cy={cy} rx={58} ry={30} fill={c} opacity={0.55} stroke={c} strokeWidth={3} />
		<ellipse cx={cx - 62} cy={cy} rx={58} ry={30} fill={c} opacity={0.55} stroke={c} strokeWidth={3} />
	</g>
);
const Axes: React.FC<{cx: number; cy: number}> = ({cx, cy}) => (
	<g stroke={C.muted} strokeWidth={2}>
		<line x1={cx - 140} y1={cy} x2={cx + 140} y2={cy} />
		<line x1={cx} y1={cy + 140} x2={cx} y2={cy - 140} />
		<line x1={cx - 90} y1={cy + 70} x2={cx + 90} y2={cy - 70} />
	</g>
);

const Pics: React.FC = () => (
	<svg width={1100} height={330} viewBox="0 0 1100 330">
		<G at={ob1.from}>
			<circle cx={150} cy={160} r={60} fill={C.red} opacity={0.35} stroke={C.red} strokeWidth={3} />
			<circle cx={150} cy={160} r={110} fill="none" stroke={C.red} strokeWidth={3} strokeDasharray="10 7" />
			<text x={150} y={168} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">1s</text>
			<text x={150} y={60} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">2s 更大</text>
			<text x={150} y={318} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">s：球形</text>
		</G>
		{[
			{x: 470, ang: 0, l: 'px'},
			{x: 710, ang: -90, l: 'py'},
			{x: 950, ang: -38, l: 'pz'},
		].map((p, i) => (
			<G key={p.l} at={ob2.from + i * 12}>
				<Axes cx={p.x} cy={160} />
				<Lobe ang={p.ang} c={C.orange} cx={p.x} cy={160} />
				<text x={p.x} y={318} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">{p.l}</text>
			</G>
		))}
	</svg>
);

export const Orbital: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="原子轨道"
		callout={{label: '考法', at: ob5.from, text: <>判断形状和数目。<Hl>易错</Hl>：p 能级三个轨道<Hl>能量相同、形状相同</Hl>，只是伸展方向不同</>}}
	>
		<Pics />
		<Row gap={28}>
			<Col width={1100}>
				<Table
					head={['能级', 'ns', 'np', 'nd', 'nf']}
					cols="1.6fr 1fr 1fr 1fr 1fr"
					at={ob3.from}
					fontSize={32}
					rowHeight={62}
					rows={[
						{cells: ['轨道数', n('1'), n('3'), n('5'), n('7')], at: ob3.from},
						{cells: ['最多电子', n('2'), n('6'), n('10'), n('14')], at: ob4.from},
					]}
				/>
			</Col>
			<Col>
				<div style={{fontSize: 34, fontWeight: 800, lineHeight: 1.6}}>
					第 n 能层：<Hl c={C.orange}>n<sup>2</sup></Hl> 个轨道
					<div>每个轨道最多 <Hl>2</Hl> 个电子</div>
				</div>
			</Col>
		</Row>
	</Board>
);
