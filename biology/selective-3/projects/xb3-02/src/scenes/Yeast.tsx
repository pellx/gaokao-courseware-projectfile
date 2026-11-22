import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Bullets, Cards, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.yeast;
const {ys1, ys2, ys3, ys4, ys5} = t.cue;

export const Yeast: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">实验：酵母菌的纯培养</Header>
		<Appear at={ys1.from} style={{position: 'absolute', left: 90, top: 175, width: 440, height: 520}}>
			<Photo src="images/plate.jpg" caption="平板划线后长出的菌落" style={{width: '100%', height: '100%'}} pos="center 55%" />
		</Appear>
		<Flow
			style={{left: 590, top: 180}}
			fontSize={30}
			rows={[
				[
					{label: '马铃薯琼脂培养基', at: ys1.from},
					{label: '灭菌', at: ys1.from + 10},
					{label: '倒平板', at: ys1.from + 20},
					{label: '平板划线接种', color: C.red, at: ys1.from + 30},
				],
			]}
		/>
		<Cards
			left={590}
			top={290}
			height={200}
			fontSize={29}
			titleSize={32}
			items={[
				{title: '接种的平板', color: C.orange, at: ys2.from, body: <>倒置，放入恒温培养箱中培养</>},
				{title: '未接种的平板（对照）', color: C.red, at: ys2.from + 20, body: <>同样条件培养</>, note: <span style={{color: C.red}}>长出菌落 → 培养基被污染</span>},
			]}
		/>
		<Bullets
			style={{left: 590, right: 90, top: 530}}
			fontSize={30}
			items={[{at: ys4.from, color: C.green, children: <>菌落特征：<Hl c={C.green}>形状、大小、隆起程度、颜色</Hl> → 鉴别菌种</>}]}
		/>
		<Tip at={ys5.from} top={740} label="考法">
			设置未接种平板的目的？检验培养基是否被污染，即<Hl>灭菌是否合格</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
