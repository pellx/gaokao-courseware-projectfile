import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.idea;
const {id1, id2, id3, id4, id5, id6} = t.cue;

const Y1 = 90;
const Y2 = 330;
const X = [185, 625, 1065, 1505];
const W = 360;

export const Idea: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">蛋白质工程的基本思路</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 180}}>
			<Defs />
			<G at={id1.from}>
				<Box x={X[0]} y={Y1} w={W} h={110} label="预期的蛋白质功能" color={C.red} fill={C.redSoft} fontSize={30} />
			</G>
			<G at={id2.from}>
				<Arrow x1={X[0] + W / 2} y1={Y1} x2={X[1] - W / 2} y2={Y1} color={C.red} marker="arrow-red" />
				<Box x={X[1]} y={Y1} w={W} h={110} label="设计预期的蛋白质结构" color={C.orange} fontSize={30} />
			</G>
			<G at={id3.from}>
				<Arrow x1={X[1] + W / 2} y1={Y1} x2={X[2] - W / 2} y2={Y1} color={C.red} marker="arrow-red" />
				<Box x={X[2]} y={Y1} w={W} h={110} label="推测应有的氨基酸序列" color={C.orange} fontSize={30} />
			</G>
			<G at={id4.from}>
				<Arrow x1={X[2] + W / 2} y1={Y1} x2={X[3] - W / 2} y2={Y1} color={C.red} marker="arrow-red" />
				<Box x={X[3]} y={Y1} w={W} h={110} label="找到对应的脱氧核苷酸序列" sub="（基因）" color={C.red} fontSize={28} />
			</G>
			<G at={id5.from}>
				<Arrow x1={X[3]} y1={Y1 + 60} x2={X[3]} y2={Y2 - 60} color={C.green} marker="arrow-green" />
				<text x={X[3] + 20} y={(Y1 + Y2) / 2 + 10} fontSize={26} fontWeight={900} fill={C.green}>基因工程</text>
				<Box x={X[3]} y={Y2} w={W} h={110} label="所需要的蛋白质" color={C.green} fill={C.greenSoft} fontSize={30} />
			</G>
			<G at={id6.from}>
				<line x1={X[0] - 150} y1={Y2 + 110} x2={X[3] - 170} y2={Y2 + 110} stroke={C.muted} strokeWidth={5} strokeDasharray="12 8" />
				<text x={(X[0] + X[3]) / 2 - 100} y={Y2 + 90} fontSize={28} fontWeight={900} fill={C.muted} textAnchor="middle">中心法则方向：DNA → mRNA → 蛋白质 → 功能（与上面相反）</text>
			</G>
		</svg>
		<Tip at={id6.from} top={720} label="易错">
			思路与中心法则方向<Hl>相反</Hl>；因为密码子的简并，推出的脱氧核苷酸序列<Hl c={C.orange}>不是唯一的</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
