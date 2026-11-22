import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ploidy;
const {pl1, pl2, pl3, pl4} = t.cue;

export const Ploidy: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">二倍体与多倍体（由受精卵发育而来）</Header>
		<Cards
			top={185}
			height={360}
			fontSize={31}
			titleSize={42}
			items={[
				{title: '二倍体', color: C.orange, at: pl1.from, body: <>体细胞含<Hl c={C.orange}>两个</Hl>染色体组</>, note: '人、果蝇、玉米等'},
				{title: '多倍体', color: C.red, at: pl2.from, body: <>体细胞含<Hl>三个或以上</Hl>染色体组</>, note: '三倍体香蕉、四倍体马铃薯、六倍体小麦'},
				{title: '多倍体特点', color: C.green, at: pl3.from, body: <>茎秆粗壮，叶片、果实、种子<Hl c={C.green}>较大</Hl>，营养物质含量增加</>},
			]}
		/>
		<Tip at={pl4.from} top={600} label="易错" fontSize={33}>
			多倍体<Hl>发育延迟</Hl>、结实率低；三倍体联会紊乱，一般<Hl>不能形成可育配子</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
