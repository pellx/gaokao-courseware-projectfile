import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.isolation;
const {is1, is2, is3, is4} = t.cue;

export const Isolation: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">地理隔离与生殖隔离</Header>
		<Def at={is1.from} style={{left: 90, right: 90, top: 165}} fontSize={34}>
			隔离：不同群体间的个体，在自然条件下<Hl>基因不能自由交流</Hl>
		</Def>
		<Cards
			top={290}
			height={290}
			fontSize={32}
			titleSize={42}
			items={[
				{title: '地理隔离', color: C.orange, at: is2.from, body: <>地理障碍把同种生物分成不同种群 → 种群间<Hl c={C.orange}>不能基因交流</Hl></>},
				{title: '生殖隔离', color: C.red, at: is3.from, body: <>不能相互交配，或交配后<Hl>不能产生可育后代</Hl></>},
			]}
		/>
		<Tip at={is4.from} top={630} label="易错" fontSize={33}>
			地理隔离的种群重新相遇<Hl>仍能交配</Hl>产生可育后代；生殖隔离形成后<Hl>不能再交流基因</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
