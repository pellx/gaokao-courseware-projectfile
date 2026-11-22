import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.trna;
const {tr1, tr2, tr3, tr4} = t.cue;

// Simplified cloverleaf tRNA: stem with amino-acid end on top, three loops, anticodon at the bottom.
const TRNA: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<path d={`M${x - 14},${y} V${y + 120}`} stroke={C.orange} strokeWidth={10} fill="none" />
		<path d={`M${x + 14},${y + 30} V${y + 120}`} stroke={C.orange} strokeWidth={10} fill="none" />
		<circle cx={x - 90} cy={y + 160} r={46} fill="none" stroke={C.orange} strokeWidth={10} />
		<circle cx={x + 90} cy={y + 160} r={46} fill="none" stroke={C.orange} strokeWidth={10} />
		<path d={`M${x - 40},${y + 140} H${x + 40} V${y + 230} H${x - 40} Z`} fill="none" stroke={C.orange} strokeWidth={10} />
		<ellipse cx={x} cy={y + 280} rx={60} ry={50} fill="none" stroke={C.orange} strokeWidth={10} />
		<circle cx={x - 14} cy={y - 26} r={24} fill={C.green} />
		<text x={x - 14} y={y - 17} fontSize={22} fontWeight={900} fill="#fff" textAnchor="middle">aa</text>
	</g>
);

export const Trna: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">tRNA 与反密码子</Header>
		<svg width={700} height={560} viewBox="0 0 700 560" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={tr1.from}>
				<TRNA x={300} y={60} />
				<text x={340} y={40} fontSize={26} fontWeight={800} fill={C.green}>携带氨基酸的部位</text>
				{['U', 'A', 'C'].map((b, i) => (
					<g key={i}>
						<rect x={238 + i * 42} y={372} width={38} height={44} rx={6} fill="#fff" stroke={C.red} strokeWidth={4} />
						<text x={257 + i * 42} y={404} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">{b}</text>
					</g>
				))}
				<text x={420} y={404} fontSize={26} fontWeight={900} fill={C.red}>反密码子</text>
			</G>
			<G at={tr2.from}>
				{['A', 'U', 'G'].map((b, i) => (
					<g key={i}>
						<line x1={257 + i * 42} y1={420} x2={257 + i * 42} y2={450} stroke={C.green} strokeWidth={3} strokeDasharray="5 4" />
						<rect x={238 + i * 42} y={452} width={38} height={44} rx={6} fill={C.redSoft} stroke={C.brown} strokeWidth={4} />
						<text x={257 + i * 42} y={484} fontSize={28} fontWeight={900} fill={C.brown} textAnchor="middle">{b}</text>
					</g>
				))}
				<rect x={60} y={452} width={560} height={44} rx={6} fill="none" stroke={C.brown} strokeWidth={3} strokeDasharray="8 6" />
				<text x={420} y={540} fontSize={26} fontWeight={900} fill={C.brown}>mRNA 上的密码子</text>
			</G>
		</svg>
		<Rows
			style={{left: 850, right: 90, top: 180}}
			fontSize={31}
			gap={18}
			items={[
				{at: tr1.from, color: C.orange, title: '结构', children: <>三叶草形，一端携带氨基酸，另一端有<Hl>反密码子</Hl></>},
				{at: tr2.from, color: C.red, title: '配对', children: <>反密码子与密码子<Hl>互补配对</Hl></>},
				{at: tr3.from, color: C.green, title: '专一', children: <>一种 tRNA 只转运<Hl c={C.green}>一种</Hl>氨基酸；一种氨基酸可由<Hl c={C.green}>一种或几种</Hl> tRNA 转运</>},
			]}
		/>
		<Tip at={tr4.from} top={735} label="易错" fontSize={33}>
			密码子在 <Hl>mRNA</Hl> 上，反密码子在 <Hl>tRNA</Hl> 上；tRNA 由许多核苷酸组成，不是只有 3 个碱基
		</Tip>
		<Narration t={t} />
	</Scene>
);
