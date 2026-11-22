import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cm1, cm2, cm3, cm4, cm5} = t.cue;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">蛋白质工程与基因工程的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['比较项目', '基因工程', '蛋白质工程']}
				cols="1fr 1.6fr 1.6fr"
				at={cm1.from}
				fontSize={31}
				rowHeight={80}
				rows={[
					{cells: ['过程', '遵循中心法则：DNA → mRNA → 蛋白质', <>从<Hl>预期功能</Hl>出发，倒推出基因</>], at: cm1.from},
					{cells: ['操作对象', '基因', '基因'], at: cm2.from},
					{cells: ['结果', <Hl c={C.orange}>自然界已有的蛋白质</Hl>, <Hl>可生产自然界没有的蛋白质</Hl>], at: cm3.from},
					{cells: ['联系', '蛋白质工程是第二代基因工程', <Hl c={C.green}>最终通过基因工程实现</Hl>], at: cm4.from},
				]}
			/>
		</div>
		<Tip at={cm5.from} top={650} label="解题方法">
			看产品：<Hl c={C.orange}>天然蛋白质</Hl>用基因工程；<Hl>改造过的或全新的蛋白质</Hl>用蛋白质工程
		</Tip>
		<Narration t={t} />
	</Scene>
);
