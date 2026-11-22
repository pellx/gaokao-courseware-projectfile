import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {DoseCurve} from '../components/DoseCurve';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.herb;
const {hb1, hb2, hb3, hb4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Herb: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">2,4-D用作除草剂</Header>
		<div style={{position: 'absolute', left: 60, top: 175}}>
			<DoseCurve
				curves={[
					{label: '双子叶植物', color: C.red, x0: 0, peak: 0.22, cross: 0.45, h: 0.8, from: hb2.from, lx: 0.2, ly: 0.93},
					{label: '单子叶植物', color: C.green, x0: 0.15, peak: 0.62, cross: 0.86, h: 0.8, from: at(hb2.from, hb2.to, 0.3), lx: 0.78, ly: 0.93},
				]}
				vlines={[[0.56, '选用浓度', C.orange, hb3.from]]}
				dots={[
					[0.56, -0.42, C.red, at(hb3.from, hb3.to, 0.3), '杂草受抑制', 46],
					[0.56, 0.78, C.green, at(hb3.from, hb3.to, 0.6), '作物受促进', -24, -90],
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 980, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={hb1.from}>高浓度<Hl>2,4-D</Hl> → 除草剂</Appear>
			<Appear at={hb2.from}>
				<Hl>双子叶</Hl>比<Hl c={C.green}>单子叶</Hl>更敏感
			</Appear>
			<Appear at={hb3.from}>
				选用浓度：双子叶在<Hl>抑制区</Hl>，单子叶在<Hl c={C.green}>促进区</Hl>
			</Appear>
		</div>
		<Appear at={hb4.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29, padding: '12px 24px'}}>
				原理：<Hl>敏感程度不同</Hl>；小麦田、玉米田可用，<Hl>大豆田不能用</Hl>（大豆是双子叶植物）
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
