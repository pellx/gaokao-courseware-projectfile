import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.efficient;
const {ef1, ef2, ef3} = t.cue;

export const Efficient: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">高效性</Header>
		<Def at={ef1.from} style={{left: 90, right: 90, top: 165}} fontSize={36} color={C.red} soft={C.redSoft}>
			酶的催化效率约是无机催化剂的 <Hl>10<sup>7</sup>～10<sup>13</sup> 倍</Hl>
		</Def>
		<Cards
			top={310}
			height={210}
			fontSize={33}
			titleSize={40}
			items={[
				{title: '酶 vs 无机催化剂', color: C.green, at: ef2.from, body: <>证明<Hl c={C.green}>高效性</Hl>（过氧化氢酶 vs FeCl<sub>3</sub>）</>},
				{title: '酶 vs 不加催化剂', color: C.orange, at: ef3.from, body: <>只能证明酶有<Hl c={C.orange}>催化作用</Hl></>},
			]}
		/>
		<Tip at={ef3.from + 40} top={570} label="易错">
			高效性是<Hl>与无机催化剂相比</Hl>得出的，对照组要选无机催化剂
		</Tip>
		<Narration t={t} />
	</Scene>
);
