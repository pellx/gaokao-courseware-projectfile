import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Axis} from '../components/Axis';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.grading;
const {gr1, gr2, gr3} = t.cue;

const BARS: [string, number, string][] = [
	['TRH（少量）', 0.12, C.brown],
	['TSH', 0.38, C.orange],
	['甲状腺激素（大量）', 1, C.red],
];

export const Grading: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点二">分级调节及其意义</Header>
			<Appear at={gr1.from} style={{position: 'absolute', left: 90, top: 165}}>
				<Axis stage={3} />
			</Appear>
			<Appear at={gr1.from} style={{position: 'absolute', left: 980, right: 90, top: 190, fontSize: 32, fontWeight: 700, lineHeight: 1.6}}>
				<Hl>下丘脑 → 垂体 → 靶腺体</Hl>的分层调控 = <Hl>分级调节</Hl>
			</Appear>
			<div style={{position: 'absolute', left: 980, right: 90, top: 330, display: 'flex', flexDirection: 'column', gap: 22}}>
				{BARS.map(([label, w, color], i) => {
					const p = interpolate(frame, [gr2.from + 20 + i * 25, gr2.from + 50 + i * 25], [0, 1], clamp);
					return (
						<div key={label}>
							<div style={{fontSize: 28, fontWeight: 900, color, opacity: p}}>{label}</div>
							<div style={{height: 40, width: `${w * 100 * p}%`, background: color, borderRadius: 10, opacity: 0.85}} />
						</div>
					);
				})}
				<Appear at={gr2.from + 110} style={{fontSize: 32, fontWeight: 900, color: C.red}}>
					层层放大 ↑
				</Appear>
			</div>
			<Appear at={gr3.from} style={{position: 'absolute', left: 90, right: 90, top: 740}}>
				<Callout label="考法" style={{fontSize: 29, padding: '12px 24px'}}>
					意义：<Hl>放大激素的调节效应</Hl>，形成<Hl c={C.orange}>多级反馈调节</Hl>，有利于<Hl c={C.green}>精细调控</Hl>，维持稳态
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
