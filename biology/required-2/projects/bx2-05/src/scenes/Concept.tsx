import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {mc1, mc2, mc3, mc4} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">减数分裂的概念</Header>
		<Def at={mc1.from} style={{left: 90, right: 90, top: 170}} fontSize={36}>
			进行<Hl c={C.orange}>有性生殖</Hl>的生物，在产生<Hl c={C.orange}>成熟生殖细胞</Hl>时进行的<Hl>染色体数目减半</Hl>的细胞分裂
		</Def>
		<Cards
			top={320}
			height={240}
			fontSize={34}
			titleSize={42}
			items={[
				{title: '复制一次', color: C.red, at: mc2.from, body: '染色体只复制一次（间期）'},
				{title: '分裂两次', color: C.red, at: mc2.from + 40, body: '减数分裂Ⅰ、减数分裂Ⅱ'},
				{title: '数目减半', color: C.orange, at: mc3.from, body: <>精子、卵细胞的染色体数为体细胞的<Hl c={C.orange}>一半</Hl></>},
			]}
		/>
		<Tip at={mc4.from} top={610} label="易错" fontSize={34}>
			原核生物、只进行无性生殖的生物<Hl>不进行减数分裂</Hl>；减数分裂<Hl>没有细胞周期</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
