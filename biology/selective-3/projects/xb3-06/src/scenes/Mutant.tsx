import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Cards, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mutant;
const {mu1, mu2, mu3, mu4} = t.cue;

export const Mutant: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">突变体的利用</Header>
		<Bullets
			style={{left: 90, right: 90, top: 180}}
			fontSize={31}
			items={[{at: mu1.from, children: <>培养细胞一直处于<Hl c={C.orange}>不断增殖</Hl>的状态，容易受培养条件和诱变因素影响而突变</>}]}
		/>
		<Flow
			style={{left: 90, top: 290}}
			fontSize={34}
			arrows={[[undefined, '射线、化学物质', '筛选', '再分化']]}
			rows={[
				[
					{label: '愈伤组织', at: mu2.from},
					{label: '突变细胞', color: C.orange, at: mu2.from + 20},
					{label: '有用的突变体', color: C.red, at: mu3.from},
					{label: '新品种', color: C.green, at: mu3.from + 20},
				],
			]}
		/>
		<Cards
			top={440}
			height={150}
			titleSize={34}
			fontSize={28}
			items={[
				{title: '抗花叶病的甘蔗', color: C.green, at: mu3.from + 30, body: '筛选抗病突变体'},
				{title: '抗盐碱的野生烟草', color: C.green, at: mu3.from + 45, body: '筛选抗逆突变体'},
			]}
		/>
		<Tip at={mu4.from} top={650} label="解题方法">
			选愈伤组织诱变：细胞<Hl>分裂旺盛</Hl>，DNA 复制时易突变；突变<Hl>不定向</Hl>，所以必须筛选
		</Tip>
		<Narration t={t} />
	</Scene>
);
