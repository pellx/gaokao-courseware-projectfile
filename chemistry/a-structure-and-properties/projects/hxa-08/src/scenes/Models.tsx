import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Panel, Row} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.models;
const {md1, md2, md3, md4} = t.cue;
const CH: [number, number][] = [[0, -95], [-90, 40], [90, 40], [20, 75]];

const BallStick: React.FC = () => (
	<svg width={300} height={260} viewBox="-150 -130 300 260">
		<G at={md2.from}>
			{CH.map(([x, y], i) => <line key={i} x1={0} y1={0} x2={x} y2={y} stroke={C.muted} strokeWidth={12} />)}
			{CH.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={24} fill="#f3efe9" stroke={C.muted} strokeWidth={3} />)}
			<circle cx={0} cy={0} r={38} fill={C.text} />
		</G>
	</svg>
);
const Fill: React.FC = () => (
	<svg width={300} height={260} viewBox="-150 -130 300 260">
		<G at={md3.from}>
			{CH.slice(0, 1).map(([x, y], i) => <circle key={i} cx={x * 0.55} cy={y * 0.55} r={44} fill="#f3efe9" stroke={C.muted} strokeWidth={3} />)}
			<circle cx={0} cy={0} r={70} fill={C.text} />
			{CH.slice(1).map(([x, y], i) => <circle key={i} cx={x * 0.6} cy={y * 0.6} r={44} fill="#f3efe9" stroke={C.muted} strokeWidth={3} />)}
		</G>
	</svg>
);

export const Models: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="结构式与分子模型"
		callout={{label: '易错', at: md4.from, text: <>注意原子<Hl>相对大小</Hl>：CH<sub>4</sub> 中 C 比 H 大；CCl<sub>4</sub> 中 <Hl>Cl 比 C 大</Hl></>}}
	>
		<Panel title="结构式：一根短线 = 一对共用电子（不画孤电子对）" color={C.red} at={md1.from} size={32}>
			<div style={{display: 'flex', gap: 80, fontSize: 48, fontWeight: 800, justifyContent: 'center'}}>
				<span>H—O—H</span>
				<span>O=C=O</span>
				<span>N≡N</span>
			</div>
		</Panel>
		<Row gap={24}>
			<Col>
				<Panel title={<>球棍模型（CH<sub>4</sub>）</>} color={C.orange} at={md2.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 20}}>
						<BallStick />
						<span>球 = 原子，棍 = 键<br /><Hl c={C.orange}>看得出键角</Hl></span>
					</div>
				</Panel>
			</Col>
			<Col>
				<Panel title={<>空间填充模型（CH<sub>4</sub>）</>} color={C.green} at={md3.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 20}}>
						<Fill />
						<span>按相对大小紧密堆积<br /><Hl c={C.green}>更接近真实形状</Hl></span>
					</div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
