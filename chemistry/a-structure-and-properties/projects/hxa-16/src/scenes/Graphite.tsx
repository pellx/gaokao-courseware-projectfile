import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.graphite;
const {gr1, gr2, gr2b, gr3, gr4, gr5} = t.cue;
const hexes = (y: number, sx: number) =>
	Array.from({length: 4}, (_, i) => {
		const cx = 90 + i * 104 + sx;
		return Array.from({length: 6}, (_, k) => [cx + 60 * Math.cos((Math.PI / 3) * k), y + 22 * Math.sin((Math.PI / 3) * k)]);
	});

const Layers: React.FC = () => (
	<svg width={520} height={330} viewBox="0 0 520 330">
		{[70, 170, 270].map((y, li) => (
			<G key={y} at={gr1.from + li * 10}>
				{hexes(y, li % 2 ? 52 : 0).map((h, i) => (
					<polygon key={i} points={h.map((p) => p.join(',')).join(' ')} fill="none" stroke={C.text} strokeWidth={4} />
				))}
			</G>
		))}
		<G at={gr2.from}>
			{[120, 220].map((y) => (
				<line key={y} x1={40} y1={y} x2={500} y2={y} stroke={C.orange} strokeWidth={4} strokeDasharray="10 8" />
			))}
			<text x={500} y={112} fontSize={24} fontWeight={900} fill={C.orange} textAnchor="end">范德华力</text>
		</G>
	</svg>
);

export const Graphite: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="混合型晶体：石墨"
		callout={{label: '易错', at: gr5.from, text: <>每个六元环平均 <Hl>2 个 C</Hl>（6 × 1/3）；C 原子数 ∶ C—C 键数 = <Hl>2 ∶ 3</Hl></>}}
		overlay={
			<AnimeBeat k="pancake" from={gr2b.from} to={gr2b.to}>
				石墨像<span style={{color: C.red}}>一摞松饼</span>：{'\n'}层内结实，{'\n'}层间一推就滑开
			</AnimeBeat>
		}
	>
		<Row gap={30} align="center">
			<Layers />
			<Col>
				<Items
					size={32}
					gap={14}
					items={[
						{at: gr1.from, node: <>层内：C 原子 <Hl>sp<sup>2</sup></Hl>，共价键连成六元环平面网</>},
						{at: gr2.from, node: <>层间：<Hl c={C.orange}>范德华力</Hl> → 易滑动、质软</>},
						{at: gr3.from, node: <>未杂化的 p 电子形成大 π 键，层内自由移动 → <Hl>导电</Hl></>},
						{at: gr4.from, node: <>层内 C—C 比金刚石短 → 熔点<Hl c={C.orange}>高于金刚石</Hl></>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
