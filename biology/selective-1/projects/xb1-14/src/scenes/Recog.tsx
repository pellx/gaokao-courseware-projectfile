import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.recog;
const {rc2, rc3, rc4, rc5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// Square tags on a body cell, triangle tags (antigens) on a pathogen, and a
// lymphocyte whose notched receptors fit only the triangle.
const Tags: React.FC<{cx: number; cy: number; r: number; color: string}> = ({cx, cy, r, color}) => (
	<>
		{[0, 60, 120, 180, 240, 300].map((a) => {
			const rad = (a * Math.PI) / 180;
			const x = cx + Math.cos(rad) * r;
			const y = cy + Math.sin(rad) * r;
			return <rect key={a} x={x - 10} y={y - 10} width={20} height={20} fill={color} transform={`rotate(${a} ${x} ${y})`} />;
		})}
	</>
);

export const Recog: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">免疫系统对病原体的识别</Header>
		<svg width={1740} height={420} viewBox="0 0 1740 420" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={rc2.from}>
				<circle cx={250} cy={190} r={120} fill="#fbeedd" stroke={C.brown} strokeWidth={5} />
				<Tags cx={250} cy={190} r={124} color={C.brown} />
				<text x={250} y={200} fontSize={34} fontWeight={900} fill={C.brown} textAnchor="middle">自身细胞</text>
				<text x={250} y={370} fontSize={28} fontWeight={800} fill={C.brown} textAnchor="middle">分子标签（蛋白质）</text>
			</G>
			<G at={rc3.from}>
				<rect x={640} y={130} width={260} height={120} rx={60} fill={C.redSoft} stroke={C.red} strokeWidth={5} />
				{[690, 770, 850].map((x) => (
					<g key={x}>
						<path d={`M${x - 14},130 l14,-24 l14,24 z`} fill={C.red} />
						<path d={`M${x - 14},250 l14,24 l14,-24 z`} fill={C.red} />
					</g>
				))}
				<text x={770} y={200} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">病原体</text>
				<text x={770} y={370} fontSize={28} fontWeight={800} fill={C.red} textAnchor="middle">身份标签 = 抗原</text>
			</G>
			<G at={rc4.from}>
				<circle cx={1330} cy={190} r={110} fill="#fff" stroke={C.green} strokeWidth={5} />
				{[150, 180, 210].map((a) => {
					const rad = (a * Math.PI) / 180;
					const x = 1330 + Math.cos(rad) * 110;
					const y = 190 + Math.sin(rad) * 110;
					return (
						<g key={a} transform={`rotate(${a} ${x} ${y})`}>
							<path d={`M${x},${y - 18} h30 l-14,9 l14,9 h-30 z`} fill={C.green} />
						</g>
					);
				})}
				<text x={1330} y={200} fontSize={32} fontWeight={900} fill={C.green} textAnchor="middle">B/T细胞</text>
				<text x={1330} y={370} fontSize={28} fontWeight={800} fill={C.green} textAnchor="middle">受体：只识别一种抗原</text>
			</G>
			<G at={at(rc4.from, rc4.to, 0.4)}>
				<line x1={960} y1={190} x2={1180} y2={190} stroke={C.green} strokeWidth={6} strokeDasharray="14 10" />
				<text x={1070} y={170} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">特异性结合</text>
			</G>
		</svg>
		<Appear at={at(rc2.from, rc2.to, 0.7)} style={{position: 'absolute', left: 90, top: 590, fontSize: 30, fontWeight: 700, color: C.muted}}>
			能识别自身的分子标签 → 一般<Hl c={C.brown}>不攻击自身细胞</Hl>
		</Appear>
		<Appear at={rc5.from} style={{position: 'absolute', left: 90, right: 90, top: 660}}>
			<Callout label="考法" style={{fontSize: 30}}>
				识别的本质：受体与抗原<Hl>特异性结合</Hl>；受体的化学本质是<Hl>蛋白质</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
