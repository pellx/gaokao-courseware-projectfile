import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Defs} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {BASE_COLOR, Base, HBonds, Phos, Sugar} from './dnadraw';

const t = T.helix;
const {he1, he2, he3, he4} = t.cue;
const PAIRS = [['A', 'T'], ['G', 'C'], ['T', 'A'], ['C', 'G'], ['A', 'T']];
const Y0 = 70;
const DY = 92;
const PAIR_N: Record<string, number> = {A: 2, T: 2, G: 3, C: 3};

export const Helix: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">DNA 双螺旋结构的主要特点</Header>
		<svg width={860} height={560} viewBox="0 0 860 560" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={he1.from}>
				<Arrow x1={60} y1={500} x2={60} y2={50} marker="arrow-red" color={C.red} />
				<Arrow x1={790} y1={50} x2={790} y2={500} marker="arrow-red" color={C.red} />
				<text x={60} y={535} fontSize={24} fontWeight={900} fill={C.red} textAnchor="middle">5′→3′</text>
				<text x={790} y={535} fontSize={24} fontWeight={900} fill={C.red} textAnchor="middle">3′←5′</text>
			</G>
			<G at={he2.from}>
				{PAIRS.map((_, i) => {
					const y = Y0 + i * DY;
					return (
						<g key={i}>
							{i < PAIRS.length - 1 && <line x1={180} y1={y} x2={180} y2={y + DY} stroke={C.muted} strokeWidth={4} />}
							{i < PAIRS.length - 1 && <line x1={670} y1={y} x2={670} y2={y + DY} stroke={C.muted} strokeWidth={4} />}
							<Sugar x={180} y={y} r={26} />
							<Sugar x={670} y={y} r={26} flip />
							{i < PAIRS.length - 1 && <Phos x={130} y={y + DY / 2} r={20} />}
							{i < PAIRS.length - 1 && <Phos x={720} y={y + DY / 2} r={20} />}
							{i < PAIRS.length - 1 && <line x1={150} y1={y + DY / 2} x2={180} y2={y + DY / 2} stroke={C.muted} strokeWidth={3} />}
							{i < PAIRS.length - 1 && <line x1={670} y1={y + DY / 2} x2={700} y2={y + DY / 2} stroke={C.muted} strokeWidth={3} />}
						</g>
					);
				})}
				<text x={130} y={30} fontSize={26} fontWeight={900} fill={C.orange} textAnchor="middle">外侧骨架</text>
				<text x={720} y={30} fontSize={26} fontWeight={900} fill={C.orange} textAnchor="middle">外侧骨架</text>
			</G>
			<G at={he3.from}>
				{PAIRS.map(([a, b], i) => {
					const y = Y0 + i * DY;
					return (
						<g key={i}>
							<line x1={206} y1={y} x2={240} y2={y} stroke={C.muted} strokeWidth={4} />
							<line x1={610} y1={y} x2={644} y2={y} stroke={C.muted} strokeWidth={4} />
							<Base x={310} y={y} w={140} h={46} label={a} color={BASE_COLOR[a]} />
							<Base x={540} y={y} w={140} h={46} label={b} color={BASE_COLOR[b]} />
							<HBonds x1={382} x2={468} y={y} n={PAIR_N[a]} />
						</g>
					);
				})}
				<text x={425} y={30} fontSize={26} fontWeight={900} fill={C.green} textAnchor="middle">内侧：碱基对（氢键）</text>
			</G>
		</svg>
		<Rows
			style={{left: 1000, right: 90, top: 180}}
			fontSize={30}
			gap={18}
			items={[
				{at: he1.from, color: C.red, title: '①', children: <>两条链<Hl>反向平行</Hl>，盘旋成双螺旋</>},
				{at: he2.from, color: C.orange, title: '②', children: <>脱氧核糖和磷酸<Hl c={C.orange}>交替连接</Hl>，排在<Hl c={C.orange}>外侧</Hl>，构成基本骨架</>},
				{at: he3.from, color: C.green, title: '③', children: <>碱基排在<Hl c={C.green}>内侧</Hl>，通过<Hl c={C.green}>氢键</Hl>形成碱基对</>},
			]}
		/>
		<Tip at={he4.from} top={740} label="易错" fontSize={31}>
			基本骨架在外侧、<Hl>不含碱基</Hl>；同一条链上相邻碱基通过“<Hl>脱氧核糖—磷酸—脱氧核糖</Hl>”相连，不是氢键
		</Tip>
		<Narration t={t} />
	</Scene>
);
