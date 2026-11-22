import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Mark} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.essence;
const {es1, es2, es3, es4} = t.cue;

export const Essence: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="化学反应的本质"
		gap={18}
		callout={{label: '解题方法', at: es4.from, text: <>先看物质类别再看过程：离子化合物熔化 → 破坏<Hl>离子键</Hl>；分子晶体熔化 → 只破坏<Hl c={C.green}>分子间作用力</Hl></>}}
	>
		<Big at={es1.from} size={42} color={C.red} soft={C.redSoft}>
			<Hl>旧键断裂</Hl> + <Hl c={C.orange}>新键形成</Hl> = 化学变化
		</Big>
		<Mark ok={false} at={es2.from} size={32}>{chem('NaCl')} 熔化：离子键断裂，<Hl>没有新键形成</Hl> → 不是化学变化</Mark>
		<Mark ok={false} at={es2.from + 40} size={32}>{chem('HCl')} 溶于水：共价键断裂，<Hl>没有新键形成</Hl> → 不是化学变化</Mark>
		<Mark ok={false} at={es3.from} size={32}>干冰升华、冰融化：只破坏<Hl c={C.green}>分子间作用力</Hl>，化学键不变</Mark>
	</Board>
);
