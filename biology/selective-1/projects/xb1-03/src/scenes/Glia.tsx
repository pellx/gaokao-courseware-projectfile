import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.glia;
const {gl1, gl2, gl3, gl4, gl5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// Glial cells scattered around one neuron (deterministic positions).
const GLIA = Array.from({length: 34}, (_, i) => {
	const a = i * 2.399;
	const r = 95 + (i % 5) * 26;
	return {x: 310 + Math.cos(a) * r * 1.35, y: 170 + Math.sin(a) * r * 0.75};
});

// Fibre cross-sections packed inside one nerve.
const FIBRES = Array.from({length: 19}, (_, i) => {
	if (i === 0) return {x: 0, y: 0};
	const ring = i < 7 ? 1 : 2;
	const k = ring === 1 ? i - 1 : i - 7;
	const n = ring === 1 ? 6 : 12;
	const a = (k / n) * Math.PI * 2;
	return {x: Math.cos(a) * ring * 48, y: Math.sin(a) * ring * 48};
});

export const Glia: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六、七">神经胶质细胞 · 神经纤维与神经</Header>
		<div style={{position: 'absolute', left: 90, top: 170, width: 820}}>
			<svg width={620} height={340} viewBox="0 0 620 340">
				<G at={gl1.from}>
					{GLIA.map((p, i) => (
						<circle key={i} cx={p.x} cy={p.y} r={13} fill={C.green} opacity={0.75} />
					))}
					<circle cx={300} cy={170} r={46} fill="#f6d7b0" stroke={C.brown} strokeWidth={6} />
					<text x={300} y={180} fontSize={26} fontWeight={900} fill={C.brown} textAnchor="middle">神经元</text>
				</G>
			</svg>
			<Appear at={gl1.from + 20} style={{fontSize: 36, fontWeight: 900, marginTop: -10}}>
				<span style={{color: C.green}}>神经胶质细胞</span>数量是神经元的 <Hl>10～50 倍</Hl>
			</Appear>
			<div style={{display: 'flex', gap: 12, marginTop: 18}}>
				{['支持', '保护', '营养', '修复'].map((s, i) => (
					<Appear key={s} at={at(gl2.from, gl2.to, 0.2 + i * 0.07)} dy={10}>
						<span style={{display: 'inline-block', border: `3px solid ${C.orange}`, background: C.orangeSoft, color: C.orange, borderRadius: 14, padding: '6px 20px', fontSize: 34, fontWeight: 800}}>{s}</span>
					</Appear>
				))}
			</div>
			<Appear at={at(gl2.from, gl2.to, 0.65)} style={{fontSize: 30, marginTop: 14}}>
				外周神经系统中，参与构成神经纤维表面的<Hl>髓鞘</Hl>
			</Appear>
		</div>
		<div style={{position: 'absolute', left: 980, right: 90, top: 170}}>
			<Appear at={gl3.from}>
				<div style={{fontSize: 34, fontWeight: 900}}>
					<Hl>神经纤维</Hl> = 轴突 + 髓鞘
				</div>
				<svg width={840} height={110} viewBox="0 0 840 110">
					<line x1={20} y1={55} x2={820} y2={55} stroke={C.red} strokeWidth={10} />
					{[60, 210, 360, 510, 660].map((x) => (
						<rect key={x} x={x} y={33} width={130} height={44} rx={22} fill="#f3e2c3" stroke={C.brown} strokeWidth={3} />
					))}
				</svg>
			</Appear>
			<Appear at={gl4.from} style={{marginTop: 18}}>
				<div style={{fontSize: 34, fontWeight: 900}}>
					<Hl c={C.green}>神经</Hl> = 许多神经纤维集结成束 + 包膜
				</div>
				<svg width={840} height={260} viewBox="0 0 840 260">
					<circle cx={180} cy={130} r={122} fill={C.greenSoft} stroke={C.green} strokeWidth={8} />
					{FIBRES.map((f, i) => (
						<g key={i}>
							<circle cx={180 + f.x} cy={130 + f.y} r={22} fill="#f3e2c3" stroke={C.brown} strokeWidth={3} />
							<circle cx={180 + f.x} cy={130 + f.y} r={8} fill={C.red} />
						</g>
					))}
					<text x={340} y={110} fontSize={28} fontWeight={700} fill={C.muted}>横切面：</text>
					<text x={340} y={150} fontSize={28} fontWeight={700} fill={C.muted}>每个小圆是一条神经纤维，</text>
					<text x={340} y={190} fontSize={28} fontWeight={700} fill={C.muted}>外面的绿色环是包膜</text>
				</svg>
			</Appear>
		</div>
		<Appear at={gl5.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 32}}>
				神经元 → 神经纤维 → 神经是三个层次：一个神经元一般只有一条轴突，一条神经里有<Hl>许多条</Hl>神经纤维。
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
