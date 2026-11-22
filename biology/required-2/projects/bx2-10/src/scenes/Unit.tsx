import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {BASE_COLOR, Base, Phos, Sugar} from './dnadraw';

const t = T.unit;
const {un1, un2, un3, un4, un5} = t.cue;
const CHAIN = ['A', 'G', 'T'];

export const Unit: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">脱氧核苷酸的组成与连接</Header>
		<svg width={860} height={560} viewBox="0 0 860 560" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={un1.from}>
				<line x1={90} y1={110} x2={150} y2={150} stroke={C.muted} strokeWidth={4} />
				<line x1={195} y1={170} x2={250} y2={170} stroke={C.muted} strokeWidth={4} />
				<Phos x={80} y={100} r={30} />
				<Sugar x={170} y={172} r={36} />
				<Base x={310} y={170} label="碱基" w={120} />
				<text x={80} y={50} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">磷酸</text>
				<text x={170} y={250} fontSize={24} fontWeight={800} fill={C.brown} textAnchor="middle">脱氧核糖</text>
			</G>
			<G at={un2.from}>
				<text x={112} y={192} fontSize={22} fontWeight={800} fill={C.muted}>5′</text>
				<text x={206} y={150} fontSize={22} fontWeight={800} fill={C.muted}>1′</text>
				<text x={186} y={225} fontSize={22} fontWeight={800} fill={C.muted}>3′</text>
				<text x={40} y={320} fontSize={26} fontWeight={800} fill={C.text}>碱基：A、T、G、C → 4 种脱氧核苷酸</text>
			</G>
			<G at={un3.from}>
				{CHAIN.map((b, i) => {
					const y = 40 + i * 165;
					return (
						<g key={b}>
							<line x1={600} y1={y + 20} x2={630} y2={y + 55} stroke={C.muted} strokeWidth={4} />
							<line x1={665} y1={y + 70} x2={700} y2={y + 70} stroke={C.muted} strokeWidth={4} />
							{i < CHAIN.length - 1 && <line x1={645} y1={y + 100} x2={600} y2={y + 145} stroke={C.red} strokeWidth={5} />}
							<Phos x={590} y={y + 10} />
							<Sugar x={645} y={y + 72} />
							<Base x={760} y={y + 70} label={b} w={90} color={BASE_COLOR[b]} />
						</g>
					);
				})}
			</G>
			<G at={un4.from}>
				<text x={555} y={30} fontSize={28} fontWeight={900} fill={C.red} textAnchor="end">5′ 端</text>
				<text x={610} y={438} fontSize={28} fontWeight={900} fill={C.red} textAnchor="end">3′ 端</text>
				<text x={555} y={480} fontSize={22} fontWeight={700} fill={C.muted} textAnchor="end">（游离的 —OH）</text>
			</G>
		</svg>
		<Rows
			style={{left: 1000, right: 90, top: 180}}
			fontSize={29}
			gap={16}
			items={[
				{at: un1.from, color: C.red, title: '组成', children: <>磷酸 ＋ 脱氧核糖 ＋ 含氮碱基</>},
				{at: un2.from, color: C.orange, title: '连接位置', children: <>碱基连 1′ 碳，磷酸连 5′ 碳</>},
				{at: un3.from, color: C.orange, title: '成链', children: <>前一个的<Hl c={C.orange}>脱氧核糖</Hl>连后一个的<Hl c={C.orange}>磷酸</Hl></>},
				{at: un4.from, color: C.red, title: '方向', children: <>游离磷酸一端为 <Hl>5′ 端</Hl>，另一端为 <Hl>3′ 端</Hl></>},
			]}
		/>
		<Tip at={un5.from} top={740} label="易错" fontSize={32}>
			链中大多数脱氧核糖连两个磷酸，但 <Hl>3′ 端</Hl>的脱氧核糖<Hl>只连一个</Hl>磷酸
		</Tip>
		<Narration t={t} />
	</Scene>
);
