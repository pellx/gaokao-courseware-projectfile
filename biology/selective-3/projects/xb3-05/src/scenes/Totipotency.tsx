import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.totipotency;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

export const Totipotency: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">细胞工程与细胞的全能性</Header>
		<Def at={tp1.from} fontSize={31} style={{left: 90, right: 90, top: 165}}>
			<Hl>细胞工程</Hl>：在<Hl c={C.orange}>细胞器、细胞或组织水平</Hl>上操作，有目的地获得特定的细胞、组织、器官、个体或其产品
		</Def>
		<Def at={tp2.from} fontSize={31} color={C.red} soft={C.redSoft} style={{left: 90, right: 90, top: 330}}>
			<Hl>细胞的全能性</Hl>：细胞经分裂和分化后，仍然具有<Hl c={C.orange}>产生完整生物体或分化成其他各种细胞</Hl>的潜能和特性
		</Def>
		<Bullets
			style={{left: 90, right: 90, top: 500}}
			fontSize={31}
			gap={18}
			items={[
				{at: tp3.from, children: <>原因：细胞含有该物种的<Hl c={C.orange}>全套遗传信息</Hl></>},
				{at: tp4.from, color: C.red, children: <>体内不表现：<Hl c={C.orange}>基因的选择性表达</Hl>；表现条件：<Hl>离体</Hl> + 一定的营养、激素等条件</>},
			]}
		/>
		<Tip at={tp5.from} top={720} label="解题方法">
			看终点：发育成<Hl>完整个体</Hl>或分化成其他各种细胞，才体现全能性；只长出愈伤组织不算
		</Tip>
		<Narration t={t} />
	</Scene>
);
