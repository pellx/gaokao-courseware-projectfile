import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board} from '../components/board';
import {ec, Orb} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.notation;
const {no1, no2, no3, no4, no5, no6} = t.cue;

export const Notation: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="四种表示方法"
		callout={{label: '考法', at: no6.from, text: <>结构大题第一空：“基态某原子的<Hl>价层电子排布式</Hl>”或“<Hl>价层电子轨道表示式</Hl>”</>}}
	>
		<Table
			head={['表示方法', '硫 S（16）', '铁 Fe（26）']}
			cols="1.3fr 2.2fr 1.6fr"
			at={no1.from}
			fontSize={32}
			rowHeight={74}
			rows={[
				{cells: ['电子排布式', ec('1s2 2s2 2p6 3s2 3p4'), ec('1s2 2s2 2p6 3s2 3p6 3d6 4s2')], at: no1.from},
				{cells: ['简化电子排布式', ec('[Ne]3s2 3p4'), ec('[Ar]3d6 4s2')], at: no2.from},
				{cells: ['价层电子排布式', <Hl>{ec('3s2 3p4')}</Hl>, <Hl>{ec('3d6 4s2')}</Hl>], at: no3.from, key: true},
				{
					cells: [
						'价层轨道表示式',
						<Orb at={no4.from} size={44} levels={[{label: '3s', e: ['ud']}, {label: '3p', e: ['ud', 'u', 'u'], color: C.red}]} />,
						<Orb at={no5.from} size={40} levels={[{label: '3d', e: ['ud', 'u', 'u', 'u', 'u'], color: C.red}, {label: '4s', e: ['ud']}]} />,
					],
					at: no4.from,
				},
			]}
			focus
		/>
	</Board>
);
