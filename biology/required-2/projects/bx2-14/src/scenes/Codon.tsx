import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.codon;
const {cd1, cd2, cd3, cd4, cd5} = t.cue;
const MRNA = 'AUGGCUUACUAA';
const W = 52;
const COLORS = [C.green, C.orange, C.brown, C.red];
const NAMES = ['起始 · 甲硫氨酸', '丙氨酸', '酪氨酸', '终止'];

export const Codon: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">密码子</Header>
		<svg width={1740} height={220} viewBox="0 0 1740 220" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={cd1.from}>
				<text x={0} y={76} fontSize={28} fontWeight={900} fill={C.red}>5′</text>
				{MRNA.split('').map((b, i) => (
					<g key={i}>
						<rect x={40 + i * W + 3} y={40} width={W - 6} height={56} rx={8} fill="#fff" stroke={COLORS[Math.floor(i / 3)]} strokeWidth={4} />
						<text x={40 + i * W + W / 2} y={80} fontSize={32} fontWeight={900} fill={COLORS[Math.floor(i / 3)]} textAnchor="middle">{b}</text>
					</g>
				))}
				<text x={40 + MRNA.length * W + 10} y={76} fontSize={28} fontWeight={900} fill={C.red}>3′　mRNA</text>
			</G>
			<G at={cd2.from}>
				{NAMES.map((n, k) => (
					<g key={n}>
						<path d={`M${40 + k * 3 * W + 6},110 v12 h${3 * W - 12} v-12`} fill="none" stroke={COLORS[k]} strokeWidth={4} />
						<text x={40 + k * 3 * W + 1.5 * W} y={160} fontSize={24} fontWeight={800} fill={COLORS[k]} textAnchor="middle">{n}</text>
					</g>
				))}
			</G>
		</svg>
		<Rows
			style={{left: 90, right: 90, top: 400}}
			fontSize={30}
			gap={14}
			items={[
				{at: cd2.from, color: C.green, title: '64 种', children: <>起始密码子 <Hl c={C.green}>AUG</Hl>（也编码甲硫氨酸）；终止密码子 <Hl>UAA、UAG、UGA</Hl></>},
				{at: cd3.from, color: C.orange, title: '简并', children: <>一种氨基酸可对应<Hl c={C.orange}>一种或几种</Hl>密码子，增强容错性</>},
				{at: cd4.from, color: C.green, title: '通用', children: <>几乎所有生物共用一套密码子 → 生物有<Hl c={C.green}>共同起源</Hl></>},
			]}
		/>
		<Tip at={cd5.from} top={710} label="易错" fontSize={33}>
			密码子在 <Hl>mRNA</Hl> 上；终止密码子<Hl>一般不决定氨基酸</Hl>（特殊情况下 UGA 编码硒代半胱氨酸）
		</Tip>
		<Narration t={t} />
	</Scene>
);
