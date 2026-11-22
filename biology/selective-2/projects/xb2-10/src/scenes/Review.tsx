import React from 'react';
import {Appear, Header, Narration, Scene, usePop, useRamp} from '../components/ui';
import {EP} from '../episode';
import {C} from '../theme';
import {Cue, T} from '../timeline';

const t = T.review;
const {rv2, rv3, rv4, rv5} = t.cue;

// rv2–rv4 each read two statements: the first in the first half of the clip,
// the second in the second half. Verdicts land shortly after each statement.
const at = (cue: Cue, part: number) => cue.from + Math.round((cue.to - cue.from) * part);
const TIMES = [rv2, rv3, rv4].flatMap((cue) => [
	{show: cue.from, judge: at(cue, 0.3)},
	{show: at(cue, 0.5), judge: at(cue, 0.75)},
]);

const Verdict: React.FC<{ok: boolean; at: number}> = ({ok, at}) => {
	const s = usePop(at);
	return (
		<div style={{width: 64, height: 64, borderRadius: 32, background: ok ? C.green : C.red, color: '#fff', fontSize: 42, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scale(${s})`, flexShrink: 0}}>
			{ok ? '✓' : '✗'}
		</div>
	);
};

export const Review: React.FC = () => {
	const end = usePop(rv5.from);
	const credits = useRamp(rv5.to + 5, 15);
	return (
		<Scene duration={t.duration}>
			<Header tag="易错速查" tagColor={C.orange}>判断题：这些说法对吗？</Header>
			<div style={{position: 'absolute', left: 100, right: 100, top: 165, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, opacity: 1 - end}}>
				{EP.review.items.map((it, i) => (
					<Appear key={i} at={TIMES[i].show} dy={20}>
						<div style={{display: 'flex', alignItems: 'center', gap: 20, padding: '14px 24px', borderRadius: 18, background: C.panel, border: `3px solid ${C.line}`, height: 150, boxSizing: 'border-box'}}>
							<Verdict ok={it.ok} at={TIMES[i].judge} />
							<div>
								<div style={{fontSize: 34, fontWeight: 700, lineHeight: 1.3}}>{it.q}</div>
								{it.fix && (
									<Appear at={TIMES[i].judge + 8} dy={0}>
										<div style={{fontSize: 28, color: C.red, fontWeight: 600, marginTop: 4}}>改正：{it.fix}</div>
									</Appear>
								)}
							</div>
						</div>
					</Appear>
				))}
			</div>
			<div style={{position: 'absolute', left: 0, right: 0, top: 260, textAlign: 'center', opacity: end, transform: `scale(${0.85 + 0.15 * end})`}}>
				<div style={{fontSize: 96, fontWeight: 900}}>
					{EP.review.endTitle.map(([s, hl], i) => (
						<span key={i} style={{color: hl ? C.red : C.text}}>
							{s}
						</span>
					))}
				</div>
				<div style={{fontSize: 42, fontWeight: 700, marginTop: 14}}>{EP.review.endLine}</div>
				<div style={{fontSize: 42, color: C.orange, fontWeight: 700, marginTop: 24}}>{EP.review.slogan}</div>
			</div>
			<div style={{position: 'absolute', left: 120, right: 120, bottom: 50, fontSize: 22, color: C.muted, lineHeight: 1.6, opacity: credits, textAlign: 'center'}}>{EP.credits}</div>
			<Narration t={t} />
		</Scene>
	);
};
