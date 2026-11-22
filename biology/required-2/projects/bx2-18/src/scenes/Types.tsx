import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.types;
const {ty1, ty2, ty3, ty4, ty5} = t.cue;
const W = 64;
const X0 = 420;

// One chromosome drawn as a row of gene segments; `hl` indexes are highlighted.
const Seg: React.FC<{y: number; genes: string; hl?: number[]; color?: string; other?: number[]}> = ({y, genes, hl = [], color = C.red, other = []}) => (
	<g>
		{genes.split('').map((g, i) => {
			const isHl = hl.includes(i);
			const isOther = other.includes(i);
			const c = isOther ? C.green : isHl ? color : C.brown;
			return (
				<g key={i}>
					<rect x={X0 + i * W} y={y} width={W - 4} height={56} rx={10} fill={isHl || isOther ? '#fff' : C.orangeSoft} stroke={c} strokeWidth={4} />
					<text x={X0 + i * W + (W - 4) / 2} y={y + 39} fontSize={32} fontWeight={900} fill={c} textAnchor="middle">{g}</text>
				</g>
			);
		})}
	</g>
);

const ROWS = [
	{label: '正常', y: 10},
	{label: '缺失', y: 100},
	{label: '重复', y: 190},
	{label: '易位', y: 280},
	{label: '倒位', y: 370},
];

export const Types: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">染色体结构变异的四种类型</Header>
		<svg width={1740} height={450} viewBox="0 0 1740 450" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={ty1.from}>
				<text x={300} y={ROWS[0].y + 40} fontSize={32} fontWeight={900} fill={C.text} textAnchor="end">正常</text>
				<Seg y={ROWS[0].y} genes="ABCDEFG" />
				<text x={300} y={ROWS[1].y + 40} fontSize={32} fontWeight={900} fill={C.red} textAnchor="end">缺失</text>
				<Seg y={ROWS[1].y} genes="ABEFG" />
				<text x={X0 + 5 * W + 30} y={ROWS[1].y + 40} fontSize={28} fontWeight={800} fill={C.red}>少了 C、D</text>
			</G>
			<G at={ty2.from}>
				<text x={300} y={ROWS[2].y + 40} fontSize={32} fontWeight={900} fill={C.orange} textAnchor="end">重复</text>
				<Seg y={ROWS[2].y} genes="ABCDCDEFG" hl={[4, 5]} color={C.orange} />
				<text x={X0 + 9 * W + 30} y={ROWS[2].y + 40} fontSize={28} fontWeight={800} fill={C.orange}>多了 C、D</text>
			</G>
			<G at={ty3.from}>
				<text x={300} y={ROWS[3].y + 40} fontSize={32} fontWeight={900} fill={C.red} textAnchor="end">易位</text>
				<Seg y={ROWS[3].y} genes="ABCDEMN" other={[5, 6]} />
				<text x={X0 + 7 * W + 30} y={ROWS[3].y + 40} fontSize={28} fontWeight={800} fill={C.green}>M、N 来自非同源染色体</text>
			</G>
			<G at={ty4.from}>
				<text x={300} y={ROWS[4].y + 40} fontSize={32} fontWeight={900} fill={C.orange} textAnchor="end">倒位</text>
				<Seg y={ROWS[4].y} genes="ABEDCFG" hl={[2, 3, 4]} color={C.orange} />
				<text x={X0 + 7 * W + 30} y={ROWS[4].y + 40} fontSize={28} fontWeight={800} fill={C.orange}>C、D、E 顺序颠倒</text>
			</G>
		</svg>
		<Tip at={ty5.from} top={660} label="解题方法" fontSize={33}>
			对照基因顺序：<Hl>少了</Hl>→缺失，<Hl>多了</Hl>→重复，<Hl>反了</Hl>→倒位，<Hl>换成别的染色体上的基因</Hl>→易位
		</Tip>
		<Narration t={t} />
	</Scene>
);
