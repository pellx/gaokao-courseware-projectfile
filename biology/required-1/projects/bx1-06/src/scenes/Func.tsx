import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.func;
const {fn1, fn2, fn3, fn4, fn5} = t.cue;

export const Func: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">蛋白质的功能</Header>
		<Def at={fn1.from} style={{left: 90, right: 90, top: 165}} fontSize={36} color={C.red} soft={C.redSoft}>
			蛋白质是<Hl>生命活动的主要承担者</Hl>
		</Def>
		<Cards
			top={290}
			height={270}
			fontSize={29}
			titleSize={40}
			gap={18}
			items={[
				{title: '结构', color: C.brown, at: fn2.from, body: '羽毛、肌肉、头发、蛛丝'},
				{title: '催化', color: C.orange, at: fn2.from + 50, body: <>绝大多数<Hl c={C.orange}>酶</Hl></>},
				{title: '运输', color: C.red, at: fn3.from, body: <><Hl>血红蛋白</Hl>运输氧气</>},
				{title: '调节', color: C.green, at: fn3.from + 50, body: <><Hl c={C.green}>胰岛素</Hl>等蛋白质类激素</>},
				{title: '免疫', color: C.red, at: fn4.from, body: <><Hl>抗体</Hl>抵御抗原</>},
			]}
		/>
		<Tip at={fn5.from} top={610} label="易错">
			激素不都是蛋白质（<Hl>性激素是固醇</Hl>）；酶不都是蛋白质（少数是 <Hl>RNA</Hl>）
		</Tip>
		<Narration t={t} />
	</Scene>
);
