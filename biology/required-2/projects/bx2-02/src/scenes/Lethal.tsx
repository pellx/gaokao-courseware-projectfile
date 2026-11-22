import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lethal;
const {le1, le2, le3, le4, le5} = t.cue;

export const Lethal: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">异常分离比（Aa × Aa）</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={le1.from}
				cols="300px 1fr 1fr"
				fontSize={31}
				rowHeight={86}
				head={['原因', '子代比例', '说明']}
				rows={[
					{at: le1.from, cells: ['显性纯合致死', <Hl>Aa∶aa = 2∶1</Hl>, 'AA 死亡（如黄色鼠）']},
					{at: le2.from, cells: ['不完全显性', <Hl c={C.orange}>1∶2∶1</Hl>, '杂合子表现为中间性状']},
					{at: le3.from, cells: ['隐性纯合致死', <Hl c={C.orange}>全为显性（1∶2）</Hl>, 'aa 死亡']},
					{at: le4.from, cells: ['含 a 的花粉致死', <Hl c={C.orange}>AA∶Aa = 1∶1</Hl>, '雄配子只有 A']},
				]}
			/>
		</div>
		<Tip at={le5.from} top={640} label="解题方法" fontSize={34}>
			先按正常的 <Hl>1∶2∶1</Hl> 写出，再<Hl>划掉致死的部分</Hl>，重新计算比例
		</Tip>
		<Narration t={t} />
	</Scene>
);
