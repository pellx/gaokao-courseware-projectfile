import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ethics;
const {et1, et2, et3, et4, et5} = t.cue;

export const Ethics: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">伦理问题的答题思路</Header>
		<Cards
			top={185}
			height={300}
			titleSize={40}
			fontSize={31}
			gap={20}
			items={[
				{title: '① 技术', color: C.orange, at: et1.from, body: '它是什么、能做什么'},
				{title: '② 利弊', color: C.brown, at: et2.from, body: '对个人、社会、生态的好处和风险'},
				{title: '③ 法规', color: C.red, at: et3.from, body: '如禁止生殖性克隆、禁止生物武器'},
				{title: '④ 立场', color: C.green, at: et4.from, body: '科技是“双刃剑”，趋利避害'},
			]}
		/>
		<Tip at={et5.from} top={560} label="解题方法">
			伦理题四步走：<Hl>技术 → 利弊 → 法规 → 立场</Hl>，观点明确，有理有据
		</Tip>
		<Narration t={t} />
	</Scene>
);
