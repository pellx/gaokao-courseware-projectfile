import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.source;
const {sr1, sr2, sr3, sr4} = t.cue;

export const Source: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">合成 ATP 的能量来源与场所</Header>
		<Cards
			top={175}
			height={240}
			fontSize={33}
			titleSize={42}
			items={[
				{title: '动物、人、真菌、多数细菌', color: C.orange, at: sr1.from, body: <>能量来自<Hl c={C.orange}>细胞呼吸</Hl></>, note: <>场所：细胞质基质、线粒体</>},
				{title: '绿色植物', color: C.green, at: sr2.from, body: <>能量来自<Hl c={C.green}>细胞呼吸和光合作用</Hl></>, note: <>场所：细胞质基质、线粒体、<Hl c={C.green}>叶绿体</Hl></>},
			]}
		/>
		<Tip at={sr4.from} top={470} label="易错">
			叶绿体光反应产生的 ATP 主要用于<Hl>暗反应</Hl>，一般不用于其他生命活动
		</Tip>
		<Narration t={t} />
	</Scene>
);
