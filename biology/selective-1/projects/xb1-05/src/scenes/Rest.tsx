import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene, useRamp} from '../components/ui';
import {Membrane} from '../components/Membrane';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.rest;
const {rs1, rs2, rs3, rs4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Rest: React.FC = () => {
	const signs = useRamp(rs1.from + 20, 16);
	const flow = useRamp(at(rs2.from, rs2.to, 0.6), 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点一">静息电位</Header>
			<Appear at={rs1.from} style={{position: 'absolute', left: 70, top: 170}}>
				<Membrane mode="rest" signs={signs} flow={flow} />
			</Appear>
			<div style={{position: 'absolute', left: 1140, right: 90, top: 180}}>
				<Appear at={rs1.from} style={{fontSize: 44, fontWeight: 900}}>
					静息电位：<Hl>外正内负</Hl>
				</Appear>
				<Appear at={rs2.from} style={{fontSize: 30, lineHeight: 1.7, marginTop: 14}}>
					① 膜内<Hl c={C.orange}>K⁺</Hl>浓度高于膜外
					<br />② 静息时膜主要对<Hl c={C.orange}>K⁺</Hl>有通透性
					<br />③ <Hl c={C.orange}>K⁺外流</Hl> → 膜外阳离子多
				</Appear>
				<Appear at={rs3.from} style={{marginTop: 22, width: 330, height: 330}}>
					<Photo src="images/giant-axon.jpg" caption="枪乌贼的巨大轴突" style={{width: '100%', height: '100%'}} />
				</Appear>
			</div>
			<Appear at={rs4.from} style={{position: 'absolute', left: 90, width: 1000, top: 745}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
					K⁺外流：顺浓度梯度、借助通道蛋白 → <Hl>协助扩散</Hl>，不消耗能量
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
