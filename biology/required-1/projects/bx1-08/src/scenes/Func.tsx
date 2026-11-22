import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.func;
const {fn1, fn2, fn3, fn4} = t.cue;

export const Func: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">细胞膜的功能</Header>
		<Rows
			style={{left: 90, right: 90, top: 175}}
			fontSize={36}
			gap={24}
			items={[
				{at: fn1.from, color: C.red, children: <><Hl>将细胞与外界环境分隔开</Hl>，保障细胞内部环境的相对稳定</>},
				{at: fn2.from, color: C.orange, children: <><Hl c={C.orange}>控制物质进出细胞</Hl>（作用是<Hl>相对的</Hl>，病毒、病菌也可能侵入）</>},
				{at: fn3.from, color: C.green, children: <><Hl c={C.green}>进行细胞间的信息交流</Hl></>},
			]}
		/>
		<Tip at={fn4.from} top={560} label="考法">
			台盼蓝染色：<Hl>死细胞被染色，活细胞不着色</Hl> → 体现细胞膜控制物质进出的功能
		</Tip>
		<Narration t={t} />
	</Scene>
);
