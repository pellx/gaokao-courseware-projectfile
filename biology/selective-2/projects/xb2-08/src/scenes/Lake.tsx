import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lake;
const {lk1, lk2, lk3, lk4} = t.cue;

// Lindeman's Cedar Bog Lake, J/(cm²·a).
const LEVELS: [string, string, string, string[]][] = [
	['生产者', '464.6', C.green, ['呼吸 96.3', '分解者 12.5', '未利用 293']],
	['植食性动物', '62.8', C.orange, ['呼吸 18.8', '分解者 2.1', '未利用 29.3']],
	['肉食性动物', '12.6', C.red, ['呼吸 7.5', '分解者 微量', '未利用 5.0']],
];
const X = (i: number) => 230 + i * 620;

export const Lake: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">赛达伯格湖的能量流动</Header>
		<Appear at={lk1.from} style={{position: 'absolute', left: 90, top: 165, fontSize: 28, fontWeight: 700, color: C.muted}}>
			林德曼的定量研究　单位：J/(cm<sup style={{fontSize: '0.6em'}}>2</sup>·a)
		</Appear>
		<svg width={1740} height={420} viewBox="0 0 1740 420" style={{position: 'absolute', left: 90, top: 225}}>
			<Defs />
			{LEVELS.map(([name, v, color, out], i) => (
				<G key={name} at={lk2.from + i * 20}>
					<Box x={X(i)} y={70} w={300} h={110} label={name} sub={v} color={color} fontSize={34} />
					{out.map((o, j) => (
						<text key={o} x={X(i)} y={170 + j * 38} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="middle">{o}</text>
					))}
					{i > 0 && <Arrow x1={X(i - 1) + 155} y1={70} x2={X(i) - 155} y2={70} color={C.muted} />}
				</G>
			))}
			<G at={lk3.from}>
				<text x={(X(0) + X(1)) / 2} y={40} fontSize={30} fontWeight={900} fill={C.green} textAnchor="middle">≈ 13.5%</text>
				<text x={(X(1) + X(2)) / 2} y={40} fontSize={30} fontWeight={900} fill={C.green} textAnchor="middle">≈ 20%</text>
				<text x={870} y={330} fontSize={30} fontWeight={800} fill={C.text} textAnchor="middle">62.8 ÷ 464.6 ≈ 13.5%　　12.6 ÷ 62.8 ≈ 20%</text>
			</G>
		</svg>
		<Appear at={lk4.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 31}}>
				传递效率 = <Hl>下一营养级同化量 ÷ 上一营养级同化量</Hl>；分子分母都用<Hl>同化量</Hl>，不用摄入量
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
