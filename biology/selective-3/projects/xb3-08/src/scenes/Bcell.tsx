import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.bcell;
const {bc1, bc2, bc3, bc4} = t.cue;

export const Bcell: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">B 淋巴细胞的来源</Header>
		<Flow
			style={{left: 90, top: 200}}
			fontSize={34}
			rows={[
				[
					{label: '特定抗原', color: C.red, at: bc1.from},
					{label: '多次免疫小鼠', at: bc1.from + 10},
					{label: '检测血清抗体', at: bc1.from + 20},
					{label: '从脾中取 B 淋巴细胞', color: C.orange, at: bc1.from + 30},
				],
			]}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 360}}
			fontSize={32}
			gap={24}
			items={[
				{at: bc2.from, color: C.red, children: <>只有<Hl>经过免疫</Hl>的 B 淋巴细胞，才能产生针对该抗原的抗体</>},
				{at: bc3.from, children: <>一般<Hl c={C.orange}>多次免疫</Hl>，检测血清中的抗体，确认免疫成功后再取脾</>},
				{at: bc4.from, color: C.green, children: <>“单克隆”：由<Hl c={C.green}>单个杂交瘤细胞</Hl>增殖形成的细胞群</>},
			]}
		/>
		<Tip at={bc4.from} top={680} label="易错">
			<Hl>未免疫小鼠</Hl>的 B 细胞不能产生所需抗体；B 淋巴细胞取自<Hl>脾</Hl>，不是骨髓
		</Tip>
		<Narration t={t} />
	</Scene>
);
