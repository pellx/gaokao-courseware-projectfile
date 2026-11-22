import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.stem;
const {st1, st2, st3, st4, st5} = t.cue;

export const Stem: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">干细胞的类型</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['类型', '来源', '分化潜能']}
				cols="1.5fr 1.4fr 2fr"
				at={st1.from}
				fontSize={30}
				rowHeight={110}
				rows={[
					{cells: [<Hl>胚胎干细胞（ES 细胞）</Hl>, '早期胚胎', <>可分化为成年动物体内<Hl>任何一种类型的细胞</Hl>，形成所有组织器官甚至个体</>], at: st1.from},
					{cells: [<Hl c={C.orange}>成体干细胞</Hl>, '成体组织：骨髓中的造血干细胞、神经干细胞等', <>一般只能分化成<Hl c={C.orange}>特定的细胞或组织</Hl></>], at: st3.from},
					{cells: [<Hl c={C.green}>诱导多能干细胞（iPS 细胞）</Hl>, '体外诱导成纤维细胞等体细胞', <>类似胚胎干细胞</>], at: st4.from},
				]}
			/>
		</div>
		<Tip at={st5.from} top={640} label="易错">
			成体干细胞<Hl>不具有发育成完整个体的能力</Hl>；ES 细胞的分化潜能最大
		</Tip>
		<Narration t={t} />
	</Scene>
);
