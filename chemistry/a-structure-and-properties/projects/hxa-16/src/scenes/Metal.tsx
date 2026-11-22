import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.metal;
const {mt1, mt2, mt3, mt3b, mt4, mt5} = t.cue;
const rnd = (i: number) => {
	const x = Math.sin(i * 39.37) * 43758.5453;
	return x - Math.floor(x);
};

const Sea: React.FC = () => (
	<svg width={480} height={330} viewBox="0 0 480 330">
		<G at={mt1.from}>
			<rect x={6} y={6} width={468} height={318} rx={20} fill={C.orangeSoft} stroke={C.orange} strokeWidth={3} />
			{Array.from({length: 70}, (_, i) => (
				<circle key={'e' + i} cx={20 + rnd(i) * 440} cy={20 + rnd(i + 99) * 290} r={5} fill={C.orange} />
			))}
			{Array.from({length: 15}, (_, i) => {
				const x = 70 + (i % 5) * 85;
				const y = 70 + Math.floor(i / 5) * 95;
				return (
					<g key={i}>
						<circle cx={x} cy={y} r={30} fill={C.red} />
						<text x={x} y={y + 10} fontSize={28} fontWeight={900} fill="#fff" textAnchor="middle">+</text>
					</g>
				);
			})}
		</G>
	</svg>
);

export const Metal: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="金属键与电子气理论"
		callout={{label: '易错', at: mt5.from, text: <>金属晶体有阳离子但<Hl>没有阴离子</Hl>；金属导电是<Hl>物理变化</Hl></>}}
		overlay={
			<AnimeBeat k="cheek" from={mt3b.from} to={mt3b.to}>
				金属受力：{'\n'}<span style={{color: C.red}}>变形但不断裂</span>{'\n'}（延展性）
			</AnimeBeat>
		}
	>
		<Row gap={30} align="center">
			<Sea />
			<Col>
				<Items
					size={32}
					gap={14}
					items={[
						{at: mt1.from, node: <>价电子形成“<Hl>电子气</Hl>”，被所有原子共用</>},
						{at: mt2.from, node: <><Hl c={C.orange}>导电</Hl>：电子气定向移动；<Hl c={C.orange}>导热</Hl>：碰撞传能</>},
						{at: mt3.from, node: <><Hl c={C.green}>延展性</Hl>：原子层滑动，电子气仍维系</>},
						{at: mt4.from, node: <>熔点：价电子多、半径小 → 高　Na &lt; Mg &lt; Al；Li &gt; Na &gt; K</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
