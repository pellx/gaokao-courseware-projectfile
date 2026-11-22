import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.balance;
const {bl1, bl2, bl3, bl4} = t.cue;

export const Balance: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">协调人与生态环境的关系</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 200, display: 'flex', gap: 30}}>
			<Appear at={Math.max(bl1.from, bl2.from)} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.red}`, background: C.redSoft, borderRadius: 24, padding: '24px 30px', height: 260, boxSizing: 'border-box'}}>
					<div style={{fontSize: 42, fontWeight: 900, color: C.red}}>反对</div>
					<div style={{fontSize: 32, fontWeight: 700, marginTop: 18, lineHeight: 1.55}}><Hl>盲目地、掠夺式地</Hl>开发利用大自然</div>
				</div>
			</Appear>
			<Appear at={bl3.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.green}`, background: C.greenSoft, borderRadius: 24, padding: '24px 30px', height: 260, boxSizing: 'border-box'}}>
					<div style={{fontSize: 42, fontWeight: 900, color: C.green}}>提倡</div>
					<div style={{fontSize: 32, fontWeight: 700, marginTop: 18, lineHeight: 1.55}}><Hl c={C.green}>合理利用就是最好的保护</Hl>：生态旅游、适度捕捞采伐</div>
				</div>
			</Appear>
		</div>
		<Appear at={bl4.from} style={{position: 'absolute', left: 90, right: 90, top: 530}}>
			<Callout label="考法" style={{fontSize: 30}}>
				保护和利用<Hl c={C.green}>并不矛盾</Hl>：在保护的前提下合理开发利用，实现可持续发展
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
