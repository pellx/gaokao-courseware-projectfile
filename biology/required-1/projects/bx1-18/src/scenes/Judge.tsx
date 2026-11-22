import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.judge;
const {jd1, jd2, jd3, jd4, jd5} = t.cue;

export const Judge: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">根据气体变化判断呼吸方式（底物为葡萄糖）</Header>
		<Appear at={jd1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={jd1.from}
				cols="560px 1fr"
				fontSize={31}
				rowHeight={80}
				head={['气体变化', '呼吸方式']}
				rows={[
					{at: jd1.from, cells: ['只释放 CO2，不吸收 O2', <Hl>只进行产酒精的无氧呼吸</Hl>]},
					{at: jd2.from, cells: ['CO2 释放量 ＝ O2 吸收量', <>只有氧呼吸，或<Hl c={C.orange}>有氧呼吸 ＋ 产乳酸的无氧呼吸</Hl></>]},
					{at: jd3.from, cells: ['CO2 释放量 ＞ O2 吸收量', <Hl>有氧呼吸 ＋ 产酒精的无氧呼吸</Hl>]},
					{at: jd4.from, cells: ['不吸收 O2，也不释放 CO2', '只进行产乳酸的无氧呼吸，或细胞已死亡']},
				]}
			/>
		</Appear>
		<Tip at={jd5.from} top={600} label="易错">
			底物是<Hl>脂肪</Hl>时，O<sub>2</sub> 消耗量 ＞ CO<sub>2</sub> 释放量，不能直接套用
		</Tip>
		<Narration t={t} />
	</Scene>
);
