import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.build;
const {bu1, bu2, bu3, bu4, bu5} = t.cue;

// Target DNA fragment with cut sites of enzyme A (left) and B (right).
const Y = 90;
const Cut: React.FC<{x: number; y?: number; color: string; label: string}> = ({x, y = Y, color, label}) => (
	<g>
		<line x1={x} y1={y - 36} x2={x} y2={y + 36} stroke={color} strokeWidth={6} strokeDasharray="8 6" />
		<text x={x} y={y - 46} fontSize={24} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
	</g>
);

export const Build: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">基因表达载体的构建</Header>
		<svg width={1740} height={330} viewBox="0 -40 1740 330" style={{position: 'absolute', left: 90, top: 180}}>
			<Defs />
			<G at={bu1.from}>
				<line x1={20} y1={Y} x2={720} y2={Y} stroke={C.brown} strokeWidth={14} />
				<rect x={200} y={Y - 12} width={340} height={24} fill={C.red} />
				<text x={370} y={Y + 56} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">目的基因</text>
				<Cut x={160} color={C.orange} label="酶 A" />
				<Cut x={580} color={C.green} label="酶 B" />
				<circle cx={1080} cy={Y + 40} r={110} fill="none" stroke={C.brown} strokeWidth={14} />
				<Cut x={1010} y={Y - 40} color={C.orange} label="酶 A" />
				<Cut x={1150} y={Y - 40} color={C.green} label="酶 B" />
				<text x={1080} y={Y + 190} fontSize={26} fontWeight={900} fill={C.brown} textAnchor="middle">载体（质粒）</text>
			</G>
			<G at={bu2.from}>
				<Arrow x1={1220} y1={Y + 40} x2={1360} y2={Y + 40} color={C.orange} marker="arrow-orange" />
				<text x={1290} y={Y + 18} fontSize={22} fontWeight={800} fill={C.orange} textAnchor="middle">DNA 连接酶</text>
				<circle cx={1520} cy={Y + 40} r={110} fill="none" stroke={C.brown} strokeWidth={14} />
				<path d={`M${1520 - 95},${Y - 15} A110,110 0 0 1 ${1520 + 95},${Y - 15}`} fill="none" stroke={C.red} strokeWidth={16} />
				<text x={1520} y={Y + 190} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">重组 DNA</text>
			</G>
		</svg>
		<Bullets
			style={{left: 90, right: 90, top: 540}}
			fontSize={30}
			gap={16}
			items={[
				{at: bu3.from, color: C.red, children: <><Hl>双酶切</Hl>（两种限制酶）：防止目的基因和载体<Hl>自身环化</Hl>，防止目的基因<Hl>反向连接</Hl></>},
				{at: bu4.from, color: C.orange, children: <>选酶原则：<Hl>不破坏目的基因</Hl>；不破坏启动子、终止子、复制原点，至少保留一个<Hl c={C.green}>标记基因</Hl></>},
			]}
		/>
		<Tip at={bu5.from} top={730} label="解题方法">
			看图选酶：先排除切点<Hl>在目的基因内部</Hl>的酶，再排除会切坏载体必需结构的酶
		</Tip>
		<Narration t={t} />
	</Scene>
);
