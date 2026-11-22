import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apply;
const {ap1, ap2, ap3, ap4, ap5} = t.cue;

export const Apply: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">在医药和农牧业上的应用</Header>
		<Cards
			top={190}
			height={340}
			titleSize={38}
			fontSize={31}
			gap={22}
			items={[
				{title: '医药', color: C.red, at: ap1.from, body: <>抗生素（如<Hl>青霉素</Hl>）<br />基因工程菌生产<Hl>疫苗、激素</Hl>等</>},
				{title: '微生物肥料', color: C.green, at: ap2.from, body: <>根瘤菌肥、固氮菌肥<br />增进<Hl c={C.green}>土壤肥力</Hl></>},
				{title: '微生物农药', color: C.green, at: ap3.from, body: <><Hl c={C.green}>苏云金杆菌</Hl><br />防治多种农林害虫</>},
				{title: '微生物饲料', color: C.orange, at: ap4.from, body: <>淀粉或纤维素水解液、制糖废液为原料<br />→ <Hl>单细胞蛋白</Hl></>},
			]}
		/>
		<Tip at={ap5.from} top={580} label="易错">
			单细胞蛋白是<Hl>微生物菌体本身</Hl>，不是从微生物细胞中提取的蛋白质
		</Tip>
		<Narration t={t} />
	</Scene>
);
