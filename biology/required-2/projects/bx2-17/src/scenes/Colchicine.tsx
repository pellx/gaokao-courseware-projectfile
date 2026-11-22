import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.colchicine;
const {co1, co2, co3, co4} = t.cue;

export const Colchicine: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">秋水仙素与低温：人工诱导多倍体</Header>
		<Flow
			style={{left: 90, top: 190}}
			fontSize={34}
			rows={[
				[
					{label: '秋水仙素 / 低温', at: co1.from, color: C.red},
					{label: '抑制纺锤体形成', at: co2.from, color: C.red},
					{label: '染色体不能移向两极', at: co2.from + 40, color: C.orange},
					{label: '染色体数目加倍', at: co2.from + 80, color: C.green},
				],
			]}
		/>
		<Rows
			style={{left: 90, right: 90, top: 350}}
			fontSize={32}
			gap={20}
			items={[
				{at: co1.from, color: C.red, title: '最常用', children: <>用<Hl>秋水仙素</Hl>处理萌发的种子或幼苗</>},
				{at: co3.from, color: C.orange, title: '低温', children: <>同样能抑制纺锤体形成，诱导染色体数目加倍</>},
			]}
		/>
		<Tip at={co4.from} top={600} label="易错" fontSize={33}>
			秋水仙素作用于<Hl>分裂前期</Hl>，不影响着丝粒分裂；处理对象是<Hl>分裂旺盛</Hl>的部位（萌发种子、芽尖）
		</Tip>
		<Narration t={t} />
	</Scene>
);
