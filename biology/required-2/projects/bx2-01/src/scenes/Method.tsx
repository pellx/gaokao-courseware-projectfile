import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.method;
const {me1, me2, me3, me4, me5} = t.cue;

export const Method: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">假说—演绎法</Header>
		<Rows
			style={{left: 90, right: 90, top: 165}}
			fontSize={34}
			gap={22}
			items={[
				{at: me1.from, color: C.orange, title: '提出问题', children: <>F<sub>1</sub> 为什么全是高茎？F<sub>2</sub> 为什么出现 3∶1？</>},
				{at: me2.from, color: C.orange, title: '提出假说', children: <>遗传因子成对存在、配子中成单存在、受精时随机结合</>},
				{at: me3.from, color: C.red, title: '演绎推理', children: <>若假说正确，<Hl>测交后代应为 1∶1</Hl>（纸上推理）</>},
				{at: me3.from + 90, color: C.green, title: '实验检验', children: <><Hl c={C.green}>真正进行测交</Hl>：87∶79 ≈ 1∶1</>},
				{at: me4.from, color: C.orange, title: '得出结论', children: <>实验结果与预期相符 → <Hl c={C.orange}>分离定律</Hl></>},
			]}
		/>
		<Tip at={me5.from} top={700} label="易错" fontSize={33}>
			“演绎推理”＝<Hl>设计测交实验并预测结果</Hl>，没有动手做；真正做测交属于<Hl c={C.green}>实验检验</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
