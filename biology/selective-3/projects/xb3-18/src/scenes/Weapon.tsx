import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.weapon;
const {we1, we2, we3, we4} = t.cue;

export const Weapon: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">生物武器的种类和特点</Header>
		<Cards
			top={180}
			height={220}
			titleSize={44}
			fontSize={34}
			gap={24}
			items={[
				{title: '致病菌类', color: C.red, at: we1.from, body: '如炭疽杆菌'},
				{title: '病毒类', color: C.red, at: we1.from + 15, body: '如天花病毒'},
				{title: '生化毒剂类', color: C.red, at: we1.from + 30, body: '如肉毒杆菌毒素'},
			]}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 450}}
			fontSize={34}
			gap={28}
			items={[
				{at: we2.from, color: C.orange, children: <>转基因技术：把<Hl c={C.orange}>致病能力、抗药性</Hl>等基因转入病原体 → “超级”病原体</>},
				{at: we3.from, color: C.red, children: <>特点：<Hl>致病能力强、攻击范围广</Hl>；可通过空气、水、食物等多种途径传播</>},
			]}
		/>
		<Tip at={we4.from} top={680} label="解题方法">
			判断是否属于生物武器：看它是不是<Hl>利用生物或其毒素</Hl>来致病、致死
		</Tip>
		<Narration t={t} />
	</Scene>
);
