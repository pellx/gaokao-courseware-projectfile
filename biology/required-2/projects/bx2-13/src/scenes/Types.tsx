import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.types;
const {ty1, ty2, ty3, ty4} = t.cue;

export const Types: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">三种 RNA 及其功能</Header>
		<Cards
			top={190}
			height={340}
			fontSize={33}
			titleSize={44}
			items={[
				{title: 'mRNA', color: C.red, at: ty1.from, body: <>信使 RNA：携带遗传信息，是翻译的<Hl>模板</Hl></>, note: '一条单链'},
				{title: 'tRNA', color: C.orange, at: ty2.from, body: <>转运 RNA：<Hl c={C.orange}>识别密码子</Hl>、<Hl c={C.orange}>转运氨基酸</Hl></>, note: '三叶草形，有反密码子'},
				{title: 'rRNA', color: C.green, at: ty3.from, body: <>核糖体 RNA：与蛋白质组成<Hl c={C.green}>核糖体</Hl></>, note: '翻译的场所'},
			]}
		/>
		<Tip at={ty4.from} top={590} label="考法" fontSize={34}>
			三种 RNA <Hl>都由转录产生</Hl>，都参与翻译；少数 RNA 有<Hl>催化作用</Hl>（是酶）
		</Tip>
		<Narration t={t} />
	</Scene>
);
