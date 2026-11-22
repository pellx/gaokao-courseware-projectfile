import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.gravity;
const {gv2, gv3, gv4, gv5} = t.cue;

// A statocyte with its starch grains (amyloplasts) resting on the lower wall.
// As `turn` goes 0 → 0.5 the cell tips 90° with the grains fixed inside it;
// from 0.5 → 1 the grains settle onto the wall that is now at the bottom.
const LOCAL = [[-40, 103], [0, 103], [40, 103], [-20, 70], [20, 70]];
const SETTLED = [[20, 133], [60, 133], [100, 133], [40, 100], [80, 100]];

const rotate = ([x, y]: number[], deg: number) => {
	const r = (deg * Math.PI) / 180;
	return [x * Math.cos(r) - y * Math.sin(r), x * Math.sin(r) + y * Math.cos(r)];
};

const Statocyte: React.FC<{turn: number}> = ({turn}) => {
	const angle = -90 * Math.min(1, turn * 2);
	const fall = Math.max(0, turn * 2 - 1);
	return (
		<svg width={420} height={420} viewBox="-210 -210 420 420">
			<g transform={`rotate(${angle})`}>
				<rect x={-150} y={-120} width={300} height={240} rx={30} fill="#eef6e4" stroke="#3f7d3a" strokeWidth={6} />
				<circle cx={0} cy={-50} r={34} fill="#d9e8c6" stroke="#3f7d3a" strokeWidth={3} />
			</g>
			{LOCAL.map((g, i) => {
				const [rx, ry] = rotate(g, angle);
				const x = rx + (SETTLED[i][0] - rx) * fall;
				const y = ry + (SETTLED[i][1] - ry) * fall;
				return <circle key={i} cx={x} cy={y} r={17} fill="#f3e3b5" stroke="#b58b45" strokeWidth={3} />;
			})}
			<g transform="translate(180,-170)">
				<line x1={0} y1={0} x2={0} y2={60} stroke={C.muted} strokeWidth={5} />
				<path d="M-10,56 L0,74 L10,56 Z" fill={C.muted} />
				<text x={-12} y={36} fontSize={22} fontWeight={800} fill={C.muted} textAnchor="end">重力</text>
			</g>
		</svg>
	);
};

export const Gravity: React.FC = () => {
	const frame = useCurrentFrame();
	const turn = interpolate(frame, [gv4.from + 10, gv4.from + 70], [0, 1], clamp);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点四">重力：淀粉体—平衡石假说</Header>
			<Appear at={gv3.from} style={{position: 'absolute', left: 120, top: 190}}>
				<Statocyte turn={turn} />
			</Appear>
			<Appear at={gv3.from} style={{position: 'absolute', left: 170, top: 600, fontSize: 28, fontWeight: 900, color: C.brown}}>
				平衡石细胞：<span style={{color: '#b58b45'}}>●</span> 淀粉体沉在下侧
			</Appear>
			<div style={{position: 'absolute', left: 640, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 20, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
				<Appear at={gv2.from}>
					重力信号 → <Hl>运输生长素的信号</Hl> → 生长素<Hl>分布不均衡</Hl> → 调节生长方向
				</Appear>
				<Appear at={gv3.from}>感受重力：富含<Hl c={C.orange}>淀粉体</Hl>的<Hl c={C.orange}>平衡石细胞</Hl></Appear>
				<Appear at={gv4.from}>方向改变 → 淀粉体<Hl>沿重力方向沉降</Hl> → 信号分子改变 → 生长素<Hl>不对称分布</Hl></Appear>
			</div>
			<Appear at={gv5.from} style={{position: 'absolute', left: 640, right: 90, top: 560}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 28, padding: '12px 22px'}}>
					重力通过平衡石细胞<Hl>转换成运输生长素的信号</Hl>；太空失重时根<Hl>失去向地性</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
