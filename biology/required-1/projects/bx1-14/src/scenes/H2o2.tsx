import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.h2o2;
const {hp1, hp2, hp3, hp4} = t.cue;

// Test tube with a number of bubbles.
const Tube: React.FC<{x: number; n: number; label: React.ReactNode; result: string; color: string}> = ({x, n, label, result, color}) => (
	<g>
		<path d={`M${x - 45},60 L${x - 45},300 Q${x},350 ${x + 45},300 L${x + 45},60`} fill="#fffaf3" stroke={C.brown} strokeWidth={5} />
		<path d={`M${x - 40},180 L${x - 40},298 Q${x},343 ${x + 40},298 L${x + 40},180 z`} fill={C.orangeSoft} />
		<text x={x} y={30} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">{label}</text>
		<G at={hp2.from}>
			{Array.from({length: n}, (_, i) => (
				<circle key={i} cx={x - 24 + (i * 17) % 50} cy={290 - ((i * 37) % 120)} r={7 + (i % 3) * 2} fill="none" stroke={color} strokeWidth={3} />
			))}
			<text x={x} y={390} fontSize={28} fontWeight={900} fill={color} textAnchor="middle">{result}</text>
		</G>
	</g>
);

export const H2o2: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">比较过氧化氢在不同条件下的分解</Header>
		<svg width={1740} height={410} viewBox="0 0 1740 410" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={hp1.from}>
				<Tube x={180} n={0} label="1 号 常温" result="几乎无气泡" color={C.muted} />
				<Tube x={580} n={4} label="2 号 90 ℃ 水浴" result="少量气泡" color={C.orange} />
				<Tube x={980} n={8} label={<>3 号 {svgChem('FeCl3', 30)}</>} result="较多气泡" color={C.orange} />
				<Tube x={1380} n={18} label="4 号 肝脏研磨液" result="气泡最多、最快" color={C.red} />
			</G>
		</svg>
		<Tip at={hp3.from} top={600} label="结论">
			加热、Fe<sup>3+</sup>、过氧化氢酶都能加快 H<sub>2</sub>O<sub>2</sub> 分解；<Hl>酶的催化效率更高</Hl>
		</Tip>
		<Tip at={hp4.from} top={720} label="易错">
			肝脏要<Hl>新鲜</Hl>（久置后酶被破坏）；制成研磨液使酶充分释放
		</Tip>
		<Narration t={t} />
	</Scene>
);
