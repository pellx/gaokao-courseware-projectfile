import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board, Col, Row, Rule} from '../components/board';
import {chem} from '../components/chem';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ion;
const {io1, io2, io3, io4, io5, io6} = t.cue;

export const Ion: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="离子的电子排布"
		callout={{label: '答题模板', at: io6.from, text: <>写出价层电子排布 → 指出<Hl>半充满 / 全充满</Hl> → 能量低、更稳定 → 结论</>}}
	>
		<Row gap={24}>
			<Col><Rule tag="主族" color={C.orange} at={io1.from} size={32}>直接增减<Hl c={C.orange}>最外层</Hl>电子</Rule></Col>
			<Col><Rule tag="过渡金属" color={C.red} at={io2.from} size={32}><Hl>先失 4s</Hl>，再失 3d</Rule></Col>
		</Row>
		<Table
			head={['微粒', '价层电子排布', '微粒', '价层电子排布']}
			cols="1fr 1.6fr 1fr 1.6fr"
			at={io3.from}
			fontSize={32}
			rowHeight={66}
			rows={[
				{cells: [chem('Fe'), ec('3d6 4s2'), chem('Cu'), ec('3d10 4s1')], at: io3.from},
				{cells: [chem('Fe^2+'), ec('3d6'), chem('Cu^+'), <Hl c={C.orange}>{ec('3d10')}</Hl>], at: io3.from + 25},
				{cells: [chem('Fe^3+'), <Hl>{ec('3d5')}</Hl>, chem('Cu^2+'), ec('3d9')], at: io3.from + 50, key: true},
				{cells: [chem('Mn'), ec('3d5 4s2'), chem('Mn^2+'), <Hl>{ec('3d5')}</Hl>], at: io4.from},
			]}
			focus
		/>
		<Big at={io5.from} size={32}>
			{chem('Fe^3+')} 比 {chem('Fe^2+')} 稳定；{chem('Mn^2+')} 比 {chem('Fe^2+')} 难被氧化——都因为 <Hl>{ec('3d5')} 半充满</Hl>
		</Big>
	</Board>
);
