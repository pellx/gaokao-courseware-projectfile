import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.early;
const {ea1, ea2, ea3, ea4} = t.cue;

export const Early: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">对遗传物质的早期推测</Header>
		<Def at={ea1.from} style={{left: 90, right: 90, top: 170}} fontSize={36}>
			20 世纪 20 年代：普遍认为<Hl>蛋白质</Hl>是生物体的遗传物质
		</Def>
		<Cards
			top={300}
			height={250}
			fontSize={34}
			titleSize={42}
			items={[
				{title: '蛋白质', color: C.red, at: ea2.from, body: <>21 种氨基酸，<Hl>排列顺序多种多样</Hl></>, note: '被认为可能蕴含遗传信息'},
				{title: 'DNA', color: C.orange, at: ea3.from, body: <>只由 <Hl c={C.orange}>4 种脱氧核苷酸</Hl>组成</>, note: '对 DNA 结构了解不清，蛋白质观点仍占主导'},
			]}
		/>
		<Tip at={ea4.from} top={610} label="考法" fontSize={34}>
			实验思路：<Hl>把 DNA 和蛋白质分开</Hl>，单独地、直接地观察各自的作用
		</Tip>
		<Narration t={t} />
	</Scene>
);
