import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.crystal;
const {cr1, cr2, cr3, cr4, cr4b, cr5} = t.cue;
const rnd = (i: number) => {
	const x = Math.sin(i * 78.233) * 43758.5453;
	return x - Math.floor(x);
};

const Grid: React.FC<{ordered: boolean; at: number}> = ({ordered, at}) => (
	<svg width={280} height={250} viewBox="0 0 280 250">
		<G at={at}>
			<rect x={4} y={4} width={272} height={210} rx={14} fill={C.panel} stroke={C.line} strokeWidth={3} />
			{Array.from({length: 42}, (_, i) => {
				const r = Math.floor(i / 7);
				const c = i % 7;
				const x = 34 + c * 36 + (ordered ? 0 : (rnd(i) - 0.5) * 26);
				const y = 32 + r * 31 + (ordered ? 0 : (rnd(i + 50) - 0.5) * 22);
				return <circle key={i} cx={x} cy={y} r={11} fill={ordered ? C.red : C.muted} />;
			})}
			<text x={140} y={244} fontSize={26} fontWeight={900} fill={ordered ? C.red : C.muted} textAnchor="middle">{ordered ? '晶体：有序' : '非晶体：无序'}</text>
		</G>
	</svg>
);

export const Crystal: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="晶体与非晶体"
		callout={{label: '易错', at: cr5.from, text: <>有规则外形<Hl>不一定</Hl>是晶体（切割的玻璃）；晶体研成粉末<Hl>仍是晶体</Hl></>}}
	>
		<Row gap={30} align="center">
			<Grid ordered at={cr1.from} />
			<Grid ordered={false} at={cr1.from + 20} />
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: cr2.from, node: <><Hl>自范性</Hl>：自发呈现多面体外形</>},
						{at: cr3.from, node: <><Hl c={C.orange}>各向异性</Hl>：不同方向性质不同</>},
						{at: cr3.from + 40, node: <><Hl c={C.green}>固定熔点</Hl></>},
						{at: cr4.from, node: <>最可靠的区分方法：<Hl>X 射线衍射</Hl></>},
						{at: cr4b.from, node: <>其他聚集状态：<Hl c={C.orange}>液晶</Hl>（显示器）、<Hl c={C.orange}>等离子体</Hl>（导电）</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
