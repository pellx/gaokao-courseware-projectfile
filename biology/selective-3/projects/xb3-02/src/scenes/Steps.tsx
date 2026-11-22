import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Def, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.steps;
const {sp1, sp2, sp3, sp4} = t.cue;

const STEPS = ['配制培养基', '灭菌', '倒平板', '接种', '分离', '培养'];

export const Steps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">微生物纯培养的步骤</Header>
		<Def at={sp1.from} fontSize={32} style={{left: 90, width: 1260, top: 170}}>
			<Hl>纯培养物</Hl>：由<Hl c={C.orange}>单一个体</Hl>繁殖所获得的微生物群体
		</Def>
		<Flow
			style={{left: 90, top: 320}}
			fontSize={34}
			rows={[STEPS.map((s, i) => ({label: s, color: i === 1 ? C.red : i === 2 ? C.orange : undefined, at: sp2.from + i * 10}))]}
		/>
		<Def at={sp3.from} fontSize={31} color={C.green} soft={C.greenSoft} style={{left: 90, width: 1260, top: 460}}>
			<Hl c={C.green}>菌落</Hl>：分散的微生物在固体培养基上繁殖形成的、<Hl c={C.orange}>肉眼可见</Hl>的、有一定形态结构的子细胞群体
		</Def>
		<Appear at={sp3.from} style={{position: 'absolute', left: 1420, top: 170, width: 410, height: 470}}>
			<Photo src="images/plate.jpg" caption="一个个菌落" style={{width: '100%', height: '100%'}} pos="center 45%" />
		</Appear>
		<Tip at={sp4.from} top={700} label="易错">
			顺序是<Hl>先灭菌、后倒平板</Hl>；倒好的平板不能再灭菌
		</Tip>
		<Narration t={t} />
	</Scene>
);
