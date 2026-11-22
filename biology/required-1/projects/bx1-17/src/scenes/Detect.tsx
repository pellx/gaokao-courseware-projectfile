import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.detect;
const {dt1, dt2, dt3, dt4} = t.cue;

export const Detect: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">二氧化碳和酒精的检测</Header>
		<Appear at={dt1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={dt1.from}
				cols="200px 1fr 1fr"
				fontSize={32}
				rowHeight={80}
				head={['产物', '检测试剂', '现象']}
				rows={[
					{at: dt1.from, cells: ['CO2', '澄清石灰水', <><Hl c={C.orange}>变浑浊</Hl>（程度反映 CO<sub>2</sub> 多少）</>]},
					{at: dt1.from + 50, cells: ['CO2', '溴麝香草酚蓝溶液', <>由蓝变绿再<Hl c={C.orange}>变黄</Hl>（时间反映多少）</>]},
					{at: dt3.from, cells: ['酒精', <><Hl>酸性</Hl>重铬酸钾溶液</>, <>橙色 → <Hl>灰绿色</Hl></>]},
				]}
			/>
		</Appear>
		<Tip at={dt4.from} top={560} label="易错">
			葡萄糖也能与酸性重铬酸钾反应 → 要<Hl>适当延长培养时间</Hl>，耗尽葡萄糖再检测酒精
		</Tip>
		<Narration t={t} />
	</Scene>
);
