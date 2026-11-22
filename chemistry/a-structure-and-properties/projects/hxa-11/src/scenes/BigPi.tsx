import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.bigpi;
const {bp1, bp2, bp3, bp4} = t.cue;
const R = 130;
const PTS = Array.from({length: 6}, (_, i) => [200 + R * Math.cos((Math.PI / 3) * i + Math.PI / 6), 200 + R * Math.sin((Math.PI / 3) * i + Math.PI / 6)]);

const Benzene: React.FC = () => (
	<svg width={400} height={400} viewBox="0 0 400 400">
		<G at={bp1.from}>
			<polygon points={PTS.map((p) => p.join(',')).join(' ')} fill="none" stroke={C.text} strokeWidth={5} />
			{PTS.map(([x, y], i) => (
				<g key={i}>
					<ellipse cx={x} cy={y - 34} rx={16} ry={30} fill={C.orange} opacity={0.6} />
					<ellipse cx={x} cy={y + 34} rx={16} ry={30} fill={C.orange} opacity={0.3} />
					<circle cx={x} cy={y} r={12} fill={C.text} />
				</g>
			))}
		</G>
		<G at={bp2.from}>
			<circle cx={200} cy={200} r={72} fill="none" stroke={C.red} strokeWidth={7} strokeDasharray="14 8" />
			<text x={200} y={214} fontSize={40} fontWeight={900} fill={C.red} textAnchor="middle">Π</text>
		</G>
	</svg>
);

export const BigPi: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="大 π 键（课本外，考试会用）"
		callout={{label: '易错', at: bp4.from, text: <>Π<sub>m</sub><sup>n</sup>：m 是<Hl>原子数</Hl>，n 是<Hl>电子数</Hl>（不是电子对数），位置别写反</>}}
	>
		<Row gap={40} align="center">
			<Benzene />
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: bp1.from, node: <>苯：6 个 C 都是 sp<sup>2</sup>，各剩一个<Hl>垂直于平面的 p 轨道</Hl></>},
						{at: bp2.from, node: <>6 个 p 轨道肩并肩，6 个电子环上运动 → <Hl>Π<sub>6</sub><sup>6</sup></Hl></>},
						{at: bp3.from, node: <>Π<sub>m</sub><sup>n</sup>：m = 参与原子数，n = 参与电子数</>},
						{at: bp3.from + 40, node: <>{chem('CO3^2-')}、{chem('NO3^-')}：<Hl c={C.orange}>Π<sub>4</sub><sup>6</sup></Hl></>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
