import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.vector;
const {ve1, ve2, ve3, ve4, ve5} = t.cue;

const P = {x: 360, y: 260, r: 190};
const arc = (a0: number, a1: number) => {
	const p = (a: number) => [P.x + P.r * Math.cos((a * Math.PI) / 180), P.y + P.r * Math.sin((a * Math.PI) / 180)];
	const [x0, y0] = p(a0);
	const [x1, y1] = p(a1);
	return `M${x0},${y0} A${P.r},${P.r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1},${y1}`;
};
const at = (a: number, r: number) => [P.x + r * Math.cos((a * Math.PI) / 180), P.y + r * Math.sin((a * Math.PI) / 180)];

const Part: React.FC<{a0: number; a1: number; color: string; label: string; la: number; anchor?: 'start' | 'end' | 'middle'}> = ({a0, a1, color, label, la, anchor = 'start'}) => {
	const [x, y] = at(la, P.r + 50);
	return (
		<g>
			<path d={arc(a0, a1)} fill="none" stroke={color} strokeWidth={30} />
			<text x={x} y={y + 10} fontSize={30} fontWeight={900} fill={color} textAnchor={anchor}>{label}</text>
		</g>
	);
};

export const Vector: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">基因表达载体的组成</Header>
		<svg width={780} height={540} viewBox="0 0 780 540" style={{position: 'absolute', left: 60, top: 160}}>
			<G at={ve1.from}>
				<circle cx={P.x} cy={P.y} r={P.r} fill="none" stroke={C.line} strokeWidth={16} />
				<Part a0={-60} a1={-10} color={C.red} label="目的基因" la={-35} />
				<path d={arc(150, 190)} fill="none" stroke={C.muted} strokeWidth={30} />
				<text x={at(170, P.r + 40)[0]} y={at(170, P.r + 40)[1] + 10} fontSize={28} fontWeight={900} fill={C.muted} textAnchor="end">复制原点</text>
			</G>
			<G at={ve2.from}>
				<Part a0={-95} a1={-65} color={C.orange} label="启动子" la={-85} anchor="end" />
			</G>
			<G at={ve3.from}>
				<Part a0={-5} a1={25} color={C.brown} label="终止子" la={12} />
			</G>
			<G at={ve4.from}>
				<Part a0={60} a1={120} color={C.green} label="标记基因" la={95} anchor="middle" />
			</G>
		</svg>
		<Bullets
			style={{left: 880, right: 90, top: 200}}
			fontSize={30}
			gap={26}
			items={[
				{at: ve1.from, color: C.red, children: <><Hl>目的基因</Hl>：要表达的基因</>},
				{at: ve2.from, color: C.orange, children: <><Hl c={C.orange}>启动子</Hl>：位于基因上游，RNA 聚合酶识别和结合的部位，驱动转录</>},
				{at: ve3.from, color: C.brown, children: <><Hl c={C.brown}>终止子</Hl>：位于基因下游，使转录在所需要的地方停下来</>},
				{at: ve4.from, color: C.green, children: <><Hl c={C.green}>标记基因</Hl>：鉴别和筛选含有目的基因的细胞</>},
			]}
		/>
		<Tip at={ve5.from} top={640} label="考法" fontSize={29}>
			构建目的：使目的基因在受体细胞中<Hl>稳定存在</Hl>、<Hl>遗传给下一代</Hl>，并能<Hl>表达和发挥作用</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
