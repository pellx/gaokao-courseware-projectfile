import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.nonmem;
const {nm1, nm2, nm3, nm4} = t.cue;

export const Nonmem: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">核糖体、中心体与细胞骨架</Header>
		<Cards
			top={170}
			height={270}
			fontSize={30}
			titleSize={42}
			items={[
				{title: '核糖体（无膜）', color: C.red, at: nm1.from, body: <>“生产蛋白质的机器”</>, note: '附着在内质网上或游离在细胞质中'},
				{title: '中心体（无膜）', color: C.orange, at: nm2.from, body: <>见于<Hl c={C.orange}>动物和某些低等植物</Hl>细胞</>, note: '两个互相垂直的中心粒，与有丝分裂有关'},
				{title: '细胞骨架', color: C.brown, at: nm3.from, body: <>由<Hl c={C.brown}>蛋白质纤维</Hl>组成的网架结构</>, note: '维持细胞形态，锚定并支撑细胞器'},
			]}
		/>
		<Tip at={nm4.from} top={490} label="易错">
			细胞骨架是<Hl>蛋白质</Hl>，不是纤维素；<Hl>高等植物细胞没有中心体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
