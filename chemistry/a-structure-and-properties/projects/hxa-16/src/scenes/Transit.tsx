import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.transit;
const {tr1, tr2, tr3, tr4} = t.cue;

export const Transit: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="过渡晶体"
		callout={{label: '易错', at: tr4.from, text: <>纯粹的离子晶体很少；问“<Hl>当作哪类处理</Hl>”时按教材划分回答</>}}
	>
		<Big at={tr1.from} size={36}>四类典型晶体之间<Hl>没有绝对界限</Hl> → 过渡晶体</Big>
		<Big at={tr2.from} size={34} color={C.orange} soft={C.orangeSoft}>离子键百分数由<Hl c={C.orange}>电负性差值</Hl>决定：差值越大，离子键成分越多</Big>
		<Table
			head={['氧化物', '离子键成分', '当作']}
			cols="1fr 1fr 1.2fr"
			at={tr3.from}
			fontSize={32}
			rowHeight={60}
			rows={[
				{cells: [<>{chem('Na2O')}、{chem('MgO')}</>, '大', <Hl>离子晶体</Hl>], at: tr3.from},
				{cells: [<>{chem('Al2O3')}、{chem('SiO2')}</>, '小', <Hl c={C.orange}>共价晶体</Hl>], at: tr3.from + 40},
			]}
		/>
	</Board>
);
