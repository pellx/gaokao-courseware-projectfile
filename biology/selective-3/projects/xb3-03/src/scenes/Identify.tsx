import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Def, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.identify;
const {id1, id2, id3, id4} = t.cue;

const COLONIES: [number, number][] = [[-70, -60], [60, -80], [-20, 30], [90, 40], [-90, 80], [30, 110]];

export const Identify: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">分解尿素的细菌的鉴定</Header>
		<Def at={id1.from} fontSize={32} style={{left: 90, width: 1060, top: 170}}>
			以尿素为唯一氮源的培养基 + <Hl>酚红指示剂</Hl>
		</Def>
		<Flow
			style={{left: 90, top: 310}}
			fontSize={33}
			arrows={[[undefined, '脲酶']]}
			rows={[
				[
					{label: '尿素', at: id2.from},
					{label: '氨', at: id2.from + 10},
					{label: 'pH 升高', color: C.orange, at: id2.from + 20},
					{label: '酚红变红', color: C.red, at: id2.from + 30},
				],
			]}
		/>
		<Bullets
			style={{left: 90, width: 1060, top: 460}}
			fontSize={32}
			items={[{at: id3.from, color: C.red, children: <>菌落周围出现<Hl>红色环带</Hl> → 初步鉴定为分解尿素的细菌</>}]}
		/>
		<svg width={480} height={480} viewBox="-240 -240 480 480" style={{position: 'absolute', left: 1300, top: 170}}>
			<G at={id1.from}>
				<circle r={220} fill="#fbe9d0" stroke={C.text} strokeWidth={6} />
			</G>
			<G at={id3.from}>
				{COLONIES.map(([x, y], i) => (
					<g key={i}>
						<circle cx={x} cy={y} r={42} fill={C.red} opacity={0.35} />
						<circle cx={x} cy={y} r={14} fill="#fff8ee" stroke={C.brown} strokeWidth={3} />
					</g>
				))}
			</G>
		</svg>
		<Tip at={id4.from} top={700} label="易错">
			选择培养基上的菌落<Hl>不一定都是目的菌</Hl>，要再用酚红鉴定；酚红指示剂是变<Hl>红</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
