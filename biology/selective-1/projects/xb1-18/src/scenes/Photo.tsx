import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Coleoptile} from '../components/Coleoptile';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.photo;
const {pt2, pt3, pt4, pt5} = t.cue;

export const PhotoScene: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">植物向光性的原因</Header>
		<Appear at={pt2.from} style={{position: 'absolute', left: 80, top: 150}}>
			<Coleoptile light="left" lateral auxin="shift" scale={1.45} />
		</Appear>
		<Appear at={pt2.from} style={{position: 'absolute', left: 400, top: 250, fontSize: 28, fontWeight: 900, color: C.orange}}>
			尖端：生长素由向光侧移向背光侧
		</Appear>
		<Appear at={pt3.from} style={{position: 'absolute', left: 400, top: 420, fontSize: 28, fontWeight: 800, lineHeight: 1.6}}>
			向光侧：生长素<Hl c={C.orange}>少</Hl>
			<br />
			背光侧：生长素<Hl>多</Hl>
		</Appear>
		<Appear at={pt4.from} dy={0} style={{position: 'absolute', left: 700, top: 400, fontSize: 60, color: C.muted, fontWeight: 900}}>
			→
		</Appear>
		<Appear at={pt4.from} style={{position: 'absolute', left: 790, top: 150}}>
			<Coleoptile light="left" bend={-55} scale={1.45} />
		</Appear>
		<Appear at={pt4.from} style={{position: 'absolute', left: 1150, right: 90, top: 260}}>
			<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '20px 28px', background: C.greenSoft, fontSize: 31, fontWeight: 800, lineHeight: 1.6}}>
				背光侧细胞<Hl>生长快</Hl>
				<br />
				向光侧生长慢
				<br />→ <Hl c={C.green}>弯向光源</Hl>
			</div>
		</Appear>
		<Appear at={pt5.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29, padding: '12px 24px'}}>
				单侧光改变<Hl>分布</Hl>，不影响<Hl>合成</Hl>；感光、横向运输在<Hl c={C.orange}>尖端</Hl>，弯曲在<Hl c={C.orange}>尖端下部</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
