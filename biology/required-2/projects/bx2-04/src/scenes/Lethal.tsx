import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lethal;
const {le1, le2, le3, le4} = t.cue;

export const Lethal: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">致死问题（AaBb 自交）</Header>
		<Def at={le1.from} style={{left: 90, right: 90, top: 165}} fontSize={36}>
			拆开看：Aa × Aa 中 AA 致死 → <Hl>2∶1</Hl>；Bb × Bb 正常 → 3∶1
		</Def>
		<Cards
			top={290}
			height={300}
			fontSize={36}
			titleSize={42}
			items={[
				{title: 'AA 致死', color: C.red, at: le2.from, body: <>(2∶1)(3∶1)<br />＝ <Hl>6∶3∶2∶1</Hl></>, note: '双显∶aaB_∶A_bb∶双隐'},
				{title: 'AA、BB 都致死', color: C.orange, at: le3.from, body: <>(2∶1)(2∶1)<br />＝ <Hl c={C.orange}>4∶2∶2∶1</Hl></>, note: '后代中没有纯合的显性个体'},
			]}
		/>
		<Tip at={le4.from} top={640} label="解题方法" fontSize={34}>
			看到 6∶3∶2∶1 或 4∶2∶2∶1 → <Hl>显性纯合致死</Hl>；仍然先拆成一对一对，再相乘
		</Tip>
		<Narration t={t} />
	</Scene>
);
