import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fert;
const {fe1, fe2, fe3, fe4} = t.cue;

export const Fert: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">受精作用</Header>
		<Def at={fe1.from} style={{left: 90, right: 90, top: 165}} fontSize={36}>
			卵细胞和精子<Hl>相互识别、融合</Hl>成为受精卵的过程
		</Def>
		<Flow
			style={{left: 90, top: 290}}
			fontSize={30}
			rows={[
				[
					{label: '精子头部进入卵细胞', at: fe2.from},
					{label: '卵细胞膜反应', note: '阻止其他精子进入', at: fe2.from + 40, color: C.orange},
					{label: '两个细胞核融合', at: fe2.from + 90, color: C.red},
					{label: '受精卵', at: fe2.from + 120, color: C.red},
				],
			]}
		/>
		<Cards
			top={420}
			height={200}
			fontSize={32}
			titleSize={38}
			items={[
				{title: '染色体', color: C.red, at: fe3.from, body: <>一半来自精子（父方），一半来自卵细胞（母方）</>},
				{title: '细胞质', color: C.orange, at: fe4.from, body: <><Hl c={C.orange}>几乎全部</Hl>来自卵细胞</>},
			]}
		/>
		<Tip at={fe4.from} top={660} label="易错" fontSize={33}>
			“遗传物质一半来自父方、一半来自母方”✗ —— 只有<Hl>核遗传物质</Hl>各占一半
		</Tip>
		<Narration t={t} />
	</Scene>
);
