import React from 'react';
import {Appear, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.count;
const {ct1, ct2, ct3, ct4} = t.cue;

const S = 230; // field size
const Field: React.FC<{x: number; y: number; label: string; children: React.ReactNode}> = ({x, y, label, children}) => (
	<g transform={`translate(${x},${y})`}>
		<rect x={0} y={0} width={S} height={S} rx={30} fill={C.panel} stroke={C.brown} strokeWidth={5} />
		{children}
		<text x={S / 2} y={S + 40} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">{label}</text>
	</g>
);

const row = (n: number, r: number) =>
	Array.from({length: n}, (_, i) => <circle key={i} cx={(S / n) * (i + 0.5)} cy={S / 2} r={r} fill={C.orange} stroke="#fff" strokeWidth={2} />);
const grid = (n: number, r: number) =>
	Array.from({length: n * n}, (_, k) => (
		<circle key={k} cx={(S / n) * ((k % n) + 0.5)} cy={(S / n) * (Math.floor(k / n) + 0.5)} r={r} fill={C.green} stroke="#fff" strokeWidth={2} />
	));

const Panel: React.FC<{x: number; at: number; title: string; before: React.ReactNode; after: React.ReactNode; sum: React.ReactNode}> = ({x, at, title, before, after, sum}) => (
	<G at={at}>
		<text x={x + 380} y={40} fontSize={38} fontWeight={900} fill={C.text} textAnchor="middle">{title}</text>
		<Field x={x + 20} y={80} label="10 × 10">{before}</Field>
		<text x={x + 380} y={210} fontSize={56} fontWeight={900} fill={C.muted} textAnchor="middle">→</text>
		<Field x={x + 510} y={80} label="10 × 40">{after}</Field>
		<text x={x + 380} y={430} fontSize={38} fontWeight={900} fill={C.red} textAnchor="middle">{sum}</text>
	</G>
);

export const Count: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">放大后视野中的细胞数目</Header>
		<Appear at={ct1.from} style={{position: 'absolute', left: 90, top: 150, fontSize: 32, fontWeight: 700, color: C.muted}}>
			物镜由 10× 换成 40×：放大倍数变为原来的 <Hl c={C.orange}>4 倍</Hl>
		</Appear>
		<svg width={1740} height={470} viewBox="0 0 1740 470" style={{position: 'absolute', left: 90, top: 215}}>
			<Defs />
			<Panel x={0} at={ct2.from} title="细胞排成一行" before={row(8, 12)} after={row(2, 48)} sum="8 ÷ 4 ＝ 2 个" />
			<Panel x={980} at={ct3.from} title="细胞充满视野" before={grid(8, 11)} after={grid(2, 46)} sum={<>64 ÷ 4<tspan dy={-16} fontSize={26}>2</tspan><tspan dy={16}> ＝ 4 个</tspan></>} />
			<line x1={890} y1={20} x2={890} y2={450} stroke={C.line} strokeWidth={4} />
		</svg>
		<Tip at={ct4.from} top={720} label="解题方法">
			放大 n 倍：排成一行的细胞数 <Hl>÷ n</Hl>；充满视野的细胞数 <Hl>÷ n<sup>2</sup></Hl>（面积放大 n<sup>2</sup> 倍）
		</Tip>
		<Narration t={t} />
	</Scene>
);
