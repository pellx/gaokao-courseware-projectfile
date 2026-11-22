import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.gametes;
const {ga1, ga2, ga3, ga4} = t.cue;

export const Gametes: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">配子的种类（AaBb，两对基因独立遗传）</Header>
		<Cards
			top={185}
			height={380}
			fontSize={33}
			titleSize={40}
			items={[
				{title: '一个精原细胞', color: C.red, at: ga1.from, body: <>4 个精子，<Hl>2 种</Hl><br />AB、AB、ab、ab<br />或 Ab、Ab、aB、aB</>, note: '不考虑互换'},
				{title: '一个卵原细胞', color: C.orange, at: ga2.from, body: <>1 个卵细胞<br /><Hl c={C.orange}>1 种</Hl></>, note: '另外 3 个极体退化'},
				{title: '一个个体', color: C.green, at: ga3.from, body: <>许多原始生殖细胞<br /><Hl c={C.green}>4 种</Hl>：AB、Ab、aB、ab</>, note: <>n 对杂合基因 → 2<sup>n</sup> 种</>},
			]}
		/>
		<Tip at={ga4.from} top={620} label="易错" fontSize={34}>
			分清“<Hl>一个细胞</Hl>”与“<Hl>一个个体</Hl>”；考虑互换时，一个精原细胞可产生 4 种精子
		</Tip>
		<Narration t={t} />
	</Scene>
);
