import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sugar;
const {su1, su2, su3, su4, su5} = t.cue;

export const Sugar: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">检测还原糖（斐林试剂）</Header>
		<Flow
			style={{left: 90, top: 175}}
			fontSize={34}
			rows={[
				[
					{label: '组织样液 2 mL', at: su1.from},
					{label: '斐林试剂 1 mL', note: '甲液、乙液等量混匀，现配现用', color: C.orange, at: su2.from},
					{label: '50～65 ℃ 水浴', note: '约 2 min', color: C.red, at: su3.from},
					{label: '砖红色沉淀', color: C.red, at: su3.from + 40},
				],
			]}
		/>
		<Cards
			top={345}
			height={210}
			fontSize={31}
			items={[
				{title: '适合的材料', color: C.green, at: su4.from, body: <>苹果、梨：<Hl c={C.green}>还原糖多、颜色浅</Hl></>, note: '（白色或近于白色）'},
				{title: '不适合的材料', color: C.red, at: su4.from + 50, body: <>甘蔗、甜菜：主要含<Hl>蔗糖</Hl><br />西瓜汁：颜色深，干扰观察</>},
			]}
		/>
		<Tip at={su5.from} top={600} label="易错">
			<Hl>蔗糖、淀粉不是还原糖</Hl>；必须<Hl>水浴加热</Hl>才出现砖红色沉淀
		</Tip>
		<Narration t={t} />
	</Scene>
);
