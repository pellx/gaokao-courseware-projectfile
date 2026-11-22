import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Panel, Row} from '../components/board';
import {Cell, V3} from '../components/sci';
import {Rt} from './Frac';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.distance;
const {ds1, ds2, ds3, ds4, ds5, ds6} = t.cue;
const O: V3 = [0, 0, 0];

const Case: React.FC<{at: number; title: React.ReactNode; c: string; b: V3; f: React.ReactNode; ex: string}> = ({at, title, c, b, f, ex}) => (
	<Panel title={title} color={c} at={at} size={28}>
		<div style={{display: 'flex', alignItems: 'center', gap: 8}}>
			<Cell s={190} at={at} atoms={[{p: O, c, r: 14}, {p: b, c, r: 14}]} lines={[{a: O, b, c, w: 6}]} />
			<div>
				<div style={{fontSize: 36, fontWeight: 900, color: c}}>{f}</div>
				<div style={{fontSize: 24, color: C.muted}}>{ex}</div>
			</div>
		</div>
	</Panel>
);

export const Distance: React.FC = () => (
	<Board
		t={t}
		zoom={0.75}
		tag="考点六"
		title="两原子之间的最近距离"
		callout={{label: '易错', at: ds6.from, text: <>边长 <Hl>a</Hl>、面对角线 <Hl><Rt>2</Rt>a</Hl>、体对角线 <Hl><Rt>3</Rt>a</Hl>，别混</>}}
	>
		<Appear at={ds1.from} style={{fontSize: 32, fontWeight: 800}}>
			看两原子在晶胞中的<Hl>相对位置</Hl>
		</Appear>
		<Row gap={16}>
			<Col><Case at={ds2.from} title="顶点–面心" c={C.red} b={[0.5, 0, 0.5]} f={<><Rt>2</Rt>a / 2</>} ex="面心立方金属、NaCl 同种离子" /></Col>
			<Col><Case at={ds3.from} title="顶点–体心" c={C.orange} b={[0.5, 0.5, 0.5]} f={<><Rt>3</Rt>a / 2</>} ex="体心立方金属、CsCl" /></Col>
		</Row>
		<Row gap={16}>
			<Col><Case at={ds4.from} title="顶点–四面体空隙" c={C.green} b={[0.25, 0.25, 0.25]} f={<><Rt>3</Rt>a / 4</>} ex="金刚石、ZnS" /></Col>
			<Col><Case at={ds5.from} title="顶点–棱心" c={C.brown} b={[0.5, 0, 0]} f={<>a / 2</>} ex="NaCl 中阴、阳离子" /></Col>
		</Row>
	</Board>
);
