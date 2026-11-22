import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Axis, Level} from '../components/Axis';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.goiter;
const {gt1, gt2, gt3, gt4} = t.cue;

export const Goiter: React.FC = () => {
	const frame = useCurrentFrame();
	const levels: Partial<Record<'TRH' | 'TSH' | 'TH', Level>> = {};
	if (frame >= gt2.from) levels.TH = 'down';
	if (frame >= gt3.from) {
		levels.TRH = 'up';
		levels.TSH = 'up';
	}
	return (
		<Scene duration={t.duration}>
			<Header tag="考点四">缺碘导致甲状腺肿</Header>
			<Appear at={gt1.from} style={{position: 'absolute', left: 90, top: 165}}>
				<Axis stage={3} feedback={frame >= gt2.from ? 0.35 : 1} levels={levels} mark={frame >= gt3.from + 40 ? {box: '甲状腺', note: ''} : undefined} />
			</Appear>
			<div style={{position: 'absolute', left: 900, top: 200, width: 520, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
				<Appear at={gt1.from}>
					<Hl>碘</Hl>是合成甲状腺激素的原料
				</Appear>
				<Appear at={gt2.from}>
					缺碘 → 甲状腺激素<Hl c={C.green}>↓</Hl> → 反馈抑制<Hl c={C.orange}>减弱</Hl>
				</Appear>
				<Appear at={gt3.from}>
					TRH、TSH <Hl>↑</Hl> → 甲状腺<Hl>增生肿大</Hl>
				</Appear>
			</div>
			<Appear at={gt3.from + 60} style={{position: 'absolute', left: 1460, right: 90, top: 170, height: 520}}>
				<Photo src="images/goitre-photo.jpg" caption="甲状腺肿" style={{width: '100%', height: '100%'}} pos="center 65%" />
			</Appear>
			<Appear at={gt4.from} style={{position: 'absolute', left: 90, right: 90, top: 760}}>
				<Callout label="解题方法" style={{fontSize: 29, padding: '12px 24px'}}>
					沿反馈链推：甲状腺激素<Hl c={C.green}>↓</Hl> → 抑制减弱 → TRH、TSH<Hl>↑</Hl> → 甲状腺增生肿大
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
