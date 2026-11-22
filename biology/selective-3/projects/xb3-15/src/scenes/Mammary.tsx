import React from 'react';
import {Appear, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mammary;
const {ma1, ma2, ma3, ma4, ma5} = t.cue;

const Y = 140;

export const Mammary: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">乳腺生物反应器</Header>
		<svg width={1740} height={280} viewBox="0 0 1740 280" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={ma2.from}>
				<rect x={20} y={Y - 40} width={200} height={80} rx={12} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
				<text x={120} y={Y + 10} fontSize={26} fontWeight={900} fill={C.orange} textAnchor="middle">乳腺特异启动子</text>
				<rect x={220} y={Y - 40} width={220} height={80} rx={12} fill={C.redSoft} stroke={C.red} strokeWidth={5} />
				<text x={330} y={Y + 10} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">药用蛋白基因</text>
				<text x={230} y={Y + 90} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">重组（+ 终止子、标记基因等）</text>
			</G>
			<G at={ma3.from}>
				<Arrow x1={460} y1={Y} x2={620} y2={Y} color={C.orange} marker="arrow-orange" />
				<text x={540} y={Y - 20} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">显微注射</text>
				<circle cx={720} cy={Y} r={80} fill="#fdeedd" stroke={C.red} strokeWidth={6} />
				<text x={720} y={Y + 10} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">受精卵</text>
			</G>
			<G at={ma4.from}>
				<Arrow x1={820} y1={Y} x2={980} y2={Y} />
				<text x={900} y={Y - 20} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">发育</text>
				<Box x={1150} y={Y} w={320} h={110} label="转基因雌性动物" sub="进入泌乳期" color={C.brown} fontSize={30} />
				<Arrow x1={1320} y1={Y} x2={1480} y2={Y} color={C.green} marker="arrow-green" />
				<Box x={1600} y={Y} w={220} h={110} label="乳汁" sub="提取药物" color={C.green} fontSize={34} />
			</G>
		</svg>
		<Appear at={ma1.from} style={{position: 'absolute', left: 90, right: 90, top: 470, fontSize: 31, fontWeight: 800, lineHeight: 1.7}}>
			三个关键：<Hl>乳腺特异性启动子</Hl> · 受体细胞是<Hl>受精卵</Hl> · <Hl>雌性泌乳期</Hl>从乳汁中提取
		</Appear>
		<Tip at={ma5.from} top={640} label="易错">
			目的基因存在于转基因动物的<Hl>所有体细胞</Hl>中，但只在<Hl>乳腺细胞</Hl>中表达（乳腺特异性启动子）
		</Tip>
		<Narration t={t} />
	</Scene>
);
