import React from 'react';
import {C} from '../theme';
import {Appear, useRamp} from './ui';
import {chem, svgChem} from './chem';
import {G} from './kit';

// Genetics drawings shared by the 必修2 scenes. Genotypes go through chem(),
// so "F1" gets a subscript and "X^[B]" a superscript.

// Punnett square (棋盘法): gametes of one parent across the top, of the other
// down the side. Rows of cells fade in one after another from `at`.
export const Punnett: React.FC<{
	cols: string[];
	rows: string[];
	cells: string[][];
	at: number;
	step?: number;
	cell?: number;
	fontSize?: number;
	corner?: string;
	color?: (g: string, r: number, c: number) => string | undefined;
	note?: (g: string, r: number, c: number) => string | undefined;
	style?: React.CSSProperties;
}> = ({cols, rows, cells, at, step = 10, cell = 110, fontSize = 34, corner = '♀  ♂', color, note, style}) => {
	const head: React.CSSProperties = {background: C.orangeSoft, color: C.orange, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center'};
	return (
		<div style={{position: 'absolute', display: 'grid', gridTemplateColumns: `${cell}px repeat(${cols.length}, ${cell * 1.25}px)`, gridAutoRows: cell * 0.78, gap: 4, fontSize, ...style}}>
			<Appear at={at} dy={0}>
				<div style={{...head, height: '100%', color: C.muted, fontSize: fontSize * 0.7}}>{corner}</div>
			</Appear>
			{cols.map((g, i) => (
				<Appear key={`c${i}`} at={at} dy={0}>
					<div style={{...head, height: '100%'}}>{chem(g)}</div>
				</Appear>
			))}
			{rows.map((rg, r) => (
				<React.Fragment key={r}>
					<Appear at={at} dy={0}>
						<div style={{...head, height: '100%'}}>{chem(rg)}</div>
					</Appear>
					{cols.map((_, c) => {
						const g = cells[r][c];
						const col = color?.(g, r, c);
						const n = note?.(g, r, c);
						return (
							<Appear key={c} at={at + 8 + r * step} dy={0}>
								<div style={{height: '100%', boxSizing: 'border-box', border: `3px solid ${col ?? C.line}`, background: col ? '#fff' : C.panel, borderRadius: 10, color: col ?? C.text, fontWeight: 800, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: 1.1}}>
									<span>{chem(g)}</span>
									{n && <span style={{fontSize: fontSize * 0.6, fontWeight: 700, color: col ?? C.muted}}>{n}</span>}
								</div>
							</Appear>
						);
					})}
				</React.Fragment>
			))}
		</div>
	);
};

// One chromatid (or a duplicated chromosome of two sister chromatids) centred
// on (x, y), `h` tall. Gene bands sit at a fraction `pos` of the height
// (0 = top) and are labelled on the right (or the left with `left`).
export type Band = {pos: number; label?: string; color?: string; left?: boolean};
export const Chromo: React.FC<{
	x: number;
	y: number;
	h: number;
	color: string;
	double?: boolean;
	w?: number;
	bands?: Band[];
	fontSize?: number;
	// centromere position as a fraction of the height
	cen?: number;
	rotate?: number;
	// a second colour for the lower part of the chromatids (after 互换)
	tail?: {from: number; color: string; which?: 'left' | 'right' | 'both'};
}> = ({x, y, h, color, double = false, w = 20, bands = [], fontSize = 26, cen = 0.45, rotate = 0, tail}) => {
	const xs = double ? [x - w * 0.62, x + w * 0.62] : [x];
	const top = y - h / 2;
	return (
		<g transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}>
			{xs.map((cx, k) => {
				const side = k === 0 ? 'left' : 'right';
				const showTail = tail && (tail.which === 'both' || tail.which === side || (!tail.which && side === 'right'));
				return (
					<g key={k}>
						<rect x={cx - w / 2} y={top} width={w} height={h} rx={w / 2} fill={color} />
						{showTail && <rect x={cx - w / 2} y={top + h * tail!.from} width={w} height={h * (1 - tail!.from)} rx={w / 2} fill={tail!.color} />}
						{showTail && <rect x={cx - w / 2} y={top + h * tail!.from} width={w} height={Math.min(w, h * (1 - tail!.from))} fill={tail!.color} />}
					</g>
				);
			})}
			<circle cx={x} cy={top + h * cen} r={w * (double ? 0.62 : 0.42)} fill="#fff" stroke={color} strokeWidth={4} />
			{bands.map((b, i) => {
				const by = top + h * b.pos;
				const x0 = xs[0] - w / 2 - 3;
				const x1 = xs[xs.length - 1] + w / 2 + 3;
				return (
					<g key={i}>
						<rect x={x0} y={by - 5} width={x1 - x0} height={10} fill={b.color ?? '#fff'} stroke="#fff" strokeWidth={2} />
						{b.label && (
							<text x={b.left ? x0 - 10 : x1 + 10} y={by + fontSize * 0.36} fontSize={fontSize} fontWeight={900} fill={b.color && b.color !== '#fff' ? b.color : C.text} textAnchor={b.left ? 'end' : 'start'}>
								{b.label}
							</text>
						)}
					</g>
				);
			})}
		</g>
	);
};

// Cell outline (ellipse) with an optional label under it.
export const CellShape: React.FC<{x: number; y: number; rx: number; ry?: number; label?: React.ReactNode; color?: string; fontSize?: number; dash?: boolean}> = ({
	x,
	y,
	rx,
	ry,
	label,
	color = C.brown,
	fontSize = 26,
	dash,
}) => (
	<g>
		<ellipse cx={x} cy={y} rx={rx} ry={ry ?? rx} fill={C.panel} stroke={color} strokeWidth={4} strokeDasharray={dash ? '10 8' : undefined} />
		{label && (
			<text x={x} y={y + (ry ?? rx) + fontSize + 8} fontSize={fontSize} fontWeight={800} fill={C.muted} textAnchor="middle">
				{label}
			</text>
		)}
	</g>
);

// Pedigree (遗传系谱图). Squares are males, circles females, filled = affected.
export type PNode = {id: string; x: number; y: number; sex: 'm' | 'f'; ill?: boolean; label?: string; at?: number};
export const Pedigree: React.FC<{
	nodes: PNode[];
	couples: [string, string][];
	kids: {parents: [string, string]; children: string[]}[];
	at: number;
	size?: number;
	ill?: string;
	fontSize?: number;
}> = ({nodes, couples, kids, at, size = 52, ill = C.red, fontSize = 24}) => {
	const by = Object.fromEntries(nodes.map((n) => [n.id, n]));
	const when = (id: string) => by[id].at ?? at;
	const stroke = {stroke: C.text, strokeWidth: 4, fill: 'none'};
	return (
		<g>
			{couples.map(([a, b], i) => (
				<G key={`c${i}`} at={Math.max(when(a), when(b))}>
					<line x1={by[a].x} y1={by[a].y} x2={by[b].x} y2={by[b].y} {...stroke} />
				</G>
			))}
			{kids.map((k, i) => {
				const [a, b] = k.parents.map((p) => by[p]);
				const mx = (a.x + b.x) / 2;
				const kidsY = Math.min(...k.children.map((c) => by[c].y));
				const midY = (a.y + kidsY) / 2;
				const xs = k.children.map((c) => by[c].x);
				return (
					<G key={`k${i}`} at={Math.min(...k.children.map(when))}>
						<path d={`M${mx},${a.y} V${midY}`} {...stroke} />
						<path d={`M${Math.min(mx, ...xs)},${midY} H${Math.max(mx, ...xs)}`} {...stroke} />
						{k.children.map((c) => (
							<path key={c} d={`M${by[c].x},${midY} V${by[c].y - size / 2}`} {...stroke} />
						))}
					</G>
				);
			})}
			{nodes.map((n) => (
				<G key={n.id} at={when(n.id)}>
					{n.sex === 'm' ? (
						<rect x={n.x - size / 2} y={n.y - size / 2} width={size} height={size} fill={n.ill ? ill : '#fff'} stroke={C.text} strokeWidth={4} />
					) : (
						<circle cx={n.x} cy={n.y} r={size / 2} fill={n.ill ? ill : '#fff'} stroke={C.text} strokeWidth={4} />
					)}
					{n.label && (
						<text x={n.x} y={n.y + size / 2 + fontSize + 4} fontSize={fontSize} fontWeight={800} fill={C.muted} textAnchor="middle">
							{n.label}
						</text>
					)}
				</G>
			))}
		</g>
	);
};

// Small legend for a pedigree: one male and one female symbol, normal and affected.
export const PedLegend: React.FC<{x: number; y: number; ill?: string; text?: string; fontSize?: number}> = ({x, y, ill = C.red, text = '患者', fontSize = 24}) => (
	<g>
		<rect x={x} y={y - 14} width={28} height={28} fill="#fff" stroke={C.text} strokeWidth={3} />
		<circle cx={x + 52} cy={y} r={14} fill="#fff" stroke={C.text} strokeWidth={3} />
		<text x={x + 76} y={y + 8} fontSize={fontSize} fontWeight={700} fill={C.muted}>正常男女</text>
		<rect x={x + 200} y={y - 14} width={28} height={28} fill={ill} stroke={C.text} strokeWidth={3} />
		<circle cx={x + 252} cy={y} r={14} fill={ill} stroke={C.text} strokeWidth={3} />
		<text x={x + 276} y={y + 8} fontSize={fontSize} fontWeight={700} fill={C.muted}>{text}</text>
	</g>
);

// Genetic diagram (遗传图解): rows of genotypes with phenotypes underneath,
// a generation label on the left, and lines from parents to offspring.
export type CItem = {x: number; geno: string; pheno?: string; color?: string; ratio?: string};
export type CRow = {label: string; y: number; at: number; items: CItem[]; signs?: {x: number; text: string}[]};
export const Cross: React.FC<{
	rows: CRow[];
	links?: [[number, number], [number, number]][];
	labelX?: number;
	fontSize?: number;
}> = ({rows, links = [], labelX = 0, fontSize = 40}) => {
	const sub = fontSize * 0.62;
	return (
		<g>
			{links.map(([[r1, i1], [r2, i2]], k) => {
				const a = rows[r1].items[i1];
				const b = rows[r2].items[i2];
				const y1 = rows[r1].y + (a.pheno ? sub + 22 : 18);
				const y2 = rows[r2].y - fontSize - 6;
				return (
					<G key={k} at={rows[r2].at}>
						<line x1={a.x} y1={y1} x2={b.x} y2={y2} stroke={C.muted} strokeWidth={3} />
					</G>
				);
			})}
			{rows.map((r, k) => (
				<G key={k} at={r.at}>
					<text x={labelX} y={r.y} fontSize={fontSize * 0.85} fontWeight={900} fill={C.muted}>
						{svgChem(r.label, fontSize * 0.85)}
					</text>
					{r.signs?.map((s, i) => (
						<text key={i} x={s.x} y={r.y} fontSize={fontSize} fontWeight={900} fill={C.muted} textAnchor="middle">
							{s.text}
						</text>
					))}
					{r.items.map((it, i) => (
						<g key={i}>
							<text x={it.x} y={r.y} fontSize={fontSize} fontWeight={900} fill={it.color ?? C.text} textAnchor="middle">
								{svgChem(it.geno, fontSize)}
							</text>
							{it.pheno && (
								<text x={it.x} y={r.y + sub + 14} fontSize={sub} fontWeight={700} fill={it.color ?? C.muted} textAnchor="middle">
									{svgChem(it.pheno, sub)}
								</text>
							)}
							{it.ratio && (
								<text x={it.x} y={r.y + (it.pheno ? sub * 2 + 22 : sub + 14)} fontSize={sub} fontWeight={800} fill={C.orange} textAnchor="middle">
									{it.ratio}
								</text>
							)}
						</g>
					))}
				</G>
			))}
		</g>
	);
};

// Big number / formula panel that pops in, for calculation scenes.
export const Formula: React.FC<{at: number; style?: React.CSSProperties; color?: string; fontSize?: number; children: React.ReactNode}> = ({
	at,
	style,
	color = C.red,
	fontSize = 44,
	children,
}) => {
	const t = useRamp(at, 14);
	return (
		<div style={{position: 'absolute', opacity: t, transform: `scale(${0.92 + 0.08 * t})`, transformOrigin: 'left center', ...style}}>
			<div style={{display: 'inline-block', border: `4px solid ${color}`, borderRadius: 18, padding: '12px 28px', fontSize, fontWeight: 900, color, background: '#fff'}}>{children}</div>
		</div>
	);
};
