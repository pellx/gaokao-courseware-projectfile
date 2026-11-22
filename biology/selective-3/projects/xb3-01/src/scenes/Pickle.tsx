import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Chem} from '../components/chem';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pickle;
const {pk1, pk2, pk3, pk4, pk5} = t.cue;

export const Pickle: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">泡菜的制作</Header>
		<Appear at={pk1.from} style={{position: 'absolute', left: 90, top: 175, width: 440, height: 520}}>
			<Photo src="images/tan.jpg" caption="泡菜坛：坛沿有水槽" style={{width: '100%', height: '100%'}} pos="center 40%" />
		</Appear>
		<Bullets
			style={{left: 590, right: 90, top: 180}}
			fontSize={33}
			gap={30}
			items={[
				{at: pk1.from, color: C.red, children: <>菌种：<Hl>乳酸菌</Hl>（厌氧细菌）　<Chem>C6H12O6</Chem> → 2 <Chem>C3H6O3</Chem>（乳酸）+ 能量</>},
				{at: pk2.from, children: <>盐水：质量百分比 <Hl c={C.orange}>5%～20%</Hl>，<Hl>煮沸、冷却</Hl>待用</>},
				{at: pk3.from, children: <>煮沸：<Hl c={C.orange}>杀灭杂菌、除去溶解氧</Hl>；冷却：<Hl c={C.orange}>防止高温杀死乳酸菌</Hl></>},
				{at: pk4.from, children: <>蔬菜装至<Hl c={C.orange}>八成满</Hl> → 盐水<Hl c={C.orange}>没过全部菜料</Hl> → 盖好坛盖</>},
				{at: pk4.from + 30, color: C.red, children: <>坛盖边沿<Hl>水槽注满水</Hl>：隔绝空气，保证坛内无氧</>},
			]}
		/>
		<Tip at={pk5.from} top={730} label="解题方法">
			泡菜的所有操作都围绕两件事：<Hl>创造无氧环境</Hl>、<Hl>防止杂菌污染</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
