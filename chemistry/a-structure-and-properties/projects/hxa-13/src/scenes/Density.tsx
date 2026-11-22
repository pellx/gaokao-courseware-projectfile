import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.density;
const {dn1, dn2, dn2b, dn3, dn4} = t.cue;
// 冰：中心水分子 + 四面体方向的 4 个水分子（平面示意）
const NB: [number, number][] = [[0, -120], [-115, 40], [115, 40], [0, 110]];

const Ice: React.FC = () => (
	<svg width={400} height={360} viewBox="-200 -170 400 360">
		<G at={dn1.from}>
			{NB.map(([x, y], i) => (
				<g key={i}>
					<line x1={0} y1={0} x2={x * 0.78} y2={y * 0.78} stroke={C.orange} strokeWidth={5} strokeDasharray="10 7" />
					<circle cx={x} cy={y} r={30} fill={C.red} opacity={0.85} />
					<text x={x} y={y + 9} fontSize={24} fontWeight={900} fill="#fff" textAnchor="middle">{svgChem('H2O', 24)}</text>
				</g>
			))}
			<circle cx={0} cy={0} r={36} fill={C.red} />
			<text x={0} y={9} fontSize={26} fontWeight={900} fill="#fff" textAnchor="middle">{svgChem('H2O', 26)}</text>
		</G>
	</svg>
);

export const Density: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="氢键对密度和生物大分子的影响"
		callout={{label: '答题模板', at: dn4.from, text: <>冰中水分子以<Hl>氢键</Hl>结合，氢键有<Hl>方向性</Hl>，水分子间<Hl>空隙较大</Hl> → 密度较小</>}}
		overlay={
			<AnimeBeat k="ice" from={dn2b.from} to={dn2b.to}>
				冰比水<span style={{color: C.red}}>轻</span>：{'\n'}氢键撑出了空隙
			</AnimeBeat>
		}
	>
		<Row gap={40} align="center">
			<Ice />
			<Col>
				<Items
					size={32}
					gap={18}
					items={[
						{at: dn1.from, node: <>冰中每个水分子与周围 <Hl>4 个</Hl>水分子以氢键结合</>},
						{at: dn2.from, node: <>结构空隙大 → 冰的密度<Hl>比水小</Hl>，浮在水面</>},
						{at: dn2.from + 50, node: <>冰融化：部分氢键断裂，空隙变小，密度变大</>},
						{at: dn3.from, node: <>DNA 碱基配对、蛋白质螺旋结构：都有<Hl c={C.orange}>氢键</Hl>参与</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
