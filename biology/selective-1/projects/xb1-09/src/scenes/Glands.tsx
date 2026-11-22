import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C, clamp} from '../theme';
import {Cue, T} from '../timeline';

const t = T.glands;
const {gl1, gl2, gl3, gl4, gl5, gl6, gl7, gl8} = t.cue;
export const GLANDS_DUR = t.duration;

type Gland = {name: string; hormones: string; color: string; cue: Cue; x: number; y: number; label: [number, number]};

// Positions are in the body diagram's SVG coordinates.
const GLANDS: Gland[] = [
	{name: '下丘脑', hormones: '促～激素释放激素（如 TRH）；合成抗利尿激素', color: C.red, cue: gl2, x: 300, y: 118, label: [80, 90]},
	{name: '垂体', hormones: '生长激素；促甲状腺激素、促性腺激素、促肾上腺皮质激素', color: C.orange, cue: gl3, x: 300, y: 150, label: [80, 165]},
	{name: '甲状腺', hormones: '甲状腺激素（含碘）', color: C.red, cue: gl4, x: 300, y: 255, label: [80, 255]},
	{name: '肾上腺', hormones: '皮质：醛固酮、皮质醇；髓质：肾上腺素', color: C.orange, cue: gl5, x: 300, y: 420, label: [80, 420]},
	{name: '胰岛', hormones: 'A 细胞：胰高血糖素；B 细胞：胰岛素', color: C.green, cue: gl6, x: 320, y: 490, label: [520, 490]},
	{name: '性腺', hormones: '睾丸：雄激素；卵巢：雌激素、孕激素', color: C.red, cue: gl7, x: 300, y: 640, label: [520, 640]},
];

const Body: React.FC<{frame: number}> = ({frame}) => (
	<svg width={600} height={780} viewBox="0 0 600 780" style={{position: 'absolute', left: 70, top: 150, overflow: 'visible'}}>
		{/* silhouette */}
		<g fill={C.panel} stroke="#d9cfc2" strokeWidth={4}>
			<circle cx={300} cy={120} r={78} />
			<rect x={268} y={190} width={64} height={60} rx={20} />
			<path d="M180,250 Q300,225 420,250 L440,520 Q440,700 380,720 L220,720 Q160,700 160,520 Z" />
			<path d="M180,260 L110,520" strokeWidth={34} stroke={C.panel} />
			<path d="M420,260 L490,520" strokeWidth={34} stroke={C.panel} />
			<path d="M240,715 L230,780 M360,715 L370,780" strokeWidth={50} stroke={C.panel} />
		</g>
		{/* kidneys */}
		<ellipse cx={255} cy={445} rx={22} ry={34} fill="#f1d9c2" />
		<ellipse cx={345} cy={445} rx={22} ry={34} fill="#f1d9c2" />
		{GLANDS.map((g) => {
			const on = interpolate(frame, [g.cue.from, g.cue.from + 12], [0, 1], clamp);
			const active = frame >= g.cue.from && frame < g.cue.to + 8;
			const r = active ? 1 + 0.15 * Math.sin((frame - g.cue.from) / 5) : 1;
			const shape =
				g.name === '甲状腺' ? (
					<path d={`M${g.x - 30},${g.y} q15,-22 30,0 q15,-22 30,0 q-15,26 -30,10 q-15,16 -30,-10z`} fill={g.color} />
				) : g.name === '肾上腺' ? (
					<>
						<path d="M240,418 l15,-18 l15,18 z" fill={g.color} />
						<path d="M330,418 l15,-18 l15,18 z" fill={g.color} />
					</>
				) : g.name === '胰岛' ? (
					<ellipse cx={g.x} cy={g.y} rx={60} ry={14} fill={g.color} />
				) : g.name === '性腺' ? (
					<>
						<circle cx={280} cy={g.y} r={12} fill={g.color} />
						<circle cx={320} cy={g.y} r={12} fill={g.color} />
					</>
				) : (
					<circle cx={g.x} cy={g.y} r={g.name === '垂体' ? 11 : 16} fill={g.color} />
				);
			return (
				<g key={g.name} opacity={0.25 + 0.75 * on}>
					<g transform={`translate(${g.x},${g.y}) scale(${r}) translate(${-g.x},${-g.y})`}>{shape}</g>
					<line x1={g.label[0] < 300 ? g.label[0] + 70 : g.label[0] - 8} y1={g.label[1] - 10} x2={g.x} y2={g.y} stroke={C.muted} strokeWidth={2} opacity={on} />
					<text x={g.label[0]} y={g.label[1]} fontSize={28} fontWeight={800} fill={g.color} opacity={on} textAnchor={g.label[0] < 300 ? 'start' : 'start'}>
						{g.name}
					</text>
				</g>
			);
		})}
	</svg>
);

export const Glands: React.FC = () => {
	const frame = useCurrentFrame();
	const intro = useRamp(gl1.from + 20, 15);
	return (
		<Scene duration={GLANDS_DUR}>
			<Header tag="考点五">内分泌系统的组成：腺体与激素</Header>
			<div style={{opacity: intro}}>
				<Body frame={frame} />
			</div>
			<div style={{position: 'absolute', left: 720, right: 80, top: 160, display: 'flex', flexDirection: 'column', gap: 10}}>
				{GLANDS.map((g) => {
					const active = frame >= g.cue.from && frame < g.cue.to + 8;
					return (
						<Appear key={g.name} at={g.cue.from} dx={30} dy={0}>
							<div style={{display: 'flex', alignItems: 'center', gap: 18, background: active ? C.orangeSoft : C.panel, border: `3px solid ${active ? g.color : C.line}`, borderRadius: 16, padding: '0 20px', height: 88, boxSizing: 'border-box'}}>
								<div style={{width: 110, fontSize: 34, fontWeight: 900, color: g.color, flexShrink: 0}}>{g.name}</div>
								<div style={{fontSize: 28, lineHeight: 1.35}}>{g.hormones}</div>
							</div>
						</Appear>
					);
				})}
			</div>
			<Appear at={gl8.from} style={{position: 'absolute', left: 720, right: 80, top: 760}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '12px 22px'}}>
					抗利尿激素：<Hl>下丘脑合成</Hl>、<Hl c={C.orange}>垂体释放</Hl>，不是垂体合成
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
