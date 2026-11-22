import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {C, FONT} from '../theme';

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
	photoPos?: string;
	photoTag: string;
	credit: string;
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
			<Img src={staticFile(`images/${c.photo}`)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: c.photoPos ?? 'center'}} />
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
				{p}
			</div>
		))}
	</div>
);

// One design, three aspect ratios: landscape puts the photo in a right-hand
// column; portrait stacks the photo under the text.
export const CoverLayout: React.FC<{c: CoverContent; w: number; h: number}> = ({c, w, h}) => {
	const portrait = h > w;
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
