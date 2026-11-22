import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fat;
const {fa1, fa2, fa3, fa4} = t.cue;

// Glycerol (a column of three -OH carbons) with three fatty-acid zigzag tails.
const zig = (x: number, y: number, n: number, bend?: number) => {
	let d = `M${x},${y}`;
	for (let i = 1; i <= n; i++) d += ` L${x + i * 34},${y + (i % 2 ? -14 : 14) + (bend && i > bend ? (i - bend) * -5 : 0)}`;
	return d;
};

export const Fat: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">脂肪的组成</Header>
		<svg width={900} height={300} viewBox="0 0 900 300" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={fa1.from}>
				<rect x={10} y={20} width={130} height={260} rx={20} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
				<text x={75} y={160} fontSize={34} fontWeight={900} fill={C.orange} textAnchor="middle">甘油</text>
				{[60, 150, 240].map((y, i) => (
					<g key={y}>
						<line x1={140} y1={y} x2={200} y2={y} stroke={C.muted} strokeWidth={5} />
						<path d={zig(200, y, 14, i === 1 ? 6 : undefined)} fill="none" stroke={C.brown} strokeWidth={6} strokeLinejoin="round" />
					</g>
				))}
				<text x={440} y={296} fontSize={30} fontWeight={900} fill={C.brown} textAnchor="middle">3 分子脂肪酸</text>
			</G>
		</svg>
		<Cards
			top={160}
			left={1060}
			height={300}
			fontSize={32}
			items={[{title: '三酰甘油（甘油三酯）', color: C.orange, at: fa1.from + 30, body: <><Hl c={C.orange}>1 分子甘油 ＋ 3 分子脂肪酸</Hl> 反应形成的酯</>}]}
		/>
		<Cards
			top={500}
			height={170}
			fontSize={32}
			items={[
				{title: '植物脂肪', color: C.green, at: fa2.from, body: <>多含<Hl c={C.green}>不饱和脂肪酸</Hl>，熔点低，室温<Hl c={C.green}>液态</Hl></>},
				{title: '大多数动物脂肪', color: C.brown, at: fa3.from, body: <>多含<Hl c={C.brown}>饱和脂肪酸</Hl>，熔点高，室温<Hl c={C.brown}>固态</Hl></>},
			]}
		/>
		<Tip at={fa4.from} top={710} label="易错">
			脂肪只含 <Hl>C、H、O</Hl>，不含 N、P；含 N、P 的是<Hl c={C.orange}>磷脂</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
