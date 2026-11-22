import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.system;
const {sy1, sy2, sy3, sy4} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const System: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="元素周期系与构造原理"
		callout={{label: '考法', at: sy4.from, text: <>为什么第四周期 18 种？依次填 <Hl>4s、3d、4p</Hl>：9 个轨道 → 18 个电子</>}}
	>
		<Big at={sy1.from} size={34}>
			新能层开始 = <Hl>新周期</Hl>开始：价层 {ec('ns1')} → {ec('ns2 np6')}
		</Big>
		<Table
			head={['周期', '填充的能级', '轨道数', '元素种数']}
			cols="1fr 2.6fr 1.2fr 1.4fr"
			at={sy2.from}
			fontSize={32}
			rowHeight={62}
			rows={[
				{cells: [n('1'), '1s', n('1'), <Hl>2</Hl>], at: sy3.from},
				{cells: ['2、3', 'ns np', n('4'), <Hl>8</Hl>], at: sy3.from + 15},
				{cells: ['4、5', <>ns <Hl c={C.orange}>(n−1)d</Hl> np</>, n('9'), <Hl>18</Hl>], at: sy3.from + 30, key: true},
				{cells: ['6、7', <>ns <Hl c={C.green}>(n−2)f</Hl> (n−1)d np</>, n('16'), <Hl>32</Hl>], at: sy3.from + 45},
			]}
			focus
		/>
	</Board>
);
