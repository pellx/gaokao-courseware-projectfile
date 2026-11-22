import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Gravity} from '../components/Gravity';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.gravity;
const {gv1, gv2, gv3, gv4, gv5} = t.cue;

export const GravityScene: React.FC = () => {
	const frame = useCurrentFrame();
	const b = interpolate(frame, [gv3.from, gv3.from + 60], [0, 1], clamp);
	const dots = interpolate(frame, [gv2.from, gv2.from + 15], [0, 1], clamp);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点八">根的向地性与茎的背地性</Header>
			<Appear at={gv1.from} style={{position: 'absolute', left: 70, top: 180}}>
				<Gravity b={b} dots={dots} />
			</Appear>
			<div style={{position: 'absolute', left: 760, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Appear at={gv3.from}>
					<div style={{border: `4px solid ${C.green}`, borderRadius: 18, padding: '14px 22px', fontSize: 29, fontWeight: 700, lineHeight: 1.5}}>
						<Hl c={C.green}>茎</Hl>（不敏感）：近地侧浓度高 → <Hl c={C.green}>促进更强</Hl> → 背地生长
					</div>
				</Appear>
				<Appear at={gv4.from}>
					<div style={{border: `4px solid ${C.red}`, borderRadius: 18, padding: '14px 22px', fontSize: 29, fontWeight: 700, lineHeight: 1.5}}>
						<Hl>根</Hl>（敏感）：近地侧浓度高 → <Hl>抑制</Hl>；远地侧浓度低 → 促进 → 向地生长
					</div>
				</Appear>
			</div>
			<Appear at={gv5.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
				<Callout label="考法" style={{fontSize: 29, padding: '12px 24px'}}>
					根的向地性、顶端优势 → <Hl>低促进、高抑制</Hl>；茎的背地性、向光性 → <Hl c={C.orange}>只体现促进</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
