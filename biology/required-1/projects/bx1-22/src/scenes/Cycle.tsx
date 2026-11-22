import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cycle;
const {cy1, cy2, cy3} = t.cue;

export const Cycle: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">细胞周期的概念</Header>
		<Def at={cy1.from} style={{left: 90, right: 90, top: 165}} fontSize={33} color={C.red} soft={C.redSoft}>
			<Hl>连续分裂的细胞</Hl>，从一次分裂完成时开始，到下一次分裂完成时为止
		</Def>
		<Cards
			top={300}
			height={200}
			fontSize={33}
			titleSize={40}
			items={[
				{title: '分裂间期（在前）', color: C.orange, at: cy2.from, body: <>约占 <Hl c={C.orange}>90%～95%</Hl>，时间长</>},
				{title: '分裂期（在后）', color: C.red, at: cy2.from + 40, body: <>前期、中期、后期、末期</>},
			]}
		/>
		<Tip at={cy3.from} top={550} label="易错">
			只有<Hl>连续分裂</Hl>的细胞有细胞周期；高度分化的细胞、进行减数分裂的细胞<Hl>没有</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
