import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Punnett} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hw;
const {hw1, hw2, hw3, hw4} = t.cue;
const tone = (g: string) => (g === 'AA' ? C.red : g === 'aa' ? C.green : C.orange);
const note = (g: string) => (g === 'AA' ? 'p^2' : g === 'aa' ? 'q^2' : 'pq');

export const Hw: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">遗传平衡定律（哈迪—温伯格定律）</Header>
		<Def at={hw1.from} style={{left: 90, width: 900, top: 170}} fontSize={32}>
			A 的频率 ＝ p，a 的频率 ＝ q，p ＋ q ＝ 1
		</Def>
		<Def at={hw2.from} style={{left: 90, width: 900, top: 280}} fontSize={34} color={C.red} soft={C.redSoft}>
			AA ＝ <Hl>p<sup>2</sup></Hl>，Aa ＝ <Hl>2pq</Hl>，aa ＝ <Hl>q<sup>2</sup></Hl>
		</Def>
		<Def at={hw3.from} style={{left: 90, width: 900, top: 400}} fontSize={28} color={C.muted} soft={C.panel}>
			条件：种群非常大、随机交配、无迁入迁出、无自然选择、无突变
		</Def>
		<Punnett
			style={{left: 1100, top: 190}}
			at={hw2.from}
			cell={140}
			fontSize={36}
			corner="♀  ♂"
			cols={['A (p)', 'a (q)']}
			rows={['A (p)', 'a (q)']}
			cells={[['AA', 'Aa'], ['Aa', 'aa']]}
			color={tone}
			note={note}
		/>
		<Tip at={hw4.from} top={620} label="解题方法" fontSize={33}>
			aa 占 1% → q ＝ 0.1，p ＝ 0.9 → 携带者 Aa ＝ 2 × 0.9 × 0.1 ＝ <Hl>18%</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
