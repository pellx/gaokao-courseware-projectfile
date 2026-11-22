import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Compare, F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ferment;
const {fm1, fm2, fm3, fm4} = t.cue;

const Arrow = () => (
	<span style={{display: 'inline-block', margin: '0 10px', verticalAlign: 'middle', textAlign: 'center'}}>
		<span style={{display: 'block', fontSize: 22, lineHeight: 1, color: C.orange}}>酶</span>
		<span style={{display: 'block', lineHeight: 1}}>⟶</span>
	</span>
);

export const Ferment: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">产生酒精和产生乳酸的无氧呼吸</Header>
		<Compare
			top={170}
			height={400}
			fontSize={30}
			cols={[
				{
					title: '产生酒精',
					color: C.red,
					at: fm1.from,
					lines: [
						{children: <span style={{fontSize: 32}}><F>C6H12O6</F><Arrow /><F>2C2H5OH + 2CO2</F> ＋ 少量能量</span>},
						{children: <>实例：<Hl>酵母菌</Hl>、多数植物细胞（如水淹的根）</>},
					],
				},
				{
					title: '产生乳酸',
					color: C.orange,
					at: fm2.from,
					lines: [
						{children: <span style={{fontSize: 32}}><F>C6H12O6</F><Arrow /><F>2C3H6O3</F> ＋ 少量能量</span>},
						{children: <>实例：<Hl c={C.orange}>乳酸菌</Hl>、人和动物骨骼肌、马铃薯块茎、甜菜块根、玉米胚</>},
					],
				},
			]}
		/>
		<Tip at={fm3.from} top={610} label="提示">
			能量少：1 mol 葡萄糖只有约 <Hl c={C.orange}>61.08 kJ</Hl> 储存在 ATP 中
		</Tip>
		<Tip at={fm4.from} top={730} label="易错">
			人体骨骼肌无氧呼吸产生<Hl>乳酸</Hl>，<Hl>不产生 CO<sub>2</sub></Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
