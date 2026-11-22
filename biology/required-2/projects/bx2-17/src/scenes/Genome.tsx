import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Rows, Tip} from '../components/lib';
import {Chromo} from '../components/gene';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.genome;
const {ge1, ge2, ge3, ge4} = t.cue;
const SHAPES = [150, 110, 80, 55];
const SETS = [C.red, C.orange, C.brown];

export const Genome: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">染色体组及其数目的判断</Header>
		<Def at={ge1.from} style={{left: 90, right: 90, top: 165}} fontSize={30}>
			一组<Hl>非同源染色体</Hl>，形态和功能各不相同，携带控制生长发育的<Hl>全部遗传信息</Hl>
		</Def>
		<svg width={700} height={440} viewBox="0 0 700 440" style={{position: 'absolute', left: 90, top: 280}}>
			<G at={ge2.from}>
				<ellipse cx={330} cy={210} rx={310} ry={190} fill={C.panel} stroke={C.brown} strokeWidth={4} />
				{SHAPES.map((h, s) =>
					SETS.map((col, k) => <Chromo key={`${s}-${k}`} x={130 + s * 140 + (k - 1) * 34} y={210} h={h} w={20} color={col} />),
				)}
				<text x={330} y={430} fontSize={28} fontWeight={900} fill={C.text} textAnchor="middle">每种形态 3 条 → 3 个染色体组</text>
			</G>
		</svg>
		<Rows
			style={{left: 840, right: 90, top: 300}}
			fontSize={30}
			gap={18}
			items={[
				{at: ge2.from, color: C.orange, title: '看图', children: <>形态、大小<Hl c={C.orange}>相同的染色体有几条</Hl>，就有几个染色体组</>},
				{at: ge3.from, color: C.red, title: '看基因型', children: <>同一性状的基因<Hl>出现几次</Hl>，就有几个：AAaBBb → <Hl>3 个</Hl></>},
			]}
		/>
		<Tip at={ge4.from} top={740} label="易错" fontSize={32}>
			一个染色体组中<Hl>没有同源染色体</Hl>；含同源染色体的细胞不一定只有两个染色体组
		</Tip>
		<Narration t={t} />
	</Scene>
);
