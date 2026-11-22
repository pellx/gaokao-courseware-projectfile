import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.haploid;
const {ha1, ha2, ha3, ha4} = t.cue;

export const Haploid: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">单倍体育种</Header>
		<Flow
			style={{left: 90, top: 210}}
			fontSize={36}
			arrows={[[undefined, '离体培养', '秋水仙素', '选育']]}
			rows={[
				[
					{label: '花药（花粉）', at: ha1.from},
					{label: '单倍体幼苗', note: '一般高度不育', color: C.orange, at: ha1.from + 20},
					{label: '纯合二倍体', note: '染色体加倍', color: C.red, at: ha2.from},
					{label: '新品种', color: C.green, at: ha2.from + 40},
				],
			]}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 400}}
			fontSize={32}
			gap={24}
			items={[
				{at: ha3.from, color: C.green, children: <>优点：后代都是<Hl c={C.green}>纯合子</Hl>，<Hl c={C.green}>明显缩短育种年限</Hl></>},
				{at: ha3.from + 40, children: <>花药离体培养体现了<Hl c={C.orange}>生殖细胞（花粉）的全能性</Hl></>},
			]}
		/>
		<Tip at={ha4.from} top={690} label="易错">
			花药离体培养得到的<Hl>只是单倍体</Hl>，必须再用秋水仙素处理，才能得到可育的纯合植株
		</Tip>
		<Narration t={t} />
	</Scene>
);
