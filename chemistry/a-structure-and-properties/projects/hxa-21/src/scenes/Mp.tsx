import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mp;
const {mp1, mp2, mp3, mp4, mp5, mp6} = t.cue;

export const Mp: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="熔沸点、溶解性的解释"
		callout={{label: '答题模板', at: mp6.from, text: <>晶体类型 → 作用力类型 → 作用力强弱 → 结论，<Hl>四步写全</Hl></>}}
	>
		<Big at={mp1.from} size={36}>第一步：先判断<Hl>晶体类型</Hl>；不同类型：共价 &gt; 离子 &gt; 分子</Big>
		<Table
			head={['同类型', '比什么']}
			cols="1fr 3fr"
			at={mp2.from}
			fontSize={32}
			rowHeight={64}
			rows={[
				{cells: [<Hl c={C.green}>分子晶体</Hl>, <>先看<Hl c={C.orange}>氢键</Hl>，再比相对分子质量、分子极性</>], at: mp3.from},
				{cells: [<Hl c={C.orange}>离子晶体</Hl>, <>离子<Hl c={C.orange}>电荷和半径</Hl></>], at: mp4.from},
				{cells: [<Hl>共价晶体</Hl>, '键长、键能'], at: mp4.from + 30},
				{cells: ['溶解性', '相似相溶、与水形成氢键、与水反应'], at: mp5.from},
			]}
		/>
	</Board>
);
