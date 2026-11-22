import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.versus;
const {vs1, vs2, vs3, vs4} = t.cue;

export const Versus: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">与植物组织培养的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['比较项目', '植物组织培养', '动物细胞培养']}
				cols="1fr 1.6fr 1.6fr"
				at={vs1.from}
				fontSize={31}
				rowHeight={80}
				rows={[
					{cells: ['原理', <Hl c={C.green}>细胞的全能性</Hl>, <Hl>细胞增殖</Hl>], at: vs1.from},
					{cells: ['培养基', '固体培养基，加植物激素', '液体培养基，常加血清'], at: vs2.from},
					{cells: ['前处理', '外植体消毒', '胰蛋白酶分散成单个细胞'], at: vs2.from + 30},
					{cells: ['结果', <Hl c={C.green}>完整植株</Hl>, <Hl>细胞群（不是个体）</Hl>], at: vs3.from},
				]}
			/>
		</div>
		<Tip at={vs4.from} top={620} label="易错">
			动物细胞培养<Hl>不能体现细胞的全能性</Hl>，因为没有发育成完整个体
		</Tip>
		<Narration t={t} />
	</Scene>
);
