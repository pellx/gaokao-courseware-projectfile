import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Chromo} from '../components/gene';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.recomb;
const {rc1, rc2, rc3, rc4} = t.cue;

export const Recomb: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">基因重组的两种类型</Header>
		<Def at={rc1.from} style={{left: 90, right: 90, top: 165}} fontSize={32}>
			在<Hl c={C.orange}>有性生殖</Hl>过程中，控制<Hl>不同性状</Hl>的基因的重新组合
		</Def>
		<svg width={1740} height={340} viewBox="0 0 1740 340" style={{position: 'absolute', left: 90, top: 270}}>
			<G at={rc2.from}>
				<text x={400} y={30} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">① 减Ⅰ后期：非同源染色体自由组合</text>
				<Chromo x={240} y={170} h={180} w={24} color={C.red} bands={[{pos: 0.25, label: 'A', left: true}]} fontSize={30} />
				<Chromo x={330} y={185} h={130} w={24} color={C.orange} bands={[{pos: 0.3, label: 'b'}]} fontSize={30} />
				<text x={285} y={300} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">配子 Ab</text>
				<Chromo x={480} y={170} h={180} w={24} color={C.orange} bands={[{pos: 0.25, label: 'a', left: true}]} fontSize={30} />
				<Chromo x={570} y={185} h={130} w={24} color={C.red} bands={[{pos: 0.3, label: 'B'}]} fontSize={30} />
				<text x={525} y={300} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">配子 aB</text>
			</G>
			<G at={rc3.from}>
				<text x={1300} y={30} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">② 减Ⅰ前期：非姐妹染色单体互换</text>
				<Chromo x={1240} y={170} h={200} w={26} color={C.red} double tail={{from: 0.6, color: C.orange, which: 'right'}} bands={[{pos: 0.2, label: 'A', left: true}, {pos: 0.8}]} fontSize={30} />
				<Chromo x={1360} y={170} h={200} w={26} color={C.orange} double tail={{from: 0.6, color: C.red, which: 'left'}} bands={[{pos: 0.2, label: 'a'}, {pos: 0.8}]} fontSize={30} />
				<text x={1180} y={256} fontSize={30} fontWeight={900} fill={C.text} textAnchor="end">B</text>
				<text x={1420} y={256} fontSize={30} fontWeight={900} fill={C.text}>b</text>
				<text x={1300} y={310} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">可产生重组配子 Ab、aB</text>
			</G>
		</svg>
		<Tip at={rc4.from} top={660} label="易错" fontSize={32}>
			基因重组<Hl>不产生新基因</Hl>，只产生新基因型；受精时配子随机结合、一对等位基因分离<Hl>都不是</Hl>基因重组
		</Tip>
		<Narration t={t} />
	</Scene>
);
