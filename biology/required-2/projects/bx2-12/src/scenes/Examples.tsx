import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.examples;
const {ex1, ex2, ex3, ex4} = t.cue;
const GENES: [number, number][] = [[60, 170], [230, 330], [420, 600], [700, 800], [900, 1100], [1200, 1300], [1380, 1560]];

export const Examples: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">说明基因与 DNA 关系的实例</Header>
		<svg width={1740} height={190} viewBox="0 0 1740 190" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={ex1.from}>
				<rect x={40} y={60} width={1600} height={50} rx={25} fill="#fff" stroke={C.brown} strokeWidth={5} />
				{GENES.map(([a, b], i) => (
					<rect key={i} x={a} y={63} width={b - a} height={44} fill={i === 3 ? C.green : C.orange} opacity={0.85} />
				))}
				<text x={40} y={40} fontSize={28} fontWeight={900} fill={C.brown}>DNA</text>
				<text x={485} y={150} fontSize={26} fontWeight={800} fill={C.orange}>基因</text>
				<text x={960} y={150} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">基因之间的片段（非基因序列）</text>
			</G>
		</svg>
		<Rows
			style={{left: 90, right: 90, top: 380}}
			fontSize={31}
			gap={18}
			items={[
				{at: ex1.from, color: C.red, title: '大肠杆菌', children: <>一个 DNA 上约有 4400 个基因，<Hl>基因总长度小于 DNA 长度</Hl></>},
				{at: ex2.from, color: C.green, title: '荧光小鼠', children: <>水母的绿色荧光蛋白基因转入小鼠 → 小鼠发光：基因有<Hl c={C.green}>遗传效应</Hl></>},
				{at: ex3.from, color: C.orange, title: '人类基因组', children: <>构成基因的碱基数<Hl c={C.orange}>不超过碱基总数的 2%</Hl></>},
			]}
		/>
		<Tip at={ex4.from} top={710} label="考法" fontSize={34}>
			基因是 DNA 的片段，但 <Hl>DNA 上并非所有片段都是基因</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
