import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Def, Rows} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.epi1;
const {ep1, ep2, ep3, ep4} = t.cue;

export const Epi1: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">表观遗传的实例</Header>
		<Appear at={ep1.from} style={{position: 'absolute', left: 90, top: 170, width: 420, height: 420}}>
			<Photo src="images/linaria.jpg" caption="柳穿鱼" style={{width: '100%', height: '100%'}} />
		</Appear>
		<Rows
			style={{left: 560, right: 90, top: 180}}
			fontSize={30}
			gap={18}
			items={[
				{at: ep1.from, color: C.orange, title: '柳穿鱼', children: <>两种花形的植株，Lcyc 基因<Hl>碱基序列相同</Hl></>},
				{at: ep2.from, color: C.red, title: '区别', children: <>一种植株的 Lcyc 基因<Hl>高度甲基化</Hl>，不表达 → 花形不同</>},
				{at: ep3.from, color: C.brown, title: '小鼠毛色', children: <>A<sup>vy</sup> 基因前端甲基化程度不同 → 毛色从黄到黑<Hl c={C.orange}>深浅不一</Hl></>},
			]}
		/>
		<Def at={ep4.from} style={{left: 90, right: 90, top: 640}} color={C.red} soft={C.redSoft} fontSize={33}>
			表观遗传：基因的<Hl>碱基序列不变</Hl>，但<Hl>基因表达和表型发生可遗传变化</Hl>
		</Def>
		<Narration t={t} />
	</Scene>
);
