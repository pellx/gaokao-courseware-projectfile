import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.struct;
const {st1, st2, st3, st3b, st4} = t.cue;

export const Struct: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="推断突破口：原子结构特征"
		callout={{label: '解题方法', at: st4.from, text: <>把每个条件写成<Hl>结构特征</Hl>，对照 1～20 号元素的排布逐个排除</>}}
		overlay={
			<AnimeBeat k="puzzle" from={st3b.from} to={st3b.to}>
				推断像<span style={{color: C.red}}>拼图</span>：{'\n'}先找最有特点的几块
			</AnimeBeat>
		}
	>
		<Table
			head={['结构特征', '元素']}
			cols="3fr 1.6fr"
			at={st1.from}
			fontSize={32}
			rowHeight={64}
			rows={[
				{cells: ['最外层电子数 = 次外层 2 倍', <Hl>C</Hl>], at: st1.from},
				{cells: ['最外层电子数 = 次外层 3 倍', <Hl>O</Hl>], at: st1.from + 20},
				{cells: ['最外层电子数 = 电子层数', <Hl>H、Be、Al</Hl>], at: st1.from + 40},
				{cells: ['3 个未成对电子（第二、三周期）', <Hl c={C.orange}>N、P</Hl>], at: st2.from},
				{cells: ['2 个未成对电子', <Hl c={C.orange}>C、O、Si、S</Hl>], at: st2.from + 30},
				{cells: ['s 电子数 = p 电子数', <><Hl>O</Hl>（{ec('1s2 2s2 2p4')}）、<Hl>Mg</Hl></>], at: st3.from},
			]}
		/>
	</Board>
);
