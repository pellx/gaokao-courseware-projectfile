import React from 'react';
import {Defs, Hl} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.spectra;
const {sp1, sp2, sp3, sp4, sp4b, sp5} = t.cue;

// 能级示意：下面基态、上面激发态，两条跃迁箭头。
const Levels: React.FC = () => (
	<svg width={620} height={420} viewBox="0 0 620 420">
		<Defs />
		<G at={sp1.from}>
			<line x1={60} y1={340} x2={560} y2={340} stroke={C.text} strokeWidth={6} />
			<text x={60} y={385} fontSize={30} fontWeight={800} fill={C.text}>基态（能量最低）</text>
			<line x1={60} y1={100} x2={560} y2={100} stroke={C.orange} strokeWidth={6} />
			<text x={60} y={80} fontSize={30} fontWeight={800} fill={C.orange}>激发态</text>
		</G>
		<G at={sp2.from}>
			<Arrow x1={200} y1={330} x2={200} y2={112} color={C.orange} marker="arrow-orange" width={6} />
			<text x={220} y={230} fontSize={28} fontWeight={800} fill={C.orange}>吸收能量</text>
			<text x={220} y={266} fontSize={24} fontWeight={700} fill={C.muted}>吸收光谱</text>
		</G>
		<G at={sp2.from + 40}>
			<Arrow x1={440} y1={112} x2={440} y2={330} color={C.red} marker="arrow-red" width={6} />
			<text x={460} y={230} fontSize={28} fontWeight={800} fill={C.red}>释放能量</text>
			<text x={460} y={266} fontSize={24} fontWeight={700} fill={C.muted}>发射光谱</text>
		</G>
	</svg>
);

export const Spectra: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="基态、激发态与原子光谱"
		callout={{label: '易错', at: sp5.from, text: <>焰色试验是<Hl>物理变化</Hl>；发光发生在电子<Hl>跃迁回</Hl>较低能级时</>}}
		overlay={
			<AnimeBeat k="spark" from={sp4b.from} to={sp4b.to}>
				电子先“跳上去”（吸收能量）{'\n'}再“跳回来”——{'\n'}能量变成<span style={{color: C.red}}>光</span>！
			</AnimeBeat>
		}
	>
		<Row gap={30} align="center">
			<Levels />
			<Col>
				<Items
					size={30}
					items={[
						{at: sp1.from, node: <>基态原子吸收能量 → <Hl c={C.orange}>激发态</Hl>原子</>},
						{at: sp2.from, node: <>基态 → 激发态：<Hl c={C.orange}>吸收</Hl>光谱（暗线）</>},
						{at: sp2.from + 40, node: <>激发态 → 较低能级：<Hl>发射</Hl>光谱（亮线）</>},
						{at: sp3.from, node: <>不同元素谱线不同 → <Hl>光谱分析</Hl>鉴定元素（发现氦）</>},
						{at: sp4.from, node: <>焰色试验、霓虹灯、激光、烟花：都是<Hl>发射</Hl>出的光</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
