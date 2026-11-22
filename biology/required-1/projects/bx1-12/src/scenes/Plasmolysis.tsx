import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Flow, Tip} from '../components/lib';
import {PlantCell} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.plasmolysis;
const {pl1, pl2, pl3, pl4, pl5} = t.cue;

const label = (x: number, s: string, c: string) => (
	<text x={x} y={300} fontSize={28} fontWeight={900} fill={c} textAnchor="middle">
		{s}
	</text>
);

export const Plasmolysis: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">质壁分离及复原实验</Header>
		<Flow
			style={{left: 90, top: 165}}
			fontSize={31}
			rows={[
				[
					{label: '制片，低倍镜观察', note: '紫色洋葱鳞片叶外表皮', at: pl1.from},
					{label: '0.3 g/mL 蔗糖溶液', note: '引流', color: C.red, at: pl2.from},
					{label: '观察：质壁分离', color: C.red, at: pl2.from + 30},
					{label: '清水', note: '引流', color: C.orange, at: pl3.from},
					{label: '观察：复原', color: C.green, at: pl3.from + 30},
				],
			]}
		/>
		<svg width={1740} height={320} viewBox="0 0 1740 320" style={{position: 'absolute', left: 90, top: 300}}>
			<G at={pl1.from}>
				<PlantCell x={120} y={20} w={360} h={240} />
				{label(300, '正常', C.text)}
			</G>
			<G at={pl2.from}>
				<PlantCell x={690} y={20} w={360} h={240} shrink={0.75} />
				{label(870, '质壁分离：液泡变小、颜色变深', C.red)}
			</G>
			<G at={pl3.from}>
				<PlantCell x={1260} y={20} w={360} h={240} />
				{label(1440, '质壁分离复原', C.green)}
			</G>
		</svg>
		<Tip at={pl5.from} top={660} label="解题方法">
			内因：<Hl>原生质层伸缩性 ＞ 细胞壁</Hl>；外因：<Hl>外界溶液浓度 ＞ 细胞液浓度</Hl>；三次观察形成前后自身对照
		</Tip>
		<Narration t={t} />
	</Scene>
);
