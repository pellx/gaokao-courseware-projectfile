import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board} from '../components/board';
import {Orb} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.count;
const {co1, co2, co3, co4, co5} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Count: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="未成对电子数与运动状态数"
		callout={{label: '易错', at: co5.from, text: <>“运动状态”数<Hl>电子</Hl>，“空间运动状态”数<Hl c={C.orange}>轨道</Hl>，“能量不同”数<Hl c={C.green}>能级</Hl></>}}
	>
		<div style={{display: 'flex', alignItems: 'center', gap: 30, fontSize: 32, fontWeight: 800}}>
			基态 O：
			<Orb at={co1.from} size={60} levels={[{label: '1s', e: ['ud']}, {label: '2s', e: ['ud']}, {label: '2p', e: ['ud', 'u', 'u'], color: C.red}]} />
		</div>
		<Table
			head={['问法', '数什么', '基态 O', '基态 Fe']}
			cols="2fr 1.4fr 1fr 1fr"
			at={co1.from}
			fontSize={32}
			rowHeight={68}
			rows={[
				{cells: ['未成对电子数', '单个箭头', <Hl>2</Hl>, n('4')], at: co1.from},
				{cells: ['运动状态不同的电子', <Hl>电子数</Hl>, n('8'), n('26')], at: co2.from},
				{cells: ['空间运动状态', <Hl c={C.orange}>轨道数</Hl>, <Hl c={C.orange}>5</Hl>, n('15')], at: co3.from},
				{cells: ['能量不同的电子', <Hl c={C.green}>能级数</Hl>, <Hl c={C.green}>3</Hl>, n('7')], at: co4.from},
			]}
		/>
	</Board>
);
