import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pea;
const {pe1, pe2, pe3, pe4} = t.cue;

export const Pea: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">豌豆作遗传材料的优点</Header>
		<Appear at={pe1.from} style={{position: 'absolute', left: 90, top: 170, width: 480, height: 520}}>
			<Photo src="images/peaflower.jpg" caption="豌豆花：花还没开放就已完成受粉" style={{width: '100%', height: '100%'}} pos="center 40%" />
		</Appear>
		<Rows
			style={{left: 620, right: 90, top: 200}}
			fontSize={36}
			gap={48}
			items={[
				{at: pe1.from, color: C.red, title: '纯种', children: <>自花传粉、<Hl>闭花受粉</Hl>，自然状态下一般都是纯种</>},
				{at: pe2.from, color: C.orange, title: '易区分', children: <>具有<Hl c={C.orange}>易于区分的相对性状</Hl>（如高茎与矮茎）</>},
				{at: pe3.from, color: C.green, title: '易操作', children: <>花较大，便于人工操作；子代多，便于<Hl c={C.green}>统计分析</Hl></>},
			]}
		/>
		<Tip at={pe4.from} top={740} label="易错">
			闭花受粉：花未开放时已完成受粉 → 人工杂交必须在<Hl>花蕾期</Hl>（花粉成熟前）去雄
		</Tip>
		<Narration t={t} />
	</Scene>
);
