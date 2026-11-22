import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.restore;
const {rs1, rs2, rs3, rs4} = t.cue;

export const Restore: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">退耕还林、还草、还湖</Header>
		<Appear at={rs1.from} style={{position: 'absolute', left: 90, right: 90, top: 180, fontSize: 31, fontWeight: 700, lineHeight: 1.6}}>
			在不适宜耕种的坡地、沙化土地等实施：<Hl c={C.green}>退耕还林、还草、还湖</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 280}}>
			<Chain
				fontSize={31}
				gap={12}
				steps={[
					{label: '土壤条件还在', color: C.brown, at: rs2.from},
					{label: '次生演替，速度较快', color: C.red, at: rs2.from + 30},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 90, top: 400}}>
			<Chain
				fontSize={31}
				gap={12}
				steps={[
					{label: '物种丰富度增加', color: C.green, at: rs3.from},
					{label: '结构变复杂', color: C.green, at: rs3.from + 20},
					{label: '稳定性提高', color: C.green, at: rs3.from + 40},
					{label: '控制水土流失、沙化', color: C.orange, at: rs3.from + 60},
				]}
			/>
		</div>
		<Appear at={rs4.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="考法" style={{fontSize: 31}}>
				退耕还林属于<Hl>次生演替</Hl>；体现了人类活动可以改变演替的<Hl c={C.orange}>速度和方向</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
