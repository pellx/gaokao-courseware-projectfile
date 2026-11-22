import React from 'react';
import {Hl} from '../components/ui';
import {Chain} from '../components/kit';
import {Big, Board, Items} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.nonmet3;
const {nn1, nn2, nn3, nn4, nn5} = t.cue;

export const Nonmet3: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="第三周期非金属性的递变"
		gap={26}
		callout={{label: '易错', at: nn5.from, text: <>比较酸性只能用<Hl>最高价含氧酸</Hl>：H<sub>2</sub>SO<sub>3</sub> 不是硫的最高价含氧酸</>}}
	>
		<Items
			size={32}
			items={[
				{at: nn1.from, node: <>与 H<sub>2</sub> 化合：Si 需<Hl c={C.orange}>高温</Hl> …… Cl<sub>2</sub> 光照或点燃即<Hl>剧烈化合</Hl></>},
			]}
		/>
		<Chain
			fontSize={36}
			gap={10}
			steps={[
				{label: chem('H2SiO3'), at: nn2.from},
				{label: chem('H3PO4'), at: nn2.from + 10},
				{label: chem('H2SO4'), at: nn2.from + 20},
				{label: chem('HClO4'), color: C.red, at: nn2.from + 30},
			]}
			arrows={['酸性增强', '', '']}
		/>
		<Big at={nn3.from} size={38} color={C.red} soft={C.redSoft}>
			同周期从左到右：金属性<Hl c={C.orange}>减弱</Hl>，非金属性<Hl>增强</Hl>
		</Big>
		<Items
			size={30}
			items={[
				{at: nn4.from, node: <>{chem('Cl2 + Na2S = 2NaCl + S↓')}（淡黄色）→ 非金属性 <Hl>Cl &gt; S</Hl></>},
				{at: nn4.from + 40, node: <>氯水要<Hl>新制</Hl>：久置氯水已变成稀盐酸，没有 Cl<sub>2</sub> 了</>},
			]}
		/>
	</Board>
);
