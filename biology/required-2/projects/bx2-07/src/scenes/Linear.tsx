import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.linear;
const {li1, li2, li3, li4} = t.cue;
// Approximate relative positions of genes on the fruit-fly X chromosome (textbook figure).
// Order and relative positions follow textbook figure 2-11 (0 = one end, 1 = the other).
const GENES: [string, number][] = [['黄身', 0], ['白眼', 0.02], ['红宝石眼', 0.11], ['截翅', 0.29], ['朱红眼', 0.51], ['深红眼', 0.68], ['棒状眼', 0.91], ['短硬毛', 1]];
const X0 = 90;
const X1 = 1650;
const Y = 170;

export const Linear: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">基因在染色体上呈线性排列</Header>
		<svg width={1740} height={340} viewBox="0 0 1740 340" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={li1.from}>
				<rect x={X0} y={Y - 34} width={X1 - X0} height={68} rx={34} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
				<text x={X0 - 20} y={Y + 12} fontSize={34} fontWeight={900} fill={C.orange} textAnchor="end">X</text>
			</G>
			{GENES.map(([g, pos], i) => {
				const x = X0 + 60 + pos * (X1 - X0 - 120);
				const up = i % 2 === 0;
				return (
					<G key={g} at={li2.from + i * 12}>
						<rect x={x - 7} y={Y - 34} width={14} height={68} fill={g === '白眼' ? C.red : C.brown} />
						<line x1={x} y1={up ? Y - 40 : Y + 40} x2={x} y2={up ? Y - 80 : Y + 80} stroke={C.muted} strokeWidth={3} />
						<text x={x} y={up ? Y - 92 : Y + 112} fontSize={30} fontWeight={900} fill={g === '白眼' ? C.red : C.text} textAnchor="middle">
							{g}
						</text>
					</G>
				);
			})}
		</svg>
		<Rows
			style={{left: 90, right: 90, top: 500}}
			fontSize={31}
			gap={16}
			items={[
				{at: li1.from, color: C.red, title: '线性排列', children: <>摩尔根和学生测定基因位置，绘出基因在染色体上的<Hl>相对位置图</Hl></>},
				{at: li3.from, color: C.orange, title: '荧光标记', children: <>现代技术可直接显示基因在染色体上的位置</>},
			]}
		/>
		<Tip at={li4.from} top={720} label="易错" fontSize={33}>
			一条染色体上有<Hl>许多基因</Hl>；同一条染色体上的基因是<Hl>非等位基因</Hl>，不能自由组合
		</Tip>
		<Narration t={t} />
	</Scene>
);
