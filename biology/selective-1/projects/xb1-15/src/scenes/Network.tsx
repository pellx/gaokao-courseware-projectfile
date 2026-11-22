import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.network;
const {nw1, nw2, nw3, nw4, nw5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// [name, signal molecule, x, y, colour]
const SYS: [string, string, number, number, string][] = [
	['神经系统', '神经递质', 450, 90, C.orange],
	['内分泌系统', '激素', 170, 440, C.orange],
	['免疫系统', '细胞因子', 730, 440, C.green],
];

export const Network: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">神经—内分泌—免疫的相互调节</Header>
		<svg width={900} height={560} viewBox="0 0 900 560" style={{position: 'absolute', left: 60, top: 170}}>
			<Defs />
			<G at={nw1.from}>
				{[[0, 1], [0, 2], [1, 2]].map(([a, b]) => (
					<React.Fragment key={`${a}${b}`}>
						<Arrow x1={SYS[a][2]} y1={SYS[a][3]} x2={SYS[b][2]} y2={SYS[b][3]} trim={a ? [140, 140] : [95, 95]} offset={12} color={C.brown} />
						<Arrow x1={SYS[b][2]} y1={SYS[b][3]} x2={SYS[a][2]} y2={SYS[a][3]} trim={a ? [140, 140] : [95, 95]} offset={12} color={C.brown} />
					</React.Fragment>
				))}
				{SYS.map(([name, , x, y, color]) => (
					<g key={name}>
						<rect x={x - 130} y={y - 45} width={260} height={90} rx={45} fill="#fff" stroke={color} strokeWidth={6} />
						<text x={x} y={y + 13} fontSize={36} fontWeight={900} fill={color} textAnchor="middle">{name}</text>
					</g>
				))}
			</G>
			{SYS.map(([name, signal, x, y, color], i) => (
				<G key={signal} at={at(nw2.from, nw2.to, 0.35 + i * 0.2)}>
					<text x={x} y={y + (i ? 90 : -60)} fontSize={30} fontWeight={900} fill={color} textAnchor="middle">
						{signal}
					</text>
				</G>
			))}
			<G at={nw3.from}>
				<text x={450} y={330} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">信号分子 + 受体</text>
			</G>
		</svg>
		<div style={{position: 'absolute', left: 1020, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 22}}>
			<Appear at={nw3.from}>
				<div style={{border: `4px solid ${C.red}`, borderRadius: 20, padding: '16px 24px', background: C.redSoft, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
					信号分子都要<Hl>直接与受体接触</Hl>；免疫细胞表面有神经递质、激素的受体
				</div>
			</Appear>
			<Appear at={nw4.from}>
				<div style={{border: `4px solid ${C.orange}`, borderRadius: 20, padding: '16px 24px', background: C.orangeSoft, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
					例：长期精神紧张、焦虑 → <Hl>免疫力下降</Hl>
				</div>
			</Appear>
		</div>
		<Appear at={nw5.from} style={{position: 'absolute', left: 1020, right: 90, top: 560}}>
			<Callout label="考法" style={{fontSize: 29, padding: '14px 22px'}}>
				<Hl>神经—体液—免疫调节网络</Hl>是维持稳态的主要调节机制；受体一般是蛋白质
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
