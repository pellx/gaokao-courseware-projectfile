import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';
import {C} from '../theme';
import {G} from './kit';
import {chem} from './chem';

// ───────── 元素周期表（SVG）─────────
export const SYM = (
	'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr ' +
	'Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu ' +
	'Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr ' +
	'Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'
).split(' ');

// 元素在主表中的位置（周期 1–7，族 1–18）；镧系、锕系（57–71、89–103）放在族 3 的一个格里。
export const pos = (z: number): [number, number] => {
	if (z === 1) return [1, 1];
	if (z === 2) return [1, 18];
	const starts = [3, 11, 19, 37, 55, 87];
	let p = 2;
	for (let i = starts.length - 1; i >= 0; i--) if (z >= starts[i]) { p = i + 2; break; }
	const k = z - starts[p - 2]; // 0-based index in period
	if (p <= 3) return [p, k < 2 ? k + 1 : k + 11];
	if (p <= 5) return [p, k + 1];
	// periods 6, 7: k 0,1 → groups 1,2; k 2..16 → f-series (group 3 cell); k 17.. → group 4..
	if (k < 2) return [p, k + 1];
	if (k <= 16) return [p, 3];
	return [p, k - 13];
};

export type Mark = {zs: number[]; color: string; at: number; fill?: string};

export const PTable: React.FC<{
	at: number;
	cell?: number;
	periods?: number; // 只画前几周期
	marks?: Mark[];
	symbols?: boolean;
	groupLabels?: boolean;
	periodLabels?: boolean;
	extra?: React.ReactNode; // 额外的 SVG（坐标用 cx(group)、cy(period) 自己算）
}> = ({at, cell = 50, periods = 7, marks = [], symbols = true, groupLabels = false, periodLabels = false, extra}) => {
	const ox = periodLabels ? cell * 0.9 : 4;
	const oy = groupLabels ? cell * 0.8 : 4;
	const w = ox + cell * 18 + 4;
	const h = oy + cell * periods + 4;
	const zs = Array.from({length: 118}, (_, i) => i + 1).filter((z) => pos(z)[0] <= periods);
	const seen = new Set<string>();
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{overflow: 'visible'}}>
			<G at={at}>
				{zs.map((z) => {
					const [p, g] = pos(z);
					const key = `${p}-${g}`;
					if (seen.has(key)) return null;
					seen.add(key);
					const fseries = (p === 6 || p === 7) && g === 3;
					return (
						<g key={z}>
							<rect x={ox + (g - 1) * cell + 2} y={oy + (p - 1) * cell + 2} width={cell - 4} height={cell - 4} rx={6} fill={C.panel} stroke={C.line} strokeWidth={2} />
							{symbols && (
								<text x={ox + (g - 0.5) * cell} y={oy + (p - 0.5) * cell + cell * 0.14} fontSize={fseries ? cell * 0.26 : cell * 0.38} fontWeight={800} fill={C.muted} textAnchor="middle">
									{fseries ? (p === 6 ? '镧系' : '锕系') : SYM[z - 1]}
								</text>
							)}
						</g>
					);
				})}
				{groupLabels &&
					Array.from({length: 18}, (_, i) => (
						<text key={i} x={ox + (i + 0.5) * cell} y={oy - cell * 0.22} fontSize={cell * 0.32} fontWeight={700} fill={C.muted} textAnchor="middle">
							{i + 1}
						</text>
					))}
				{periodLabels &&
					Array.from({length: periods}, (_, i) => (
						<text key={i} x={ox - cell * 0.35} y={oy + (i + 0.5) * cell + cell * 0.12} fontSize={cell * 0.34} fontWeight={800} fill={C.muted} textAnchor="middle">
							{i + 1}
						</text>
					))}
			</G>
			{marks.map((m, i) => (
				<G key={i} at={m.at}>
					{m.zs.filter((z) => pos(z)[0] <= periods).map((z) => {
						const [p, g] = pos(z);
						const fseries = (p === 6 || p === 7) && g === 3;
						return (
							<g key={z}>
								<rect x={ox + (g - 1) * cell + 2} y={oy + (p - 1) * cell + 2} width={cell - 4} height={cell - 4} rx={6} fill={m.fill ?? m.color} stroke={m.color} strokeWidth={3} />
								{symbols && (
									<text x={ox + (g - 0.5) * cell} y={oy + (p - 0.5) * cell + cell * 0.14} fontSize={fseries ? cell * 0.26 : cell * 0.38} fontWeight={900} fill={m.fill ? m.color : '#fff'} textAnchor="middle">
										{fseries ? (p === 6 ? '镧系' : '锕系') : SYM[z - 1]}
									</text>
								)}
							</g>
						);
					})}
				</G>
			))}
			{extra}
		</svg>
	);
};
// 周期表格子中心坐标（与 PTable 的 ox/oy 默认值一致：无标签时 4，有标签时按 cell 算）。
export const pcx = (g: number, cell = 50, periodLabels = false) => (periodLabels ? cell * 0.9 : 4) + (g - 0.5) * cell;
export const pcy = (p: number, cell = 50, groupLabels = false) => (groupLabels ? cell * 0.8 : 4) + (p - 0.5) * cell;

// ───────── 轨道表示式 ─────────
// boxes: 每个能级一组方框；e 是每个方框里的电子，'ud' 一对、'u' 向上、'd' 向下、'' 空。
export const Orb: React.FC<{
	levels: {label: string; e: string[]; color?: string; at?: number}[];
	at: number;
	size?: number;
	bad?: number[][]; // [能级序号, 方框序号] 标红
}> = ({levels, at, size = 56, bad = []}) => {
	const gap = size * 0.45;
	let x = 6;
	const parts = levels.map((lv) => {
		const x0 = x;
		x += lv.e.length * size + gap;
		return x0;
	});
	const w = x;
	const h = size + size * 0.75;
	const arrow = (cx: number, up: boolean, col: string) => {
		const y1 = up ? size * 0.85 : size * 0.15;
		const y2 = up ? size * 0.15 : size * 0.85;
		const hd = size * 0.16 * (up ? 1 : -1);
		return (
			<g stroke={col} strokeWidth={size * 0.07} strokeLinecap="round" fill="none">
				<line x1={cx} y1={y1} x2={cx} y2={y2} />
				<polyline points={`${cx - size * 0.11},${y2 + hd} ${cx},${y2} ${cx + size * 0.11},${y2 + hd}`} />
			</g>
		);
	};
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
			{levels.map((lv, li) => (
				<G key={li} at={lv.at ?? at}>
					{lv.e.map((e, bi) => {
						const bx = parts[li] + bi * size;
						const isBad = bad.some(([a, b]) => a === li && b === bi);
						const col = isBad ? C.red : lv.color ?? C.text;
						return (
							<g key={bi} transform={`translate(${bx},0)`}>
								<rect x={0} y={0} width={size} height={size} fill={isBad ? C.redSoft : '#fff'} stroke={isBad ? C.red : C.text} strokeWidth={3} />
								{e === 'ud' && (
									<>
										{arrow(size * 0.33, true, col)}
										{arrow(size * 0.67, false, col)}
									</>
								)}
								{e === 'uu' && (
									<>
										{arrow(size * 0.33, true, col)}
										{arrow(size * 0.67, true, col)}
									</>
								)}
								{e === 'u' && arrow(size * 0.5, true, col)}
								{e === 'd' && arrow(size * 0.5, false, col)}
							</g>
						);
					})}
					<text x={parts[li] + (lv.e.length * size) / 2} y={size + size * 0.6} fontSize={size * 0.46} fontWeight={800} fill={lv.color ?? C.muted} textAnchor="middle">
						{lv.label}
					</text>
				</G>
			))}
		</svg>
	);
};

// ───────── 晶胞（斜二测立方体）─────────
export type V3 = [number, number, number];
export const CORNERS: V3[] = [0, 1].flatMap((x) => [0, 1].flatMap((y) => [0, 1].map((z) => [x, y, z] as V3)));
export const FACES: V3[] = [
	[0.5, 0.5, 0], [0.5, 0.5, 1], [0.5, 0, 0.5], [0.5, 1, 0.5], [0, 0.5, 0.5], [1, 0.5, 0.5],
];
export const EDGES: V3[] = [
	[0.5, 0, 0], [0.5, 1, 0], [0.5, 0, 1], [0.5, 1, 1],
	[0, 0.5, 0], [1, 0.5, 0], [0, 0.5, 1], [1, 0.5, 1],
	[0, 0, 0.5], [1, 0, 0.5], [0, 1, 0.5], [1, 1, 0.5],
];
export const BODY: V3[] = [[0.5, 0.5, 0.5]];
export const TETRA_ALT: V3[] = [
	[0.25, 0.25, 0.25], [0.75, 0.75, 0.25], [0.75, 0.25, 0.75], [0.25, 0.75, 0.75],
];
export const TETRA_ALL: V3[] = [0.25, 0.75].flatMap((x) => [0.25, 0.75].flatMap((y) => [0.25, 0.75].map((z) => [x, y, z] as V3)));

export const Cell: React.FC<{
	s?: number;
	at: number;
	atoms: {p: V3; c: string; r?: number; at?: number; label?: string}[];
	lines?: {a: V3; b: V3; c?: string; at?: number; dash?: boolean; w?: number}[];
	depth?: number; // 斜二测的纵深缩放
}> = ({s = 300, at, atoms, lines = [], depth = 0.5}) => {
	const k = depth;
	const ox = 30;
	const oy = 30 + s * k * 0.7 + s;
	const P = ([x, y, z]: V3): [number, number] => [ox + x * s + y * s * k * 0.7, oy - z * s - y * s * k * 0.7];
	const w = s + s * k * 0.7 + 60;
	const h = s + s * k * 0.7 + 60;
	const edges: [V3, V3][] = [];
	CORNERS.forEach((a) =>
		CORNERS.forEach((b) => {
			const d = Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
			if (d === 1 && a.join() < b.join()) edges.push([a, b]);
		}),
	);
	// 被遮住的三条棱：都经过 (0,1,0)
	const hidden = (a: V3, b: V3) => [a, b].some((v) => v[0] === 0 && v[1] === 1 && v[2] === 0);
	const sorted = [...atoms].sort((a, b) => b.p[1] - a.p[1] || a.p[0] - b.p[0]);
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
			<G at={at}>
				{edges.map(([a, b], i) => {
					const [x1, y1] = P(a);
					const [x2, y2] = P(b);
					return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.muted} strokeWidth={3} strokeDasharray={hidden(a, b) ? '8 7' : undefined} />;
				})}
			</G>
			{lines.map((l, i) => {
				const [x1, y1] = P(l.a);
				const [x2, y2] = P(l.b);
				return (
					<G key={i} at={l.at ?? at}>
						<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={l.c ?? C.orange} strokeWidth={l.w ?? 4} strokeDasharray={l.dash ? '8 6' : undefined} />
					</G>
				);
			})}
			{sorted.map((a, i) => {
				const [x, y] = P(a.p);
				const r = a.r ?? s * 0.06;
				return (
					<G key={i} at={a.at ?? at}>
						<circle cx={x} cy={y} r={r} fill={a.c} stroke="#fff" strokeWidth={2} />
						<circle cx={x - r * 0.3} cy={y - r * 0.3} r={r * 0.3} fill="#fff" opacity={0.35} />
						{a.label && (
							<text x={x} y={y + r * 0.36} fontSize={r * 1.0} fontWeight={900} fill="#fff" textAnchor="middle">
								{a.label}
							</text>
						)}
					</G>
				);
			})}
		</svg>
	);
};

// ───────── 分子结构图（2D）─────────
export type MAtom = {x: number; y: number; label: string; c?: string; r?: number};
export const Mol: React.FC<{
	w: number;
	h: number;
	at: number;
	atoms: MAtom[];
	bonds?: {a: number; b: number; n?: number; c?: string; dash?: boolean}[];
	lp?: {a: number; ang: number; at?: number}[]; // 孤电子对：画成一个小椭圆瓣 + 两个点
	arcs?: {a: number; from: number; to: number; label: string; r?: number; at?: number}[]; // 键角弧，角度为度（0 = 向右，逆时针为正，SVG y 向下所以取负）
	notes?: {x: number; y: number; text: string; c?: string; size?: number; at?: number}[];
}> = ({w, h, at, atoms, bonds = [], lp = [], arcs = [], notes = []}) => {
	const rad = (d: number) => (d * Math.PI) / 180;
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{overflow: 'visible'}}>
			<G at={at}>
				{bonds.map((b, i) => {
					const A = atoms[b.a];
					const B = atoms[b.b];
					const n = b.n ?? 1;
					const dx = B.x - A.x;
					const dy = B.y - A.y;
					const L = Math.hypot(dx, dy) || 1;
					const nx = -dy / L;
					const ny = dx / L;
					return (
						<g key={i}>
							{Array.from({length: n}, (_, k) => {
								const off = (k - (n - 1) / 2) * 10;
								return <line key={k} x1={A.x + nx * off} y1={A.y + ny * off} x2={B.x + nx * off} y2={B.y + ny * off} stroke={b.c ?? C.text} strokeWidth={5} strokeDasharray={b.dash ? '9 7' : undefined} />;
							})}
						</g>
					);
				})}
			</G>
			{lp.map((l, i) => {
				const A = atoms[l.a];
				const r0 = (A.r ?? 30) + 6;
				const ex = A.x + Math.cos(rad(l.ang)) * (r0 + 22);
				const ey = A.y - Math.sin(rad(l.ang)) * (r0 + 22);
				return (
					<G key={i} at={l.at ?? at}>
						<ellipse cx={ex} cy={ey} rx={26} ry={16} transform={`rotate(${-l.ang} ${ex} ${ey})`} fill={C.orangeSoft} stroke={C.orange} strokeWidth={3} />
						{[-1, 1].map((sgn) => (
							<circle key={sgn} cx={ex + Math.cos(rad(l.ang + 90)) * 7 * sgn} cy={ey - Math.sin(rad(l.ang + 90)) * 7 * sgn} r={4.5} fill={C.orange} />
						))}
					</G>
				);
			})}
			<G at={at}>
				{atoms.map((a, i) => (
					<g key={i}>
						<circle cx={a.x} cy={a.y} r={a.r ?? 30} fill={a.c ?? C.text} stroke="#fff" strokeWidth={3} />
						<text x={a.x} y={a.y + (a.r ?? 30) * 0.38} fontSize={(a.r ?? 30) * 1.0} fontWeight={900} fill="#fff" textAnchor="middle">
							{a.label}
						</text>
					</g>
				))}
			</G>
			{arcs.map((ac, i) => {
				const A = atoms[ac.a];
				const r = ac.r ?? 60;
				const x1 = A.x + Math.cos(rad(ac.from)) * r;
				const y1 = A.y - Math.sin(rad(ac.from)) * r;
				const x2 = A.x + Math.cos(rad(ac.to)) * r;
				const y2 = A.y - Math.sin(rad(ac.to)) * r;
				const mid = (ac.from + ac.to) / 2;
				const large = Math.abs(ac.to - ac.from) > 180 ? 1 : 0;
				return (
					<G key={i} at={ac.at ?? at}>
						<path d={`M${x1},${y1} A${r},${r} 0 ${large} 0 ${x2},${y2}`} fill="none" stroke={C.red} strokeWidth={3} />
						<text x={A.x + Math.cos(rad(mid)) * (r + 34)} y={A.y - Math.sin(rad(mid)) * (r + 34) + 9} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle" stroke="#fff" strokeWidth={6} paintOrder="stroke">
							{ac.label}
						</text>
					</G>
				);
			})}
			{notes.map((n, i) => (
				<G key={i} at={n.at ?? at}>
					<text x={n.x} y={n.y} fontSize={n.size ?? 26} fontWeight={800} fill={n.c ?? C.muted} textAnchor="middle" stroke="#fff" strokeWidth={6} paintOrder="stroke">
						{n.text}
					</text>
				</G>
			))}
		</svg>
	);
};

// ───────── 电子式（Lewis）─────────
// 每个原子：符号 + 上右下左四个方向的点数（0–2）；ion 加方括号和电荷；pairColor 给共用电子对上色。
export type LAtom = {sym: string; d: [number, number, number, number]; c?: string; dc?: string[]};
export const Lewis: React.FC<{
	parts: (LAtom | {bracket: LAtom[]; charge: string} | {text: string; c?: string})[];
	at: number;
	size?: number;
}> = ({parts, at, size = 56}) => {
	const f = useCurrentFrame();
	const o = interpolate(f, [at, at + 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	const dot = (c: string, k: number) => <span key={k} style={{display: 'inline-block', width: size * 0.13, height: size * 0.13, borderRadius: '50%', background: c, margin: size * 0.03}} />;
	const atom = (a: LAtom, key: number) => {
		const cols = a.dc ?? [C.text, C.text, C.text, C.text];
		const n = a.d;
		const row = (k: number, cnt: number) => <div style={{height: size * 0.2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{Array.from({length: cnt}, (_, i) => dot(cols[k], i))}</div>;
		const col = (k: number, cnt: number) => <div style={{width: size * 0.2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>{Array.from({length: cnt}, (_, i) => dot(cols[k], i))}</div>;
		return (
			<div key={key} style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center'}}>
				{row(0, n[0])}
				<div style={{display: 'flex', alignItems: 'center'}}>
					{col(3, n[3])}
					<span style={{fontSize: size, fontWeight: 800, lineHeight: 1, color: a.c ?? C.text}}>{a.sym}</span>
					{col(1, n[1])}
				</div>
				{row(2, n[2])}
			</div>
		);
	};
	return (
		<div style={{display: 'inline-flex', alignItems: 'center', gap: size * 0.05, opacity: o}}>
			{parts.map((p, i) => {
				if ('text' in p) return <span key={i} style={{fontSize: size * 0.8, fontWeight: 800, color: p.c ?? C.muted, margin: `0 ${size * 0.15}px`}}>{chem(p.text)}</span>;
				if ('bracket' in p)
					return (
						<span key={i} style={{display: 'inline-flex', alignItems: 'center'}}>
							<span style={{fontSize: size * 1.6, fontWeight: 300, lineHeight: 1}}>[</span>
							{p.bracket.map((a, k) => atom(a, k))}
							<span style={{fontSize: size * 1.6, fontWeight: 300, lineHeight: 1}}>]</span>
							<sup style={{fontSize: size * 0.5, fontWeight: 800, alignSelf: 'flex-start'}}>{p.charge}</sup>
						</span>
					);
				return atom(p, i);
			})}
		</div>
	);
};

// ───────── 电子排布式 ─────────
// ec('[Ar]3d6 4s2') → [Ar]3d<sup>6</sup>4s<sup>2</sup>；能级后面的数字作上标，记号之间不留空格（与教材一致）。
export const ec = (s: string, hl?: Record<string, string>): React.ReactNode => (
	<span style={{whiteSpace: 'nowrap'}}>
		{s.split(' ').map((tok, i) => {
			const m = tok.match(/^(\[[A-Za-z]+\])?((?:\d+|n|\(n−\d\))[spdf])(\d+)$/);
			if (!m) return <span key={i}>{tok}</span>;
			const color = hl?.[m[2]];
			return (
				<span key={i} style={{color, fontWeight: color ? 900 : undefined}}>
					{m[1]}
					{m[2]}
					<sup style={{fontSize: '0.62em'}}>{m[3]}</sup>
				</span>
			);
		})}
	</span>
);
