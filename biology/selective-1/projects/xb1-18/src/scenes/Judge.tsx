import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Trials} from '../components/Trials';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.judge;
const {jg2, jg3, jg4, jg5, jg6} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Judge: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">判断胚芽鞘的生长与弯曲</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170, display: 'flex', gap: 20, fontSize: 28, fontWeight: 800}}>
			<Appear at={jg2.from}>① 有无生长素来源？无 → <Hl>不生长</Hl></Appear>
			<Appear at={jg3.from}>② 分布均匀 → <Hl c={C.orange}>直立</Hl>；不均匀 → <Hl c={C.green}>弯向少的一侧</Hl></Appear>
		</div>
		<div style={{position: 'absolute', left: 60, top: 220}}>
			<Trials
				scale={0.95}
				gap={60}
				trials={[
					{p: {light: 'left', tip: 'none', label: 'a 去尖端'}, at: jg2.from, result: '不生长', color: C.red, resultAt: at(jg2.from, jg2.to, 0.6)},
					{p: {light: 'left', tip: 'cap', label: 'b 尖端罩锡箔'}, at: jg4.from, result: '直立生长', color: C.orange, resultAt: at(jg4.from, jg4.to, 0.35)},
					{p: {light: 'left', micaV: true, label: 'c 云母片纵插尖端'}, at: at(jg4.from, jg4.to, 0.4), result: '直立生长', color: C.orange, resultAt: at(jg4.from, jg4.to, 0.8)},
					{p: {light: 'left', tip: 'none', block: {kind: 'auxin', pos: 'right'}, bend: -45, label: 'd 琼脂块放右侧'}, at: jg5.from, result: '弯向左侧', resultAt: at(jg5.from, jg5.to, 0.45)},
					{p: {light: 'left', rotate: true, label: 'e 匀速旋转'}, at: at(jg5.from, jg5.to, 0.6), result: '直立生长', color: C.orange, resultAt: at(jg5.from, jg5.to, 0.85)},
				]}
			/>
		</div>
		<Appear at={jg6.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
			<Callout label="解题方法" style={{fontSize: 29, padding: '12px 24px'}}>
				一看<Hl>有无生长素来源</Hl>，二看<Hl c={C.orange}>有无尖端感光</Hl>，三看<Hl c={C.green}>能否横向运输</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
