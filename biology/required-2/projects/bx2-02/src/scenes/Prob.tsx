import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {PedLegend, Pedigree} from '../components/gene';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.prob;
const {pr1, pr2, pr3, pr4, pr5} = t.cue;

export const Prob: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">遗传概率计算</Header>
		<svg width={640} height={520} viewBox="0 0 640 520" style={{position: 'absolute', left: 90, top: 170}}>
			<text x={10} y={110} fontSize={32} fontWeight={900} fill={C.muted}>Ⅰ</text>
			<text x={10} y={330} fontSize={32} fontWeight={900} fill={C.muted}>Ⅱ</text>
			<Pedigree
				at={pr1.from}
				size={64}
				fontSize={28}
				nodes={[
					{id: 'f', x: 200, y: 100, sex: 'm', label: '1'},
					{id: 'm', x: 440, y: 100, sex: 'f', label: '2'},
					{id: 'd', x: 220, y: 320, sex: 'f', ill: true, label: '1'},
					{id: 's', x: 420, y: 320, sex: 'm', label: '2'},
				]}
				couples={[['f', 'm']]}
				kids={[{parents: ['f', 'm'], children: ['d', 's']}]}
			/>
			<G at={pr2.from}>
				<text x={200} y={50} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">Aa</text>
				<text x={440} y={50} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">Aa</text>
				<text x={220} y={420} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">aa</text>
			</G>
			<G at={pr3.from}>
				<text x={420} y={420} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">AA 或 Aa ?</text>
			</G>
			<PedLegend x={20} y={490} />
		</svg>
		<Rows
			style={{left: 800, right: 90, top: 180}}
			fontSize={31}
			gap={18}
			items={[
				{at: pr1.from, color: C.red, children: <>双亲正常生出患病女儿：<Hl>无中生有为隐性</Hl></>},
				{at: pr2.from, color: C.red, children: <>女儿患病、父亲正常 → <Hl>常染色体隐性</Hl>，双亲均为 Aa</>},
				{at: pr3.from, color: C.orange, children: <>正常个体中 AA∶Aa = 1∶2 → Ⅱ-2 为 Aa 的概率 <Hl>2/3</Hl></>},
				{at: pr4.from, color: C.orange, children: <>Ⅱ-2 × aa → 患病孩子 = 2/3 × 1/2 = <Hl>1/3</Hl></>},
			]}
		/>
		<Tip at={pr5.from} top={720} label="易错" fontSize={33}>
			已知<Hl>表型正常</Hl>，要在正常个体中算比例：是 <Hl>2/3</Hl>，不是 1/2，也不是 1/4
		</Tip>
		<Narration t={t} />
	</Scene>
);
