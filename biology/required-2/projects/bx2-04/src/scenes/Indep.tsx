import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.indep;
const {id1, id2, id3, id4} = t.cue;

export const Indep: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">判断两对基因是否独立遗传</Header>
		<Cards
			top={180}
			height={380}
			fontSize={32}
			titleSize={40}
			items={[
				{title: '自交法', color: C.red, at: id1.from, body: <>AaBb 自交<br />9∶3∶3∶1（或和为 16）<br />→ <Hl>两对同源染色体</Hl></>},
				{title: '测交法', color: C.orange, at: id2.from, body: <>AaBb × aabb<br />1∶1∶1∶1<br />→ <Hl>两对同源染色体</Hl></>},
				{title: '不独立', color: C.green, at: id3.from, body: <>自交 3∶1 或 1∶2∶1<br />测交 1∶1<br />→ <Hl c={C.green}>一对同源染色体</Hl></>, note: '不考虑互换'},
			]}
		/>
		<Tip at={id4.from} top={620} label="易错" fontSize={34}>
			位于一对同源染色体上的两对基因<Hl>不遵循自由组合定律</Hl>，但每一对仍遵循分离定律
		</Tip>
		<Narration t={t} />
	</Scene>
);
