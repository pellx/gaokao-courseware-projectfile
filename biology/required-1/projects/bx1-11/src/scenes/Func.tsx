import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.func;
const {fn1, fn2, fn3} = t.cue;

export const Func: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">细胞核的功能</Header>
		<Cards
			top={175}
			height={240}
			fontSize={34}
			titleSize={46}
			items={[
				{title: '遗传信息库', color: C.red, at: fn1.from, body: <>DNA 主要存在于<Hl>细胞核</Hl>中，储存着遗传信息</>},
				{title: '代谢和遗传的控制中心', color: C.orange, at: fn1.from + 40, body: <>细胞核通过 DNA <Hl c={C.orange}>控制</Hl>细胞的代谢和遗传</>, note: <>依据：<Hl c={C.orange}>DNA 主要在细胞核</Hl></>},
			]}
		/>
		<Tip at={fn3.from} top={470} label="易错">
			细胞核是代谢的<Hl>控制中心</Hl>，不是代谢中心；细胞代谢的主要场所是<Hl c={C.orange}>细胞质基质</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
