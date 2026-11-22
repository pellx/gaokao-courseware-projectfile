import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.totipotency;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

export const Totipotency: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">细胞的全能性</Header>
		<Def at={tp1.from} style={{left: 90, right: 90, top: 160}} fontSize={31}>
			细胞经分裂和分化后，仍具有<Hl>产生完整有机体或分化成其他各种细胞</Hl>的潜能和特性
		</Def>
		<Flow
			style={{left: 90, top: 300}}
			fontSize={32}
			rowGap={22}
			rows={[
				[
					{label: '胡萝卜韧皮部细胞', at: tp2.from},
					{label: '组织培养', at: tp2.from + 30},
					{label: '完整植株', note: '植物细胞具有全能性', color: C.green, at: tp2.from + 60},
				],
				[
					{label: '体细胞的细胞核', at: tp3.from},
					{label: '移入去核卵细胞', at: tp3.from + 30},
					{label: '克隆羊', note: '动物细胞核具有全能性', color: C.red, at: tp3.from + 60},
				],
			]}
		/>
		<Def at={tp4.from} style={{left: 90, right: 90, top: 530}} fontSize={32}>
			全能性：<Hl>受精卵 ＞ 生殖细胞 ＞ 体细胞</Hl>；分化程度越高，全能性越难实现
		</Def>
		<Tip at={tp5.from} top={650} label="易错">
			多莉说明的是动物细胞的<Hl>细胞核</Hl>具有全能性，不是整个动物细胞
		</Tip>
		<Narration t={t} />
	</Scene>
);
