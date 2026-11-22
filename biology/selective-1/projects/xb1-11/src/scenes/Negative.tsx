import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {Axis} from '../components/Axis';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.negative;
const {nf1, nf2, nf3} = t.cue;

export const Negative: React.FC = () => {
	const fb = useRamp(nf1.from + 30, 20);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点三">负反馈调节</Header>
			<Appear at={nf1.from} style={{position: 'absolute', left: 90, top: 165}}>
				<Axis stage={3} feedback={fb} />
			</Appear>
			<div style={{position: 'absolute', left: 980, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 26, fontSize: 31, fontWeight: 700, lineHeight: 1.6}}>
				<Appear at={nf1.from}>
					甲状腺激素<Hl>增加到一定程度</Hl> → <Hl>抑制</Hl>下丘脑和垂体
				</Appear>
				<Appear at={nf2.from}>
					TRH、TSH <Hl c={C.green}>↓</Hl> → 甲状腺激素 <Hl c={C.green}>↓</Hl> → 回到正常水平
				</Appear>
			</div>
			<Appear at={nf3.from} style={{position: 'absolute', left: 980, right: 90, top: 560}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
					反馈作用于<Hl>下丘脑和垂体两处</Hl>，有两条反馈箭头
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
