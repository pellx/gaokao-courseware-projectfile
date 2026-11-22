import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board, Col, Panel, Row} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.znum;
const {zn1, zn2, zn3, zn4, zn5} = t.cue;
const n = (x: number | string) => <span>{x}</span>;

export const Znum: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="原子序数的关系"
		callout={{label: '解题方法', at: zn5.from, text: <>先定<Hl>第几周期</Hl>，再数中间<Hl>隔了几种元素</Hl>；几种可能都要列出来</>}}
	>
		<Table
			head={['周期', '1', '2', '3', '4', '5', '6', '7']}
			cols="2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
			at={zn1.from}
			fontSize={32}
			rowHeight={64}
			rows={[{cells: ['元素种数', n(2), n(8), n(8), n(18), n(18), n(32), n(32)], at: zn1.from}]}
		/>
		<Row gap={28}>
			<Col>
				<Panel title="同主族上下相邻" color={C.red} at={zn2.from}>
					<div>原子序数之差：<Hl>2、8、18、32</Hl></div>
					<Appear at={zn3.from}>
						<div style={{color: C.muted}}>Na 11 → K 19：差 <Hl c={C.orange}>8</Hl></div>
						<div style={{color: C.muted}}>Cl 17 → Br 35：差 <Hl c={C.orange}>18</Hl></div>
					</Appear>
				</Panel>
			</Col>
			<Col>
				<Panel title="同周期 ⅡA → ⅢA" color={C.orange} at={zn4.from}>
					<div>第 2、3 周期：差 <Hl>1</Hl></div>
					<div>第 4、5 周期：差 <Hl>11</Hl>（隔 10 种过渡元素）</div>
					<div>第 6、7 周期：差 <Hl>25</Hl>（再加镧系、锕系）</div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
