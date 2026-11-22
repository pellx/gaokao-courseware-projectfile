import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {Membrane} from '../components/Membrane';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.action;
const {ap1, ap2, ap3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Action: React.FC = () => {
	const flow = useRamp(at(ap1.from, ap1.to, 0.6), 16);
	const signs = useRamp(ap2.from, 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点二">动作电位</Header>
			<Appear at={ap1.from} style={{position: 'absolute', left: 70, top: 170}}>
				<Membrane mode="action" signs={signs} flow={flow} />
			</Appear>
			<div style={{position: 'absolute', left: 1140, right: 90, top: 180}}>
				<Appear at={ap1.from} style={{fontSize: 30, lineHeight: 1.7}}>
					① 受到刺激，膜对<Hl c={C.green}>Na⁺</Hl>的通透性增加
					<br />② <Hl c={C.green}>Na⁺迅速内流</Hl>
				</Appear>
				<Appear at={ap2.from} style={{fontSize: 44, fontWeight: 900, marginTop: 30}}>
					动作电位：<Hl>外负内正</Hl>
				</Appear>
				<Appear at={ap2.from + 20} style={{fontSize: 30, marginTop: 10, color: C.muted, fontWeight: 700}}>
					该部位处于兴奋状态
				</Appear>
				<Appear at={at(ap3.from, ap3.to, 0.55)} style={{marginTop: 40}}>
					<div style={{border: `4px solid ${C.orange}`, borderRadius: 20, padding: '20px 26px', fontSize: 40, fontWeight: 900, textAlign: 'center', background: C.orangeSoft}}>
						<Hl c={C.orange}>静息钾外流</Hl>
						<br />
						<Hl c={C.green}>兴奋钠内流</Hl>
					</div>
				</Appear>
			</div>
			<Appear at={ap3.from} style={{position: 'absolute', left: 90, width: 1000, top: 745}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
					Na⁺内流：顺浓度梯度、借助通道蛋白 → <Hl>协助扩散</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
