import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Items, Row} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pos;
const {ps1, ps2, ps3, ps4} = t.cue;
const Cellbox: React.FC<{l: string; s?: string; c?: string}> = ({l, s, c = C.line}) => (
	<div style={{width: 130, height: 130, border: `4px solid ${c}`, borderRadius: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff'}}>
		<div style={{fontSize: 44, fontWeight: 900}}>{l}</div>
		{s && <div style={{fontSize: 28, fontWeight: 900, color: c}}>{s}</div>}
	</div>
);

export const Pos: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="推断突破口：周期表中的相对位置"
		callout={{label: '解题方法', at: ps4.from, text: <>设一个元素原子序数为 <Hl>x</Hl>，用位置关系表示其他元素，再按条件<Hl>列方程</Hl></>}}
	>
		<Row gap={40} align="center">
			<Appear at={ps1.from}>
				<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 130px)', gap: 8}}>
					<div />
					<Cellbox l="Y" s="O" c={C.red} />
					<Cellbox l="Z" />
					<Cellbox l="X" />
					<Cellbox l="W" s="S" c={C.red} />
					<div />
				</div>
			</Appear>
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: ps1.from, node: <>题目常给周期表<Hl>片段</Hl> + 一个数量条件</>},
						{at: ps2.from, node: <>同主族上下相邻：差 <Hl>8 或 18</Hl>；同周期左右相邻：差 1</>},
						{at: ps3.from, node: <>“W 的原子序数是 Y 的 2 倍”：x + 8 = 2x → <Hl>Y 为 O，W 为 S</Hl></>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);
