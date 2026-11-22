import React from 'react';
import {Appear, Narration, Photo, Scene, usePop, useRamp} from '../components/ui';
import {EP} from '../episode';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.intro;
const {in2, in3} = t.cue;

export const NUM = '一二三四五六七八九十';
// Three chips per row, or two when a 考点 name is too long to fit.
// Title shrinks to fit the 1140 px left of the photo (112 px per character at full size).
const TITLE_LEN = EP.intro.title.reduce((n, [s]) => n + s.length, 0);
const TITLE_SIZE = Math.min(108, Math.floor(1140 / TITLE_LEN) - 4);
const COLS = Math.max(...EP.points.map((p) => p.length)) > 7 ? '1fr 1fr' : '1fr 1fr 1fr';

// Title, subtitle, one chip per 考点 and a photo, all from episode.json.
export const Intro: React.FC = () => {
	const title = useRamp(5, 20);
	const photo = usePop(20);
	const sub = useRamp(in2.from, 15);
	return (
		<Scene duration={t.duration}>
			<div style={{position: 'absolute', left: 110, top: 120, opacity: title, transform: `translateY(${(1 - title) * 30}px)`}}>
				<div style={{display: 'inline-block', background: C.orange, color: '#fff', fontSize: 36, fontWeight: 700, padding: '6px 22px', borderRadius: 12}}>{EP.intro.badge}</div>
				<div style={{fontSize: TITLE_SIZE, fontWeight: 900, marginTop: 24, letterSpacing: 4, whiteSpace: 'nowrap'}}>
					{EP.intro.title.map(([s, hl], i) => (
						<span key={i} style={{color: hl ? C.red : C.text}}>
							{s}
						</span>
					))}
				</div>
				<div style={{fontSize: 44, color: C.muted, marginTop: 6, opacity: sub}}>{EP.intro.subtitle}</div>
			</div>
			<div style={{position: 'absolute', left: 110, top: 500, width: 1080, display: 'grid', gridTemplateColumns: COLS, gap: 16}}>
				{EP.points.map((name, i) => (
					<Appear key={name} at={in3.from + i * 6} dx={-30} dy={0}>
						<div style={{display: 'flex', alignItems: 'center', gap: 12, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 16, padding: '12px 16px', fontSize: 28, fontWeight: 700, whiteSpace: 'nowrap'}}>
							<span style={{background: i % 2 ? C.orange : C.red, color: '#fff', fontSize: 24, padding: '2px 10px', borderRadius: 8}}>考点{NUM[i]}</span>
							{name}
						</div>
					</Appear>
				))}
			</div>
			<div style={{position: 'absolute', right: 100, top: 130, width: 560, height: 680, transform: `scale(${0.9 + 0.1 * photo})`, opacity: Math.min(1, photo)}}>
				<Photo src={`images/${EP.intro.photo}`} caption={EP.intro.photoCaption} style={{width: '100%', height: '100%'}} pos={EP.intro.photoPos} />
			</div>
			<Narration t={t} />
		</Scene>
	);
};
