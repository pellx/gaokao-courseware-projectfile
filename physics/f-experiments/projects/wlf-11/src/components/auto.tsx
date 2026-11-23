import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C} from '../theme';
import {T} from '../timeline';
import {AnimeBeat} from './anime';
import {Big, Board, Col, Items, Mark, Panel, Row, Rule} from './board';
import {chem} from './chem';
import {Table} from './kit';
import {Lewis} from './sci';
import {Plot} from './plot';
import {Appear, Hl} from './ui';

// 数据驱动的考点场景：场景内容写成 JSON（规格文件里的 data），时间用台词 id 表示。
// 文本支持 {词|red} 高亮、化学式自动上下标（chem）、\n 换行。
type Txt = string;
type Blk = Record<string, any>;
export type AutoData = {
	tag: string;
	title: string;
	callout?: {label: string; at: string; text: Txt; size?: number};
	beat?: {k: string; at: string; text: Txt} | {k: string; at: string; text: Txt}[];
	zoom?: number;
	maxZoom?: number;
	gap?: number;
	blocks: Blk[];
};

const col = (c?: string) => (c ? (C as Record<string, string>)[c] ?? c : undefined);
const ch = (s: string) => (/^\d+$/.test(s) ? s : chem(s));

export const rich = (text: Txt): React.ReactNode =>
	String(text)
		.split('\n')
		.map((line, li) => (
			<React.Fragment key={li}>
				{li > 0 && <br />}
				{line.split(/(\{[^}]+\})/).map((part, i) => {
					const m = part.match(/^\{([^|}]+)(?:\|(\w+))?\}$/);
					if (!m) return <React.Fragment key={i}>{ch(part)}</React.Fragment>;
					return (
						<Hl key={i} c={col(m[2]) ?? C.red}>
							{ch(m[1])}
						</Hl>
					);
				})}
			</React.Fragment>
		));

// 化学方程式 + 双线桥/单线桥：tokens 是方程式的各段，arcs 从第 from 段画到第 to 段（above 在上方，否则在下方）。
const Bridge: React.FC<{b: Blk; at: (id: string) => number}> = ({b, at}) => {
	const f = useCurrentFrame();
	// 太宽时整体缩小字号，保证方程式不超出画面（含桥的场景 Board 不再放大，见 AutoScene）。
	const est = (sz: number) => (b.tokens as string[]).reduce((n: number, tk: string) => {
		const plain = tk.replace(/\{([^|}]+)(\|\w+)?\}/g, '$1').replace(/\^/g, '');
		let m = 0;
		for (const ch of plain) m += /[\u2E80-\uFFFF]/.test(ch) ? 1.05 : /\d/.test(ch) ? 0.45 : 0.66;
		return n + m * sz + sz * 0.9;
	}, 0);
	const size0: number = b.size ?? 46;
	const size = Math.min(size0 * 1.5, (size0 * (b.maxW ?? 1700)) / est(size0));
	const w = (s: string) => {
		const plain = s.replace(/\{([^|}]+)(\|\w+)?\}/g, '$1').replace(/\^/g, '');
		let n = 0;
		for (const ch of plain) n += /[\u2E80-\uFFFF]/.test(ch) ? 1.05 : /\d/.test(ch) ? 0.45 : 0.66;
		return n * size + size * 0.9;
	};
	const xs: number[] = [];
	let x = 0;
	for (const tk of b.tokens as string[]) {
		xs.push(x + w(tk) / 2);
		x += w(tk);
	}
	const W = x;
	const H = size * 4.6;
	const mid = H / 2;
	return (
		<Appear at={at(b.at)}>
			<div style={{position: 'relative', width: W, height: H, margin: '0 auto'}}>
				{(b.tokens as string[]).map((tk, i) => (
					<div key={i} style={{position: 'absolute', left: xs[i] - w(tk) / 2, width: w(tk), top: mid - size * 0.65, textAlign: 'center', fontSize: size, fontWeight: 800}}>
						{rich(tk)}
					</div>
				))}
				<svg width={W} height={H} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
					{(b.arcs as Blk[]).map((a, i) => {
						const x1 = xs[a.from], x2 = xs[a.to];
						const up = a.above !== false;
						const y0 = up ? mid - size * 0.75 : mid + size * 0.75;
						const y1 = up ? size * 0.55 : H - size * 0.55;
						const o = interpolate(f, [at(a.at), at(a.at) + 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
						const c = col(a.c) ?? C.red;
						return (
							<g key={i} opacity={o}>
								<path d={`M${x1},${y0} L${x1},${y1} L${x2},${y1} L${x2},${y0}`} fill="none" stroke={c} strokeWidth={4} />
								<path d={`M${x2 - 9},${y0 + (up ? -14 : 14)} L${x2},${y0} L${x2 + 9},${y0 + (up ? -14 : 14)}`} fill="none" stroke={c} strokeWidth={4} />
							</g>
						);
					})}
				</svg>
				{(b.arcs as Blk[]).map((a, i) => {
					const up = a.above !== false;
					const o = interpolate(f, [at(a.at), at(a.at) + 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
					return (
						<div key={i} style={{position: 'absolute', left: Math.min(xs[a.from], xs[a.to]) - 200, width: Math.abs(xs[a.to] - xs[a.from]) + 400, textAlign: 'center', top: up ? size * 0.55 - size * 0.78 - 8 : H - size * 0.55 + 6, fontSize: size * 0.56, fontWeight: 800, color: col(a.c) ?? C.red, opacity: o, whiteSpace: 'nowrap'}}>
							{rich(a.text)}
						</div>
					);
				})}
			</div>
		</Appear>
	);
};


// 坐标图：数据坐标 0–1。曲线从左往右画出；标签用 HTML 叠在 SVG 上，支持 {词|red} 和化学式。
// b: {w,h,x,y,at, curves:[{at,pts,c,dash,width,label,lx,ly}], hrefs:[{y,label,at,c}], vrefs:[{x,label,at,c}],
//     dots:[{x,y,at,c,label,dx,dy}], arrows:[{x1,y1,x2,y2,at,c,label,lx,ly,both}], notes:[{x,y,at,text,c,size,anchor}], xticks, yticks}
const PL = 80, PT = 46, PR = 30, PB = 56;
const PlotBlock: React.FC<{b: Blk; at: (id: string) => number}> = ({b, at}) => {
	const f = useCurrentFrame();
	const w: number = b.w ?? 900, h: number = b.h ?? 480, fs: number = b.size ?? 26;
	const pw = w - PL - PR, ph = h - PT - PB;
	const px = (x: number) => PL + x * pw;
	const py = (y: number) => PT + (1 - y) * ph;
	const op = (id: string, d = 14) => interpolate(f, [at(id), at(id) + d], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	const lab = (key: string, x: number, y: number, o: number, text: Txt, c?: string, size?: number, anchor = 'middle') => (
		<div key={key} style={{position: 'absolute', left: x - 400, width: 800, top: y - (size ?? fs) * 0.75, textAlign: anchor === 'start' ? 'left' : anchor === 'end' ? 'right' : 'center', paddingLeft: anchor === 'start' ? 400 : 0, paddingRight: anchor === 'end' ? 400 : 0, fontSize: size ?? fs, fontWeight: 900, color: col(c) ?? C.text, opacity: o, whiteSpace: 'nowrap', lineHeight: 1.2, pointerEvents: 'none'}}>
			{rich(text)}
		</div>
	);
	const curves = (b.curves ?? []) as Blk[];
	const arrows = (b.arrows ?? []) as Blk[];
	return (
		<Appear at={at(b.at)} dy={0}>
			<div style={{position: 'relative', width: w, height: h, margin: b.center === false ? undefined : '0 auto'}}>
				<Plot
					id={`p${b.at}`}
					w={w}
					h={h}
					xLabel=""
					yLabel=""
					fontSize={fs}
					at={at(b.at)}
					curves={curves.map((c) => ({pts: c.pts, color: col(c.c) ?? C.red, at: at(c.at), dur: c.dur, dash: c.dash, width: c.width}))}
					hrefs={((b.hrefs ?? []) as Blk[]).map((r) => ({y: r.y, label: '', color: col(r.c), at: at(r.at)}))}
					vrefs={((b.vrefs ?? []) as Blk[]).map((r) => ({x: r.x, color: col(r.c), at: at(r.at)}))}
					dots={((b.dots ?? []) as Blk[]).map((d) => ({x: d.x, y: d.y, color: col(d.c) ?? C.red, at: at(d.at)}))}
				/>
				<svg width={w} height={h} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
					{arrows.map((a, i) => {
						const x1 = px(a.x1), y1 = py(a.y1), x2 = px(a.x2), y2 = py(a.y2);
						const ang = Math.atan2(y2 - y1, x2 - x1);
						const c = col(a.c) ?? C.red;
						const sw = a.line ? 3 : 5;
						const head = (x: number, y: number, t: number) => `M${x - 18 * Math.cos(t - 0.45)},${y - 18 * Math.sin(t - 0.45)} L${x},${y} L${x - 18 * Math.cos(t + 0.45)},${y - 18 * Math.sin(t + 0.45)}`;
						return (
							<g key={i} opacity={op(a.at)} stroke={c} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round">
								<line x1={x1} y1={y1} x2={x2} y2={y2} strokeDasharray={a.dash || a.line ? '10 8' : undefined} />
								{!a.line && <path d={head(x2, y2, ang)} />}
								{a.both && <path d={head(x1, y1, ang + Math.PI)} />}
							</g>
						);
					})}
				</svg>
				{lab('yl', PL + 14, PT - 18, op(b.at), b.y ?? '', 'muted', fs, 'start')}
				{lab('xl', PL + pw + 14, PT + ph + 44, op(b.at), b.x ?? '', 'muted', fs, 'end')}
				{((b.xticks ?? []) as [number, Txt][]).map(([x, s], i) => lab('xt' + i, px(x), PT + ph + 34, op(b.at), s, 'muted', fs * 0.85))}
				{((b.yticks ?? []) as [number, Txt][]).map(([y, s], i) => lab('yt' + i, PL - 12, py(y), op(b.at), s, 'muted', fs * 0.85, 'end'))}
				{((b.hrefs ?? []) as Blk[]).map((r, i) => (r.label ? lab('hr' + i, r.lx !== undefined ? px(r.lx) : PL - 12, py(r.y) - (r.lx !== undefined ? fs * 0.8 : 0), op(r.at), r.label, r.c ?? 'muted', fs, r.lx !== undefined ? 'middle' : 'end') : null))}
				{((b.vrefs ?? []) as Blk[]).map((r, i) => (r.label ? lab('vr' + i, px(r.x), PT + ph + 34, op(r.at), r.label, r.c ?? 'muted', fs * 0.85) : null))}
				{curves.map((c, i) => (c.label ? lab('cl' + i, px(c.lx ?? 1), py(c.ly ?? 1), op(c.at, 40), c.label, c.c ?? 'red', fs) : null))}
				{((b.dots ?? []) as Blk[]).map((d, i) => (d.label ? lab('dl' + i, px(d.x) + (d.dx ?? 0), py(d.y) + (d.dy ?? -30), op(d.at), d.label, d.c ?? 'red', fs * 0.9) : null))}
				{arrows.map((a, i) => (a.label ? lab('al' + i, px(a.lx ?? (a.x1 + a.x2) / 2) , py(a.ly ?? (a.y1 + a.y2) / 2), op(a.at), a.label, a.c ?? 'red', fs, a.anchor ?? 'start') : null))}
				{((b.notes ?? []) as Blk[]).map((n, i) => lab('nt' + i, px(n.x), py(n.y), op(n.at), n.text, n.c, n.size ?? fs, n.anchor ?? 'middle'))}
			</div>
		</Appear>
	);
};

const Block: React.FC<{b: Blk; at: (id: string) => number}> = ({b, at}) => {
	switch (b.t) {
		case 'rule':
			return (
				<Rule tag={rich(b.tag)} color={col(b.c) ?? C.red} at={at(b.at)} size={b.size}>
					{rich(b.text)}
				</Rule>
			);
		case 'panel':
			return (
				<Panel title={b.title ? rich(b.title) : undefined} color={col(b.c) ?? C.orange} at={at(b.at)} size={b.size} style={b.style}>
					{(b.lines as (Txt | Blk)[]).map((l, i) =>
						typeof l === 'string' ? (
							<div key={i}>{rich(l)}</div>
						) : (
							<Appear key={i} at={at(l.at)} dy={0} dx={-12}>
								<div>{rich(l.text)}</div>
							</Appear>
						),
					)}
				</Panel>
			);
		case 'big':
			return (
				<Big at={at(b.at)} size={b.size} color={col(b.c)} soft={col(b.soft)} style={b.style}>
					{rich(b.text)}
				</Big>
			);
		case 'items':
			return <Items size={b.size} gap={b.gap} items={(b.items as Blk[]).map((it) => ({at: at(it.at), node: rich(it.text), color: col(it.c)}))} />;
		case 'mark':
			return (
				<Mark ok={b.ok} at={at(b.at)} size={b.size}>
					{rich(b.text)}
				</Mark>
			);
		case 'text':
			return (
				<Appear at={at(b.at)}>
					<div style={{fontSize: b.size ?? 30, fontWeight: b.bold === false ? 500 : 700, lineHeight: 1.5, textAlign: b.center ? 'center' : undefined, color: col(b.c)}}>{rich(b.text)}</div>
				</Appear>
			);
		case 'table':
			return (
				<Table
					at={at(b.at)}
					head={(b.head as Txt[]).map((h) => rich(h))}
					cols={b.cols}
					fontSize={b.size ?? 28}
					rowHeight={b.rowHeight ?? 58}
					headColor={col(b.c)}
					rows={(b.rows as Blk[]).map((r) => ({at: at(r.at), key: r.key, cells: (r.cells as Txt[]).map((c) => rich(c))}))}
					focus={b.focus}
				/>
			);
		case 'chain':
			// 箭头和后一个方框放在同一个 flex 项里，换行时箭头不会单独留在行尾。
			return (
				<div style={{display: 'flex', alignItems: 'center', rowGap: 14, columnGap: b.gap ?? 14, flexWrap: 'wrap', justifyContent: b.center ? 'center' : undefined}}>
					{(b.steps as Blk[]).map((s, i) => (
						<Appear key={i} at={at(s.at)} dy={0} dx={-16}>
							<div style={{display: 'flex', alignItems: 'center', gap: b.gap ?? 14}}>
								{i > 0 && (
									<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: C.muted, fontSize: (b.size ?? 32) * 0.62, fontWeight: 700}}>
										{b.arrows?.[i - 1] && <span>{rich(b.arrows[i - 1])}</span>}
										<span style={{fontSize: (b.size ?? 32) * 1.2, lineHeight: 1}}>→</span>
									</div>
								)}
								<div style={{border: `4px solid ${col(s.c) ?? C.line}`, color: col(s.c) ?? C.text, borderRadius: 16, padding: '10px 20px', fontSize: b.size ?? 32, fontWeight: 800, background: '#fff', textAlign: 'center', lineHeight: 1.35}}>{rich(s.text)}</div>
							</div>
						</Appear>
					))}
				</div>
			);
		case 'row':
			return (
				<Row gap={b.gap ?? 26} align={b.align ?? 'stretch'}>
					{(b.cols as Blk[]).map((c, i) => (
						<Col key={i} flex={c.flex} width={c.w} gap={c.gap ?? 16}>
							{(c.blocks as Blk[]).map((bb, j) => (
								<Block key={j} b={bb} at={at} />
							))}
						</Col>
					))}
				</Row>
			);
		case 'lewis':
			return (
				<div style={{display: 'flex', justifyContent: b.center === false ? 'flex-start' : 'center', alignItems: 'center', gap: 30}}>
					{b.label && (
						<Appear at={at(b.at)} dy={0}>
							<span style={{fontSize: (b.size ?? 52) * 0.6, fontWeight: 800, color: col(b.c) ?? C.muted}}>{rich(b.label)}</span>
						</Appear>
					)}
					<Lewis parts={b.parts} at={at(b.at)} size={b.size ?? 52} />
				</div>
			);
		case 'bridge':
			return <Bridge b={b} at={at} />;
		case 'plot':
			return <PlotBlock b={b} at={at} />;
		case 'nuc': {
			// 核素符号：左上质量数、左下质子数
			const sz = b.size ?? 60;
			return (
				<Appear at={at(b.at)}>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30, fontWeight: 800}}>
						{(b.items as Blk[]).map((n, i) => (
							<div key={i} style={{display: 'flex', alignItems: 'center', gap: 8}}>
								<div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: sz * 0.5, lineHeight: 1.05, color: col(n.c) ?? C.red}}>
									<span>{n.A}</span>
									<span>{n.Z}</span>
								</div>
								<span style={{fontSize: sz}}>{n.X}</span>
								{n.note && <span style={{fontSize: sz * 0.45, color: C.muted, marginLeft: 12}}>{rich(n.note)}</span>}
							</div>
						))}
					</div>
				</Appear>
			);
		}
		default:
			return null;
	}
};

export const AutoScene: React.FC<{k: keyof typeof T; d: AutoData}> = ({k, d}) => {
	const t = T[k];
	const at = (id: string) => {
		const c = t.cue[id];
		if (!c) throw new Error(`场景 ${String(k)} 没有台词 ${id}`);
		return c.from;
	};
	return (
		<Board
			t={t}
			tag={d.tag}
			title={rich(d.title)}
			zoom={d.zoom}
			maxZoom={d.maxZoom ?? (d.blocks.some((b) => b.t === 'bridge') ? 1 : undefined)}
			gap={d.gap}
			callout={d.callout && {label: d.callout.label, at: at(d.callout.at), text: rich(d.callout.text), size: d.callout.size}}
			overlay={
				<>
					{(Array.isArray(d.beat) ? d.beat : d.beat ? [d.beat] : []).map((b) => (
						<AnimeBeat key={b.k} k={b.k} from={t.cue[b.at].from} to={t.cue[b.at].to}>
							{rich(b.text)}
						</AnimeBeat>
					))}
				</>
			}
		>
			{d.blocks.map((b, i) => (
				<Block key={i} b={b} at={at} />
			))}
		</Board>
	);
};
