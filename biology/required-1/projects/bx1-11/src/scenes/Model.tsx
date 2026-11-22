import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.model;
const {md1, md2, md3, md4} = t.cue;

export const Model: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">科学方法：建构模型</Header>
		<Def at={md1.from} style={{left: 90, right: 90, top: 165}} fontSize={33}>
			模型：对认识对象所作的一种<Hl c={C.orange}>简化的概括性描述</Hl>
		</Def>
		<Cards
			top={290}
			height={280}
			fontSize={30}
			titleSize={40}
			items={[
				{title: '物理模型', color: C.red, at: md2.from, body: <>以<Hl>实物或图画</Hl>直观表达</>, note: '真核细胞三维结构模型、DNA 双螺旋结构模型'},
				{title: '概念模型', color: C.orange, at: md3.from, body: <>用<Hl c={C.orange}>文字、箭头</Hl>表示概念间的关系</>, note: '概念图'},
				{title: '数学模型', color: C.green, at: md3.from + 60, body: <>用<Hl c={C.green}>公式、曲线</Hl>等表示</>, note: '种群增长曲线'},
			]}
		/>
		<Tip at={md4.from} top={620} label="易错">
			<Hl>照片不是模型</Hl>（实物的真实记录）；画出的细胞结构模式图才是物理模型
		</Tip>
		<Narration t={t} />
	</Scene>
);
