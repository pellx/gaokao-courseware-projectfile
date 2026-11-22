import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.newprot;
const {np1, np2, np3, np4} = t.cue;

export const Newprot: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">能否生产自然界不存在的蛋白质</Header>
		<Cards
			top={200}
			height={330}
			titleSize={42}
			fontSize={34}
			gap={36}
			items={[
				{title: '蛋白质工程：能', color: C.green, at: np2.from, body: <>通过<Hl>合成新的基因</Hl>，制造自然界原本没有的新蛋白质</>},
				{title: '基因工程：不能', color: C.red, at: np3.from, body: <>把已有的基因转移到别的生物中表达，得到的仍是<Hl c={C.orange}>天然存在的蛋白质</Hl></>},
			]}
		/>
		<Tip at={np4.from} top={600} label="易错">
			能产生自然界不存在的蛋白质的是<Hl>蛋白质工程</Hl>；但两者都要<Hl c={C.orange}>改造或操作基因</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
