import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Chain} from '../components/kit';
import {Board, Col, Panel, Row} from '../components/board';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.locate;
const {lc1, lc2, lc3, lc4, lc5} = t.cue;

export const Locate: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="由价层电子排布推位置"
		callout={{label: '解题方法', at: lc5.from, text: <>先定<Hl>周期</Hl>（最高能层）→ 再定<Hl c={C.orange}>区</Hl>（最后填入的能级）→ 最后定<Hl c={C.green}>族</Hl>（按区数价层电子）</>}}
	>
		<Row gap={24}>
			<Col>
				<Panel title={<>{ec('4s2 4p3')}</>} color={C.orange} at={lc1.from} size={30}>
					<Chain fontSize={26} gap={6} steps={[{label: '第四周期', at: lc1.from}, {label: 'p 区', at: lc1.from + 20}, {label: 'ⅤA 族 → As', color: C.red, at: lc1.from + 40}]} />
				</Panel>
			</Col>
			<Col>
				<Panel title={<>{ec('3d7 4s2')}</>} color={C.green} at={lc2.from} size={30}>
					<Chain fontSize={26} gap={6} steps={[{label: '第四周期', at: lc2.from}, {label: 'd 区', at: lc2.from + 20}, {label: '7+2=9 → Ⅷ族 Co', color: C.red, at: lc2.from + 40}]} />
				</Panel>
			</Col>
		</Row>
		<Panel title="0 族定位法" color={C.red} at={lc3.from} size={32}>
			<div>稀有气体原子序数：He <Hl>2</Hl>、Ne <Hl>10</Hl>、Ar <Hl>18</Hl>、Kr <Hl>36</Hl>、Xe <Hl>54</Hl>、Rn <Hl>86</Hl></div>
			<Appear at={lc4.from} style={{marginTop: 8, color: C.text}}>34 号 = 36 − 2 → Kr 同周期往前 2 格 → <Hl>第四周期ⅥA 族 Se</Hl></Appear>
		</Panel>
	</Board>
);
