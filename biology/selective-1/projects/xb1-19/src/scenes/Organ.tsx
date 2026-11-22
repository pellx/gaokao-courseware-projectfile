import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {DoseCurve} from '../components/DoseCurve';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.organ;
const {or1, or2, or3, or4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Organ: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">不同器官对生长素的敏感度</Header>
		<div style={{position: 'absolute', left: 60, top: 175}}>
			<DoseCurve
				ticks={[[0.167, '10^-10'], [0.333, '10^-8'], [0.5, '10^-6'], [0.667, '10^-4'], [0.833, '10^-2']]}
				curves={[
					{label: '根', color: C.red, x0: 0, cross: 0.333, h: 0.8, from: or1.from, lx: 0.167, ly: 0.92},
					{label: '芽', color: C.orange, x0: 0.1, peak: 0.333, cross: 0.5, h: 0.8, from: at(or1.from, or1.to, 0.35), lx: 0.333, ly: 0.92},
					{label: '茎', color: C.green, x0: 0.25, peak: 0.667, cross: 0.833, h: 0.8, from: at(or1.from, or1.to, 0.65), lx: 0.667, ly: 0.92},
				]}
				vlines={[[0.5, '同一浓度', C.brown, or3.from]]}
				dots={[
					[0.5, 0.65, C.green, at(or3.from, or3.to, 0.2), '促进', -22],
					[0.5, 0, C.orange, at(or3.from, or3.to, 0.45)],
					[0.5, -0.45, C.red, at(or3.from, or3.to, 0.7), '抑制', -22],
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 980, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={or1.from}>
				敏感程度：<Hl>根</Hl> &gt; <Hl c={C.orange}>芽</Hl> &gt; <Hl c={C.green}>茎</Hl>
			</Appear>
			<Appear at={or2.from}>
				最适浓度：根 10<sup>−10</sup>，芽 10<sup>−8</sup>，茎 10<sup>−4</sup>（mol/L）
			</Appear>
			<Appear at={or3.from}>
				10<sup>−6</sup> mol/L：<Hl c={C.green}>促进茎</Hl>，对芽<Hl c={C.orange}>几乎无影响</Hl>，<Hl>抑制根</Hl>
			</Appear>
		</div>
		<Appear at={or4.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="考法" style={{fontSize: 29, padding: '12px 24px'}}>
				同一浓度对不同器官作用可能不同；<Hl c={C.orange}>双子叶</Hl>比单子叶敏感，<Hl c={C.orange}>幼嫩细胞</Hl>比衰老细胞敏感
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
