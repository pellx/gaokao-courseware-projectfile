import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.plasmid;
const {pl1, pl2, pl3, pl4, pl5} = t.cue;

const P = {x: 300, y: 230, r: 160};
const arc = (a0: number, a1: number, r = P.r) => {
	const p = (a: number) => [P.x + r * Math.cos((a * Math.PI) / 180), P.y + r * Math.sin((a * Math.PI) / 180)];
	const [x0, y0] = p(a0);
	const [x1, y1] = p(a1);
	return `M${x0},${y0} A${r},${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1},${y1}`;
};

export const Plasmid: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">载体——质粒</Header>
		<Def at={pl1.from} fontSize={28} style={{left: 90, right: 90, top: 160}}>
			<Hl>质粒</Hl>：裸露、结构简单、独立于细胞核或拟核 DNA 之外，具有<Hl>自我复制能力</Hl>的<Hl c={C.orange}>环状双链 DNA</Hl>
		</Def>
		<svg width={700} height={470} viewBox="0 0 700 470" style={{position: 'absolute', left: 90, top: 270}}>
			<G at={pl1.from}>
				<circle cx={P.x} cy={P.y} r={P.r} fill="none" stroke={C.brown} strokeWidth={14} />
			</G>
			<G at={pl2.from}>
				<path d={arc(150, 200)} fill="none" stroke={C.green} strokeWidth={26} />
				<text x={P.x - P.r - 30} y={P.y + 10} fontSize={26} fontWeight={900} fill={C.green} textAnchor="end">复制原点</text>
			</G>
			<G at={pl3.from}>
				{[-70, -40].map((a) => {
					const x = P.x + P.r * Math.cos((a * Math.PI) / 180);
					const y = P.y + P.r * Math.sin((a * Math.PI) / 180);
					return <line key={a} x1={x - 18} y1={y - 18} x2={x + 18} y2={y + 18} stroke={C.red} strokeWidth={6} />;
				})}
				<text x={P.x + 110} y={P.y - 160} fontSize={26} fontWeight={900} fill={C.red}>限制酶切割位点</text>
			</G>
			<G at={pl4.from}>
				<path d={arc(20, 90)} fill="none" stroke={C.orange} strokeWidth={26} />
				<text x={P.x + 150} y={P.y + 160} fontSize={26} fontWeight={900} fill={C.orange}>标记基因</text>
				<text x={P.x + 150} y={P.y + 194} fontSize={22} fontWeight={800} fill={C.muted}>（如抗生素抗性基因）</text>
			</G>
		</svg>
		<Bullets
			style={{left: 820, right: 90, top: 300}}
			fontSize={31}
			gap={26}
			items={[
				{at: pl2.from, color: C.green, children: <>① 能在受体细胞中<Hl c={C.green}>自我复制</Hl>，或整合到受体 DNA 上随之复制</>},
				{at: pl3.from, color: C.red, children: <>② 有<Hl>一个至多个限制酶切割位点</Hl>，供外源 DNA 插入</>},
				{at: pl4.from, color: C.orange, children: <>③ 有特殊的<Hl c={C.orange}>标记基因</Hl>，便于筛选重组 DNA 分子</>},
			]}
		/>
		<Tip at={pl5.from} top={740} label="易错">
			质粒<Hl>不是细胞器</Hl>，酵母菌等真核生物也有；载体对受体细胞应<Hl c={C.orange}>无害</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
