import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.gene;
const {gn2, gn3, gn4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// [label, x, y, colour]
const BOX: [string, number, number, string][] = [
	['基因表达调控', 560, 70, C.red],
	['激素调节', 200, 330, C.orange],
	['环境因素调节', 920, 330, C.green],
];

export const Gene: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点十">激素调节与基因表达</Header>
		<svg width={1120} height={440} viewBox="0 0 1120 440" style={{position: 'absolute', left: 400, top: 175}}>
			<Defs />
			{BOX.map(([label, x, y, color], i) => (
				<G key={label} at={at(gn2.from, gn2.to, 0.2 + i * 0.25)}>
					<rect x={x - 170} y={y - 50} width={340} height={100} rx={24} fill="#fff" stroke={color} strokeWidth={6} />
					<text x={x} y={y + 14} fontSize={38} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
				</G>
			))}
			<G at={gn3.from}>
				<Arrow x1={200} y1={280} x2={500} y2={120} offset={-14} color={C.orange} marker="arrow-orange" />
				<text x={250} y={170} fontSize={26} fontWeight={800} fill={C.orange} textAnchor="end">影响基因表达</text>
			</G>
			<G at={at(gn3.from, gn3.to, 0.45)}>
				<Arrow x1={500} y1={120} x2={200} y2={280} offset={-14} color={C.red} marker="arrow-red" />
				<text x={400} y={238} fontSize={26} fontWeight={800} fill={C.red}>激素的产生和分布</text>
			</G>
			<G at={at(gn3.from, gn3.to, 0.75)}>
				<Arrow x1={920} y1={280} x2={620} y2={120} color={C.green} marker="arrow-green" />
				<Arrow x1={750} y1={330} x2={370} y2={330} color={C.green} marker="arrow-green" />
				<text x={560} y={380} fontSize={26} fontWeight={800} fill={C.green} textAnchor="middle">也受环境因素影响</text>
			</G>
		</svg>
		<Appear at={gn4.from} style={{position: 'absolute', left: 90, right: 90, top: 660}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29, padding: '12px 24px'}}>
				激素<Hl>不直接参与细胞代谢</Hl>，只传递信息；根本上是<Hl>基因组在一定时间和空间上程序性表达</Hl>的结果
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
