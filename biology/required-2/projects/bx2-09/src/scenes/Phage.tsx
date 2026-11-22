import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.phage;
const {ph1, ph2, ph3, ph4} = t.cue;

// T2 phage: hexagonal protein head holding DNA, a tail and tail fibres.
const PhageDraw: React.FC<{x: number; y: number; s?: number}> = ({x, y, s = 1}) => {
	const r = 70 * s;
	const hex = Array.from({length: 6}, (_, i) => {
		const a = (Math.PI / 3) * i + Math.PI / 6;
		return `${x + r * Math.cos(a)},${y + r * Math.sin(a)}`;
	}).join(' ');
	const dna = Array.from({length: 9}, (_, i) => `${i ? 'L' : 'M'}${x - 40 * s + i * 10 * s},${y + (i % 2 ? -22 : 22) * s}`).join(' ');
	const tailTop = y + r;
	return (
		<g>
			<polygon points={hex} fill={C.orangeSoft} stroke={C.orange} strokeWidth={6} />
			<path d={dna} fill="none" stroke={C.red} strokeWidth={6} strokeLinejoin="round" />
			<rect x={x - 14 * s} y={tailTop} width={28 * s} height={120 * s} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
			<rect x={x - 40 * s} y={tailTop + 120 * s} width={80 * s} height={14 * s} fill={C.orange} />
			{[-1, 1].map((d) => (
				<path key={d} d={`M${x + d * 36 * s},${tailTop + 134 * s} l${d * 40 * s},${50 * s} l${-d * 10 * s},${40 * s}`} fill="none" stroke={C.orange} strokeWidth={5} />
			))}
		</g>
	);
};

export const Phage: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">T2 噬菌体的结构与增殖</Header>
		<svg width={700} height={480} viewBox="0 0 700 480" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={ph1.from}>
				<PhageDraw x={200} y={110} s={1.15} />
				<text x={330} y={80} fontSize={30} fontWeight={900} fill={C.orange}>蛋白质外壳</text>
				<text x={330} y={120} fontSize={30} fontWeight={900} fill={C.red}>头部 DNA</text>
			</G>
			<G at={ph2.from}>
				<text x={330} y={230} fontSize={28} fontWeight={800} fill={C.orange}>仅蛋白质含 S</text>
				<text x={330} y={275} fontSize={28} fontWeight={800} fill={C.red}>P 几乎都在 DNA 中</text>
			</G>
		</svg>
		<Flow
			style={{left: 90, top: 640}}
			fontSize={32}
			rows={[
				[
					{label: '吸附', at: ph3.from},
					{label: '注入', note: '只有 DNA', at: ph3.from + 20, color: C.red},
					{label: '合成', note: '原料、酶来自细菌', at: ph3.from + 40, color: C.orange},
					{label: '组装', at: ph3.from + 60},
					{label: '释放', at: ph3.from + 80},
				],
			]}
		/>
		<div style={{position: 'absolute', left: 840, right: 90, top: 200}}>
			<Tip at={ph4.from} top={0} label="易错" fontSize={32}>
				病毒<Hl>不能用培养基直接培养</Hl>。先用含 <sup>35</sup>S 或 <sup>32</sup>P 的培养基培养<Hl>大肠杆菌</Hl>，再用噬菌体侵染它，得到带标记的噬菌体
			</Tip>
		</div>
		<Narration t={t} />
	</Scene>
);
