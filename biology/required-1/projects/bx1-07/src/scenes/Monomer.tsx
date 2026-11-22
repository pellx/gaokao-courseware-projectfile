import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.monomer;
const {mm1, mm2, mm3, mm4} = t.cue;

const row = (m: string, p: string, at: number, color: string) => [
	{label: m, note: '单体', color, at},
	{label: p, note: '多聚体（生物大分子）', at: at + 20},
];

export const Monomer: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">生物大分子以碳链为骨架</Header>
		<Flow
			style={{left: 90, top: 175}}
			fontSize={38}
			rowGap={22}
			arrows={[[undefined, '连接'], [undefined, '连接'], [undefined, '连接']]}
			rows={[row('葡萄糖', '多糖（淀粉、糖原、纤维素）', mm2.from, C.orange), row('氨基酸', '蛋白质', mm2.from + 40, C.red), row('核苷酸', '核酸', mm2.from + 80, C.green)]}
		/>
		<Def at={mm3.from} style={{left: 1000, right: 90, top: 200}} fontSize={33}>
			每个单体都以若干相连的碳原子构成的<Hl>碳链</Hl>为基本骨架
			<br />
			<Hl c={C.orange}>碳是生命的核心元素</Hl>
		</Def>
		<Tip at={mm4.from} top={620} label="易错">
			<Hl>脂肪不是生物大分子</Hl>，没有单体；淀粉、糖原、纤维素的单体都是葡萄糖
		</Tip>
		<Narration t={t} />
	</Scene>
);
