import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {G, Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.device;
const {dv1, dv2, dv3, dv4, dv5} = t.cue;

// Fermentation bottle: body, neck, liquid level, and the three ports.
const B = {l: 140, r: 480, top: 220, bottom: 520, neckL: 250, neckR: 370, neckTop: 130, liquid: 310};
const IN_X = 285;
const OUT_X = 335;

const Clamp: React.FC<{x: number; y: number; open: boolean}> = ({x, y, open}) => (
	<rect x={x - 22} y={y - 9} width={44} height={18} rx={5} fill={open ? '#fff' : C.text} stroke={C.text} strokeWidth={4} />
);

export const Device: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">果酒与果醋发酵装置</Header>
		<svg width={820} height={640} viewBox="0 -40 820 640" style={{position: 'absolute', left: 60, top: 140}}>
			<Defs />
			<G at={dv1.from}>
				<path
					d={`M${B.neckL},${B.neckTop} V${B.top} Q${B.l},${B.top} ${B.l},${B.top + 70} V${B.bottom - 30} Q${B.l},${B.bottom} ${B.l + 30},${B.bottom} H${B.r - 30} Q${B.r},${B.bottom} ${B.r},${B.bottom - 30} V${B.top + 70} Q${B.r},${B.top} ${B.neckR},${B.top} V${B.neckTop}`}
					fill="#fff"
					stroke={C.text}
					strokeWidth={5}
				/>
				<path
					d={`M${B.l + 2},${B.liquid} H${B.r - 2} V${B.bottom - 30} Q${B.r - 2},${B.bottom - 2} ${B.r - 30},${B.bottom - 2} H${B.l + 30} Q${B.l + 2},${B.bottom - 2} ${B.l + 2},${B.bottom - 30} z`}
					fill={C.orangeSoft}
				/>
				<rect x={B.neckL - 10} y={B.neckTop - 30} width={B.neckR - B.neckL + 20} height={36} rx={6} fill={C.brown} />
				<text x={410} y={B.liquid + 120} fontSize={28} fontWeight={800} fill={C.brown} textAnchor="middle">发酵液</text>
			</G>
			<G at={dv2.from}>
				<polyline points={`${IN_X},${B.bottom - 40} ${IN_X},40 ${IN_X - 170},40`} fill="none" stroke={C.red} strokeWidth={8} />
				<Clamp x={IN_X - 40} y={40} open={false} />
				<text x={IN_X - 175} y={22} fontSize={30} fontWeight={900} fill={C.red}>充气口</text>
				<text x={30} y={90} fontSize={24} fontWeight={800} fill={C.muted}>管口伸到液面下</text>
			</G>
			<G at={dv3.from}>
				<path d={`M${OUT_X},${B.top + 40} V60 Q${OUT_X},20 ${OUT_X + 50},20 H560 Q640,20 640,90 Q640,170 700,170`} fill="none" stroke={C.orange} strokeWidth={8} />
				<text x={500} y={0} fontSize={30} fontWeight={900} fill={C.orange}>排气口</text>
				<text x={560} y={220} fontSize={24} fontWeight={800} fill={C.muted}>长而弯曲的胶管</text>
				<text x={560} y={252} fontSize={24} fontWeight={800} fill={C.muted}>防止杂菌污染</text>
				<text x={OUT_X + 14} y={B.top + 30} fontSize={22} fontWeight={800} fill={C.muted}>在液面上</text>
			</G>
			<G at={dv4.from}>
				<polyline points={`${B.r},${B.bottom - 50} ${B.r + 130},${B.bottom - 50}`} fill="none" stroke={C.green} strokeWidth={8} />
				<Clamp x={B.r + 70} y={B.bottom - 50} open={false} />
				<text x={B.r + 150} y={B.bottom - 40} fontSize={30} fontWeight={900} fill={C.green}>出料口</text>
				<text x={B.r + 150} y={B.bottom - 2} fontSize={24} fontWeight={800} fill={C.muted}>取样检测</text>
			</G>
		</svg>
		<div style={{position: 'absolute', left: 930, right: 90, top: 200}}>
			<Table
				head={['比较项目', '果酒', '果醋']}
				cols="1.1fr 1fr 1.3fr"
				at={dv1.from}
				fontSize={29}
				rowHeight={66}
				rows={[
					{cells: ['菌种', '酵母菌', '醋酸菌'], at: dv1.from},
					{cells: ['温度', '18～30 ℃', '30～35 ℃'], at: dv1.from + 12},
					{cells: ['充气口', <Hl>关闭</Hl>, <Hl c={C.green}>通入无菌空气</Hl>], at: dv2.from},
					{cells: ['排气口', '打开（排 CO2）', '打开'], at: dv3.from},
					{cells: ['出料口', '取样', '取样'], at: dv4.from},
				]}
			/>
		</div>
		<Tip at={dv5.from} top={770} label="解题方法">
			先判断是果酒还是果醋：果酒<Hl>关充气口</Hl>，果醋<Hl c={C.green}>开充气口</Hl>；排气口两种发酵都要打开
		</Tip>
		<Narration t={t} />
	</Scene>
);
