import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.design;
const {ds1, ds2, ds3, ds4} = t.cue;

const Label: React.FC<{at: number; top: number; color: string; children: React.ReactNode}> = ({at, top, color, children}) => (
	<Appear at={at} dy={0} style={{position: 'absolute', left: 90, top, fontSize: 34, fontWeight: 900, color}}>
		{children}
	</Appear>
);

export const Design: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">验证某无机盐是植物生长所必需的（以 Mg 为例）</Header>
		<Label at={ds1.from} top={195} color={C.green}>对照组</Label>
		<Flow
			style={{left: 260, top: 175}}
			fontSize={34}
			rows={[
				[
					{label: '长势相同的幼苗', at: ds1.from},
					{label: '完全培养液', color: C.green, at: ds1.from},
					{label: '正常生长', color: C.green, at: ds2.from},
				],
			]}
		/>
		<Label at={ds1.from} top={355} color={C.red}>实验组</Label>
		<Flow
			style={{left: 260, top: 335}}
			fontSize={34}
			rows={[
				[
					{label: '长势相同的幼苗', at: ds1.from},
					{label: '缺镁培养液', color: C.red, at: ds1.from},
					{label: '叶片发黄', color: C.red, at: ds2.from},
					{label: '补充镁', color: C.orange, at: ds3.from},
					{label: '恢复正常', color: C.green, at: ds3.from + 30},
				],
			]}
		/>
		<Appear at={ds3.from} style={{position: 'absolute', left: 260, top: 450, fontSize: 30, fontWeight: 700, color: C.muted}}>
			“缺素—补素”：实验组<Hl c={C.orange}>前后自身对照</Hl>（二次对照）
		</Appear>
		<Tip at={ds4.from} top={560} label="解题方法">
			自变量是<Hl>有无这种无机盐</Hl>；对照组用<Hl>完全培养液</Hl>，不能用土壤（土壤中本来就有该元素）
		</Tip>
		<Narration t={t} />
	</Scene>
);
