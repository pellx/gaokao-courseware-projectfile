import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.unity;
const {un1, un2, un3, un4} = t.cue;

export const Unity: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">原核细胞与真核细胞的统一性</Header>
		<Cards
			top={175}
			height={240}
			titleSize={48}
			fontSize={28}
			items={[
				{title: '细胞膜', color: C.orange, at: un1.from, body: '都有'},
				{title: '细胞质', color: C.orange, at: un1.from + 30, body: '都有'},
				{title: '核糖体', color: C.red, at: un2.from, body: '合成蛋白质的场所'},
				{title: 'DNA', color: C.red, at: un3.from, body: '遗传物质都是 DNA'},
			]}
		/>
		<Def at={un3.from + 40} style={{left: 90, right: 90, top: 450}}>
			体现了<Hl>细胞的统一性</Hl>，也说明不同生物之间存在<Hl c={C.orange}>亲缘关系</Hl>
		</Def>
		<Tip at={un4.from} top={600} label="解题方法">
			问共同点，就答四个“都有”：<Hl>细胞膜、细胞质、核糖体、DNA</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
