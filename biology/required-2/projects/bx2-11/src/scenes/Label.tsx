import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {Strand} from './strand';

const t = T.label;
const {lb1, lb2, lb3, lb4} = t.cue;
const H = 150;

// A chromosome at metaphase: two sister chromatids, each a DNA duplex (two strands).
const Chromosome: React.FC<{x: number; marks: [boolean, boolean][]}> = ({x, marks}) => (
	<g>
		{marks.map((pair, k) => (
			<g key={k}>
				<Strand x={x + k * 80 - 14} y={60} old={pair[0]} h={H} w={20} />
				<Strand x={x + k * 80 + 14} y={60} old={pair[1]} h={H} w={20} />
			</g>
		))}
		<rect x={x + 24} y={60 + H / 2 - 9} width={32} height={18} rx={9} fill={C.muted} />
	</g>
);

export const Label: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">结合细胞分裂的标记问题（有丝分裂）</Header>
		<svg width={1740} height={460} viewBox="0 0 1740 460" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={lb1.from}>
				<text x={200} y={30} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">起始：DNA 双链都有标记</text>
				<Strand x={186} y={60} old h={H} w={20} />
				<Strand x={214} y={60} old h={H} w={20} />
			</G>
			<G at={lb2.from}>
				<text x={760} y={30} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">第一次分裂中期</text>
				<Chromosome x={720} marks={[[true, false], [false, true]]} />
				<text x={760} y={270} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">两条染色单体都有标记</text>
			</G>
			<G at={lb3.from}>
				<text x={1380} y={30} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">第二次分裂中期</text>
				<Chromosome x={1340} marks={[[true, false], [false, false]]} />
				<text x={1380} y={270} fontSize={26} fontWeight={800} fill={C.orange} textAnchor="middle">只有一条染色单体有标记</text>
			</G>
			<G at={lb1.from}>
				<rect x={560} y={360} width={30} height={24} fill={C.red} />
				<text x={602} y={381} fontSize={26} fontWeight={800} fill={C.text}>含 <tspan dy={-10} fontSize={16}>3</tspan><tspan dy={10}>H 的链</tspan></text>
				<rect x={800} y={360} width={30} height={24} fill="#fff" stroke={C.orange} strokeWidth={4} />
				<text x={842} y={381} fontSize={26} fontWeight={800} fill={C.text}>不含 <tspan dy={-10} fontSize={16}>3</tspan><tspan dy={10}>H 的链</tspan></text>
			</G>
		</svg>
		<Tip at={lb4.from} top={680} label="解题方法" fontSize={32}>
			画出 DNA 双链，按半保留复制<Hl>一次一次推</Hl>；第二次分裂后期姐妹染色单体<Hl>随机移向两极</Hl>，子细胞中带标记的染色体数不确定
		</Tip>
		<Narration t={t} />
	</Scene>
);
