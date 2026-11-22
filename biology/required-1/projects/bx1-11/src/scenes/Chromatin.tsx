import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chromatin;
const {ch1, ch2, ch3} = t.cue;

export const Chromatin: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">染色质与染色体</Header>
		<svg width={1740} height={400} viewBox="0 0 1740 400" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={ch1.from}>
				<path d="M120,200 c40,-90 80,80 120,-10 s60,-100 100,-10 s70,90 110,0 s60,-80 90,0" fill="none" stroke={C.green} strokeWidth={8} strokeLinecap="round" />
				<text x={330} y={330} fontSize={34} fontWeight={900} fill={C.green} textAnchor="middle">染色质（细丝状）</text>
				<text x={330} y={375} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">易被碱性染料染成深色</text>
			</G>
			<G at={ch2.from}>
				<Arrow x1={640} y1={150} x2={1040} y2={150} trim={[0, 0]} color={C.red} marker="arrow-red" />
				<text x={840} y={125} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">分裂时：高度螺旋化、缩短变粗</text>
				<Arrow x1={1040} y1={250} x2={640} y2={250} trim={[0, 0]} color={C.orange} marker="arrow-orange" />
				<text x={840} y={300} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">分裂结束：解螺旋</text>
				<rect x={1230} y={60} width={56} height={240} rx={28} fill={C.green} />
				<rect x={1300} y={60} width={56} height={240} rx={28} fill={C.green} />
				<rect x={1222} y={165} width={142} height={26} rx={13} fill={C.greenSoft} />
				<text x={1293} y={350} fontSize={34} fontWeight={900} fill={C.green} textAnchor="middle">染色体（圆柱状或杆状）</text>
			</G>
		</svg>
		<Def at={ch3.from} style={{left: 90, right: 90, top: 590}} fontSize={34} color={C.green} soft={C.greenSoft}>
			<Hl c={C.green}>同一种物质</Hl>在细胞不同时期的两种存在状态，成分都是 DNA 和蛋白质
		</Def>
		<Tip at={ch3.from + 40} top={720} label="解题方法">
			染色质 ⇄ 染色体：只是<Hl>形态</Hl>不同，物质相同
		</Tip>
		<Narration t={t} />
	</Scene>
);
