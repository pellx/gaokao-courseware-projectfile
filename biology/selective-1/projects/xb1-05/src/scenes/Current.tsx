import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.current;
const {cu1, cu2, cu3, cu4, cu5, cu6} = t.cue;

// Axon drawn as two membranes (top y=110, bottom y=290); the excited region
// sits in the middle (x 740–960).
const XS = [140, 260, 380, 500, 620, 1080, 1200, 1320, 1440, 1560];
const EX = [790, 910];
const TOP = 110;
const BOT = 290;

const Sign: React.FC<{x: number; y: number; s: string}> = ({x, y, s}) => (
	<text x={x} y={y} fontSize={42} fontWeight={900} fill={s === '+' ? C.red : C.brown} textAnchor="middle">{s}</text>
);

export const Current: React.FC = () => {
	const frame = useCurrentFrame();
	const out = useRamp(cu2.from, 16);
	const inn = useRamp(cu2.from + 45, 16);
	const both = useRamp(cu5.from, 16);
	const live = frame >= cu1.from;
	return (
		<Scene duration={t.duration}>
			<Header tag="考点三 · 四">局部电流与传导方向</Header>
			<svg width={1700} height={420} viewBox="0 0 1700 420" style={{position: 'absolute', left: 110, top: 160}}>
				<Defs />
				<rect x={740} y={TOP} width={220} height={BOT - TOP} fill={live ? C.redSoft : '#fff'} />
				<line x1={60} y1={TOP} x2={1640} y2={TOP} stroke={C.brown} strokeWidth={8} />
				<line x1={60} y1={BOT} x2={1640} y2={BOT} stroke={C.brown} strokeWidth={8} />
				<text x={850} y={210} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">兴奋部位</text>
				<text x={380} y={210} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">未兴奋部位</text>
				<text x={1320} y={210} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">未兴奋部位</text>
				{XS.map((x) => (
					<React.Fragment key={x}>
						<Sign x={x} y={TOP - 18} s="+" />
						<Sign x={x} y={TOP + 50} s="−" />
						<Sign x={x} y={BOT - 22} s="−" />
						<Sign x={x} y={BOT + 50} s="+" />
					</React.Fragment>
				))}
				{EX.map((x) => (
					<React.Fragment key={x}>
						<Sign x={x} y={TOP - 18} s="−" />
						<Sign x={x} y={TOP + 50} s="+" />
						<Sign x={x} y={BOT - 22} s="+" />
						<Sign x={x} y={BOT + 50} s="−" />
					</React.Fragment>
				))}
				<g opacity={out} fill="none" strokeWidth={6} stroke={C.orange}>
					<path d="M640,60 Q700,10 760,55" markerEnd="url(#arrow-orange)" />
					<path d="M1060,60 Q1000,10 940,55" markerEnd="url(#arrow-orange)" />
					<path d="M640,345 Q700,395 760,350" markerEnd="url(#arrow-orange)" />
					<path d="M1060,345 Q1000,395 940,350" markerEnd="url(#arrow-orange)" />
				</g>
				<g opacity={inn} fill="none" strokeWidth={6} stroke={C.green}>
					<path d="M760,165 Q700,190 640,165" markerEnd="url(#arrow-green)" />
					<path d="M940,165 Q1000,190 1060,165" markerEnd="url(#arrow-green)" />
					<path d="M760,240 Q700,215 640,240" markerEnd="url(#arrow-green)" />
					<path d="M940,240 Q1000,215 1060,240" markerEnd="url(#arrow-green)" />
				</g>
				<g opacity={both}>
					<line x1={700} y1={20} x2={260} y2={20} stroke={C.red} strokeWidth={8} markerEnd="url(#arrow-red)" />
					<line x1={1000} y1={20} x2={1440} y2={20} stroke={C.red} strokeWidth={8} markerEnd="url(#arrow-red)" />
					<text x={480} y={0} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle" dy={-4}>兴奋传导</text>
					<text x={1220} y={0} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle" dy={-4}>兴奋传导</text>
				</g>
			</svg>
			<div style={{position: 'absolute', left: 90, right: 90, top: 600, display: 'flex', gap: 40, fontSize: 30, fontWeight: 700}}>
				<Appear at={cu2.from}>
					膜外：<Hl c={C.orange}>未兴奋部位 → 兴奋部位</Hl>
				</Appear>
				<Appear at={cu2.from + 45}>
					膜内：<Hl c={C.green}>兴奋部位 → 未兴奋部位</Hl>
				</Appear>
				<Appear at={cu3.from} style={{color: C.muted}}>
					局部电流使相邻部位兴奋
				</Appear>
			</div>
			<Appear at={cu4.from} style={{position: 'absolute', left: 90, width: 820, top: 680}}>
				<Callout label="考法" style={{fontSize: 29}}>
					传导方向与<Hl c={C.green}>膜内</Hl>电流方向一致，与膜外电流方向<Hl>相反</Hl>
				</Callout>
			</Appear>
			<Appear at={cu5.from} style={{position: 'absolute', left: 960, right: 90, top: 680}}>
				<Callout label={frame >= cu6.from ? '易错' : '考点四'} color={frame >= cu6.from ? C.red : C.orange} soft={frame >= cu6.from ? C.redSoft : C.orangeSoft} style={{fontSize: 29}}>
					离体神经纤维：<Hl c={C.orange}>双向传导</Hl>
					<br />
					反射活动中：<Hl>单向传导</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
