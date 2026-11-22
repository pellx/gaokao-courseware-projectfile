import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.prok;
const {pk1, pk2, pk3} = t.cue;

export const Prok: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">原核细胞边转录边翻译</Header>
		<Cards
			top={190}
			height={340}
			fontSize={33}
			titleSize={42}
			items={[
				{title: '原核细胞', color: C.red, at: pk1.from, body: <>没有核膜，mRNA 还没转录完，核糖体就结合上去<br /><Hl>边转录边翻译</Hl></>},
				{title: '真核细胞核基因', color: C.orange, at: pk2.from, body: <>细胞核中转录 → 细胞质中翻译<br /><Hl c={C.orange}>先转录、后翻译</Hl>（时空分开）</>},
			]}
		/>
		<Tip at={pk3.from} top={590} label="解题方法" fontSize={33}>
			图中转录与翻译<Hl>同时同地</Hl>进行 → 原核细胞（或真核细胞的线粒体、叶绿体）
		</Tip>
		<Narration t={t} />
	</Scene>
);
