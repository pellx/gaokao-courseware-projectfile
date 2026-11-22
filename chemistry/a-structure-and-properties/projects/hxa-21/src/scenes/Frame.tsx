import React from 'react';
import {Hl} from '../components/ui';
import {Chain} from '../components/kit';
import {Big, Board, Items} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.frame;
const {fr1, fr2, fr3, fr3b, fr4} = t.cue;

export const Frame: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="题型结构"
		gap={24}
		callout={{label: '解题方法', at: fr4.from, text: <>通读全题，圈出每空问法 → 判断属于<Hl>原子 / 分子 / 晶体</Hl>哪一层 → 调用对应模板</>}}
		overlay={
			<AnimeBeat k="desk" from={fr3b.from} to={fr3b.to}>
				题目看着新，{'\n'}每一空都是<span style={{color: C.red}}>老朋友</span>：{'\n'}一空一空做
			</AnimeBeat>
		}
	>
		<Big at={fr1.from} size={36}>一种<Hl>陌生物质</Hl>贯穿全题：新型电池材料、催化剂、配合物……</Big>
		<Chain
			fontSize={30}
			gap={8}
			steps={[
				{label: '原子：排布、电离能', color: C.red, at: fr2.from},
				{label: '分子：杂化、键角、作用力', color: C.orange, at: fr2.from + 30},
				{label: '晶体：晶胞', color: C.green, at: fr2.from + 60},
			]}
		/>
		<Items size={34} items={[{at: fr3.from, node: <>陌生的只是情境，问的都是<Hl c={C.orange}>本模块的基本规律</Hl></>}]} />
	</Board>
);
