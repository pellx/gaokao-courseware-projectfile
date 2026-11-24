import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {C, FONT} from '../theme';
import {chem} from './chem';

// Cover theme colour by subject.
export const SUBJECT = {
	physics: {main: '#2f7fd6', deep: '#1f5ea8', light: '#bcd8f5'},
	biology: {main: '#1e7a3c', deep: '#145a2b', light: '#8cc79c'},
	chemistry: {main: '#8e4ec6', deep: '#6b34a3', light: '#d9c2f0'},
};

type Palette = (typeof SUBJECT)[keyof typeof SUBJECT];

export type CoverContent = {
	subject: keyof typeof SUBJECT;
	badge: string;
	book: string;
	// Title lines; each line is a list of [text, highlight?] segments.
	title: [string, boolean?][][];
	// Optional smaller line under the title.
	kicker?: string;
	sub: string;
	points: string[];
	photo: string;
	// one position for all sizes, or per size: {"16x9": …, "4x3": …, "3x4": …}
	photoPos?: string | {[size: string]: string};
	photoTag: string;
	credit: string;
	// 有插画时用简洁版封面：只有标题、考点、一张照片和一张二次元插画（2026-11 化学系列起）。
	anime?: string;
	animePos?: string;
	clean?: boolean;
};

const Stamp: React.FC<{size: number; p: Palette}> = ({size, p}) => (
	<div
		style={{
			width: size,
			height: size,
			borderRadius: size / 2,
			background: p.main,
			border: `${size * 0.04}px solid #fff`,
			boxShadow: `0 0 0 ${size * 0.025}px ${p.main}, 0 10px 30px rgba(0,0,0,0.18)`,
			color: '#fff',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			transform: 'rotate(-12deg)',
			fontWeight: 900,
			lineHeight: 1.1,
		}}
	>
		<div style={{fontSize: size * 0.22}}>考法</div>
		<div style={{fontSize: size * 0.13}}>+</div>
		<div style={{fontSize: size * 0.22}}>易错</div>
	</div>
);

const Photo: React.FC<{c: CoverContent; style: React.CSSProperties; stamp: number; tag: number; credit?: number}> = ({c, style, stamp, tag, credit = 16}) => (
	<div style={{position: 'absolute', ...style}}>
		<div style={{position: 'absolute', inset: 0, borderRadius: 36, overflow: 'hidden', border: `8px solid ${C.panel}`, boxShadow: '0 18px 50px rgba(0,0,0,0.18)'}}>
			<Img src={staticFile(`images/${c.photo}`)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: (typeof c.photoPos === 'string' ? c.photoPos : undefined) ?? 'center'}} />
			<div style={{position: 'absolute', right: 0, bottom: 0, background: 'rgba(0,0,0,0.45)', color: '#fff', fontSize: credit, padding: '4px 12px', borderTopLeftRadius: 10}}>{c.credit}</div>
		</div>
		<div style={{position: 'absolute', left: -14, top: 36, background: SUBJECT[c.subject].deep, color: '#fff', fontSize: tag, fontWeight: 800, whiteSpace: 'nowrap', padding: '10px 26px', borderRadius: 14, boxShadow: '0 8px 20px rgba(0,0,0,0.18)'}}>
			{c.photoTag}
		</div>
		<div style={{position: 'absolute', left: -Math.min(stamp * 0.35, 60), bottom: -stamp * 0.25}}>
			<Stamp size={stamp} p={SUBJECT[c.subject]} />
		</div>
	</div>
);

const Title: React.FC<{c: CoverContent; size: number}> = ({c, size}) => (
	<div style={{fontSize: size, fontWeight: 900, lineHeight: 1.12, letterSpacing: -2}}>
		{c.title.map((line, i) => (
			<div key={i}>
				{line.map(([text, hl], j) => (
					<span key={j} style={{color: hl ? SUBJECT[c.subject].main : C.text}}>
						{text}
					</span>
				))}
			</div>
		))}
		{c.kicker && <div style={{fontSize: size * 0.4, color: C.muted, letterSpacing: 4, marginTop: size * 0.08}}>{c.kicker}</div>}
	</div>
);

const Badges: React.FC<{c: CoverContent; size: number}> = ({c, size}) => (
	<div style={{display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap'}}>
		<span style={{background: SUBJECT[c.subject].main, color: '#fff', fontSize: size, fontWeight: 800, padding: '8px 24px', borderRadius: 12}}>{c.badge}</span>
		<span style={{fontSize: size, fontWeight: 700, color: C.muted}}>{c.book}</span>
	</div>
);

// Every exam point, numbered, filled column by column.
const Points: React.FC<{c: CoverContent; size: number}> = ({c, size}) => (
	<div style={{display: 'grid', gridAutoFlow: 'column', gridTemplateRows: `repeat(${Math.ceil(c.points.length / 2)}, auto)`, gridTemplateColumns: '1fr 1fr', gap: `${size * 0.42}px ${size * 0.8}px`}}>
		{c.points.map((p, i) => (
			<div key={p} style={{display: 'flex', alignItems: 'center', gap: size * 0.35, fontSize: size, fontWeight: 700, whiteSpace: 'nowrap'}}>
				<span style={{width: size * 1.2, height: size * 1.2, borderRadius: size * 0.6, background: i % 2 ? SUBJECT[c.subject].deep : SUBJECT[c.subject].main, color: '#fff', fontSize: size * 0.72, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>{i + 1}</span>
				{chem(p)}
			</div>
		))}
	</div>
);

// One design, three aspect ratios: landscape puts the photo in a right-hand
// column; portrait stacks the photo under the text.
// 简洁版：去掉徽章行、“N大考点”小字、照片标签和印章；插画以白边卡片的形式压在照片左下角。
const AnimeCard: React.FC<{src: string; max: number; style: React.CSSProperties}> = ({src, max, style}) => (
	<div style={{position: 'absolute', ...style}}>
		<div style={{display: 'inline-block', background: '#fff', padding: 10, borderRadius: 30, boxShadow: '0 16px 40px rgba(0,0,0,0.22)', transform: 'rotate(-5deg)', transformOrigin: '0% 100%'}}>
			<Img src={staticFile(`images/${src}`)} style={{display: 'block', maxWidth: max * 1.35, maxHeight: max * 1.1, borderRadius: 22}} />
		</div>
	</div>
);

const PhotoPlain: React.FC<{c: CoverContent; style: React.CSSProperties; credit: number}> = ({c, style, credit}) => (
	<div style={{position: 'absolute', ...style}}>
		<div style={{position: 'absolute', inset: 0, borderRadius: 36, overflow: 'hidden', border: `8px solid ${C.panel}`, boxShadow: '0 18px 50px rgba(0,0,0,0.18)'}}>
			<Img src={staticFile(`images/${c.photo}`)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: (typeof c.photoPos === 'string' ? c.photoPos : undefined) ?? 'center'}} />
			<div style={{position: 'absolute', right: 0, bottom: 0, background: 'rgba(0,0,0,0.45)', color: '#fff', fontSize: credit, padding: '4px 12px', borderTopLeftRadius: 10}}>{c.credit}</div>
		</div>
	</div>
);

// 考点字号按最长的一条自适应，保证两列都排得下（colW = 每列宽度）。
const fitPoint = (c: CoverContent, colW: number, max: number) => {
	const n = Math.max(...c.points.map((s) => [...s].reduce((k, ch) => k + (/[\x00-\xff]/.test(ch) ? 0.55 : 1), 0)));
	return Math.min(max, Math.floor(colW / (n + 1.7)));
};

const Clean: React.FC<{c: CoverContent; w: number; h: number}> = ({c, w, h}) => {
	const p = SUBJECT[c.subject];
	const bar = <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 22, background: `linear-gradient(90deg, ${p.light}, ${p.main}, ${p.deep})`}} />;
	const a = c.anime;
	if (h > w) {
		return (
			<AbsoluteFill style={{background: C.bg, fontFamily: FONT, color: C.text}}>
				<div style={{position: 'absolute', inset: '90px 80px 100px', display: 'flex', flexDirection: 'column'}}>
					<Title c={c} size={124} />
					<div style={{marginTop: 46}}>
						<Points c={c} size={fitPoint(c, 440, 42)} />
					</div>
					<div style={{position: 'relative', flex: 1, marginTop: 56}}>
						<PhotoPlain c={c} style={{left: a ? 150 : 0, right: 0, top: 0, bottom: 0}} credit={14} />
						{a && <AnimeCard src={a} max={330} style={{left: -20, bottom: -10}} />}
					</div>
				</div>
				{bar}
			</AbsoluteFill>
		);
	}
	const wide = w >= 1800;
	const textW = wide ? 1000 : 800;
	const photoL = 90 + textW + (wide ? 70 : 50);
	return (
		<AbsoluteFill style={{background: C.bg, fontFamily: FONT, color: C.text}}>
			<div style={{position: 'absolute', left: 90, top: 0, bottom: 22, width: textW, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
				<Title c={c} size={wide ? 132 : 116} />
				<div style={{marginTop: 54}}>
					<Points c={c} size={fitPoint(c, wide ? 470 : 375, wide ? 44 : 38)} />
				</div>
			</div>
			<PhotoPlain c={c} style={{left: photoL, right: 80, top: 90, bottom: 100}} credit={wide ? 16 : 13} />
			{a && <AnimeCard src={a} max={wide ? 360 : 290} style={{left: photoL - (wide ? 70 : 60), bottom: 60}} />}
			{bar}
		</AbsoluteFill>
	);
};

export const CoverLayout: React.FC<{c: CoverContent; w: number; h: number}> = ({c: raw, w, h}) => {
	if (raw.anime || raw.clean) {
		const size0 = h > w ? '3x4' : w >= 1800 ? '16x9' : '4x3';
		const pos0 = raw.photoPos;
		return <Clean c={{...raw, photoPos: typeof pos0 === 'object' ? pos0[size0] ?? pos0.default : pos0}} w={w} h={h} />;
	}
	const portrait = h > w;
	const size = portrait ? '3x4' : w >= 1800 ? '16x9' : '4x3';
	const pos = raw.photoPos;
	const c = {...raw, photoPos: typeof pos === 'object' ? pos[size] ?? pos.default : pos};
	const p = SUBJECT[c.subject];
	const bar = <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 22, background: `linear-gradient(90deg, ${p.light}, ${p.main}, ${p.deep})`}} />;
	if (portrait) {
		return (
			<AbsoluteFill style={{background: C.bg, fontFamily: FONT, color: C.text}}>
				<div style={{position: 'absolute', inset: '80px 80px 90px', display: 'flex', flexDirection: 'column'}}>
					<Badges c={c} size={34} />
					<div style={{marginTop: 34}}>
						<Title c={c} size={120} />
					</div>
					<div style={{fontSize: 46, fontWeight: 800, color: p.deep, marginTop: 22}}>{c.sub}</div>
					<div style={{marginTop: 30}}>
						<Points c={c} size={40} />
					</div>
					<Photo c={c} style={{position: 'relative', flex: 1, marginTop: 44}} stamp={190} tag={32} />
				</div>
				{bar}
			</AbsoluteFill>
		);
	}
	const textW = w >= 1800 ? 1000 : 820;
	const title = w >= 1800 ? 124 : 116;
	return (
		<AbsoluteFill style={{background: C.bg, fontFamily: FONT, color: C.text}}>
			<div style={{position: 'absolute', left: 90, top: 100, width: textW}}>
				<Badges c={c} size={34} />
				<div style={{marginTop: 30}}>
					<Title c={c} size={title} />
				</div>
				<div style={{fontSize: w >= 1800 ? 48 : 42, fontWeight: 800, color: p.deep, marginTop: 20}}>{c.sub}</div>
				<div style={{marginTop: 36}}>
					<Points c={c} size={w >= 1800 ? 42 : 36} />
				</div>
			</div>
			<Photo c={c} style={{left: 90 + textW + 60, right: 80, top: 100, bottom: 110}} stamp={w >= 1800 ? 230 : 190} tag={w >= 1800 ? 34 : 28} credit={w >= 1800 ? 16 : 13} />
			{bar}
		</AbsoluteFill>
	);
};
