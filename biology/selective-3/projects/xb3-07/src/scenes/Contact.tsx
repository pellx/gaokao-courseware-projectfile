import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.contact;
const {co1, co2, co3, co4} = t.cue;

const W = 440;
const TOP = 40;
const BOTTOM = 240;
const X = [260, 870, 1480];

const Flask: React.FC<{x: number}> = ({x}) => (
	<g>
		<rect x={x - W / 2} y={TOP} width={W} height={BOTTOM - TOP} rx={18} fill="#fdf1ea" stroke={C.text} strokeWidth={5} />
	</g>
);

const FLOAT: [number, number][] = [[-150, 90], [-60, 140], [30, 80], [110, 170], [170, 110], [-120, 200], [60, 200]];

export const Contact: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">贴壁生长和接触抑制</Header>
		<svg width={1740} height={340} viewBox="0 0 1740 340" style={{position: 'absolute', left: 90, top: 180}}>
			<Defs />
			<G at={co1.from}>
				<Flask x={X[0]} />
				{FLOAT.map(([dx, y], i) => (
					<circle key={i} cx={X[0] + dx} cy={y} r={14} fill={C.orange} />
				))}
				<text x={X[0]} y={295} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">细胞悬液</text>
				<Arrow x1={X[0] + W / 2 + 20} y1={140} x2={X[1] - W / 2 - 20} y2={140} />
				<Flask x={X[1]} />
				{[-170, -90, 0, 80, 160].map((dx) => (
					<ellipse key={dx} cx={X[1] + dx} cy={BOTTOM - 14} rx={30} ry={11} fill={C.orange} />
				))}
				<text x={X[1]} y={295} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">细胞贴壁</text>
			</G>
			<G at={co2.from}>
				<Arrow x1={X[1] + W / 2 + 20} y1={140} x2={X[2] - W / 2 - 20} y2={140} />
				<text x={(X[1] + X[2]) / 2} y={115} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">分裂生长</text>
				<Flask x={X[2]} />
				{Array.from({length: 10}, (_, i) => (
					<ellipse key={i} cx={X[2] - 198 + i * 44} cy={BOTTOM - 14} rx={22} ry={11} fill={C.red} />
				))}
				<text x={X[2]} y={295} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">接触抑制：停止分裂</text>
				<text x={X[2]} y={332} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">（单层细胞铺满瓶壁）</text>
			</G>
		</svg>
		<Bullets
			style={{left: 90, right: 90, top: 560}}
			fontSize={31}
			items={[{at: co3.from, color: C.green, children: <>原代培养的细胞长满瓶壁后，要用胰蛋白酶处理，<Hl c={C.green}>分瓶传代</Hl></>}]}
		/>
		<Tip at={co4.from} top={680} label="解题方法">
			传代时用胰蛋白酶处理，是为了让贴壁细胞<Hl>从瓶壁上脱离</Hl>，分散成单个细胞
		</Tip>
		<Narration t={t} />
	</Scene>
);
