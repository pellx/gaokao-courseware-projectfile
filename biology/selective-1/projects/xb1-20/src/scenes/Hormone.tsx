import React from 'react';
import {Appear, Callout, Header, Narration, Photo, Scene} from '../components/ui';
import {C} from '../theme';
import type {SceneTimeline} from '../timeline';

const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

type Spec = {
	tag: string;
	name: string;
	color: string;
	site: string;
	siteLabel?: string;
	effects: string[];
	// Example card shown with the third line (scenes with four lines).
	extra?: React.ReactNode;
	photo?: [string, string];
	callout: {label: string; red?: boolean; body: React.ReactNode};
};

// One scene per hormone: line 1 shows where it is made, line 2 its effects,
// an optional line 3 an example, and the last line the 考法/易错 callout.
export const makeHormone = (t: SceneTimeline, s: Spec): React.FC => {
	const lines = t.lines;
	const site = lines[0];
	const effects = lines[1];
	const extra = lines.length > 3 ? lines[2] : undefined;
	const last = lines[lines.length - 1];
	const HormoneScene: React.FC = () => (
		<Scene duration={t.duration}>
			<Header tag={s.tag}>{s.name}</Header>
			<Appear at={site.from} style={{position: 'absolute', left: 90, top: 185, width: 560}}>
				<div style={{background: s.color, color: '#fff', borderRadius: 26, padding: '26px 32px'}}>
					<div style={{fontSize: 64, fontWeight: 900}}>{s.name}</div>
					<div style={{fontSize: 26, fontWeight: 700, opacity: 0.9, marginTop: 14}}>{s.siteLabel ?? '合成部位'}</div>
					<div style={{fontSize: 34, fontWeight: 900, marginTop: 4, lineHeight: 1.4}}>{s.site}</div>
				</div>
			</Appear>
			<div style={{position: 'absolute', left: 700, right: 90, top: 185, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Appear at={effects.from} style={{fontSize: 28, fontWeight: 800, color: C.muted}}>
					主要作用
				</Appear>
				{s.effects.map((e, i) => (
					<Appear key={e} at={at(effects.from, effects.to, 0.08 + (i * 0.85) / s.effects.length)} dx={30} dy={0}>
						<div style={{border: `4px solid ${s.color}`, borderRadius: 16, padding: '10px 22px', fontSize: 32, fontWeight: 800, background: '#fff'}}>{e}</div>
					</Appear>
				))}
			</div>
			{extra && s.extra && (
				<Appear at={extra.from} style={{position: 'absolute', left: 90, width: 560, top: 470}}>
					<div style={{border: `4px dashed ${s.color}`, borderRadius: 20, padding: '16px 24px', fontSize: 28, fontWeight: 700, lineHeight: 1.5, background: C.panel}}>{s.extra}</div>
				</Appear>
			)}
			{s.photo && (
				<Appear at={extra?.from ?? effects.from} style={{position: 'absolute', left: 90, width: 560, top: 470, height: 200}}>
					<Photo src={`images/${s.photo[0]}`} caption={s.photo[1]} style={{width: '100%', height: '100%'}} />
				</Appear>
			)}
			<Appear at={last.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
				<Callout label={s.callout.label} color={s.callout.red ? C.red : C.green} soft={s.callout.red ? C.redSoft : C.greenSoft} style={{fontSize: 29, padding: '12px 24px'}}>
					{s.callout.body}
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
	return HormoneScene;
};
