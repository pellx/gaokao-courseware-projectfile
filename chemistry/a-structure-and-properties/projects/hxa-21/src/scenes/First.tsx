import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {chem} from '../components/chem';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.first;
const {fi1, fi2, fi3, fi4} = t.cue;

export const First: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="第一空：电子排布"
		callout={{label: '易错', at: fi4.from, text: <>看清“<Hl>价层</Hl>”还是“完整”、“排布式”还是“<Hl>轨道表示式</Hl>”；Cr、Cu 特例必记</>}}
	>
		<Big at={fi1.from} size={36}>常问：<Hl>价层电子排布</Hl>、<Hl c={C.orange}>未成对电子数</Hl>、所在区</Big>
		<Table
			head={['微粒', '价层电子排布', '要点']}
			cols="1fr 1.6fr 2.4fr"
			at={fi2.from}
			fontSize={32}
			rowHeight={64}
			rows={[
				{cells: ['S（主族）', ec('3s2 3p4'), '价层 = 最外层'], at: fi2.from},
				{cells: ['Fe', ec('3d6 4s2'), <>过渡元素带 <Hl>(n−1)d</Hl></>], at: fi2.from + 20},
				{cells: ['Cu', ec('3d10 4s1'), <Hl c={C.orange}>全充满特例</Hl>], at: fi2.from + 40},
				{cells: [chem('Fe^3+'), <Hl>{ec('3d5')}</Hl>, <>先失 <Hl>4s</Hl></>], at: fi3.from},
				{cells: [chem('Cu^2+'), ec('3d9'), '先失 4s，再失 3d'], at: fi3.from + 25},
			]}
		/>
	</Board>
);
