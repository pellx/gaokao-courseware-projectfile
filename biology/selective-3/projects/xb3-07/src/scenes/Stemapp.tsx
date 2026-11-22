import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.stemapp;
const {sa1, sa2, sa3, sa4} = t.cue;

export const Stemapp: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">干细胞的应用</Header>
		<Cards
			top={190}
			height={370}
			titleSize={38}
			fontSize={31}
			gap={28}
			items={[
				{title: '造血干细胞', color: C.orange, at: sa1.from, body: <>骨髓移植等<br />治疗<Hl c={C.orange}>白血病</Hl>等疾病</>},
				{title: 'ES 细胞', color: C.red, at: sa2.from, body: <>必须从胚胎中获取<br />涉及<Hl>伦理问题</Hl>，应用受限</>},
				{
					title: 'iPS 细胞',
					color: C.green,
					at: sa3.from,
					body: <>来源于<Hl c={C.green}>病人自身的体细胞</Hl><br />理论上可<Hl c={C.green}>避免免疫排斥</Hl></>,
					note: <span style={{color: C.red}}>风险：可能导致肿瘤发生</span>,
				},
			]}
		/>
		<Tip at={sa4.from} top={620} label="易错">
			iPS 细胞也有风险，可能<Hl>导致肿瘤的发生</Hl>；答题时优点、风险都要想到
		</Tip>
		<Narration t={t} />
	</Scene>
);
