import React from 'react';
import {C} from '../theme';
import {Appear} from './ui';
import {chem} from './chem';

// Drawings and layouts shared by the 必修1 scenes.

// A big two- or three-column comparison: one bordered column per item, each
// with a title and a list of lines. Lines fade in at their own `at`.
export type Col = {title: React.ReactNode; color: string; at: number; lines: {at?: number; children: React.ReactNode}[]};
export const Compare: React.FC<{cols: Col[]; top: number; height: number; left?: number; right?: number; fontSize?: number; gap?: number}> = ({
	cols,
	top,
	height,
	left = 90,
	right = 90,
	fontSize = 31,
	gap = 28,
}) => (
	<div style={{position: 'absolute', left, right, top, display: 'flex', gap}}>
		{cols.map((c, i) => (
			<Appear key={i} at={c.at} style={{flex: 1}}>
				<div style={{border: `5px solid ${c.color}`, borderRadius: 24, height, boxSizing: 'border-box', background: '#fff', overflow: 'hidden'}}>
					<div style={{background: c.color, color: '#fff', fontSize: fontSize * 1.2, fontWeight: 900, padding: '10px 24px'}}>{c.title}</div>
					<div style={{padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10}}>
						{c.lines.map((l, j) => (
							<Appear key={j} at={l.at ?? c.at} dy={0} dx={-12}>
								<div style={{fontSize, fontWeight: 700, lineHeight: 1.45}}>{l.children}</div>
							</Appear>
						))}
					</div>
				</div>
			</Appear>
		))}
	</div>
);

// Chemistry text for SVG/HTML labels, as a fragment.
export const F: React.FC<{children: string}> = ({children}) => <>{chem(children)}</>;

// A pill-shaped tag.
export const Tag: React.FC<{color?: string; children: React.ReactNode; size?: number}> = ({color = C.orange, children, size = 26}) => (
	<span style={{display: 'inline-block', background: color, color: '#fff', fontWeight: 800, fontSize: size, padding: '2px 12px', borderRadius: 8, margin: '0 6px', verticalAlign: 'middle'}}>{children}</span>
);

// Cell membrane (fluid mosaic): a phospholipid bilayer from x to x + width,
// its middle at y. Proteins sit on the surface ('top' / 'bottom'), dip into
// one layer ('embedTop' / 'embedBottom') or span it ('through'). `glyco` puts
// a sugar chain on the outer (top) side at each x; `glycoOn` is drawn on top
// of a protein (glycoprotein) or a lipid head (glycolipid) – only the look differs.
export type MemProtein = {x: number; w: number; kind: 'top' | 'bottom' | 'embedTop' | 'embedBottom' | 'through'; color?: string; label?: string};
const HEAD = 13;
const STEP = 30;
const TAIL = 34;
export const MEM_HALF = HEAD * 2 + TAIL; // distance from the middle to the outer edge of the heads
export const Membrane: React.FC<{x: number; y: number; width: number; proteins?: MemProtein[]; glyco?: number[]; channel?: number}> = ({
	x,
	y,
	width,
	proteins = [],
	glyco = [],
}) => {
	const n = Math.floor(width / STEP);
	const covered = (cx: number) => proteins.some((p) => p.kind === 'through' && Math.abs(cx - p.x) < p.w / 2 + 6);
	const lipids = Array.from({length: n}, (_, i) => x + STEP / 2 + i * STEP).filter((cx) => !covered(cx));
	const pc = (p: MemProtein) => p.color ?? C.green;
	return (
		<g>
			{lipids.map((cx) =>
				[-1, 1].map((side) => {
					const hy = y + side * (TAIL + HEAD);
					return (
						<g key={`${cx}${side}`}>
							<line x1={cx - 5} y1={hy - side * HEAD} x2={cx - 5} y2={y + side * 3} stroke={C.brown} strokeWidth={3.5} />
							<line x1={cx + 5} y1={hy - side * HEAD} x2={cx + 5} y2={y + side * 3} stroke={C.brown} strokeWidth={3.5} />
							<circle cx={cx} cy={hy} r={HEAD} fill={C.orange} />
						</g>
					);
				}),
			)}
			{proteins.map((p, i) => {
				const h = MEM_HALF * 2 + 30;
				const box =
					p.kind === 'through'
						? {y: y - h / 2, h}
						: p.kind === 'top'
							? {y: y - MEM_HALF - 40, h: 44}
							: p.kind === 'bottom'
								? {y: y + MEM_HALF - 4, h: 44}
								: p.kind === 'embedTop'
									? {y: y - MEM_HALF - 26, h: MEM_HALF + 20}
									: {y: y + 6, h: MEM_HALF + 20};
				return (
					<g key={i}>
						<rect x={p.x - p.w / 2} y={box.y} width={p.w} height={box.h} rx={Math.min(p.w, box.h) / 2.2} fill={C.greenSoft} stroke={pc(p)} strokeWidth={4} />
						{p.label && (
							<text x={p.x} y={box.y + box.h / 2 + 9} fontSize={24} fontWeight={800} fill={pc(p)} textAnchor="middle">
								{p.label}
							</text>
						)}
					</g>
				);
			})}
			{glyco.map((gx, i) => {
				const top = y - MEM_HALF - (proteins.some((p) => Math.abs(p.x - gx) < p.w / 2 && p.kind !== 'bottom' && p.kind !== 'embedBottom') ? 36 : 8);
				return (
					<g key={`g${i}`}>
						<line x1={gx} y1={top} x2={gx} y2={top - 54} stroke={C.red} strokeWidth={4} />
						<line x1={gx} y1={top - 30} x2={gx + 20} y2={top - 50} stroke={C.red} strokeWidth={4} />
						{[0, 1, 2].map((k) => (
							<circle key={k} cx={gx} cy={top - 12 - k * 20} r={7} fill={C.red} />
						))}
						<circle cx={gx + 22} cy={top - 52} r={7} fill={C.red} />
					</g>
				);
			})}
		</g>
	);
};

// Mitochondrion centred on (cx, cy): smooth outer membrane, folded inner membrane (cristae).
export const Mito: React.FC<{cx: number; cy: number; rx?: number; ry?: number}> = ({cx, cy, rx = 260, ry = 130}) => {
	const n = 7;
	const inner = rx - 26;
	const h = ry - 26;
	// Cristae: closed fingers of inner membrane, alternately from the top and the bottom.
	const fingers = Array.from({length: n}, (_, i) => {
		const x = cx - inner + ((i + 0.6) * 2 * inner) / (n + 0.2);
		const edge = h * Math.sqrt(Math.max(0, 1 - ((x - cx) / inner) ** 2)) - 2;
		const top = i % 2 === 0;
		const s = top ? 1 : -1;
		const tip = cy + s * h * 0.3;
		return `M${x - 9},${cy - s * edge} L${x - 9},${tip} Q${x},${tip + s * 18} ${x + 9},${tip} L${x + 9},${cy - s * edge}`;
	});
	return (
		<g>
			<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={C.orangeSoft} stroke={C.orange} strokeWidth={6} />
			<ellipse cx={cx} cy={cy} rx={inner} ry={h} fill="#fff7ec" stroke={C.red} strokeWidth={5} />
			{fingers.map((d, i) => (
				<path key={i} d={d} fill="#fde3d6" stroke={C.red} strokeWidth={5} strokeLinejoin="round" />
			))}
		</g>
	);
};

// Chloroplast: double membrane with stacks of thylakoids (grana).
export const Chloro: React.FC<{cx: number; cy: number; rx?: number; ry?: number}> = ({cx, cy, rx = 260, ry = 130}) => {
	const stacks = [-0.62, -0.31, 0, 0.31, 0.62];
	return (
		<g>
			<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={C.greenSoft} stroke={C.green} strokeWidth={6} />
			<ellipse cx={cx} cy={cy} rx={rx - 16} ry={ry - 16} fill="#f3faf4" stroke={C.green} strokeWidth={4} />
			{stacks.map((f, i) => {
				const x = cx + f * rx;
				const k = i % 2 ? 4 : 5;
				return (
					<g key={i}>
						{Array.from({length: k}, (_, j) => (
							<rect key={j} x={x - 34} y={cy - (k * 16) / 2 + j * 16} width={68} height={13} rx={6} fill={C.green} />
						))}
						{i < stacks.length - 1 && <line x1={x + 34} y1={cy} x2={cx + stacks[i + 1] * rx - 34} y2={cy} stroke={C.green} strokeWidth={4} />}
					</g>
				);
			})}
		</g>
	);
};

// Mature plant cell: cell wall, protoplast layer (membrane + cytoplasm + tonoplast) and a
// central vacuole. `shrink` 0–1 pulls the protoplast away from the wall (plasmolysis).
export const PlantCell: React.FC<{x: number; y: number; w: number; h: number; shrink?: number; hlLayer?: boolean}> = ({x, y, w, h, shrink = 0, hlLayer}) => {
	const inset = 12 + shrink * Math.min(w, h) * 0.22;
	const px = x + inset;
	const py = y + inset;
	const pw = w - inset * 2;
	const ph = h - inset * 2;
	const v = 22;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={18} fill="#fffaf2" stroke={C.brown} strokeWidth={10} />
			<rect x={px} y={py} width={pw} height={ph} rx={30} fill={hlLayer ? '#fde9c8' : C.greenSoft} stroke={C.green} strokeWidth={4} />
			<rect x={px + v} y={py + v} width={pw - v * 2} height={ph - v * 2} rx={26} fill={C.orange} opacity={0.25 + shrink * 0.45} stroke={C.orange} strokeWidth={3} />
			<circle cx={px + 18} cy={py + ph / 2} r={12} fill={C.brown} />
		</g>
	);
};

// Mitosis drawings: one cell (plant: rectangle, animal: round) at a given stage.
// Poles are left and right; the equatorial plate is vertical through cx.
export type Stage = 'inter' | 'pro' | 'meta' | 'ana' | 'telo';
const CHROM = [C.red, C.orange, C.red, C.orange];
const Sisters: React.FC<{x: number; y: number; rot?: number; color: string; len?: number; single?: boolean}> = ({x, y, rot = 0, color, len = 54, single}) => (
	<g transform={`translate(${x},${y}) rotate(${rot})`}>
		{single ? (
			<rect x={-5} y={-len / 2} width={10} height={len} rx={5} fill={color} />
		) : (
			<>
				<rect x={-11} y={-len / 2} width={10} height={len} rx={5} fill={color} />
				<rect x={1} y={-len / 2} width={10} height={len} rx={5} fill={color} />
			</>
		)}
		<circle cx={0} cy={0} r={5} fill="#fff" stroke={color} strokeWidth={2} />
	</g>
);
// A chromatid being pulled to a pole: V shape with the centromere leading.
const Vee: React.FC<{x: number; y: number; dir: 1 | -1; color: string}> = ({x, y, dir, color}) => (
	<path d={`M${x - dir * 30},${y - 22} L${x},${y} L${x - dir * 30},${y + 22}`} fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
);

export const MitosisCell: React.FC<{cx: number; cy: number; stage: Stage; animal?: boolean; w?: number; h?: number}> = ({cx, cy, stage, animal, w = 300, h = 230}) => {
	const L = cx - w / 2 + 20;
	const R = cx + w / 2 - 20;
	const ys = [-66, -22, 22, 66];
	const spindle = (tx: number, ty: number[]) =>
		ty.flatMap((y, i) => [
			<line key={`l${i}`} x1={L} y1={cy} x2={tx - 12} y2={cy + y} stroke="#c9b9a6" strokeWidth={2.5} />,
			<line key={`r${i}`} x1={R} y1={cy} x2={tx + 12} y2={cy + y} stroke="#c9b9a6" strokeWidth={2.5} />,
		]);
	const telo = stage === 'telo';
	return (
		<g>
			{animal ? (
				telo ? (
					<>
						<ellipse cx={cx - w / 4} cy={cy} rx={w / 4 + 6} ry={h / 2 - 14} fill={C.panel} stroke={C.orange} strokeWidth={5} />
						<ellipse cx={cx + w / 4} cy={cy} rx={w / 4 + 6} ry={h / 2 - 14} fill={C.panel} stroke={C.orange} strokeWidth={5} />
					</>
				) : (
					<ellipse cx={cx} cy={cy} rx={w / 2} ry={h / 2} fill={C.panel} stroke={C.orange} strokeWidth={5} />
				)
			) : (
				<rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={14} fill={C.panel} stroke={C.brown} strokeWidth={6} />
			)}
			{animal && stage !== 'inter' && !telo && (
				<>
					{[L, R].map((px) => (
						<g key={px}>
							{[0, 45, 90, 135].map((a) => (
								<line key={a} x1={px - 16 * Math.cos((a * Math.PI) / 180)} y1={cy - 16 * Math.sin((a * Math.PI) / 180)} x2={px + 16 * Math.cos((a * Math.PI) / 180)} y2={cy + 16 * Math.sin((a * Math.PI) / 180)} stroke={C.brown} strokeWidth={2} />
							))}
							<circle cx={px} cy={cy} r={6} fill={C.brown} />
						</g>
					))}
				</>
			)}
			{stage === 'inter' && (
				<>
					<circle cx={cx} cy={cy} r={62} fill="#fff" stroke={C.brown} strokeWidth={4} />
					<circle cx={cx + 18} cy={cy - 14} r={14} fill={C.brown} opacity={0.7} />
					<path d={`M${cx - 40},${cy + 10} c15,-25 30,25 45,0 s25,-20 35,10`} fill="none" stroke={C.red} strokeWidth={4} />
					<path d={`M${cx - 30},${cy - 25} c10,15 25,-15 35,5`} fill="none" stroke={C.orange} strokeWidth={4} />
				</>
			)}
			{stage === 'pro' && (
				<>
					<circle cx={cx} cy={cy} r={70} fill="none" stroke={C.brown} strokeWidth={3} strokeDasharray="8 10" />
					{spindle(cx, [-60, -20, 20, 60])}
					{[[-30, -30, 20], [28, -24, -35], [-22, 34, -60], [30, 30, 15]].map(([dx, dy, r], i) => (
						<Sisters key={i} x={cx + dx} y={cy + dy} rot={r} color={CHROM[i]} />
					))}
				</>
			)}
			{stage === 'meta' && (
				<>
					{spindle(cx, ys)}
					{ys.map((y, i) => (
						<Sisters key={i} x={cx} y={cy + y} rot={90} color={CHROM[i]} len={44} />
					))}
				</>
			)}
			{stage === 'ana' && (
				<>
					{spindle(cx, ys)}
					{ys.map((y, i) => (
						<g key={i}>
							<Vee x={cx - 60} y={cy + y * 0.8} dir={-1} color={CHROM[i]} />
							<Vee x={cx + 60} y={cy + y * 0.8} dir={1} color={CHROM[i]} />
						</g>
					))}
				</>
			)}
			{telo && (
				<>
					{[-1, 1].map((s) => (
						<g key={s}>
							<circle cx={cx + s * (w / 4)} cy={cy} r={42} fill="#fff" stroke={C.brown} strokeWidth={3} />
							<path d={`M${cx + s * (w / 4) - 25},${cy + 5} c10,-18 20,18 30,0 s15,-12 20,6`} fill="none" stroke={C.red} strokeWidth={4} />
						</g>
					))}
					{!animal && <line x1={cx} y1={cy - h / 2 + 18} x2={cx} y2={cy + h / 2 - 18} stroke={C.green} strokeWidth={8} strokeDasharray="14 6" />}
				</>
			)}
		</g>
	);
};
