import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cp1, cp2, cp3, cp4, cp5} = t.cue;

export const Compare: React.FC = () => (
	<Board
		t={t}
		tag="考点九"
		title="四类晶体的综合比较"
		callout={{label: '解题方法', at: cp5.from, text: <>先判断<Hl>晶体类型</Hl>；类型不同按 共价 &gt; 离子 &gt; 分子；类型相同再比<Hl c={C.orange}>作用力</Hl></>}}
	>
		<Table
			head={['晶体', '构成微粒', '作用力', '熔沸点', '同类比较']}
			cols="1fr 1.6fr 1.3fr 1.1fr 2fr"
			at={cp1.from}
			fontSize={29}
			rowHeight={66}
			rows={[
				{cells: [<Hl>共价晶体</Hl>, '原子', '共价键', <Hl>很高</Hl>, '键长短、键能大 → 高'], at: cp2.from},
				{cells: [<Hl c={C.orange}>离子晶体</Hl>, '阴、阳离子', '离子键', '较高', '电荷多、半径小 → 高'], at: cp2.from + 15},
				{cells: [<Hl c={C.green}>分子晶体</Hl>, '分子', '分子间作用力', '低', '有氢键反常；相对分子质量大 → 高'], at: cp2.from + 30},
				{cells: [<Hl c={C.brown}>金属晶体</Hl>, '金属阳离子、自由电子', '金属键', '差别大', '价电子多、半径小 → 高'], at: cp3.from},
			]}
		/>
		<Appear at={cp4.from} style={{fontSize: 30, fontWeight: 800}}>
			由性质判断：熔点高、硬度大、不导电 → <Hl>共价晶体</Hl>；熔融导电 → <Hl c={C.orange}>离子晶体</Hl>；熔点低 → <Hl c={C.green}>分子晶体</Hl>
		</Appear>
	</Board>
);
