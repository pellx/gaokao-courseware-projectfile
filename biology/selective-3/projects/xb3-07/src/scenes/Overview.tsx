import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.overview;
const {ov1, ov2, ov3, ov4} = t.cue;

export const Overview: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">动物细胞工程与动物细胞培养</Header>
		<div style={{position: 'absolute', left: 90, top: 180}}>
			<Tree
				width={1000}
				height={330}
				colWidth={430}
				boxWidth={380}
				boxHeight={92}
				fontSize={32}
				root={{
					label: '动物细胞工程',
					color: C.orange,
					at: ov1.from,
					children: [
						{label: '动物细胞培养', note: '基础', color: C.red, at: ov2.from},
						{label: '动物细胞融合', at: ov1.from + 20},
						{label: '动物体细胞核移植', at: ov1.from + 40},
					],
				}}
			/>
		</div>
		<Appear at={ov1.from} style={{position: 'absolute', left: 1300, top: 170, width: 530, height: 520}}>
			<Photo src="images/dish.jpg" caption="倒置显微镜下观察培养的细胞" style={{width: '100%', height: '100%'}} pos="center 60%" />
		</Appear>
		<Def at={ov3.from} fontSize={30} style={{left: 90, width: 1150, top: 540}}>
			<Hl>动物细胞培养</Hl>：取出动物组织，<Hl c={C.orange}>分散成单个细胞</Hl>，在适宜条件下让细胞<Hl c={C.orange}>生长和增殖</Hl>
		</Def>
		<Tip at={ov4.from} top={735} label="解题方法">
			动物细胞培养的原理是<Hl>细胞增殖</Hl>；植物组织培养的原理才是细胞全能性
		</Tip>
		<Narration t={t} />
	</Scene>
);
