import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.haploid;
const {hp1, hp2, hp3, hp4} = t.cue;

export const Haploid: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">单倍体育种</Header>
		<Flow
			style={{left: 90, top: 200}}
			fontSize={34}
			arrows={[[undefined, '花药离体培养', '秋水仙素处理', '筛选']]}
			rows={[
				[
					{label: 'AaBb 花药', at: hp1.from, color: C.brown},
					{label: '单倍体幼苗', note: 'AB、Ab、aB、ab', at: hp1.from + 50, color: C.orange},
					{label: '纯合二倍体', note: 'AABB、AAbb、aaBB、aabb', at: hp2.from, color: C.red},
					{label: '所需品种', at: hp2.from + 60, color: C.green},
				],
			]}
		/>
		<Tip at={hp3.from} top={400} label="考法" fontSize={34}>
			优点：后代都是<Hl>纯合子</Hl>，能<Hl>明显缩短育种年限</Hl>
		</Tip>
		<Tip at={hp4.from} top={540} label="易错" fontSize={33}>
			秋水仙素处理<Hl>单倍体幼苗</Hl>（单倍体高度不育，没有种子）；最终目的是得到可育的纯合植株
		</Tip>
		<Narration t={t} />
	</Scene>
);
