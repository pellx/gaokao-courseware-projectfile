import React from 'react';
import {Appear, Header, Narration, Scene, usePop, useRamp} from '../components/ui';
import {C} from '../theme';
import {Cue, T} from '../timeline';

const t = T.review;
const {rv2, rv3, rv4, rv5} = t.cue;
export const REVIEW_DUR = t.duration;

// Each narration line covers two statements: the first is read in the first
// half of the clip, the second in the second half.
const at = (cue: Cue, part: number) => cue.from + Math.round((cue.to - cue.from) * part);

const ITEMS = [
	{q: '促胰液素由胰腺分泌', ok: false, fix: '由小肠黏膜分泌', show: rv2.from, judge: at(rv2, 0.22)},
	{q: '胰液属于激素', ok: false, fix: '胰液是消化液，经导管排出', show: at(rv2, 0.55), judge: at(rv2, 0.75)},
	{q: '摘除睾丸利用了减法原理', ok: true, fix: '', show: rv3.from, judge: at(rv3, 0.35)},
	{q: '胰岛素可以口服', ok: false, fix: '蛋白质，只能注射', show: at(rv3, 0.5), judge: at(rv3, 0.7)},
	{q: '幼年缺乏甲状腺激素会患侏儒症', ok: false, fix: '应为呆小症', show: rv4.from, judge: at(rv4, 0.3)},
	{q: '激素只运输到靶细胞', ok: false, fix: '运输到全身，只作用于靶细胞', show: at(rv4, 0.5), judge: at(rv4, 0.68)},
];

const CREDITS =
	'图片来源：Wikimedia Commons —— Maull & Fox《William Bayliss》CC BY 4.0（Wellcome Collection）；H. S. Raper《Ernest Starling》公有领域；Thomas Fisher Rare Book Library, University of Toronto《F.G. Banting and C.H. Best with a dog》CC BY 2.0；Julian Lupyan《Rooster in Key West, Florida》CC0';

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
		<Scene duration={REVIEW_DUR}>
			<Header tag="易错速查" tagColor={C.orange}>判断题：这些说法对吗？</Header>
			<div style={{position: 'absolute', left: 100, right: 100, top: 165, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, opacity: 1 - end}}>
				{ITEMS.map((it, i) => (
					<Appear key={i} at={it.show} dy={20}>
						<div style={{display: 'flex', alignItems: 'center', gap: 20, padding: '14px 24px', borderRadius: 18, background: C.panel, border: `3px solid ${C.line}`, height: 150, boxSizing: 'border-box'}}>
							<Verdict ok={it.ok} at={it.judge} />
							<div>
								<div style={{fontSize: 36, fontWeight: 700}}>{it.q}</div>
								{it.fix && (
									<Appear at={it.judge + 8} dy={0}>
										<div style={{fontSize: 29, color: C.red, fontWeight: 600, marginTop: 4}}>改正：{it.fix}</div>
									</Appear>
								)}
							</div>
						</div>
					</Appear>
				))}
			</div>
			<div style={{position: 'absolute', left: 0, right: 0, top: 260, textAlign: 'center', opacity: end, transform: `scale(${0.85 + 0.15 * end})`}}>
				<div style={{fontSize: 96, fontWeight: 900}}>
					激素与<span style={{color: C.red}}>内分泌系统</span>
				</div>
				<div style={{fontSize: 42, fontWeight: 700, marginTop: 14}}>发现史 · 研究方法 · 腺体与激素 · 功能 · 化学本质 · 疾病 · 特点</div>
				<div style={{fontSize: 42, color: C.orange, fontWeight: 700, marginTop: 24}}>把实验逻辑练熟，这一节稳稳拿分！</div>
			</div>
			<div style={{position: 'absolute', left: 120, right: 120, bottom: 50, fontSize: 22, color: C.muted, lineHeight: 1.6, opacity: credits, textAlign: 'center'}}>{CREDITS}</div>
			<Narration t={t} />
		</Scene>
	);
};
