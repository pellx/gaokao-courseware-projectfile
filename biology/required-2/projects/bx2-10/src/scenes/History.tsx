import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.history;
const {hi1, hi2, hi3, hi4, hi5} = t.cue;

export const History: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">DNA 双螺旋结构模型的构建</Header>
		<Appear at={hi1.from} style={{position: 'absolute', left: 90, top: 170, width: 440, height: 520}}>
			<Photo src="images/template.jpg" caption="模型中碱基 A 的金属模板" style={{width: '100%', height: '100%'}} pos="45% 50%" />
		</Appear>
		<Rows
			style={{left: 580, right: 90, top: 175}}
			fontSize={29}
			gap={16}
			items={[
				{at: hi1.from, color: C.orange, title: '威尔金斯、富兰克林', children: <>DNA 的 <Hl c={C.orange}>X 射线衍射图谱</Hl> → DNA 呈螺旋结构</>},
				{at: hi2.from, color: C.muted, title: '沃森、克里克', children: <>多种双螺旋、三螺旋模型 → <Hl>被否定</Hl></>},
				{at: hi3.from, color: C.orange, title: '查哥夫', children: <><Hl>A 的量 ＝ T 的量，G 的量 ＝ C 的量</Hl></>},
				{at: hi4.from, color: C.red, title: '沃森、克里克 1953', children: <>碱基在内侧，A—T、G—C 配对 → <Hl>双螺旋结构模型</Hl></>},
			]}
		/>
		<Tip at={hi5.from} top={720} label="易错" fontSize={33}>
			模型由<Hl>沃森和克里克</Hl>构建，富兰克林提供衍射图谱；构建的是<Hl c={C.green}>物理模型</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
