import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Chem} from '../components/chem';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.conditions;
const {cd1, cd2, cd3, cd4, cd5} = t.cue;

export const Conditions: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">动物细胞培养的条件</Header>
		<Cards
			top={180}
			height={400}
			titleSize={36}
			fontSize={29}
			gap={22}
			items={[
				{title: '营养', color: C.orange, at: cd1.from, body: <>糖类、氨基酸、无机盐、维生素等<br />通常加入<Hl>血清</Hl>等天然成分</>},
				{title: '无菌、无毒', color: C.red, at: cd2.from, body: <>培养液和用具灭菌<br />无菌操作<br /><Hl>定期更换培养液</Hl>，清除代谢物</>},
				{title: '温度、pH、渗透压', color: C.brown, at: cd3.from, body: <>哺乳动物细胞<br />36.5 ℃ 左右<br />pH 7.2～7.4</>},
				{title: '气体环境', color: C.green, at: cd4.from, body: <><Hl>95% 空气 + 5% <Chem>CO2</Chem></Hl><br /><Chem>CO2</Chem> 培养箱</>},
			]}
		/>
		<Tip at={cd5.from} top={640} label="易错">
			<Chem>O2</Chem> 是细胞代谢所必需的；<Chem>CO2</Chem> 的主要作用是<Hl>维持培养液的 pH</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
