import React from 'react';
import {Appear, Header, Narration, Scene, usePop, useRamp} from '../components/ui';
import {EP} from '../episode';
import {C} from '../theme';
import {Cue, T} from '../timeline';
import {chem} from '../components/chem';
import {AnimeSticker} from '../components/anime';

// 片尾贴图：episode.json 的 anime 里有 key 为 "end" 的插图时，结束画面文字左移、右侧放图。
const END = (EP.anime ?? []).some((a) => a.key === 'end');
// 结束标题按可用宽度缩小字号，避免折行。
const END_LEN = EP.review.endTitle.reduce((n, [s]) => n + s.length, 0);
const END_SIZE = Math.min(96, Math.floor((END ? 1240 : 1700) / END_LEN));

// 题干超过两行时缩小字号（每行约 21 个字）。
const Q_SIZE = (q: string) => {
	const n = q.replace(/\^/g, '').length;
	return n > 42 ? Math.floor(34 * Math.sqrt(42 / n)) : 34;
};

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
						<div style={{display: 'flex', alignItems: 'center', gap: 20, padding: '12px 24px', borderRadius: 18, background: C.panel, border: `3px solid ${C.line}`, height: 150, boxSizing: 'border-box'}}>
							<Verdict ok={it.ok} at={TIMES[i].judge} />
							{/* 对题、错题版面一致：题干固定占两行高度并居中，下方总留一行“改正”的位置，不能凭题干位置猜答案。 */}
							<div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column'}}>
								<div style={{height: 88, display: 'flex', alignItems: 'center', fontSize: Q_SIZE(it.q), fontWeight: 700, lineHeight: 1.3}}>
									<div>{chem(it.q)}</div>
								</div>
								<div style={{height: 34, marginTop: 2, fontSize: 27, lineHeight: '34px', color: C.red, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden'}}>
									{it.fix && (
										<Appear at={TIMES[i].judge + 8} dy={0}>
											<div>改正：{chem(it.fix)}</div>
										</Appear>
									)}
								</div>
							</div>
						</div>
					</Appear>
				))}
			</div>
			<div style={{position: 'absolute', left: 0, right: END ? 520 : 0, top: 260, textAlign: 'center', opacity: end, transform: `scale(${0.85 + 0.15 * end})`}}>
				<div style={{fontSize: END_SIZE, fontWeight: 900, whiteSpace: 'nowrap'}}>
					{EP.review.endTitle.map(([s, hl], i) => (
						<span key={i} style={{color: hl ? C.red : C.text}}>
							{s}
						</span>
					))}
				</div>
				<div style={{fontSize: 42, fontWeight: 700, marginTop: 14}}>{EP.review.endLine}</div>
				<div style={{fontSize: 42, color: C.orange, fontWeight: 700, marginTop: 24}}>{EP.review.slogan}</div>
			</div>
			{END && <AnimeSticker k="end" at={rv5.from + 10} style={{left: 1420, top: 150, width: 420, height: 600}} />}
			<div style={{position: 'absolute', left: 120, right: 120, bottom: 50, fontSize: 22, color: C.muted, lineHeight: 1.6, opacity: credits, textAlign: 'center'}}>{EP.credits}</div>
			<Narration t={t} />
		</Scene>
	);
};
