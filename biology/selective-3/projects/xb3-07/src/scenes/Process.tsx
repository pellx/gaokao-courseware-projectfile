import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {ps1, ps2, ps3, ps4} = t.cue;

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">原代培养和传代培养</Header>
		<Flow
			style={{left: 90, top: 190}}
			fontSize={33}
			rowGap={36}
			rows={[
				[
					{label: '取动物组织', at: ps1.from},
					{label: '剪碎', at: ps1.from + 10},
					{label: '胰蛋白酶、胶原蛋白酶处理', color: C.red, at: ps1.from + 20},
					{label: '细胞悬液', at: ps1.from + 30},
				],
				[
					{label: '原代培养', note: '分瓶之前的培养', color: C.orange, at: ps2.from},
					{label: '胰蛋白酶处理', color: C.red, at: ps3.from},
					{label: '分瓶', at: ps3.from + 15},
					{label: '传代培养', note: '分瓶之后的培养', color: C.green, at: ps3.from + 30},
				],
			]}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 470}}
			fontSize={30}
			gap={18}
			items={[
				{at: ps2.from, color: C.orange, children: <><Hl c={C.orange}>原代培养</Hl>：动物组织经处理后的初次培养</>},
				{at: ps3.from, color: C.green, children: <><Hl c={C.green}>传代培养</Hl>：分瓶之后的细胞培养</>},
			]}
		/>
		<Tip at={ps4.from} top={700} label="易错">
			不能用<Hl>胃蛋白酶</Hl>：它的最适 pH 呈酸性，而动物细胞培养液的 pH 接近中性
		</Tip>
		<Narration t={t} />
	</Scene>
);
