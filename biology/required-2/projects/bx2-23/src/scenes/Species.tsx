import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.species;
const {sp1, sp2, sp3} = t.cue;

export const Species: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">物种的概念</Header>
		<Def at={sp1.from} style={{left: 90, right: 90, top: 175}} fontSize={38} color={C.red} soft={C.redSoft}>
			物种：自然状态下能<Hl>相互交配</Hl>并且产生<Hl>可育后代</Hl>的一群生物
		</Def>
		<Flow
			style={{left: 90, top: 340}}
			fontSize={38}
			arrows={[[undefined, '交配', '']]}
			rows={[
				[
					{label: '马 × 驴', at: sp2.from, color: C.brown},
					{label: '骡', at: sp2.from + 30, color: C.orange},
					{label: '骡不育 → 两个物种', at: sp2.from + 60, color: C.red},
				],
			]}
		/>
		<Tip at={sp3.from} top={520} label="解题方法" fontSize={36}>
			看两点：<Hl>能否自然交配</Hl>、<Hl>后代是否可育</Hl>，缺一不可
		</Tip>
		<Narration t={t} />
	</Scene>
);
