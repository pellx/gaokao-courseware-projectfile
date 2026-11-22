import React from 'react';
import {Appear, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.exchange;
const {ex2, ex3, ex4, ex5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const SYSTEMS = [
	{label: '消化系统', y: 40},
	{label: '呼吸系统', y: 175},
	{label: '泌尿系统、皮肤', y: 310},
];

const Tag: React.FC<{x: number; y: number; text: string; color?: string}> = ({x, y, text, color = C.muted}) => (
	<text x={x} y={y} fontSize={26} fontWeight={700} fill={color} textAnchor="middle">
		{svgChem(text, 26)}
	</text>
);

const MEMBRANES = [
	['肺泡壁', 2],
	['毛细血管壁', 2],
	['红细胞', 2],
	['毛细血管壁', 2],
	['组织细胞膜', 1],
	['线粒体', 2],
] as const;

export const Exchange: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点九">内环境是物质交换的媒介</Header>
		<svg width={1740} height={440} viewBox="0 0 1740 440" style={{position: 'absolute', left: 90, top: 160, overflow: 'visible'}}>
			<Defs />
			<G at={ex2.from - 10}>
				<rect x={0} y={20} width={230} height={400} rx={24} fill={C.panel} stroke="#cfc6ba" strokeWidth={4} />
				<text x={115} y={232} fontSize={38} fontWeight={900} textAnchor="middle">外界环境</text>
				<rect x={780} y={20} width={330} height={400} rx={24} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
				<text x={945} y={180} fontSize={44} fontWeight={900} fill={C.orange} textAnchor="middle">内环境</text>
				<text x={945} y={232} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="middle">血浆 · 组织液 · 淋巴液</text>
				{SYSTEMS.map((s) => (
					<g key={s.label}>
						<rect x={360} y={s.y} width={260} height={90} rx={18} fill="#fff" stroke={C.line} strokeWidth={4} />
						<text x={490} y={s.y + 57} fontSize={32} fontWeight={800} textAnchor="middle">{s.label}</text>
					</g>
				))}
			</G>
			<G at={ex2.from}>
				<Arrow x1={230} y1={85} x2={360} y2={85} color={C.orange} marker="arrow-orange" />
				<Arrow x1={620} y1={85} x2={780} y2={85} color={C.orange} marker="arrow-orange" />
				<Tag x={700} y={70} text="营养物质" />
			</G>
			<G at={at(ex2.from, ex2.to, 0.5)}>
				<Arrow x1={230} y1={200} x2={360} y2={200} color={C.orange} marker="arrow-orange" />
				<Arrow x1={620} y1={200} x2={780} y2={200} color={C.orange} marker="arrow-orange" />
				<Arrow x1={780} y1={240} x2={620} y2={240} color={C.muted} />
				<Arrow x1={360} y1={240} x2={230} y2={240} color={C.muted} />
				<Tag x={700} y={186} text="O2" />
				<Tag x={700} y={276} text="CO2" />
			</G>
			<G at={ex3.from}>
				<Arrow x1={780} y1={355} x2={620} y2={355} color={C.muted} />
				<Arrow x1={360} y1={355} x2={230} y2={355} color={C.muted} />
				<Tag x={700} y={400} text="代谢废物" />
			</G>
			<G at={at(ex3.from, ex3.to, 0.6)}>
				<text x={945} y={300} fontSize={30} fontWeight={800} fill={C.red} textAnchor="middle">循环系统运输</text>
			</G>
			<G at={ex4.from}>
				<rect x={1290} y={120} width={260} height={200} rx={50} fill="#f6d7b0" stroke={C.brown} strokeWidth={5} />
				<circle cx={1420} cy={250} r={26} fill={C.brown} opacity={0.6} />
				<text x={1420} y={196} fontSize={44} fontWeight={900} fill={C.brown} textAnchor="middle">细胞</text>
				<Arrow x1={1110} y1={180} x2={1290} y2={180} color={C.orange} marker="arrow-orange" />
				<Arrow x1={1290} y1={260} x2={1110} y2={260} color={C.muted} />
				<Tag x={1200} y={164} text="养料、O2" />
				<Tag x={1200} y={300} text="代谢废物、CO2" />
				<text x={1420} y={370} fontSize={26} fontWeight={700} fill={C.brown} textAnchor="middle">细胞参与内环境的</text>
				<text x={1420} y={404} fontSize={26} fontWeight={700} fill={C.brown} textAnchor="middle">形成和维持</text>
			</G>
		</svg>
		<Appear at={ex5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<div style={{background: C.greenSoft, borderLeft: `10px solid ${C.green}`, borderRadius: 18, padding: '18px 26px'}}>
				<div style={{fontSize: 33}}>
					<span style={{background: C.green, color: '#fff', fontWeight: 700, fontSize: 29, padding: '2px 14px', borderRadius: 8, marginRight: 14}}>考法</span>
					<Hl c={C.text}>
						O<sub style={{fontSize: '0.66em'}}>2</sub>
					</Hl>{' '}
					从外界进入组织细胞并被利用，至少穿过几层生物膜？
				</div>
				<div style={{display: 'flex', alignItems: 'center', gap: 10, marginTop: 14, fontSize: 30, fontWeight: 700}}>
					{MEMBRANES.map(([name, n], i) => (
						<Appear key={i} at={at(ex5.from, ex5.to, 0.3 + i * 0.1)} dy={10} style={{display: 'flex', alignItems: 'center', gap: 10}}>
							{i > 0 && <span style={{color: C.muted}}>+</span>}
							<span style={{background: '#fff', border: `3px solid ${C.green}`, borderRadius: 12, padding: '4px 14px', whiteSpace: 'nowrap'}}>
								{name} <b style={{color: C.red}}>{n}</b>
							</span>
						</Appear>
					))}
					<Appear at={at(ex5.from, ex5.to, 0.92)} dy={10}>
						<span style={{fontSize: 38, fontWeight: 900, color: C.red, whiteSpace: 'nowrap'}}>= 11 层</span>
					</Appear>
				</div>
			</div>
		</Appear>
		<Narration t={t} />
	</Scene>
);
