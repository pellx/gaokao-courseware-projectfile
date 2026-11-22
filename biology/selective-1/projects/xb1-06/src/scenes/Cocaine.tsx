import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {Chain} from '../components/kit';
import {Synapse} from '../components/Synapse';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.cocaine;
const {ad1, ad2, ad3, ad4, ad5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Cocaine: React.FC = () => {
	const frame = useCurrentFrame();
	const pumps = useRamp(ad2.from, 16);
	const blocked = useRamp(at(ad3.from, ad3.to, 0.2), 16);
	const receptors = frame >= at(ad4.from, ad4.to, 0.3) ? 2 : 5;
	const bind = interpolate(frame, [ad3.from + 40, ad3.to], [0, 0.35], clamp);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点七">可卡因与成瘾机制</Header>
			<Appear at={ad1.from} style={{position: 'absolute', left: 60, top: 165}}>
				<Synapse release={1} bind={bind} transporter={pumps} blocked={blocked} receptors={receptors} dot={C.orange} cleftDots={frame >= ad3.from ? 8 : 4} labels={0} />
			</Appear>
			<div style={{position: 'absolute', left: 1070, right: 80, top: 190, display: 'flex', flexDirection: 'column', gap: 20, fontSize: 30, lineHeight: 1.5}}>
				<Appear at={ad2.from}>
					正常：<Hl c={C.orange}>多巴胺</Hl>被前膜上的<Hl c={C.gold}>转运体</Hl>回收
				</Appear>
				<Appear at={ad3.from}>
					可卡因：转运体<Hl>失去回收功能</Hl> → 多巴胺持续作用 → 强烈愉悦感
				</Appear>
				<Appear at={ad4.from}>
					长期：后膜多巴胺<Hl>受体减少</Hl> → 停药后作用减弱 → 需更多毒品 → <Hl>毒瘾</Hl>
				</Appear>
			</div>
			<Appear at={ad5.from} style={{position: 'absolute', left: 90, right: 80, top: 780}}>
				<Callout label="考法" style={{fontSize: 27, padding: '12px 22px'}}>
					转运体失去回收功能 → 多巴胺持续作用 → <Hl>受体减少</Hl> → 需更多毒品维持
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
