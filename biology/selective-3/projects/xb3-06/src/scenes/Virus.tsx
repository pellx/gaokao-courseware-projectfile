import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Cards, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.virus;
const {vr1, vr2, vr3, vr4} = t.cue;

// Virus particles get sparser towards the shoot tip (y small).
const VIRUS: [number, number][] = Array.from({length: 26}, (_, i) => {
	const y = 470 - (i * i) * 0.55;
	const x = 280 + (i % 2 ? 1 : -1) * (14 + (i * 37) % 30);
	return [x, y] as [number, number];
}).filter(([, y]) => y > 190);

export const Virus: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">作物脱毒</Header>
		<svg width={560} height={540} viewBox="0 0 560 540" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={vr1.from}>
				<line x1={280} y1={510} x2={280} y2={70} stroke={C.green} strokeWidth={12} strokeLinecap="round" />
				{[420, 320, 220, 140].map((y, i) => (
					<g key={y}>
						<ellipse cx={280 - 70 + i * 6} cy={y} rx={70 - i * 10} ry={24 - i * 2} fill={C.green} opacity={0.85} transform={`rotate(-25 ${280 - 70 + i * 6} ${y})`} />
						<ellipse cx={280 + 70 - i * 6} cy={y - 30} rx={70 - i * 10} ry={24 - i * 2} fill={C.green} opacity={0.85} transform={`rotate(25 ${280 + 70 - i * 6} ${y - 30})`} />
					</g>
				))}
				{VIRUS.map(([x, y], i) => (
					<circle key={i} cx={x} cy={y} r={7} fill={C.red} />
				))}
				<text x={420} y={470} fontSize={26} fontWeight={800} fill={C.red}>病毒多</text>
			</G>
			<G at={vr2.from}>
				<circle cx={280} cy={72} r={46} fill="none" stroke={C.orange} strokeWidth={6} strokeDasharray="10 7" />
				<text x={350} y={60} fontSize={28} fontWeight={900} fill={C.orange}>茎尖分生区</text>
				<text x={350} y={96} fontSize={26} fontWeight={800} fill={C.orange}>病毒极少或无</text>
			</G>
		</svg>
		<Bullets
			style={{left: 720, right: 90, top: 180}}
			fontSize={30}
			items={[{at: vr1.from, color: C.red, children: <>马铃薯、草莓、香蕉等无性繁殖作物：病毒<Hl>逐代积累</Hl>，产量降低、品质变差</>}]}
		/>
		<Flow
			style={{left: 720, top: 320}}
			fontSize={34}
			rows={[[{label: '切取茎尖', color: C.orange, at: vr3.from}, {label: '组织培养', at: vr3.from + 15}, {label: '脱毒苗', color: C.green, at: vr3.from + 30}]]}
		/>
		<Cards
			left={720}
			top={450}
			height={190}
			fontSize={28}
			titleSize={32}
			items={[
				{title: '脱毒苗', color: C.green, at: vr4.from, body: <>组织培养获得；<Hl>不含病毒</Hl>，但仍可能再被感染</>},
				{title: '抗毒苗', color: C.red, at: vr4.from + 20, body: <>基因工程导入<Hl>抗病毒基因</Hl>，能抵抗病毒</>},
			]}
		/>
		<Tip at={vr4.from} top={730} label="易错">
			<Hl>脱毒 ≠ 抗毒</Hl>：脱毒苗只是不带病毒，并不具有抗病毒的能力
		</Tip>
		<Narration t={t} />
	</Scene>
);
