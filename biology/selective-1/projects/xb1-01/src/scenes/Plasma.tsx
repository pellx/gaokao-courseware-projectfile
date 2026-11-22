import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.plasma;
const {pl2, pl3, pl4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const PARTS = [
	{name: '水', value: '约 90%', color: C.orange},
	{name: '蛋白质', value: '7%～9%', color: C.red},
	{name: '无机盐', value: '约 1%', color: C.green},
	{name: '其他', value: '营养物质、代谢废物、气体、激素等', color: C.brown},
];

// Relative protein content, for the comparison bars.
const BARS = [
	{name: '血浆', h: 1, color: C.red},
	{name: '组织液', h: 0.18, color: C.orange},
	{name: '淋巴液', h: 0.22, color: C.green},
];

export const Plasma: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点五">血浆、组织液、淋巴液的成分差异</Header>
			<Appear at={pl2.from - 10} style={{position: 'absolute', left: 90, top: 170, width: 470, height: 640}}>
				<Photo src="images/plasma.jpg" caption="血浆（新鲜冰冻血浆）" style={{width: '100%', height: '100%'}} />
			</Appear>
			<div style={{position: 'absolute', left: 620, right: 90, top: 170}}>
				<div style={{fontSize: 34, fontWeight: 800, marginBottom: 14}}>血浆的成分</div>
				<div style={{display: 'grid', gridTemplateColumns: '0.8fr 0.9fr 0.8fr 1.6fr', gap: 16}}>
					{PARTS.map((p, i) => (
						<Appear key={p.name} at={at(pl2.from, pl2.to, i * 0.22)}>
							<div style={{borderTop: `10px solid ${p.color}`, background: C.panel, borderRadius: 14, padding: '12px 18px', height: 150, boxSizing: 'border-box'}}>
								<div style={{fontSize: 30, fontWeight: 800}}>{p.name}</div>
								<div style={{fontSize: i === 3 ? 26 : 40, fontWeight: 900, color: p.color, marginTop: 6}}>{p.value}</div>
							</div>
						</Appear>
					))}
				</div>
				<Appear at={pl3.from} style={{marginTop: 30}}>
					<div style={{fontSize: 34, fontWeight: 800}}>蛋白质含量（相对值）</div>
					<svg width={1000} height={290} viewBox="0 0 1000 290">
						<line x1={40} y1={240} x2={980} y2={240} stroke={C.text} strokeWidth={4} />
						{BARS.map((b, i) => {
							const g = interpolate(frame, [pl3.from + 20 + i * 12, pl3.from + 45 + i * 12], [0, 1], clamp);
							const h = 210 * b.h * g;
							return (
								<g key={b.name}>
									<rect x={110 + i * 300} y={240 - h} width={170} height={h} rx={8} fill={b.color} />
									<text x={195 + i * 300} y={280} fontSize={30} fontWeight={700} textAnchor="middle">
										{b.name}
									</text>
								</g>
							);
						})}
					</svg>
				</Appear>
				<Appear at={pl4.from} style={{marginTop: 10}}>
					<Callout label="考法" style={{fontSize: 33}}>
						成分表中<Hl>蛋白质含量明显较高</Hl>的是血浆。
					</Callout>
				</Appear>
			</div>
			<Narration t={t} />
		</Scene>
	);
};
