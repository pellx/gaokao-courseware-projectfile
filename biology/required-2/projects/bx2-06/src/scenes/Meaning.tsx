import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning;
const {me1, me2, me3, me4} = t.cue;

export const Meaning: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">减数分裂和受精作用的意义</Header>
		<Flow
			style={{left: 90, top: 180}}
			fontSize={38}
			arrows={[[undefined, '减数分裂', '受精作用', '有丝分裂']]}
			rows={[
				[
					{label: '亲代 2n', at: me1.from},
					{label: '配子 n', at: me1.from + 30, color: C.orange},
					{label: '受精卵 2n', at: me1.from + 60, color: C.red},
					{label: '子代 2n', at: me1.from + 90},
				],
			]}
		/>
		<Rows
			style={{left: 90, right: 90, top: 340}}
			fontSize={33}
			gap={22}
			items={[
				{at: me2.from, color: C.red, title: '遗传', children: <>维持每种生物前后代体细胞中<Hl>染色体数目的恒定</Hl></>},
				{at: me3.from, color: C.orange, title: '变异', children: <>配子多样 ＋ 受精时<Hl c={C.orange}>随机结合</Hl> → 后代多样，适应多变的环境</>},
			]}
		/>
		<Tip at={me4.from} top={620} label="易错" fontSize={33}>
			对<Hl>遗传和变异</Hl>都很重要；受精卵发育成个体靠的是<Hl c={C.green}>有丝分裂</Hl>，不是减数分裂
		</Tip>
		<Narration t={t} />
	</Scene>
);
