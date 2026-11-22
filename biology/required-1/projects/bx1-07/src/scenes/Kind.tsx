import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.kind;
const {kn1, kn2, kn3, kn4} = t.cue;

export const Kind: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">核酸的种类和分布</Header>
		<Cards
			top={175}
			height={300}
			fontSize={34}
			titleSize={50}
			items={[
				{title: 'DNA', color: C.red, at: kn1.from, body: <>脱氧核糖核酸<br /><Hl>主要在细胞核</Hl></>, note: '线粒体、叶绿体中也有少量 DNA'},
				{title: 'RNA', color: C.orange, at: kn1.from + 50, body: <>核糖核酸<br /><Hl c={C.orange}>主要在细胞质</Hl></>, note: '细胞核中也有 RNA'},
			]}
		/>
		<Tip at={kn4.from} top={530} label="易错">
			是“<Hl>主要</Hl>”分布，不是“只”分布；原核细胞的 DNA 位于<Hl c={C.orange}>拟核</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
