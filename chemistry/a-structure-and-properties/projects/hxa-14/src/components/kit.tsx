import React from 'react';
import {C} from '../theme';
import {Appear, useRamp} from './ui';
import {chem} from './chem';

// Reusable layouts for scenes. Everything is positioned by the caller; each
// part fades in at its own frame (`at`).

// SVG group that fades in at `at` (Appear is a div, which SVG can't contain).
export const G: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => {
	const t = useRamp(at, 16);
	return <g opacity={t}>{children}</g>;
};

// SVG arrow from (x1,y1) to (x2,y2), trimmed by `trim` px at each end (e.g. a
// node's radius) and shifted sideways by `offset` so two opposite arrows can
// run side by side. `marker` is one of the ids from ui.tsx <Defs>.
export const Arrow: React.FC<{
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	trim?: [number, number];
	offset?: number;
	color?: string;
	marker?: string;
	width?: number;
	dash?: string;
}> = ({x1, y1, x2, y2, trim = [0, 0], offset = 0, color = C.muted, marker = 'arrow', width = 6, dash}) => {
	const len = Math.hypot(x2 - x1, y2 - y1);
	const ux = (x2 - x1) / len;
	const uy = (y2 - y1) / len;
	const ox = -uy * offset;
	const oy = ux * offset;
	return (
		<line
			x1={x1 + ux * trim[0] + ox}
			y1={y1 + uy * trim[0] + oy}
			x2={x2 - ux * trim[1] + ox}
			y2={y2 - uy * trim[1] + oy}
			stroke={color}
			strokeWidth={width}
			strokeDasharray={dash}
			markerEnd={`url(#${marker})`}
		/>
	);
};

export type Row = {cells: React.ReactNode[]; at: number; key?: boolean};

// Table with a coloured header row. `focus` highlights key rows and dims the rest.
export const Table: React.FC<{
	head: string[];
	rows: Row[];
	cols: string;
	at: number;
	fontSize?: number;
	rowHeight?: number;
	focus?: boolean;
	headColor?: string;
}> = ({head, rows, cols, at, fontSize = 32, rowHeight = 72, focus = false, headColor = C.orange}) => (
	<div style={{display: 'grid', gridTemplateColumns: cols, fontSize}}>
		{head.map((h) => (
			<Appear key={h} at={at} dy={0}>
				<div style={{padding: '10px 22px', background: headColor, color: '#fff', fontWeight: 800}}>{h}</div>
			</Appear>
		))}
		{rows.map((r, i) =>
			r.cells.map((cell, j) => (
				<Appear key={`${i}-${j}`} at={r.at} dx={-20} dy={0}>
					<div
						style={{
							padding: '6px 22px',
							minHeight: rowHeight,
							boxSizing: 'border-box',
							display: 'flex',
							alignItems: 'center',
							background: focus && r.key ? C.orangeSoft : i % 2 ? '#fff' : C.panel,
							borderBottom: `3px solid ${C.line}`,
							fontWeight: j === 0 ? 800 : 500,
							opacity: focus && !r.key ? 0.45 : 1,
						}}
					>
						{/* One flex item, so chem() sub/superscripts stay inline. */}
						<span>{typeof cell === 'string' ? chem(cell) : cell}</span>
					</div>
				</Appear>
			)),
		)}
	</div>
);

export type TreeNode = {
	label: string;
	note?: string;
	color?: string;
	at: number;
	children?: TreeNode[];
};

type Placed = {node: TreeNode; x: number; y: number; parent?: Placed};

// Left-to-right tree: each depth is a column, leaves are spread evenly down
// the given height and parents sit at the middle of their children.
export const Tree: React.FC<{
	root: TreeNode;
	width: number;
	height: number;
	colWidth: number;
	boxWidth: number;
	boxHeight?: number;
	fontSize?: number;
}> = ({root, width, height, colWidth, boxWidth, boxHeight = 76, fontSize = 32}) => {
	const leaves = (n: TreeNode): number => (n.children?.length ? n.children.reduce((s, c) => s + leaves(c), 0) : 1);
	const total = leaves(root);
	const step = height / total;
	const placed: Placed[] = [];
	const place = (n: TreeNode, depth: number, first: number, parent?: Placed): Placed => {
		const p: Placed = {node: n, x: depth * colWidth, y: (first + leaves(n) / 2) * step, parent};
		placed.push(p);
		let next = first;
		for (const c of n.children ?? []) {
			place(c, depth + 1, next, p);
			next += leaves(c);
		}
		return p;
	};
	place(root, 0, 0);
	return (
		<div style={{position: 'relative', width, height}}>
			<svg width={width} height={height} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				{placed
					.filter((p) => p.parent)
					.map((p, i) => {
						const a = p.parent!;
						const x1 = a.x + boxWidth;
						const mid = (x1 + p.x) / 2;
						return (
							<G key={i} at={p.node.at}>
								<path d={`M${x1},${a.y} H${mid} V${p.y} H${p.x}`} fill="none" stroke="#cfc6ba" strokeWidth={4} />
							</G>
						);
					})}
			</svg>
			{placed.map((p, i) => (
				<Appear key={i} at={p.node.at} dx={-20} dy={0} style={{position: 'absolute', left: p.x, top: p.y - boxHeight / 2, width: boxWidth}}>
					<div
						style={{
							height: boxHeight,
							boxSizing: 'border-box',
							borderRadius: 16,
							border: `4px solid ${p.node.color ?? C.line}`,
							background: '#fff',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize,
							fontWeight: 800,
							color: p.node.color ?? C.text,
							lineHeight: 1.15,
						}}
					>
						{p.node.label}
						{p.node.note && <span style={{fontSize: fontSize * 0.68, fontWeight: 600, color: C.muted}}>{p.node.note}</span>}
					</div>
				</Appear>
			))}
		</div>
	);
};

// Boxes joined by arrows, left to right.
export const Chain: React.FC<{
	steps: {label: React.ReactNode; color?: string; at: number}[];
	arrows?: string[];
	fontSize?: number;
	gap?: number;
}> = ({steps, arrows = [], fontSize = 34, gap = 16}) => (
	<div style={{display: 'flex', alignItems: 'center', gap}}>
		{steps.map((s, i) => (
			<React.Fragment key={i}>
				{i > 0 && (
					<Appear at={s.at} dy={0}>
						<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: C.muted, fontSize: fontSize * 0.7, fontWeight: 700}}>
							{arrows[i - 1] && <span>{arrows[i - 1]}</span>}
							<span style={{fontSize: fontSize * 1.2, lineHeight: 1}}>→</span>
						</div>
					</Appear>
				)}
				<Appear at={s.at} dy={0} dx={-16}>
					<div style={{border: `4px solid ${s.color ?? C.line}`, color: s.color ?? C.text, borderRadius: 16, padding: '12px 22px', fontSize, fontWeight: 800, background: '#fff', whiteSpace: 'nowrap'}}>
						{s.label}
					</div>
				</Appear>
			</React.Fragment>
		))}
	</div>
);

// SVG box centred on (x, y) with a bold label and an optional smaller second line.
export const Box: React.FC<{
	x: number;
	y: number;
	w: number;
	h?: number;
	label: React.ReactNode;
	sub?: React.ReactNode;
	color?: string;
	fill?: string;
	fontSize?: number;
	r?: number;
}> = ({x, y, w, h = 80, label, sub, color = C.text, fill = '#fff', fontSize = 32, r = 16}) => (
	<g>
		<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={r} fill={fill} stroke={color} strokeWidth={5} />
		<text x={x} y={sub ? y - 4 : y + fontSize * 0.36} fontSize={fontSize} fontWeight={900} fill={color} textAnchor="middle">
			{label}
		</text>
		{sub && (
			<text x={x} y={y + fontSize * 0.95} fontSize={fontSize * 0.7} fontWeight={700} fill={C.muted} textAnchor="middle">
				{sub}
			</text>
		)}
	</g>
);
