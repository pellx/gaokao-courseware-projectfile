import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.relation;
const {re1, re2, re3, re4} = t.cue;

export const Relation: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">基因与性状的关系</Header>
		<Rows
			style={{left: 90, right: 90, top: 185}}
			fontSize={33}
			gap={22}
			items={[
				{at: re1.from, color: C.red, children: <>基因与性状<Hl>不是简单的一一对应</Hl>关系</>},
				{at: re2.from, color: C.orange, children: <>一个基因 → <Hl c={C.orange}>多个性状</Hl>；一个性状 ← <Hl c={C.orange}>多个基因</Hl>（如身高）</>},
				{at: re3.from, color: C.green, children: <>基因与基因、基因与基因产物、基因与<Hl c={C.green}>环境</Hl>相互作用，调控性状</>},
			]}
		/>
		<Tip at={re4.from} top={580} label="考法" fontSize={34}>
			表型 ＝ <Hl>基因型 ＋ 环境</Hl>；水毛茛水中叶与空气中叶形态不同，是环境的影响
		</Tip>
		<Narration t={t} />
	</Scene>
);
