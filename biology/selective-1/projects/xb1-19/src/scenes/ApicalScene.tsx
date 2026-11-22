import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Apical} from '../components/Apical';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apical;
const {ap1, ap2, ap3, ap4, ap5} = t.cue;

export const ApicalScene: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">顶端优势</Header>
		<Appear at={ap1.from} style={{position: 'absolute', left: 80, top: 150, transform: 'scale(0.92)', transformOrigin: 'top left'}}>
			<Apical flowAt={ap2.from} dotsAt={ap2.from + 30} />
		</Appear>
		<Appear at={ap4.from} dy={0} style={{position: 'absolute', left: 500, top: 380, fontSize: 60, color: C.muted, fontWeight: 900}}>
			→
		</Appear>
		<Appear at={ap4.from} style={{position: 'absolute', left: 570, top: 150, transform: 'scale(0.92)', transformOrigin: 'top left'}}>
			<Apical cut dotsAt={ap4.from + 30} />
		</Appear>
		<Appear at={ap4.from} style={{position: 'absolute', left: 640, top: 745, fontSize: 28, fontWeight: 900, color: C.green}}>
			去掉顶芽：侧芽发育成侧枝
		</Appear>
		<div style={{position: 'absolute', left: 1040, right: 90, top: 190, display: 'flex', flexDirection: 'column', gap: 20, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={ap1.from}>顶芽<Hl c={C.green}>优先生长</Hl>，侧芽<Hl>受抑制</Hl></Appear>
			<Appear at={ap2.from}>顶芽的生长素向下运输，<Hl c={C.orange}>积累在侧芽</Hl> → 浓度过高 → <Hl>抑制</Hl></Appear>
			<Appear at={ap3.from}>顶芽浓度低 → <Hl c={C.green}>促进</Hl>：体现<Hl>低促进、高抑制</Hl></Appear>
			<Appear at={ap4.from}>应用：棉花打顶、果树修剪</Appear>
		</div>
		<Appear at={ap5.from} style={{position: 'absolute', left: 1040, right: 90, top: 580}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 27, padding: '12px 20px'}}>
				离顶芽<Hl>越近</Hl>的侧芽受抑制越明显；去顶芽后切口放含生长素的琼脂块，侧芽<Hl>仍受抑制</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
