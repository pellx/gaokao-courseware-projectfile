import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.combine;
const {cb1, cb2, cb3} = t.cue;

export const Combine: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">证据的综合运用</Header>
		<Cards
			top={190}
			height={250}
			fontSize={31}
			titleSize={38}
			items={[
				{title: '化石', color: C.red, at: cb1.from, body: <><Hl>直接</Hl>证据</>},
				{title: '比较解剖学', color: C.orange, at: cb1.from + 30, body: '同源器官、痕迹器官'},
				{title: '胚胎学', color: C.orange, at: cb1.from + 60, body: '早期胚胎相似'},
				{title: '细胞和分子', color: C.green, at: cb2.from, body: <>可<Hl c={C.green}>定量</Hl>，构建进化树</>},
			]}
		/>
		<Tip at={cb3.from} top={500} label="考法" fontSize={34}>
			给出氨基酸或碱基差异数排亲缘关系：差异数<Hl>从小到大</Hl> ＝ 亲缘关系<Hl>从近到远</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
