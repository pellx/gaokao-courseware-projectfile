import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.twodis;
const {tw1, tw2, tw3, tw4, tw5} = t.cue;

export const Twodis: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">两种遗传病的概率计算</Header>
		<Def at={tw1.from} style={{left: 90, right: 90, top: 165}} fontSize={32}>
			父亲多指（T 显性），母亲正常，生了一个手指正常但患白化病（a 隐性）的孩子
		</Def>
		<Def at={tw2.from} style={{left: 90, right: 90, top: 270}} fontSize={32} color={C.red} soft={C.redSoft}>
			父 <Hl>TtAa</Hl> × 母 <Hl>ttAa</Hl>：患多指 m ＝ <Hl>1/2</Hl>，患白化病 n ＝ <Hl>1/4</Hl>
		</Def>
		<div style={{position: 'absolute', left: 90, right: 90, top: 380}}>
			<Table
				at={tw3.from}
				cols="1fr 1fr 1fr"
				fontSize={32}
				rowHeight={76}
				head={['两病兼患', '完全正常', '只患一种']}
				rows={[
					{at: tw3.from, cells: ['1/2 × 1/4 ＝ 1/8', '1/2 × 3/4 ＝ 3/8', <Appear at={tw4.from} dy={0}>1 − 3/8 − 1/8 ＝ <Hl c={C.orange}>1/2</Hl></Appear>]},
					{at: tw5.from, cells: [<Hl>mn</Hl>, <Hl c={C.green}>(1−m)(1−n)</Hl>, <Hl c={C.orange}>m ＋ n − 2mn</Hl>]},
				]}
			/>
		</div>
		<Tip at={tw5.from} top={650} label="解题方法" fontSize={34}>
			先分别求 m、n；只患一种 ＝ <Hl>m ＋ n − 2mn</Hl>；患病 ＝ 1 − (1−m)(1−n)
		</Tip>
		<Narration t={t} />
	</Scene>
);
