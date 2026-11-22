import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cp1, cp2, cp3, cp4} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">发酵工程的概念和特点</Header>
		<Def at={cp1.from} fontSize={32} style={{left: 90, width: 1250, top: 170}}>
			<Hl>发酵工程</Hl>：利用微生物的<Hl c={C.orange}>特定功能</Hl>，通过<Hl c={C.orange}>现代工程技术</Hl>，<Hl>规模化生产</Hl>对人类有用的产品
		</Def>
		<Cards
			right={580}
			top={350}
			height={150}
			titleSize={36}
			fontSize={27}
			items={[
				{title: '生产条件温和', color: C.green, at: cp2.from, body: '常温、常压'},
				{title: '原料丰富、廉价', color: C.green, at: cp2.from + 25, body: '淀粉、糖蜜、废液等'},
			]}
		/>
		<Cards
			right={580}
			top={530}
			height={150}
			titleSize={36}
			fontSize={27}
			items={[
				{title: '产物专一', color: C.orange, at: cp3.from, body: '选育的菌种生产特定产物'},
				{title: '污染小、易处理', color: C.orange, at: cp3.from + 25, body: '废弃物对环境影响小'},
			]}
		/>
		<Appear at={cp1.from} style={{position: 'absolute', left: 1400, top: 170, width: 430, height: 510}}>
			<Photo src="images/tanks.jpg" caption="发酵罐" style={{width: '100%', height: '100%'}} pos="center 65%" />
		</Appear>
		<Tip at={cp4.from} top={725} label="易错">
			发酵工程用<Hl>选育的优良单一菌种</Hl>、在发酵罐中液体发酵；传统发酵用天然混合菌种
		</Tip>
		<Narration t={t} />
	</Scene>
);
