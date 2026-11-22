import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Trials} from '../components/Trials';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.went;
const {wt1, wt2, wt3, wt4, wt5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// Step 1: tips standing on an agar block.
const TipsOnAgar: React.FC = () => (
	<svg width={260} height={220} viewBox="0 0 260 220">
		<rect x={30} y={140} width={200} height={50} fill="#f6c27a" stroke="#b58b45" strokeWidth={3} />
		{[70, 130, 190].map((x) => (
			<path key={x} d={`M${x - 20},140 L${x - 20},110 A20,20 0 0 1 ${x + 20},110 L${x + 20},140 Z`} fill="#a9d88a" stroke="#3f7d3a" strokeWidth={3} />
		))}
		{[60, 110, 160, 200].map((x) => (
			<circle key={x} cx={x} cy={165} r={5} fill={C.orange} />
		))}
		<text x={130} y={214} fontSize={24} fontWeight={800} fill={C.text} textAnchor="middle">尖端放在琼脂块上</text>
	</svg>
);

export const Went: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">温特的实验</Header>
		<Appear at={wt1.from} style={{position: 'absolute', left: 90, top: 300}}>
			<TipsOnAgar />
		</Appear>
		<Appear at={wt2.from} dy={0} style={{position: 'absolute', left: 365, top: 380, fontSize: 56, color: C.muted, fontWeight: 900}}>
			→
		</Appear>
		<div style={{position: 'absolute', left: 440, top: 165}}>
			<Trials
				gap={30}
				trials={[
					{p: {tip: 'none', block: {kind: 'auxin', pos: 'left'}, bend: 45, label: '实验组'}, at: wt2.from, result: '弯向对侧', resultAt: at(wt2.from, wt2.to, 0.6)},
					{p: {tip: 'none', block: {kind: 'plain', pos: 'left'}, label: '空白琼脂块'}, at: wt3.from, result: '不生长不弯曲', color: C.red, resultAt: at(wt3.from, wt3.to, 0.6)},
				]}
			/>
		</div>
		<Appear at={wt4.from} style={{position: 'absolute', left: 1000, right: 90, top: 220}}>
			<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '20px 28px', background: C.greenSoft, fontSize: 32, fontWeight: 800, lineHeight: 1.5}}>
				结论：弯曲生长由一种<Hl>化学物质</Hl>引起
				<br />
				温特命名为<Hl c={C.green}>生长素</Hl>
			</div>
		</Appear>
		<Appear at={wt5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="考法" style={{fontSize: 30, padding: '12px 24px'}}>
				空白琼脂块：<Hl c={C.orange}>排除琼脂块本身的影响</Hl>；温特<Hl>没有提取出</Hl>生长素
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
