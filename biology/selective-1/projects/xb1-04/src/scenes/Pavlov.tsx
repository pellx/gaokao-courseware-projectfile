import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pavlov;
const {pv1, pv2, pv3, pv4, pv5, pv6} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Row: React.FC<{at: number; tag: string; color: string; children: React.ReactNode}> = ({at, tag, color, children}) => (
	<Appear at={at} dx={-20} dy={0} style={{display: 'flex', alignItems: 'center', gap: 20}}>
		<div style={{width: 150, flexShrink: 0, textAlign: 'center', background: color, color: '#fff', fontSize: 28, fontWeight: 900, borderRadius: 12, padding: '8px 0'}}>{tag}</div>
		{children}
	</Appear>
);

export const Pavlov: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">条件反射的建立与消退</Header>
		<Appear at={pv1.from} style={{position: 'absolute', left: 90, top: 175, width: 560, height: 400}}>
			<Photo src="images/pavlov-dog.jpg" caption="巴甫洛夫实验用狗（标本）：导管收集唾液" style={{width: '100%', height: '100%'}} />
		</Appear>
		<div style={{position: 'absolute', left: 700, right: 60, top: 180, display: 'flex', flexDirection: 'column', gap: 26}}>
			<Row at={pv2.from} tag="喂食" color={C.orange}>
				<Chain fontSize={28} gap={10} steps={[{label: '食物', color: C.orange, at: pv2.from}, {label: '分泌唾液', at: pv2.from + 15}]} />
				<span style={{fontSize: 26, color: C.muted, fontWeight: 700}}>非条件刺激</span>
			</Row>
			<Row at={pv3.from} tag="只听铃" color={C.brown}>
				<Chain fontSize={28} gap={10} steps={[{label: '铃声', color: C.brown, at: pv3.from}, {label: '不分泌唾液', at: pv3.from + 15}]} />
				<span style={{fontSize: 26, color: C.muted, fontWeight: 700}}>无关刺激</span>
			</Row>
			<Row at={pv4.from} tag="建立" color={C.green}>
				<Chain fontSize={28} gap={10} arrows={['重复多次']} steps={[{label: '铃声 + 食物', at: pv4.from}, {label: '铃声', color: C.green, at: at(pv4.from, pv4.to, 0.4)}, {label: '分泌唾液', color: C.green, at: at(pv4.from, pv4.to, 0.5)}]} />
			</Row>
			<Row at={pv5.from} tag="消退" color={C.red}>
				<Chain fontSize={28} gap={10} arrows={['反复']} steps={[{label: '只响铃不喂食', at: pv5.from}, {label: '唾液减少直至消失', color: C.red, at: at(pv5.from, pv5.to, 0.5)}]} />
			</Row>
		</div>
		<Appear at={pv4.to - 20} style={{position: 'absolute', left: 90, top: 600, width: 560, fontSize: 30, fontWeight: 800, lineHeight: 1.5}}>
			铃声：<Hl c={C.brown}>无关刺激</Hl> → <Hl c={C.green}>条件刺激</Hl>
		</Appear>
		<Appear at={pv6.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				消退是<Hl>新的学习过程</Hl>，需要<Hl>大脑皮层</Hl>参与：铃声由引起兴奋的信号变为产生<Hl>抑制</Hl>效应的信号
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
