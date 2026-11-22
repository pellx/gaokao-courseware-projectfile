import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.prop;
const {pp1, pp2, pp3, pp4, pp5} = t.cue;

export const Prop: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="推断突破口：性质与用途"
		callout={{label: '考法', at: pp5.from, text: <>题干常给两三个特征：先锁定<Hl>最确定</Hl>的那个元素，再顺藤摸瓜</>}}
	>
		<Table
			head={['特征', '元素', '特征', '元素']}
			cols="2.2fr 1fr 2.2fr 1fr"
			at={pp1.from}
			fontSize={31}
			rowHeight={66}
			rows={[
				{cells: ['形成酸雨', <Hl>S、N</Hl>, '焰色黄色 / 紫色（钴玻璃）', <Hl>Na / K</Hl>], at: pp1.from},
				{cells: ['最轻的金属', <Hl>Li</Hl>, '地壳含量最多（元素 / 金属）', <Hl>O / Al</Hl>], at: pp2.from},
				{cells: ['两性氢氧化物', <Hl c={C.orange}>Al</Hl>, '氢化物使湿润红色石蕊变蓝', <Hl c={C.orange}>N</Hl>], at: pp3.from},
				{cells: ['半导体材料', <Hl c={C.green}>Si</Hl>, '常温液态非金属单质', <Hl c={C.green}>Br</Hl>], at: pp4.from},
			]}
		/>
	</Board>
);
