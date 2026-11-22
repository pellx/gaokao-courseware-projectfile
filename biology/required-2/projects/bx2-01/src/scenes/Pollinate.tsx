import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pollinate;
const {po1, po2, po3, po4} = t.cue;

export const Pollinate: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">人工异花传粉的步骤</Header>
		<Def at={po1.from} style={{left: 90, right: 90, top: 170}} fontSize={36}>
			<Hl c={C.orange}>父本（♂）</Hl>：提供花粉的植株　　　<Hl c={C.orange}>母本（♀）</Hl>：接受花粉的植株
		</Def>
		<Cards
			top={300}
			height={250}
			fontSize={36}
			titleSize={46}
			items={[
				{title: '① 去雄', color: C.red, at: po2.from, body: <>花蕾期，除去母本花的<Hl>全部雄蕊</Hl></>},
				{title: '② 套袋', color: C.orange, at: po2.from + 60, body: <>防止外来花粉干扰</>},
				{title: '③ 人工授粉', color: C.green, at: po3.from, body: <>父本花粉涂在去雄花的<Hl c={C.green}>雌蕊柱头</Hl>上</>},
				{title: '④ 再套袋', color: C.orange, at: po3.from + 70, body: <>防止外来花粉干扰</>},
			]}
		/>
		<Tip at={po4.from} top={600} label="易错" fontSize={33}>
			去雄要在<Hl>花粉成熟前</Hl>、要<Hl>彻底</Hl>；两次套袋的目的相同：<Hl>避免外来花粉的干扰</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
