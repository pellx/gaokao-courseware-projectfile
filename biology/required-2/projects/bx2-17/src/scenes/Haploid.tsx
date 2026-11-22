import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Rows, Tip} from '../components/lib';
import {Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.haploid;
const {ha1, ha2, ha3, ha4} = t.cue;

export const Haploid: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">单倍体</Header>
		<Def at={ha1.from} style={{left: 90, right: 90, top: 165}} fontSize={32}>
			体细胞染色体数与<Hl>本物种配子</Hl>相同的个体 —— 由<Hl>配子直接发育</Hl>而来
		</Def>
		<Rows
			style={{left: 90, width: 760, top: 290}}
			fontSize={30}
			gap={18}
			items={[
				{at: ha2.from, color: C.orange, title: '组数', children: <>不一定只含一个：六倍体小麦的单倍体含<Hl c={C.orange}>三个</Hl></>},
				{at: ha3.from, color: C.green, title: '特点', children: <>植株<Hl c={C.green}>弱小</Hl>，<Hl c={C.green}>高度不育</Hl></>},
			]}
		/>
		<div style={{position: 'absolute', left: 920, top: 280}}>
			<Tree
				width={900}
				height={360}
				colWidth={330}
				boxWidth={290}
				boxHeight={90}
				fontSize={30}
				root={{
					label: '先看来源',
					color: C.red,
					at: ha4.from,
					children: [
						{label: '配子发育来的', note: '→ 单倍体', color: C.red, at: ha4.from + 20},
						{
							label: '受精卵发育来的',
							note: '→ 数染色体组',
							color: C.orange,
							at: ha4.from + 40,
							children: [
								{label: '2 个：二倍体', color: C.orange, at: ha4.from + 60},
								{label: '≥3 个：多倍体', color: C.orange, at: ha4.from + 80},
							],
						},
					],
				}}
			/>
		</div>
		<Tip at={ha4.from} top={690} label="解题方法" fontSize={33}>
			判断几倍体<Hl>先看来源</Hl>：配子发育来的，不论几个染色体组都是<Hl>单倍体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
