import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning;
const {mn1, mn2, mn3, mn4} = t.cue;

export const Meaning: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">胚胎移植的意义</Header>
		<Def at={mn1.from} fontSize={40} color={C.red} soft={C.redSoft} style={{left: 90, right: 90, top: 190}}>
			充分发挥<Hl>雌性优良个体的繁殖潜力</Hl>
		</Def>
		<Bullets
			style={{left: 90, right: 90, top: 340}}
			fontSize={32}
			gap={26}
			items={[
				{at: mn2.from, children: <>供体只产生优良胚胎；<Hl c={C.orange}>妊娠和育仔</Hl>由受体承担 → 缩短供体的繁殖周期</>},
				{at: mn3.from, color: C.red, children: <>胚胎移植是胚胎工程的<Hl>最后一道工序</Hl>：体外受精、胚胎分割、核移植的胚胎都要经过它</>},
			]}
		/>
		<Tip at={mn4.from} top={620} label="解题方法">
			问意义，标准表述：<Hl>充分发挥雌性优良个体的繁殖潜力</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
