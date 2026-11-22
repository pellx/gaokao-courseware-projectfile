import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C} from '../theme';
import {T} from '../timeline';
import {AnimeBeat} from './anime';
import {Big, Board, Col, Items, Mark, Panel, Row, Rule} from './board';
import {chem} from './chem';
import {Table} from './kit';
import {Lewis} from './sci';
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
