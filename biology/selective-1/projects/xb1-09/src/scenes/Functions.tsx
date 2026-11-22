import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.functions;
const {fn2, fn3, fn4, fn5, fn6, fn7, fn8} = t.cue;
export const FUNCTIONS_DUR = t.duration;

const mid = (from: number, to: number) => from + Math.round((to - from) * 0.5);

const ROWS = [
	{h: '甲状腺激素', f: '调节有机物代谢；促进生长和发育；提高神经系统的兴奋性', c: C.red, at: fn2.from},
	{h: '生长激素', f: '调节生长发育：促进蛋白质合成和骨的生长', c: C.orange, at: fn3.from},
	{h: '胰岛素', f: '降低血糖（唯一能降血糖的激素）', c: C.green, at: fn4.from},
	{h: '胰高血糖素', f: '升高血糖', c: C.red, at: mid(fn4.from, fn4.to)},
	{h: '肾上腺素', f: '升高血糖；提高机体的应激能力', c: C.orange, at: fn5.from},
	{h: '性激素', f: '促进生殖器官发育和生殖细胞形成，激发并维持第二性征', c: C.red, at: mid(fn5.from, fn5.to)},
];

const Pair: React.FC<{a: string; b: string; effect: string; color: string; sym: string; at: number}> = ({a, b, effect, color, sym, at}) => (
	<Appear at={at} dx={-20} dy={0}>
		<div style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 34, fontWeight: 700}}>
			<span style={{background: '#fff', border: `3px solid ${color}`, borderRadius: 12, padding: '6px 16px'}}>{a}</span>
			<span style={{color, fontWeight: 900, fontSize: 40}}>{sym}</span>
			<span style={{background: '#fff', border: `3px solid ${color}`, borderRadius: 12, padding: '6px 16px'}}>{b}</span>
			<span style={{color: C.muted}}>→</span>
			<span style={{color}}>{effect}</span>
		</div>
	</Appear>
);

export const Functions: React.FC = () => {
	const frame = useCurrentFrame();
	const p1 = interpolate(frame, [fn6.from - 15, fn6.from], [1, 0], clamp);
	return (
		<Scene duration={FUNCTIONS_DUR}>
			<Header tag="考点六">主要激素的功能与相互作用</Header>
			<div style={{position: 'absolute', left: 110, right: 110, top: 170, opacity: p1, display: 'flex', flexDirection: 'column', gap: 12}}>
				{ROWS.map((r) => (
					<Appear key={r.h} at={r.at} dx={-30} dy={0}>
						<div style={{display: 'flex', alignItems: 'center', background: C.panel, borderLeft: `10px solid ${r.c}`, borderRadius: 14, padding: '0 26px', height: 92}}>
							<div style={{width: 230, fontSize: 38, fontWeight: 900, color: r.c}}>{r.h}</div>
							<div style={{fontSize: 33}}>{r.f}</div>
						</div>
					</Appear>
				))}
			</div>

			<div style={{position: 'absolute', left: 110, right: 110, top: 175}}>
				<Appear at={fn6.from}>
					<div style={{background: C.greenSoft, borderRadius: 22, padding: '22px 30px'}}>
						<div style={{fontSize: 40, fontWeight: 900, color: C.green, marginBottom: 14}}>协同作用：效果相同</div>
						<div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
							<Pair a="生长激素" b="甲状腺激素" sym="+" effect="促进生长发育" color={C.green} at={fn6.from + 30} />
							<Pair a="胰高血糖素" b="肾上腺素" sym="+" effect="升高血糖" color={C.green} at={fn6.from + 70} />
						</div>
					</div>
				</Appear>
				<Appear at={fn7.from} style={{marginTop: 24}}>
					<div style={{background: C.redSoft, borderRadius: 22, padding: '22px 30px'}}>
						<div style={{fontSize: 40, fontWeight: 900, color: C.red, marginBottom: 14}}>相抗衡：效果相反</div>
						<Pair a="胰岛素（降血糖）" b="胰高血糖素（升血糖）" sym="⇄" effect="维持血糖平衡" color={C.red} at={fn7.from + 25} />
					</div>
				</Appear>
				<Appear at={fn8.from} style={{marginTop: 24}}>
					<Callout label="考法" style={{fontSize: 33}}>
						激素与功能常被打乱配对：<Hl c={C.green}>降血糖只有胰岛素</Hl>；<Hl>促进发育、提高神经系统兴奋性</Hl>是甲状腺激素。
					</Callout>
				</Appear>
			</div>
			<Narration t={t} />
		</Scene>
	);
};
