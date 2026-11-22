import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Chem} from '../components/chem';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.experiment;
const {ep2, ep3, ep4, ep5, ep6} = t.cue;

const GROUPS = [
	{name: '自来水', color: C.orange},
	{name: '缓冲液', color: C.green},
	{name: '肝匀浆', color: C.red},
];

// Illustrative pH readings every 5 drops (0–30), in GROUPS order.
const ACID = [
	[7, 5.5, 4.4, 3.8, 3.4, 3.1, 2.9],
	[7, 6.95, 6.9, 6.85, 6.8, 6.75, 6.7],
	[7, 6.9, 6.8, 6.7, 6.6, 6.5, 6.4],
];
const BASE = [
	[7, 9, 10.2, 10.8, 11.1, 11.3, 11.4],
	[7, 7.05, 7.1, 7.15, 7.2, 7.25, 7.3],
	[7, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6],
];

const W = 820;
const H = 390;
const X0 = 90;
const X1 = 790;
const Y0 = 320;
const Y1 = 30;
const px = (drops: number) => X0 + ((X1 - X0) * drops) / 30;
const py = (ph: number) => Y0 - ((Y0 - Y1) * (ph - 2)) / 10;

const Chart: React.FC<{title: string; data: number[][]; at: number}> = ({title, data, at}) => {
	const frame = useCurrentFrame();
	const draw = interpolate(frame, [at, at + 60], [0, 1], clamp);
	return (
		<div>
			<div style={{fontSize: 32, fontWeight: 800, marginBottom: 6}}>{title}</div>
			<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
				<line x1={X0} y1={Y0} x2={X1} y2={Y0} stroke={C.text} strokeWidth={3} />
				<line x1={X0} y1={Y0} x2={X0} y2={Y1} stroke={C.text} strokeWidth={3} />
				{[3, 5, 7, 9, 11].map((v) => (
					<g key={v}>
						<line x1={X0} y1={py(v)} x2={X1} y2={py(v)} stroke={C.line} strokeWidth={2} />
						<text x={X0 - 14} y={py(v) + 9} fontSize={24} textAnchor="end" fill={C.muted}>{v}</text>
					</g>
				))}
				{[0, 10, 20, 30].map((d) => (
					<text key={d} x={px(d)} y={Y0 + 34} fontSize={24} textAnchor="middle" fill={C.muted}>{d}</text>
				))}
				<text x={X0 + 6} y={Y1 - 6} fontSize={24} fontWeight={700}>pH</text>
				<text x={X1} y={Y0 + 58} fontSize={24} fontWeight={700} textAnchor="end">滴数</text>
				{data.map((series, i) => (
					<polyline
						key={i}
						points={series.map((v, j) => `${px(j * 5)},${py(v)}`).join(' ')}
						fill="none"
						stroke={GROUPS[i].color}
						strokeWidth={6}
						strokeLinejoin="round"
						pathLength={1}
						strokeDasharray={`${draw} 1`}
					/>
				))}
			</svg>
		</div>
	);
};

export const Experiment: React.FC = () => {
	const frame = useCurrentFrame();
	const p1 = interpolate(frame, [ep4.from - 15, ep4.from], [1, 0], clamp);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点一">实验：模拟生物体维持 pH 的稳定</Header>
			<div style={{position: 'absolute', left: 90, right: 90, top: 170, opacity: p1}}>
				<div style={{display: 'flex', gap: 24, width: 1300}}>
					{GROUPS.map((g, i) => (
						<Appear key={g.name} at={ep2.from + i * 15} style={{flex: 1}}>
							<div style={{border: `4px solid ${g.color}`, borderRadius: 20, padding: '16px 20px', textAlign: 'center', background: '#fff'}}>
								<svg width={120} height={130} viewBox="0 0 120 130">
									<path d="M15,10 L25,120 Q26,125 31,125 L89,125 Q94,125 95,120 L105,10" fill="none" stroke={C.muted} strokeWidth={5} />
									<path d="M22,50 L27,118 L93,118 L98,50 Z" fill={g.color} opacity={0.35} />
								</svg>
								<div style={{fontSize: 38, fontWeight: 900, color: g.color}}>{g.name}</div>
								<div style={{fontSize: 26, color: C.muted}}>{['对照组', '对照组', '实验组（生物材料）'][i]}</div>
							</div>
						</Appear>
					))}
				</div>
				<div style={{marginTop: 30, width: 1300, fontSize: 34, lineHeight: 1.75}}>
					<Appear at={ep2.from + 60}>
						① 各取 25 mL，测起始 pH → 逐滴加入 <Hl>0.1 mol/L <Chem>HCl</Chem></Hl>，每 5 滴测一次，共 30 滴
					</Appear>
					<Appear at={ep3.from}>
						② 充分冲洗烧杯 → 换用 <Hl c={C.green}>0.1 mol/L NaOH</Hl> 重复实验
					</Appear>
					<Appear at={ep3.from + 60}>③ 以滴数为横坐标、pH 为纵坐标画曲线</Appear>
				</div>
				<Appear at={ep2.from + 20} style={{position: 'absolute', left: 1360, top: 0, width: 380, height: 600}}>
					<Photo src="images/phmeter.jpg" caption="pH 计" style={{width: '100%', height: '100%'}} pos="center 60%" />
				</Appear>
			</div>
			<div style={{position: 'absolute', left: 90, right: 90, top: 160, opacity: 1 - p1}}>
				<div style={{display: 'flex', gap: 24, alignItems: 'center', fontSize: 30, fontWeight: 800}}>
					{GROUPS.map((g) => (
						<span key={g.name} style={{display: 'flex', alignItems: 'center', gap: 8}}>
							<span style={{width: 34, height: 8, background: g.color, borderRadius: 4}} />
							{g.name}
						</span>
					))}
					<span style={{color: C.muted, fontWeight: 500, fontSize: 26}}>（示意曲线）</span>
				</div>
				<div style={{display: 'flex', gap: 60}}>
					<Chart title="滴加 HCl" data={ACID} at={ep4.from} />
					<Chart title="滴加 NaOH" data={BASE} at={ep4.from + 30} />
				</div>
			</div>
			<Appear at={ep5.from} style={{position: 'absolute', left: 90, right: 90, top: 652}}>
				<div style={{fontSize: 33, fontWeight: 700, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 16, padding: '12px 24px'}}>
					结论：生物材料<Hl c={C.green}>类似于缓冲液</Hl>，含缓冲物质，能维持 pH 相对稳定
				</div>
			</Appear>
			<Appear at={ep6.from} style={{position: 'absolute', left: 90, right: 90, top: 748}}>
				<Callout label="考法" style={{fontSize: 31, padding: '14px 26px'}}>
					自变量：材料种类、酸碱滴数；因变量：pH 变化；<Hl>自来水组、缓冲液组都是对照组</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
