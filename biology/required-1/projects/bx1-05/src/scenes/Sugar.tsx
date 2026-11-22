import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sugar;
const {sg1, sg2, sg3, sg4} = t.cue;

export const Sugar: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">糖类的元素组成与功能</Header>
		<Def at={sg1.from} style={{left: 90, right: 90, top: 170}} fontSize={36}>
			糖类一般由 <Hl>C、H、O</Hl> 三种元素构成（几丁质还含 N）
		</Def>
		<Cards
			top={300}
			height={260}
			fontSize={33}
			items={[
				{title: '重要的能源物质', color: C.red, at: sg2.from, body: <><Hl>葡萄糖</Hl>：细胞生命活动所需的主要能源物质</>, note: '“生命的燃料”'},
				{title: '构成细胞结构', color: C.green, at: sg3.from, body: <><Hl c={C.green}>纤维素</Hl>：植物细胞壁的主要成分</>},
			]}
		/>
		<Tip at={sg4.from} top={610} label="易错">
			糖类不都供能：<Hl>纤维素、核糖、脱氧核糖</Hl>不作为能源物质
		</Tip>
		<Narration t={t} />
	</Scene>
);
