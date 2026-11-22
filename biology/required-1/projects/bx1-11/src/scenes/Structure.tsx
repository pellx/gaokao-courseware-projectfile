import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.structure;
const {st1, st2, st3, st4, st5} = t.cue;

const CX = 330;
const CY = 230;
const R = 200;
// Pores: gaps in the double membrane.
const PORES = [20, 80, 140, 200, 260, 320];
const arc = (r: number, a1: number, a2: number) => {
	const p = (a: number) => [CX + r * Math.cos((a * Math.PI) / 180), CY + r * Math.sin((a * Math.PI) / 180)];
	const [x1, y1] = p(a1);
	const [x2, y2] = p(a2);
	return `M${x1},${y1} A${r},${r} 0 0 1 ${x2},${y2}`;
};

export const Structure: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">细胞核的结构</Header>
		<svg width={760} height={490} viewBox="0 0 760 490" style={{position: 'absolute', left: 90, top: 160}}>
			<circle cx={CX} cy={CY} r={R - 10} fill={C.panel} />
			<G at={st1.from}>
				{PORES.map((a, i) => {
					const next = PORES[(i + 1) % PORES.length] + (i === PORES.length - 1 ? 360 : 0);
					return (
						<g key={a}>
							<path d={arc(R, a + 5, next - 5)} fill="none" stroke={C.brown} strokeWidth={7} />
							<path d={arc(R - 16, a + 6, next - 6)} fill="none" stroke={C.brown} strokeWidth={7} />
						</g>
					);
				})}
				<text x={CX + 215} y={60} fontSize={28} fontWeight={800} fill={C.brown}>核膜（双层）</text>
			</G>
			<G at={st2.from}>
				<circle cx={CX + (R - 8) * Math.cos((20 * Math.PI) / 180)} cy={CY + (R - 8) * Math.sin((20 * Math.PI) / 180)} r={18} fill="none" stroke={C.red} strokeWidth={4} />
				<text x={CX + 230} y={CY + 90} fontSize={28} fontWeight={800} fill={C.red}>核孔</text>
			</G>
			<G at={st3.from}>
				<circle cx={CX - 40} cy={CY - 10} r={55} fill={C.orange} />
				<text x={CX - 40} y={CY + 0} fontSize={28} fontWeight={900} fill="#fff" textAnchor="middle">核仁</text>
			</G>
			<G at={st4.from}>
				<path d={`M${CX + 30},${CY + 90} c30,-40 60,30 90,-10 s40,-60 60,-20`} fill="none" stroke={C.green} strokeWidth={6} />
				<path d={`M${CX - 120},${CY + 100} c30,30 50,-40 90,0 s40,40 60,0`} fill="none" stroke={C.green} strokeWidth={6} />
				<path d={`M${CX + 40},${CY - 110} c20,30 50,-30 80,5`} fill="none" stroke={C.green} strokeWidth={6} />
				<text x={CX} y={CY + 238} fontSize={28} fontWeight={800} fill={C.green} textAnchor="middle">染色质（DNA ＋ 蛋白质）</text>
			</G>
		</svg>
		<Bullets
			style={{left: 900, right: 90, top: 190}}
			fontSize={31}
			gap={20}
			items={[
				{at: st1.from, color: C.brown, children: <><Hl c={C.brown}>核膜</Hl>：双层膜，把核内物质与细胞质分开</>},
				{at: st2.from, color: C.red, children: <><Hl>核孔</Hl>：核质之间物质交换和信息交流</>},
				{at: st3.from, color: C.orange, children: <><Hl c={C.orange}>核仁</Hl>：与某种 RNA 的合成和核糖体的形成有关</>},
				{at: st4.from, color: C.green, children: <><Hl c={C.green}>染色质</Hl>：主要由 DNA 和蛋白质组成</>},
			]}
		/>
		<Tip at={st5.from} top={690} label="易错">
			核孔<Hl>有选择性</Hl>，DNA 不能出核；代谢旺盛的细胞<Hl c={C.orange}>核孔多、核仁大</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
