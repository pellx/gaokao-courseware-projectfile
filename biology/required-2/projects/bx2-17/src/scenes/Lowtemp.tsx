import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lowtemp;
const {lt1, lt2, lt3, lt4} = t.cue;

export const Lowtemp: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">低温诱导植物细胞染色体数目的变化</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={lt1.from}
				cols="240px 1fr"
				fontSize={32}
				rowHeight={84}
				head={['步骤', '操作与目的']}
				rows={[
					{at: lt1.from, cells: ['低温诱导', <>蒜或洋葱长出约 1 cm 不定根后，放入冰箱冷藏室（<Hl c={C.orange}>4 ℃</Hl>）诱导 48～72 h</>]},
					{at: lt2.from, cells: ['固定', <>根尖 0.5～1 cm 放入<Hl>卡诺氏液</Hl>：固定细胞形态；95% 酒精冲洗 2 次</>]},
					{at: lt3.from, cells: ['制片', '解离 → 漂洗 → 染色（甲紫溶液等碱性染料）→ 制片']},
					{at: lt3.from + 60, cells: ['观察', '先低倍镜，再高倍镜']},
				]}
			/>
		</div>
		<Tip at={lt4.from} top={620} label="易错" fontSize={33}>
			视野中<Hl>只有少数细胞</Hl>染色体数目加倍（多数处于间期）；细胞已死亡，看不到加倍的动态过程
		</Tip>
		<Narration t={t} />
	</Scene>
);
