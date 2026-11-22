import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.animal;
const {an1, an2, an3, an4} = t.cue;

const crenate = (cx: number, cy: number, r: number) => {
	const n = 14;
	return Array.from({length: n * 2}, (_, i) => {
		const a = (i / (n * 2)) * Math.PI * 2;
		const rr = i % 2 ? r : r * 0.82;
		return `${i ? 'L' : 'M'}${cx + Math.cos(a) * rr},${cy + Math.sin(a) * rr}`;
	}).join(' ') + 'z';
};

const Panel: React.FC<{x: number; title: string; color: string; note: string; children: React.ReactNode}> = ({x, title, color, note, children}) => (
	<g>
		<text x={x} y={40} fontSize={32} fontWeight={900} fill={color} textAnchor="middle">{title}</text>
		{children}
		<text x={x} y={330} fontSize={30} fontWeight={800} fill={color} textAnchor="middle">{note}</text>
	</g>
);

export const Animal: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">动物细胞的吸水和失水（以红细胞为例）</Header>
		<svg width={1740} height={360} viewBox="0 0 1740 360" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={an2.from}>
				<Panel x={300} title="外界浓度 ＜ 细胞质浓度" color={C.red} note="吸水膨胀，甚至涨破">
					<circle cx={300} cy={180} r={110} fill={C.redSoft} stroke={C.red} strokeWidth={6} />
				</Panel>
			</G>
			<G at={an3.from}>
				<Panel x={870} title="外界浓度 ＝ 细胞质浓度" color={C.green} note="形态不变（生理盐水）">
					<ellipse cx={870} cy={180} rx={110} ry={80} fill={C.redSoft} stroke={C.red} strokeWidth={6} />
					<ellipse cx={870} cy={180} rx={50} ry={30} fill="#f9d3cd" />
				</Panel>
			</G>
			<G at={an2.from + 60}>
				<Panel x={1440} title="外界浓度 ＞ 细胞质浓度" color={C.orange} note="失水皱缩">
					<path d={crenate(1440, 180, 80)} fill={C.redSoft} stroke={C.red} strokeWidth={6} />
				</Panel>
			</G>
		</svg>
		<Tip at={an4.from} top={600} label="解题方法">
			<Hl>水往浓处流</Hl>：先比较细胞内外浓度；动物细胞的<Hl c={C.orange}>细胞膜</Hl>相当于半透膜
		</Tip>
		<Narration t={t} />
	</Scene>
);
