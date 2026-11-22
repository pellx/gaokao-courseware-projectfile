import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {NetPlot, cross, nx, ny} from './net';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.co2;
const {cc1, cc2, cc3} = t.cue;

const LINE = {A: 1.1, k: 3.2, R: 0.3, color: C.orange, at: cc1.from + 10};
const SAT = 0.6;

export const Co2: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">CO<sub>2</sub> 浓度的影响</Header>
		<div style={{position: 'absolute', left: 90, top: 170}}>
			<NetPlot at={cc1.from} xLabel="二氧化碳浓度" yLabel="净光合速率" lines={[LINE]}>
				<G at={cc1.from + 50}>
					<line x1={nx(SAT)} y1={ny(0)} x2={nx(SAT)} y2={ny(LINE.A * (1 - Math.exp(-LINE.k * SAT)) - LINE.R)} stroke={C.red} strokeWidth={3} strokeDasharray="8 6" />
					<text x={nx(SAT)} y={ny(0) + 34} fontSize={24} fontWeight={900} fill={C.red} textAnchor="middle">二氧化碳饱和点</text>
				</G>
				<G at={cc2.from}>
					<circle cx={nx(cross(LINE))} cy={ny(0)} r={10} fill={C.orange} />
					<text x={nx(cross(LINE)) + 14} y={ny(0) + 34} fontSize={24} fontWeight={900} fill={C.orange}>二氧化碳补偿点</text>
				</G>
			</NetPlot>
		</div>
		<Bullets
			style={{left: 1020, right: 90, top: 210}}
			fontSize={31}
			gap={22}
			items={[
				{at: cc1.from, color: C.orange, children: <>一定范围内，CO<sub>2</sub> 浓度↑ → 光合作用↑</>},
				{at: cc1.from + 50, color: C.red, children: <>达到<Hl>饱和点</Hl>后不再增加</>},
				{at: cc2.from, color: C.orange, children: <><Hl c={C.orange}>补偿点</Hl>：光合速率 ＝ 呼吸速率</>},
			]}
		/>
		<Tip at={cc3.from} top={690} label="考法">
			温室<Hl>增施有机肥</Hl>（微生物分解产生 CO<sub>2</sub>）、<Hl c={C.orange}>通风</Hl>，都能补充 CO<sub>2</sub>
		</Tip>
		<Narration t={t} />
	</Scene>
);
