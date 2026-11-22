import React from 'react';
import {Narration, Photo, Scene} from '../components/ui';
import {EP} from '../episode';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.intro;

export const NUM = '一二三四五六七八九十';
// Three chips per row, or two when a 考点 name is too long to fit.
// Title shrinks to fit the 1140 px left of the photo (112 px per character at full size).
const TITLE_LEN = EP.intro.title.reduce((n, [s]) => n + s.length, 0);
const TITLE_SIZE = Math.min(108, Math.floor(1140 / TITLE_LEN) - 4);
const MANY = EP.points.length > 8;
const COLS = MANY || Math.max(...EP.points.map((p) => p.length)) <= 7 ? '1fr 1fr 1fr' : '1fr 1fr';
const CHIP = MANY ? 24 : 28;

// 开场：第一帧就把标题、考点、照片全部摆出来，不做渐显（用户要求：有效信息密度大、不浪费时间）。
export const Intro: React.FC = () => (
	<Scene duration={t.duration} fadeIn={false}>
		<div style={{position: 'absolute', left: 110, top: 120}}>
			<div style={{display: 'inline-block', background: C.orange, color: '#fff', fontSize: 36, fontWeight: 700, padding: '6px 22px', borderRadius: 12}}>{EP.intro.badge}</div>
			<div style={{fontSize: TITLE_SIZE, fontWeight: 900, marginTop: 24, letterSpacing: 4, whiteSpace: 'nowrap'}}>
				{EP.intro.title.map(([s, hl], i) => (
					<span key={i} style={{color: hl ? C.red : C.text}}>
						{s}
					</span>
				))}
			</div>
			<div style={{fontSize: 44, color: C.muted, marginTop: 6}}>{EP.intro.subtitle}</div>
		</div>
		<div style={{position: 'absolute', left: 110, top: 500, width: 1080, display: 'grid', gridTemplateColumns: COLS, gap: 16}}>
			{EP.points.map((name, i) => (
				<div key={name} style={{display: 'flex', alignItems: 'center', gap: 12, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 16, padding: MANY ? '10px 12px' : '12px 16px', fontSize: CHIP, fontWeight: 700, whiteSpace: 'nowrap'}}>
					<span style={{background: i % 2 ? C.orange : C.red, color: '#fff', fontSize: MANY ? 20 : 24, padding: '2px 10px', borderRadius: 8}}>考点{NUM[i]}</span>
					{name}
				</div>
			))}
		</div>
		<div style={{position: 'absolute', right: 100, top: 130, width: 560, height: 680}}>
			<Photo src={`images/${EP.intro.photo}`} caption={EP.intro.photoCaption} style={{width: '100%', height: '100%'}} pos={EP.intro.photoPos} />
		</div>
		<Narration t={t} />
	</Scene>
);
