import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chromosome;
const {cs1, cs2, cs3, cs4, cs5} = t.cue;

export const Chromosome: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">杂种植株的染色体数目</Header>
		<Def at={cs1.from} fontSize={34} style={{left: 90, right: 90, top: 170}}>
			设植物甲体细胞有 <Hl>2m</Hl> 条染色体（二倍体），植物乙有 <Hl>2n</Hl> 条（二倍体）
		</Def>
		<div style={{position: 'absolute', left: 90, right: 90, top: 300}}>
			<Table
				head={['比较项目', '体细胞杂交', '有性杂交']}
				cols="1fr 1.5fr 1.5fr"
				at={cs2.from}
				fontSize={32}
				rowHeight={74}
				rows={[
					{cells: ['染色体数', <Hl>2m + 2n</Hl>, <Hl c={C.orange}>m + n</Hl>], at: cs2.from},
					{cells: ['倍性', <Hl>异源四倍体</Hl>, '异源二倍体'], at: cs2.from + 40},
					{cells: ['同源染色体', '有，减数分裂能正常联会', <>无，联会紊乱</>], at: cs3.from},
					{cells: ['可育性', <Hl c={C.green}>一般可育</Hl>, <Hl>一般不育</Hl>], at: cs4.from},
				]}
			/>
		</div>
		<Tip at={cs5.from} top={700} label="解题方法">
			体细胞杂交：<Hl>两个体细胞的染色体数直接相加</Hl>，倍性也相加；有性杂交：两个配子相加
		</Tip>
		<Narration t={t} />
	</Scene>
);
