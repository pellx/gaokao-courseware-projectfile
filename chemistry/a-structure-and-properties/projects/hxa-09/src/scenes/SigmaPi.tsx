import React from 'react';
import {Appear, Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Panel, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sigmapi;
const {sp1, sp2, sp3, sp3b, sp4, sp5} = t.cue;

// σ：两个 p 轨道沿连线头碰头；π：两个平行 p 轨道肩并肩。
const Sigma: React.FC = () => (
	<svg width={560} height={200} viewBox="0 0 560 200">
		<G at={sp1.from}>
			<line x1={20} y1={100} x2={540} y2={100} stroke={C.muted} strokeWidth={2} strokeDasharray="8 6" />
			<ellipse cx={110} cy={100} rx={70} ry={38} fill={C.orange} opacity={0.35} />
			<ellipse cx={235} cy={100} rx={75} ry={44} fill={C.red} opacity={0.55} />
			<ellipse cx={325} cy={100} rx={75} ry={44} fill={C.red} opacity={0.55} />
			<ellipse cx={450} cy={100} rx={70} ry={38} fill={C.orange} opacity={0.35} />
			<circle cx={180} cy={100} r={9} fill={C.text} />
			<circle cx={380} cy={100} r={9} fill={C.text} />
			<text x={280} y={180} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">重叠在核间连线上</text>
		</G>
	</svg>
);
const Pi: React.FC = () => (
	<svg width={560} height={240} viewBox="0 0 560 240">
		<G at={sp3.from}>
			<line x1={20} y1={120} x2={540} y2={120} stroke={C.muted} strokeWidth={2} strokeDasharray="8 6" />
			{[200, 360].map((x) => (
				<g key={x}>
					<ellipse cx={x} cy={65} rx={42} ry={55} fill={C.orange} opacity={0.5} />
					<ellipse cx={x} cy={175} rx={42} ry={55} fill={C.orange} opacity={0.5} />
					<circle cx={x} cy={120} r={9} fill={C.text} />
				</g>
			))}
			<rect x={238} y={25} width={84} height={70} rx={20} fill={C.red} opacity={0.35} />
			<rect x={238} y={145} width={84} height={70} rx={20} fill={C.red} opacity={0.35} />
		</G>
	</svg>
);

export const SigmaPi: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="σ 键与 π 键"
		callout={{label: '易错', at: sp5.from, text: <>两原子之间<Hl>只能有一个 σ 键</Hl>；π 键不能单独存在</>}}
		overlay={
			<AnimeBeat k="side" from={sp3b.from} to={sp3b.to}>
				π 键 = 两个 p 轨道{'\n'}<span style={{color: C.orange}}>肩并肩</span>站在一起
			</AnimeBeat>
		}
	>
		<Row gap={24}>
			<Col>
				<Panel title="σ 键：头碰头" color={C.red} at={sp1.from} size={30}>
					<Sigma />
					<div><Hl>轴对称</Hl>，可绕键轴旋转</div>
					<Appear at={sp2.from} style={{color: C.muted}}>s-s（H<sub>2</sub>）、s-p（HCl）、p-p（Cl<sub>2</sub>）</Appear>
				</Panel>
			</Col>
			<Col>
				<Panel title="π 键：肩并肩" color={C.orange} at={sp3.from} size={30}>
					<Pi />
					<div><Hl c={C.orange}>镜面对称</Hl>，不能旋转</div>
					<Appear at={sp4.from}>重叠小 → <Hl>不如 σ 键牢固</Hl>：乙烯比乙烷活泼</Appear>
				</Panel>
			</Col>
		</Row>
	</Board>
);
