import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {SUBJECT} from './components/CoverLayout';
import {C, FONT} from './theme';
import data from './collection.json';

// Series ("合集") cover, 960×540: badge + book, two-line title, episode count
// and the textbook on the right, in the episode covers' colours.
// src/collection.json is written by bin/collection-cover.py.

type Collection = {
	subject: keyof typeof SUBJECT;
	badge: string;
	book: string;
	title: [string, boolean?][][];
	sub: string;
	volume: string;
	name: string;
	// File in public/images, or null to draw the book.
	cover: string | null;
	// Simplified chemistry style: no badge / book / episode line; a photo card instead of the textbook.
	clean?: boolean;
	photo?: string;
	credit?: string;
	photoPos?: string;
};
const D = data as unknown as Collection;
const P = SUBJECT[D.subject];

// Title size: 96px unless the longest line would run into the textbook
// (e.g. 生物技术与工程). Width in ems; ASCII digits/letters are about 0.6em.
const TITLE_W = 550;
const ems = (line: [string, boolean?][]) =>
	[...line.map(([s]) => s).join('')].reduce((w, ch) => w + (ch.charCodeAt(0) < 128 ? 0.6 : 1), 0);
const TITLE_SIZE = Math.min(96, Math.floor(TITLE_W / Math.max(...D.title.map(ems))));

// Right-hand picture: the textbook. A real cover photo is used when one is
// supplied (D.cover); otherwise a drawn book with the volume and its title.
const BOOK = {w: 220, h: 300, spine: 18, pages: 10};

const DrawnBook: React.FC = () => (
	<div style={{position: 'relative', width: BOOK.w + BOOK.pages, height: BOOK.h, transform: 'rotate(-6deg)', filter: 'drop-shadow(0 14px 22px rgba(0,0,0,0.22))'}}>
		<div style={{position: 'absolute', right: 0, top: 6, bottom: 6, width: BOOK.pages + 8, borderRadius: '0 6px 6px 0', background: 'repeating-linear-gradient(180deg, #fbf6ec 0 3px, #e9e0cf 3px 4px)'}} />
		<div style={{position: 'absolute', left: 0, top: 0, width: BOOK.w, height: BOOK.h, borderRadius: '6px 10px 10px 6px', overflow: 'hidden', background: `linear-gradient(160deg, ${P.light} 0%, ${P.main} 55%, ${P.deep} 100%)`}}>
			<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: BOOK.spine, background: 'rgba(0,0,0,0.18)'}} />
			<div style={{position: 'absolute', left: BOOK.spine + 16, right: 16, top: 22, color: '#fff'}}>
				<div style={{fontSize: 14, fontWeight: 700, letterSpacing: 2, opacity: 0.9}}>普通高中教科书</div>
				<div style={{fontSize: 46, fontWeight: 900, marginTop: 8, letterSpacing: 4}}>生物学</div>
				<div style={{height: 3, background: 'rgba(255,255,255,0.7)', width: 60, margin: '10px 0'}} />
				<div style={{fontSize: 20, fontWeight: 800}}>{D.volume}</div>
				<div style={{fontSize: 26, fontWeight: 900, marginTop: 4}}>{D.name}</div>
			</div>
			<div style={{position: 'absolute', left: BOOK.spine, right: 0, bottom: 0, height: 70, background: 'rgba(255,255,255,0.14)'}} />
		</div>
	</div>
);

const Textbook: React.FC = () =>
	D.cover ? (
		<div style={{width: 240, height: 330, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)'}}>
			<Img src={staticFile(`images/${D.cover}`)} style={{maxWidth: '100%', maxHeight: '100%', borderRadius: 8, boxShadow: '0 14px 30px rgba(0,0,0,0.25)'}} />
		</div>
	) : (
		<DrawnBook />
	);

// Photo card for the simplified cover: white border, slight tilt, credit in the corner.
const PhotoCard: React.FC = () => (
	<div style={{width: 270, height: 350, transform: 'rotate(-4deg)', background: '#fff', padding: 10, borderRadius: 14, boxShadow: '0 16px 34px rgba(0,0,0,0.22)'}}>
		<div style={{position: 'relative', width: '100%', height: '100%', borderRadius: 8, overflow: 'hidden'}}>
			<Img src={staticFile(`images/${D.photo}`)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: D.photoPos ?? 'center'}} />
			{D.credit && <div style={{position: 'absolute', right: 0, bottom: 0, background: 'rgba(0,0,0,0.45)', color: '#fff', fontSize: 11, padding: '3px 8px', borderTopLeftRadius: 6}}>{D.credit}</div>}
		</div>
	</div>
);

const CLEAN_W = 530;
const CLEAN_SIZE = Math.min(100, Math.floor(CLEAN_W / Math.max(...D.title.map(ems))));

const Clean: React.FC = () => (
	<AbsoluteFill style={{background: C.bg, fontFamily: FONT, color: C.text}}>
		<div style={{position: 'absolute', left: 64, top: 0, bottom: 14, width: CLEAN_W, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
			<div style={{fontSize: CLEAN_SIZE, fontWeight: 900, lineHeight: 1.15, letterSpacing: -2}}>
				{D.title.map((line, i) => (
					<div key={i}>
						{line.map(([s, hl], j) => (
							<span key={j} style={{color: hl ? P.main : C.text}}>{s}</span>
						))}
					</div>
				))}
			</div>
		</div>
		<div style={{position: 'absolute', right: 56, top: 0, bottom: 14, display: 'flex', alignItems: 'center'}}>
			<PhotoCard />
		</div>
		<div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 14, background: `linear-gradient(90deg, ${P.light}, ${P.main}, ${P.deep})`}} />
	</AbsoluteFill>
);

export const Collection: React.FC = () => D.clean ? <Clean /> : (
	<AbsoluteFill style={{background: C.bg, fontFamily: FONT, color: C.text}}>
		<div style={{position: 'absolute', left: 64, top: 60}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 14}}>
				<span style={{background: P.main, color: '#fff', fontSize: 26, fontWeight: 800, padding: '6px 18px', borderRadius: 10}}>{D.badge}</span>
				<span style={{fontSize: 26, fontWeight: 700, color: C.muted}}>{D.book}</span>
			</div>
			<div style={{fontSize: TITLE_SIZE, fontWeight: 900, lineHeight: 1.12, letterSpacing: -2, marginTop: 26}}>
				{D.title.map((line, i) => (
					<div key={i}>
						{line.map(([s, hl], j) => (
							<span key={j} style={{color: hl ? P.main : C.text}}>{s}</span>
						))}
					</div>
				))}
			</div>
			<div style={{fontSize: 34, fontWeight: 800, color: P.deep, marginTop: 22}}>{D.sub}</div>
		</div>
		<div style={{position: 'absolute', right: 80, top: 0, bottom: 14, display: 'flex', alignItems: 'center'}}>
			<Textbook />
		</div>
		<div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 14, background: `linear-gradient(90deg, ${P.light}, ${P.main}, ${P.deep})`}} />
	</AbsoluteFill>
);
