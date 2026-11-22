import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ratio;
const {rt1, rt2, rt3, rt4, rt5} = t.cue;

export const Ratio: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">自由水 / 结合水 的比值</Header>
		<Cards
			top={170}
			height={190}
			fontSize={34}
			items={[
				{title: '比值高（自由水多）', color: C.red, at: rt1.from, body: <>细胞代谢<Hl>旺盛</Hl>，如萌发的种子</>},
				{title: '比值低（结合水多）', color: C.orange, at: rt2.from, body: <>代谢慢，<Hl c={C.orange}>抗寒、抗旱等抗逆性强</Hl></>},
			]}
		/>
		<Rows
			style={{left: 90, right: 90, top: 395}}
			fontSize={31}
			gap={16}
			items={[
				{at: rt3.from, color: C.orange, title: '越冬', children: <>冬季来临，冬小麦<Hl c={C.orange}>结合水比例升高</Hl>，抗寒能力增强</>},
				{at: rt4.from, color: C.red, title: '晒干', children: <>种子晒干失去<Hl>自由水</Hl>：代谢减弱，便于储存，仍有活性</>},
				{at: rt4.from + 60, color: C.brown, title: '烘烤', children: <>种子烘烤失去<Hl c={C.brown}>结合水</Hl>：细胞结构被破坏，失去活性</>},
			]}
		/>
		<Tip at={rt5.from} top={700} label="解题方法">
			<Hl>代谢旺盛看自由水</Hl>，<Hl c={C.orange}>抗逆性强看结合水</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
