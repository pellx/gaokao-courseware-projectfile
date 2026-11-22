import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.types;
const {ty1, ty2, ty3} = t.cue;

export const Types: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">人类遗传病的三种类型</Header>
		<Def at={ty1.from} style={{left: 90, right: 90, top: 165}} fontSize={34}>
			人类遗传病：由<Hl>遗传物质改变</Hl>而引起的人类疾病
		</Def>
		<div style={{position: 'absolute', left: 90, top: 290}}>
			<Tree
				width={1300}
				height={330}
				colWidth={500}
				boxWidth={440}
				boxHeight={96}
				fontSize={32}
				root={{
					label: '人类遗传病',
					color: C.red,
					at: ty2.from,
					children: [
						{label: '单基因遗传病', note: '一对等位基因控制', color: C.orange, at: ty2.from + 20},
						{label: '多基因遗传病', note: '两对或以上等位基因控制', color: C.orange, at: ty2.from + 40},
						{label: '染色体异常遗传病', note: '染色体变异引起', color: C.orange, at: ty2.from + 60},
					],
				}}
			/>
		</div>
		<Tip at={ty3.from} top={680} label="易错" fontSize={33}>
			单基因遗传病受<Hl>一对等位基因</Hl>控制，不是“一个基因”；多基因遗传病受<Hl>两对或以上</Hl>等位基因控制
		</Tip>
		<Narration t={t} />
	</Scene>
);
