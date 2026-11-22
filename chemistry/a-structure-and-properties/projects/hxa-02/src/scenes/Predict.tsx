import React from 'react';
import {Hl} from '../components/ui';
import {Chain} from '../components/kit';
import {Board, Col, Panel, Row} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.predict;
const {pr1, pr2, pr3, pr4, pr5, pr6} = t.cue;

export const Predict: React.FC = () => (
	<Board
		gap={40}
		t={t}
		tag="考点七"
		title="“位—构—性”推理"
		callout={{label: '解题方法', at: pr6.from, text: <>位置 → 结构 → 性质；理由写成：<Hl>电子层数增多、半径增大、核对最外层电子的吸引减弱</Hl></>}}
	>
		<Chain
			fontSize={36}
			gap={12}
			steps={[
				{label: '同主族：最外层电子数相同', color: C.red, at: pr1.from},
				{label: '层数增多 → 半径增大', at: pr2.from},
				{label: '失电子增强、得电子减弱', color: C.orange, at: pr3.from},
			]}
		/>
		<Row gap={28}>
			<Col>
				<Panel title="铯 Cs（碱金属最下方）" color={C.red} at={pr4.from} size={36}>
					<div>与水反应比 K <Hl>更剧烈</Hl></div>
					<div>CsOH 是<Hl>强碱</Hl></div>
					<div style={{color: C.muted}}>金属性：Li &lt; Na &lt; K &lt; Rb &lt; Cs</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="砹 At（卤素最下方）" color={C.orange} at={pr5.from} size={36}>
					<div>单质是<Hl c={C.orange}>有色固体</Hl></div>
					<div>HAt <Hl>很不稳定</Hl></div>
					<div>AgAt 难溶于水</div>
					<div style={{color: C.muted}}>非金属性：F &gt; Cl &gt; Br &gt; I &gt; At</div>
				</Panel>
			</Col>
		</Row>
	</Board>
);
