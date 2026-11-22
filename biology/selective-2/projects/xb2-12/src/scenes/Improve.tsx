import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.improve;
const {im1, im2, im3, im4} = t.cue;

export const Improve: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">提高生态系统稳定性的措施</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 30}}>
			<Appear at={Math.max(im1.from, im2.from)} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.orange}`, borderRadius: 24, padding: '22px 28px', height: 280, boxSizing: 'border-box'}}>
					<div style={{fontSize: 40, fontWeight: 900, color: C.orange}}>控制干扰强度</div>
					<div style={{fontSize: 31, fontWeight: 700, marginTop: 16, lineHeight: 1.55}}>不超过自我调节能力，<Hl c={C.orange}>合理适度</Hl>地利用生态系统</div>
				</div>
			</Appear>
			<Appear at={im3.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 24, padding: '22px 28px', height: 280, boxSizing: 'border-box'}}>
					<div style={{fontSize: 40, fontWeight: 900, color: C.green}}>给予物质、能量投入</div>
					<div style={{fontSize: 31, fontWeight: 700, marginTop: 16, lineHeight: 1.55}}>对利用强度大的生态系统，如农田<Hl c={C.green}>施肥、灌溉</Hl></div>
				</div>
			</Appear>
		</div>
		<Appear at={im4.from} style={{position: 'absolute', left: 90, right: 90, top: 540}}>
			<Callout label="考法" style={{fontSize: 30}}>
				答题要点：<Hl c={C.green}>适当增加物种种类</Hl>，使营养结构更复杂；<Hl c={C.orange}>控制干扰强度</Hl>；给予<Hl c={C.green}>物质和能量投入</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
