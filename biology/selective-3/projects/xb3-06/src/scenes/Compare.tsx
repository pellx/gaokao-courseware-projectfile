import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cm1, cm2, cm3, cm4, cm5} = t.cue;

const plant = <Hl c={C.green}>完整植株</Hl>;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">各种应用的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				head={['应用', '起始材料', '培养到', '要点']}
				cols="1.2fr 1.3fr 1fr 1.6fr"
				at={cm1.from}
				fontSize={30}
				rowHeight={72}
				rows={[
					{cells: ['快速繁殖', '优良品种的体细胞', plant, '保持遗传特性'], at: cm1.from},
					{cells: ['作物脱毒', '茎尖等分生区', plant, '脱毒 ≠ 抗毒'], at: cm1.from + 20},
					{cells: ['单倍体育种', '花药（花粉）', plant, '秋水仙素加倍'], at: cm2.from},
					{cells: ['突变体利用', '愈伤组织（诱变）', plant, '突变不定向，需筛选'], at: cm3.from},
					{cells: ['细胞产物生产', '愈伤组织、细胞', <Hl>细胞阶段</Hl>, <Hl>不需要再分化</Hl>], at: cm4.from},
				]}
			/>
		</div>
		<Tip at={cm5.from} top={650} label="解题方法">
			看目的：要<Hl c={C.green}>新植株</Hl>就必须经过再分化；要<Hl>细胞产物</Hl>，停在细胞阶段即可
		</Tip>
		<Narration t={t} />
	</Scene>
);
