import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.streak;
const {sk1, sk2, sk3, sk4, sk5, sk6} = t.cue;

// Plate centre and radius; zone polylines are relative to the centre.
const P = {x: 320, y: 280, r: 235};
const ZONES: [number, number][][] = [
	[[-170, -150], [-60, -140], [-170, -125], [-60, -115], [-170, -100], [-60, -90], [-170, -75], [-60, -65]],
	[[-60, -65], [10, -175], [35, -60], [65, -165], [90, -55], [120, -145], [145, -50]],
	[[145, -50], [195, -10], [80, 15], [200, 45], [80, 75], [190, 105], [70, 120]],
	[[70, 120], [30, 205], [-5, 95], [-50, 195], [-80, 95], [-125, 175], [-150, 85]],
];
const LABELS: [number, number][] = [[-200, -165], [70, -200], [225, 40], [-185, 130]];
const COLONIES: [number, number][] = [[18, 178], [-14, 128], [-44, 168], [-74, 120], [-108, 150], [-140, 100], [-62, 100]];

const pts = (z: [number, number][]) => z.map(([x, y]) => `${P.x + x},${P.y + y}`).join(' ');

export const Streak: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">平板划线法</Header>
		<svg width={700} height={540} viewBox="0 0 700 540" style={{position: 'absolute', left: 60, top: 160}}>
			<g transform={`translate(${P.x} 250) scale(0.9) translate(${-P.x} ${-P.y})`}>
				<circle cx={P.x} cy={P.y} r={P.r} fill="#fdf6ea" stroke={C.text} strokeWidth={6} />
				{ZONES.map((z, i) => (
					<G key={i} at={i === 0 ? sk1.from : sk2.from + (i - 1) * 15}>
						<polyline points={pts(z)} fill="none" stroke={[C.red, C.orange, C.brown, C.green][i]} strokeWidth={i === 0 ? 9 : 6} strokeLinejoin="round" />
						<circle cx={P.x + LABELS[i][0]} cy={P.y + LABELS[i][1]} r={20} fill={[C.red, C.orange, C.brown, C.green][i]} />
						<text x={P.x + LABELS[i][0]} y={P.y + LABELS[i][1] + 9} fontSize={26} fontWeight={900} fill="#fff" textAnchor="middle">{i + 1}</text>
					</G>
				))}
				<G at={sk2.from + 60}>
					{COLONIES.map(([x, y], i) => (
						<circle key={i} cx={P.x + x} cy={P.y + y} r={11} fill={C.orange} stroke="#fff" strokeWidth={3} />
					))}
				</G>
			</g>
			<G at={sk2.from + 60}>
				<text x={P.x} y={250 + P.r * 0.9 + 44} fontSize={26} fontWeight={800} fill={C.green} textAnchor="middle">最后一区：单个细胞形成的菌落</text>
			</G>
		</svg>
		<Bullets
			style={{left: 800, right: 90, top: 175}}
			fontSize={29}
			gap={16}
			items={[
				{at: sk1.from, children: <>连续划线，把菌种<Hl>逐步稀释分散</Hl>，得到单菌落</>},
				{at: sk2.from, children: <>从<Hl>上一次划线的末端</Hl>开始；最后一区不与第一区相连</>},
				{at: sk3.from, color: C.red, children: <>第一次灼烧：杀死接种环上<Hl>原有的微生物</Hl></>},
				{at: sk4.from, color: C.red, children: <>每次划线前灼烧：使菌种都<Hl>来自上次划线的末端</Hl></>},
				{at: sk5.from, color: C.red, children: <>划线结束灼烧：防止<Hl>污染环境、感染操作者</Hl></>},
				{at: sk5.from + 40, color: C.green, children: <>灼烧后<Hl c={C.green}>冷却</Hl>再划线，以免烫死菌种</>},
			]}
		/>
		<Tip at={sk6.from} top={740} label="解题方法">
			划了 <Hl>N</Hl> 个区域，接种环就要灼烧 <Hl>N + 1</Hl> 次（图中 4 个区域，灼烧 5 次）
		</Tip>
		<Narration t={t} />
	</Scene>
);
