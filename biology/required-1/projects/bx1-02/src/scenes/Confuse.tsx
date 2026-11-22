import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Compare} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.confuse;
const {cf1, cf2, cf3, cf4, cf5} = t.cue;

export const Confuse: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">易混生物辨析</Header>
		<Compare
			top={170}
			height={450}
			fontSize={31}
			cols={[
				{
					title: '原核生物',
					color: C.orange,
					at: cf2.from,
					lines: [
						{children: <>细菌：<Hl c={C.orange}>杆菌、球菌、弧菌、螺旋菌</Hl>，乳酸菌</>},
						{at: cf3.from, children: <><Hl>蓝细菌</Hl>（含发菜）</>},
						{at: cf3.from, children: <>支原体</>},
					],
				},
				{
					title: '真核生物',
					color: C.green,
					at: cf1.from,
					lines: [
						{children: <>真菌：<Hl>酵母菌、霉菌、蘑菇</Hl></>},
						{at: cf3.from, children: <>绿藻和植物：<Hl c={C.green}>衣藻、水绵、黑藻</Hl></>},
						{at: cf3.from, children: <>动物、原生动物</>},
					],
				},
				{
					title: '病毒',
					color: C.red,
					at: cf4.from,
					lines: [{children: <><Hl>没有细胞结构</Hl></>}, {children: <>既不是原核生物，也不是真核生物</>}],
				},
			]}
		/>
		<Tip at={cf5.from} top={660} label="解题方法">
			先排除<Hl>病毒</Hl>，再看<Hl>有没有成形的细胞核</Hl>；带“菌”字的不一定是细菌
		</Tip>
		<Narration t={t} />
	</Scene>
);
