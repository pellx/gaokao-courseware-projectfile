import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {NetPlot, cross, nx, ny} from './net';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.light;
const {lc1, lc2, lc3, lc4} = t.cue;

const SUN = {A: 1.05, k: 3, R: 0.25, color: C.red, at: lc1.from + 10, label: '阳生植物'};
const SHADE = {A: 0.55, k: 6, R: 0.12, color: C.green, at: lc4.from, dash: true, label: '阴生植物'};
const SAT = 0.75;

export const Light: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">光照强度的影响：光补偿点与光饱和点</Header>
		<div style={{position: 'absolute', left: 90, top: 170}}>
			<NetPlot at={lc1.from} xLabel="光照强度" yLabel="二氧化碳吸收量" lines={[SUN, SHADE]}>
				<G at={lc1.from + 20}>
					<circle cx={nx(0)} cy={ny(-SUN.R)} r={10} fill={C.brown} />
					<text x={nx(0) + 20} y={ny(-SUN.R) + 30} fontSize={22} fontWeight={800} fill={C.brown}>只进行呼吸作用</text>
				</G>
				<G at={lc2.from}>
					<circle cx={nx(cross(SUN))} cy={ny(0)} r={10} fill={C.red} />
					<text x={nx(cross(SUN)) + 14} y={ny(0) + 34} fontSize={24} fontWeight={900} fill={C.red}>光补偿点</text>
				</G>
				<G at={lc3.from}>
					<line x1={nx(SAT)} y1={ny(0)} x2={nx(SAT)} y2={ny(SUN.A * (1 - Math.exp(-SUN.k * SAT)) - SUN.R)} stroke={C.red} strokeWidth={3} strokeDasharray="8 6" />
					<text x={nx(SAT)} y={ny(0) + 34} fontSize={24} fontWeight={900} fill={C.red} textAnchor="middle">光饱和点</text>
				</G>
			</NetPlot>
		</div>
		<Bullets
			style={{left: 1020, right: 90, top: 210}}
			fontSize={31}
			gap={22}
			items={[
				{at: lc1.from, color: C.brown, children: <>光照为 0：只进行<Hl c={C.brown}>呼吸作用</Hl></>},
				{at: lc2.from, color: C.red, children: <><Hl>光补偿点</Hl>：光合速率 ＝ 呼吸速率</>},
				{at: lc3.from, color: C.red, children: <><Hl>光饱和点</Hl>：光合速率不再随光照增加</>},
				{at: lc4.from, color: C.green, children: <>阴生植物：两个点都<Hl c={C.green}>较低</Hl></>},
			]}
		/>
		<Tip at={lc4.from + 60} top={690} label="易错">
			植物处于光补偿点时，<Hl>叶肉细胞</Hl>的光合速率<Hl>大于</Hl>其自身呼吸速率
		</Tip>
		<Narration t={t} />
	</Scene>
);
