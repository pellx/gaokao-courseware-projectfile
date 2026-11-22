import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.represent;
const {rp1, rp2, rp3} = t.cue;

const Y = 120;
// Segment chart: a–b interphase, b–c division, c–d interphase, d–e division.
const PTS: [string, number][] = [['a', 40], ['b', 360], ['c', 440], ['d', 760], ['e', 840]];
const arc = (r: number, a1: number, a2: number, cx: number, cy: number) => {
	const p = (a: number) => [cx + r * Math.cos((a - 90) * (Math.PI / 180)), cy + r * Math.sin((a - 90) * (Math.PI / 180))];
	const [x1, y1] = p(a1);
	const [x2, y2] = p(a2);
	return `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${x2},${y2} z`;
};

export const Represent: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">细胞周期的表示方法</Header>
		<svg width={1740} height={500} viewBox="0 0 1500 430" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={rp1.from}>
				<text x={440} y={30} fontSize={32} fontWeight={900} fill={C.text} textAnchor="middle">线段图</text>
				{PTS.slice(0, -1).map(([, x], i) => (
					<rect key={i} x={x} y={Y - 14} width={PTS[i + 1][1] - x} height={28} fill={i % 2 ? C.red : C.orangeSoft} stroke={C.orange} strokeWidth={2} />
				))}
				{PTS.map(([s, x]) => (
					<text key={s} x={x} y={Y + 60} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">{s}</text>
				))}
				<text x={200} y={Y - 30} fontSize={26} fontWeight={800} fill={C.orange} textAnchor="middle">间期</text>
				<text x={400} y={Y - 30} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">分裂期</text>
				<path d={`M40,${Y + 90} v14 H440 v-14`} fill="none" stroke={C.green} strokeWidth={4} />
				<text x={240} y={Y + 140} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">a→c 是一个细胞周期</text>
				<text x={640} y={Y + 140} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">b→d 不是</text>
			</G>
			<G at={rp2.from}>
				<text x={1200} y={30} fontSize={32} fontWeight={900} fill={C.text} textAnchor="middle">扇形图</text>
				<path d={arc(150, 0, 320, 1200, 220)} fill={C.orangeSoft} stroke={C.orange} strokeWidth={3} />
				<path d={arc(150, 320, 360, 1200, 220)} fill={C.red} />
				<text x={1150} y={260} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">间期</text>
				<text x={1060} y={70} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">分裂期</text>
				<text x={1380} y={230} fontSize={26} fontWeight={800} fill={C.muted}>顺时针</text>
			</G>
		</svg>
		<Tip at={rp3.from} top={690} label="解题方法">
			一个细胞周期：<Hl>先间期、后分裂期</Hl>，两段首尾相接
		</Tip>
		<Narration t={t} />
	</Scene>
);
