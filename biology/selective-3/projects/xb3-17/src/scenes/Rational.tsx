import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.rational;
const {ra1, ra2, ra3, ra4} = t.cue;

export const Rational: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">理性看待转基因技术</Header>
		<Cards
			top={190}
			height={280}
			titleSize={40}
			fontSize={34}
			gap={26}
			items={[
				{title: '① 靠证据', color: C.red, at: ra1.from, body: <>靠<Hl>确凿的证据</Hl>和<Hl>严谨的逻辑</Hl>思考和辩论</>},
				{title: '② 看背景', color: C.orange, at: ra2.from, body: <>观点受<Hl c={C.orange}>社会、文化、经济</Hl>等因素影响</>},
				{title: '③ 不盲从', color: C.green, at: ra3.from, body: <>不盲目肯定或否定；依法监管，<Hl c={C.green}>趋利避害</Hl></>},
			]}
		/>
		<Tip at={ra4.from} top={560} label="易错">
			“一定有害”和“绝对安全”都是<Hl>绝对化</Hl>的说法，判断题中出现一般都是错的
		</Tip>
		<Narration t={t} />
	</Scene>
);
