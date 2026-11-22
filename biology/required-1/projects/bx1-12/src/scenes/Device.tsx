import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.device;
const {dv1, dv2, dv3, dv4} = t.cue;

export const Device: React.FC = () => {
	const frame = useCurrentFrame();
	// Liquid column in the funnel tube rises during dv2 and stops at dv3.
	const top = interpolate(frame, [dv2.from, dv3.from], [250, 110], clamp);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点二">渗透装置的分析</Header>
			<svg width={700} height={500} viewBox="0 0 700 500" style={{position: 'absolute', left: 90, top: 160}}>
				<Defs />
				<G at={dv1.from}>
					<rect x={100} y={260} width={420} height={210} rx={14} fill="#fff" stroke={C.muted} strokeWidth={5} />
					<rect x={105} y={300} width={410} height={165} rx={10} fill={C.panel} />
					<text x={450} y={450} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">清水</text>
					<path d="M220,390 L400,390 L325,280 L325,60 L295,60 L295,280 z" fill="#fff" stroke={C.brown} strokeWidth={5} />
					<path d="M228,386 L392,386 L322,284 L322,250 L298,250 L298,284 z" fill={C.orangeSoft} />
					<rect x={298} y={top} width={24} height={250 - top + 34} fill={C.orangeSoft} />
					<line x1={215} y1={392} x2={405} y2={392} stroke={C.red} strokeWidth={6} strokeDasharray="10 6" />
					<text x={560} y={400} fontSize={26} fontWeight={800} fill={C.red}>半透膜</text>
					<text x={310} y={350} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">蔗糖溶液</text>
					<line x1={260} y1={250} x2={290} y2={250} stroke={C.muted} strokeWidth={3} strokeDasharray="6 5" />
					<text x={250} y={244} fontSize={22} fontWeight={800} fill={C.muted} textAnchor="end">起始液面</text>
				</G>
				<G at={dv3.from}>
					<line x1={330} y1={110} x2={370} y2={110} stroke={C.red} strokeWidth={3} />
					<text x={380} y={118} fontSize={24} fontWeight={800} fill={C.red}>Δh（平衡时）</text>
				</G>
			</svg>
			<Bullets
				style={{left: 860, right: 90, top: 200}}
				fontSize={32}
				gap={24}
				items={[
					{at: dv2.from, color: C.red, children: <>进入漏斗的水分子多于出来的 → 液面<Hl>上升</Hl></>},
					{at: dv3.from, color: C.orange, children: <>液柱压力与浓度差作用平衡 → 液面<Hl c={C.orange}>停止上升</Hl></>},
					{at: dv4.from, color: C.green, children: <>平衡时：水分子仍双向移动，<Hl c={C.green}>进出速率相等</Hl></>},
				]}
			/>
			<Tip at={dv4.from} top={700} label="易错">
				平衡时漏斗内外<Hl>浓度不相等</Hl>，漏斗内仍高于烧杯（Δh 越大，说明浓度差越大）
			</Tip>
			<Narration t={t} />
		</Scene>
	);
};
