import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cancer;
const {ca1, ca2, ca3, ca4} = t.cue;

export const Cancer: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">细胞的癌变</Header>
		<Cards
			top={180}
			height={260}
			fontSize={31}
			titleSize={40}
			items={[
				{title: '原癌基因', color: C.orange, at: ca1.from, body: <>表达的蛋白质是细胞正常生长和增殖<Hl c={C.orange}>所必需的</Hl></>, note: '突变或过量表达 → 增殖失控'},
				{title: '抑癌基因', color: C.green, at: ca2.from, body: <>表达的蛋白质<Hl c={C.green}>抑制</Hl>细胞生长和增殖，或促进凋亡</>, note: '突变后活性减弱或失去'},
			]}
		/>
		<Def at={ca3.from} style={{left: 90, right: 90, top: 480}} color={C.red} soft={C.redSoft} fontSize={32}>
			癌细胞：<Hl>无限增殖</Hl>；形态结构显著变化；细胞膜上<Hl>糖蛋白减少</Hl> → 易分散和转移
		</Def>
		<Tip at={ca4.from} top={620} label="易错" fontSize={33}>
			原癌基因和抑癌基因在<Hl>正常细胞中都存在</Hl>；癌变是<Hl>多个基因突变累积</Hl>的结果
		</Tip>
		<Narration t={t} />
	</Scene>
);
