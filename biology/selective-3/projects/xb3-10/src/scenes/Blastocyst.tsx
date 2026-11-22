import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.blastocyst;
const {bl1, bl2, bl3, bl4} = t.cue;

const B = {x: 330, y: 290, r: 210};
// Trophoblast cells around the rim.
const RIM = Array.from({length: 22}, (_, i) => (i / 22) * Math.PI * 2);

export const Blastocyst: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">囊胚的结构</Header>
		<svg width={800} height={560} viewBox="0 0 800 560" style={{position: 'absolute', left: 60, top: 155}}>
			<G at={bl1.from}>
				<circle cx={B.x} cy={B.y} r={B.r + 26} fill="#fdf3e4" stroke={C.orange} strokeWidth={8} strokeDasharray="0" />
				<circle cx={B.x} cy={B.y} r={B.r} fill="#fff" />
				<path d={`M${B.x - 150},${B.y - 146} A${B.r - 4},${B.r - 4} 0 0 1 ${B.x + 150},${B.y - 146} Q${B.x + 90},${B.y - 30} ${B.x},${B.y - 30} Q${B.x - 90},${B.y - 30} ${B.x - 150},${B.y - 146} z`} fill={C.red} opacity={0.8} />
				<text x={B.x} y={B.y - 100} fontSize={30} fontWeight={900} fill="#fff" textAnchor="middle">内细胞团</text>
			</G>
			<G at={bl2.from}>
				{RIM.map((a, i) => (
					<ellipse key={i} cx={B.x + (B.r - 14) * Math.cos(a)} cy={B.y + (B.r - 14) * Math.sin(a)} rx={26} ry={12} transform={`rotate(${(a * 180) / Math.PI + 90} ${B.x + (B.r - 14) * Math.cos(a)} ${B.y + (B.r - 14) * Math.sin(a)})`} fill={C.orange} />
				))}
				<line x1={B.x + B.r - 10} y1={B.y + 90} x2={B.x + B.r + 70} y2={B.y + 140} stroke={C.orange} strokeWidth={4} />
				<text x={B.x + B.r + 76} y={B.y + 150} fontSize={30} fontWeight={900} fill={C.orange}>滋养层</text>
			</G>
			<G at={bl3.from}>
				<text x={B.x} y={B.y + 80} fontSize={30} fontWeight={900} fill={C.green} textAnchor="middle">囊胚腔</text>
				<line x1={B.x + B.r + 20} y1={B.y - 150} x2={B.x + B.r + 70} y2={B.y - 190} stroke={C.orange} strokeWidth={4} />
				<text x={B.x + B.r + 76} y={B.y - 190} fontSize={30} fontWeight={900} fill={C.muted}>透明带</text>
			</G>
		</svg>
		<Bullets
			style={{left: 900, right: 90, top: 200}}
			fontSize={31}
			gap={26}
			items={[
				{at: bl1.from, color: C.red, children: <><Hl>内细胞团</Hl>：个体较大，聚集在一端 → 发育成<Hl>胎儿的各种组织</Hl></>},
				{at: bl2.from, children: <><Hl c={C.orange}>滋养层</Hl>：个体较小，沿透明带内壁排列 → 发育成<Hl c={C.orange}>胎膜和胎盘</Hl></>},
				{at: bl3.from, color: C.green, children: <><Hl c={C.green}>孵化</Hl>：囊胚扩大，透明带破裂，胚胎从中伸展出来</>},
			]}
		/>
		<Tip at={bl4.from} top={735} label="解题方法">
			<Hl>内细胞团成胎儿，滋养层成胎膜胎盘</Hl>；胚胎分割、获取 ES 细胞都与内细胞团有关
		</Tip>
		<Narration t={t} />
	</Scene>
);
