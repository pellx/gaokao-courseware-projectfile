import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Col, Mark, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {ec, Orb} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lowest;
const {lo1, lo2, lo3, lo4, lo4b, lo5} = t.cue;

const Case: React.FC<{name: string; at: number; wrong: string; right: string; d: string[]; s: string[]}> = ({name, at, wrong, right, d, s}) => (
	<Col gap={12}>
		<div style={{fontSize: 34, fontWeight: 900}}>{name}</div>
		<Mark ok={false} at={at} size={30}>{ec(wrong)}</Mark>
		<Mark ok at={at + 30} size={30}><Hl>{ec(right)}</Hl></Mark>
		<div style={{paddingLeft: 10}}>
			<Orb at={at + 30} size={54} levels={[{label: '3d', e: d, color: C.red}, {label: '4s', e: s}]} />
		</div>
	</Col>
);

export const Lowest: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="能量最低原理与特例"
		callout={{label: '易错', at: lo5.from, text: <>Cr、Cu 的排布最易写错；Mo、Ag 也类似，但高考主要考 <Hl>Cr 和 Cu</Hl></>}}
		overlay={
			<AnimeBeat k="full" from={lo4b.from} to={lo4b.to}>
				全员到齐最安心：{'\n'}d<sup>5</sup> 半满、d<sup>10</sup> 全满{'\n'}<span style={{color: C.red}}>最稳定</span>
			</AnimeBeat>
		}
	>
		<Big at={lo1.from} size={34}>构造原理 + 泡利原理 + 洪特规则 → 原子能量<Hl>最低</Hl></Big>
		<Row gap={50}>
			<Case name="铬 Cr（24）" at={lo2.from} wrong="[Ar]3d4 4s2" right="[Ar]3d5 4s1" d={['u', 'u', 'u', 'u', 'u']} s={['u']} />
			<Case name="铜 Cu（29）" at={lo3.from} wrong="[Ar]3d9 4s2" right="[Ar]3d10 4s1" d={['ud', 'ud', 'ud', 'ud', 'ud']} s={['u']} />
		</Row>
		<Big at={lo4.from} size={34} color={C.orange} soft={C.orangeSoft}>
			原因：能量相同的轨道<Hl>全充满、半充满</Hl>（或全空）时，能量较低，原子较稳定
		</Big>
	</Board>
);
