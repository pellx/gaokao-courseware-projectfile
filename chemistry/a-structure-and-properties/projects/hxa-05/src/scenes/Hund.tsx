import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Mark, Row} from '../components/board';
import {Orb} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hund;
const {hu1, hu2, hu3, hu4, hu5} = t.cue;
const OrbRow: React.FC<{ok: boolean; at: number; e: string[]; bad?: number[][]; note: React.ReactNode}> = ({ok, at, e, bad, note}) => (
	<Mark ok={ok} at={at} size={32}>
		<span style={{display: 'inline-flex', alignItems: 'center', gap: 28}}>
			<Orb at={at} size={66} levels={[{label: '2s', e: ['ud']}, {label: '2p', e, color: ok ? C.text : undefined}]} bad={bad} />
			{note}
		</span>
	</Mark>
);

export const Hund: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="洪特规则（以 N 原子为例）"
		callout={{label: '解题方法', at: hu5.from, text: <>同框同向 → <Hl>泡利</Hl>；没分占或不平行 → <Hl c={C.orange}>洪特</Hl>；先填高能级 → <Hl c={C.green}>能量最低原理</Hl></>}}
	>
		<Appear at={hu1.from} style={{fontSize: 34, fontWeight: 800}}>
			简并轨道中的电子：先<Hl>单独分占</Hl>，且<Hl>自旋平行</Hl>
		</Appear>
		<Row gap={30}>
			<Col gap={18}>
				<OrbRow ok at={hu2.from} e={['u', 'u', 'u']} note="分占、平行" />
				<OrbRow ok={false} at={hu3.from} e={['ud', 'u', '']} bad={[[1, 0], [1, 2]]} note={<>没有分占：<Hl>违反洪特</Hl></>} />
				<OrbRow ok={false} at={hu4.from} e={['u', 'd', 'u']} bad={[[1, 1]]} note={<>不平行：<Hl>违反洪特</Hl></>} />
			</Col>
		</Row>
	</Board>
);
