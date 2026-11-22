import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.graphs;
const {gr1, gr3, gr4, gr5} = t.cue;

const BH = 70; // px per N
const Bars: React.FC<{x: number; vals: number[]; label: string}> = ({x, vals, label}) => (
	<g>
		{vals.map((v, i) => (
			<g key={i}>
				<rect x={x + i * 56} y={330 - v * BH} width={46} height={v * BH} fill={[C.red, C.orange, C.brown][i]} rx={4} />
				{v === 0 && <text x={x + i * 56 + 23} y={320} fontSize={24} fontWeight={900} fill={C.brown} textAnchor="middle">0</text>}
			</g>
		))}
		<text x={x + 78} y={370} fontSize={24} fontWeight={800} fill={C.text} textAnchor="middle">{label}</text>
	</g>
);

// Line chart: x 0–1 over one cycle; DNA ramps (S phase 0.15–0.4), chromosomes jump at anaphase 0.8.
const LX = 1000;
const LW = 700;
const ly = (n: number) => 330 - n * BH;
const px = (f: number) => LX + f * LW;

export const Graphs: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">柱形图和曲线图的识别</Header>
		<svg width={1740} height={420} viewBox="0 0 1740 420" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={gr1.from}>
				<line x1={20} y1={330} x2={900} y2={330} stroke={C.text} strokeWidth={4} />
				<Bars x={40} vals={[2, 2, 0]} label="间期（复制前）" />
				<Bars x={260} vals={[2, 4, 4]} label="前期、中期" />
				<Bars x={480} vals={[4, 4, 0]} label="后期" />
				<Bars x={700} vals={[2, 2, 0]} label="末期结束" />
				{[['染色体', C.red], ['核DNA', C.orange], ['染色单体', C.brown]].map(([s, c], i) => (
					<g key={s}>
						<rect x={40 + i * 170} y={6} width={26} height={22} fill={c} />
						<text x={74 + i * 170} y={26} fontSize={24} fontWeight={800} fill={C.text}>{s}</text>
					</g>
				))}
			</G>
			<G at={gr4.from}>
				<line x1={LX} y1={330} x2={LX + LW + 20} y2={330} stroke={C.text} strokeWidth={4} />
				<line x1={LX} y1={330} x2={LX} y2={30} stroke={C.text} strokeWidth={4} />
				<polyline points={`${px(0)},${ly(2)} ${px(0.15)},${ly(2)} ${px(0.4)},${ly(4)} ${px(0.92)},${ly(4)} ${px(0.92)},${ly(2)} ${px(1)},${ly(2)}`} fill="none" stroke={C.orange} strokeWidth={7} />
				<polyline points={`${px(0)},${ly(2) + 8} ${px(0.8)},${ly(2) + 8} ${px(0.8)},${ly(4) + 8} ${px(0.92)},${ly(4) + 8} ${px(0.92)},${ly(2) + 8} ${px(1)},${ly(2) + 8}`} fill="none" stroke={C.red} strokeWidth={7} />
				<text x={px(0.42)} y={ly(4) - 14} fontSize={24} fontWeight={900} fill={C.orange} textAnchor="start">核DNA：斜线上升</text>
				<text x={px(0.8) - 10} y={ly(3) + 30} fontSize={24} fontWeight={900} fill={C.red} textAnchor="end">染色体：垂直上升</text>
				<text x={LX - 10} y={ly(2) + 8} fontSize={22} fontWeight={800} fill={C.muted} textAnchor="end">2N</text>
				<text x={LX - 10} y={ly(4) + 8} fontSize={22} fontWeight={800} fill={C.muted} textAnchor="end">4N</text>
				<text x={px(0.27)} y={365} fontSize={22} fontWeight={800} fill={C.muted} textAnchor="middle">间期</text>
				<text x={px(0.86)} y={365} fontSize={22} fontWeight={800} fill={C.muted} textAnchor="middle">后期</text>
			</G>
		</svg>
		<Tip at={gr3.from} top={610} label="规律">
			有染色单体：染色体 : 核 DNA : 染色单体 ＝ <Hl>1 : 2 : 2</Hl>；无染色单体：染色体 ＝ 核 DNA
		</Tip>
		<Tip at={gr5.from} top={730} label="解题方法">
			能变成 <Hl>0</Hl> 的是染色单体；有<Hl c={C.orange}>斜线</Hl>的是核 DNA
		</Tip>
		<Narration t={t} />
	</Scene>
);
