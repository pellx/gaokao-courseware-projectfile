import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.osmosis;
const {os1, os2, os3} = t.cue;

export const Osmosis: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">渗透作用及其条件</Header>
		<Def at={os1.from} style={{left: 90, right: 90, top: 165}} fontSize={34}>
			水分子透过<Hl>半透膜</Hl>，从<Hl c={C.orange}>低浓度溶液 → 高浓度溶液</Hl>扩散
		</Def>
		<Cards
			top={300}
			height={200}
			fontSize={34}
			titleSize={44}
			items={[
				{title: '条件①：半透膜', color: C.red, at: os2.from, body: '水能通过，蔗糖等大分子不能通过'},
				{title: '条件②：浓度差', color: C.orange, at: os2.from + 50, body: '半透膜两侧溶液浓度不同'},
			]}
		/>
		<Tip at={os3.from} top={550} label="易错">
			浓度指<Hl>物质的量浓度</Hl>：质量分数相同时，葡萄糖溶液的物质的量浓度大于蔗糖溶液
		</Tip>
		<Narration t={t} />
	</Scene>
);
