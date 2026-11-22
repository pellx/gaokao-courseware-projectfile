import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Duplex} from '../components/dna';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ends;
const {ed1, ed2, ed3, ed4} = t.cue;

export const Ends: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">黏性末端和平末端</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 180}}>
			<G at={ed1.from}>
				<text x={0} y={36} fontSize={32} fontWeight={900} fill={C.red}>黏性末端（EcoRI）</text>
				<text x={0} y={76} fontSize={24} fontWeight={800} fill={C.muted}>在中心轴线两侧切开</text>
				<g transform="translate(400 0)">
					<Duplex x={0} y={0} top="CG" bottom="GCTTAA" />
					<Duplex x={420} y={0} top="AATTCG" bottom="    GC" />
				</g>
				<rect x={400 + 92} y={66} width={184} height={56} rx={10} fill="none" stroke={C.red} strokeWidth={4} strokeDasharray="8 6" />
				<rect x={400 + 420} y={-2} width={184} height={56} rx={10} fill="none" stroke={C.red} strokeWidth={4} strokeDasharray="8 6" />
				<text x={1160} y={60} fontSize={26} fontWeight={900} fill={C.red}>露出的单链能互补配对</text>
			</G>
			<G at={ed2.from}>
				<text x={0} y={276} fontSize={32} fontWeight={900} fill={C.green}>平末端（SmaI）</text>
				<text x={0} y={316} fontSize={24} fontWeight={800} fill={C.muted}>在中心轴线处切开</text>
				<g transform="translate(400 240)">
					<Duplex x={0} y={0} top="CCC" bottom="GGG" />
					<Duplex x={420} y={0} top="GGG" bottom="CCC" />
				</g>
				<text x={1160} y={300} fontSize={26} fontWeight={900} fill={C.green}>两端齐平</text>
			</G>
			<G at={ed3.from}>
				<text x={0} y={440} fontSize={28} fontWeight={800} fill={C.orange}>识别序列多为回文序列：两条链按 5′→3′ 方向读，碱基顺序相同（GAATTC 的互补链按 5′→3′ 读也是 GAATTC）</text>
			</G>
		</svg>
		<Tip at={ed4.from} top={700} label="解题方法">
			<Hl>同一种限制酶</Hl>切出的黏性末端一定能连接；不同的限制酶，只要<Hl>末端碱基互补</Hl>也能连接
		</Tip>
		<Narration t={t} />
	</Scene>
);
