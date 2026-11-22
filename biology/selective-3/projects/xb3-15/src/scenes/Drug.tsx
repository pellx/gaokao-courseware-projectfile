import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.drug;
const {dr1, dr2, dr3, dr4} = t.cue;

export const Drug: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">工程菌生产药物与器官移植</Header>
		<Cards
			top={185}
			height={420}
			titleSize={38}
			fontSize={30}
			gap={30}
			items={[
				{
					title: '基因工程菌',
					color: C.orange,
					at: dr1.from,
					body: <>药用蛋白基因导入<Hl c={C.orange}>大肠杆菌、酵母菌</Hl>等<br /><br />生产<Hl>胰岛素、干扰素、白细胞介素</Hl>、溶血栓剂、乙肝疫苗等</>,
				},
				{
					title: '移植器官工厂',
					color: C.red,
					at: dr3.from,
					body: <>在供体基因组中导入调节因子，<Hl>抑制抗原决定基因的表达</Hl>，或除去抗原决定基因<br /><br />再结合克隆技术 → 无免疫排斥的转基因克隆猪器官</>,
				},
			]}
		/>
		<Tip at={dr4.from} top={660} label="解题方法">
			蛋白质需要<Hl>加工修饰</Hl>（如糖基化），就选有内质网、高尔基体的<Hl c={C.orange}>酵母菌</Hl>，而不是大肠杆菌
		</Tip>
		<Narration t={t} />
	</Scene>
);
