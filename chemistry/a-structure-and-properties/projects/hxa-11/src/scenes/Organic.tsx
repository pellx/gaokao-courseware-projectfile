import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.organic;
const {or1, or2, or3, or4} = t.cue;

export const Organic: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="有机物中原子的杂化"
		callout={{label: '考法', at: or4.from, text: <>数 sp<sup>2</sup>、sp<sup>3</sup> 碳各有几个；判断最多几个原子<Hl>共面</Hl></>}}
	>
		<Table
			head={['原子', '连接原子数', '杂化', '几何关系']}
			cols="2fr 1fr 1fr 2.2fr"
			at={or1.from}
			fontSize={32}
			rowHeight={64}
			rows={[
				{cells: ['饱和碳（—CH3、—CH2—）', <span>4</span>, <Hl c={C.green}>sp³</Hl>, '最多 3 个原子共面'], at: or1.from},
				{cells: ['双键碳、苯环碳', <span>3</span>, <Hl c={C.orange}>sp²</Hl>, <>与相连 3 个原子<Hl c={C.orange}>共平面</Hl></>], at: or1.from + 30},
				{cells: ['三键碳', <span>2</span>, <Hl>sp</Hl>, <>与相连 2 个原子<Hl>共直线</Hl></>], at: or1.from + 60},
				{cells: ['—OH 中的 O、—NH2 中的 N', <span>2 / 3</span>, <Hl c={C.green}>sp³</Hl>, '有孤电子对'], at: or2.from},
			]}
		/>
		<Rule tag="联系" color={C.brown} at={or3.from} size={32}>杂化方式 ↔ <Hl>共面共线</Hl>：sp<sup>2</sup> 平面、sp 直线、sp<sup>3</sup> 四面体</Rule>
	</Board>
);
