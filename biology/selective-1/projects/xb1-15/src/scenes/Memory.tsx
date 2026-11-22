import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain, Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.memory;
const {mt1, mt2, mt3, mt4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Memory: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">记忆T细胞</Header>
		<div style={{position: 'absolute', left: 90, top: 185}}>
			<Chain
				fontSize={32}
				gap={12}
				arrows={['', '立即分化', '']}
				steps={[
					{label: '相同抗原再次侵入', color: C.red, at: mt2.from},
					{label: '记忆T细胞', color: C.orange, at: at(mt2.from, mt2.to, 0.2)},
					{label: '细胞毒性T细胞', color: C.orange, at: at(mt2.from, mt2.to, 0.45)},
					{label: '迅速、高效裂解靶细胞', color: C.green, at: at(mt2.from, mt2.to, 0.7)},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 90, right: 90, top: 330}}>
			<Table
				head={['比较项目', '记忆B细胞', '记忆T细胞']}
				cols="1fr 1.5fr 1.5fr"
				at={mt1.from}
				fontSize={32}
				rowHeight={70}
				rows={[
					{cells: ['来源', 'B细胞增殖、分化', '细胞毒性T细胞增殖、分化'], at: mt1.from},
					{cells: ['再次接触抗原', '分化为浆细胞 → 抗体', '分化为细胞毒性T细胞'], at: mt2.from},
					{cells: ['共同点', '长期存在，二次免疫更快、更强', '只针对同种抗原'], at: mt3.from},
				]}
			/>
		</div>
		<Appear at={mt4.from} style={{position: 'absolute', left: 90, right: 90, top: 660}}>
			<Callout label="考法" style={{fontSize: 30}}>
				二次免疫中新的细胞毒性T细胞，主要来自<Hl c={C.orange}>记忆T细胞</Hl>；记忆细胞只针对<Hl>同种抗原</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
