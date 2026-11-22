import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.reflex;
const {rf1, rf2, rf3, rf4, rf5} = t.cue;

const Need: React.FC<{n: string; color: string; children: string}> = ({n, color, children}) => (
	<div style={{display: 'flex', alignItems: 'center', gap: 18, border: `4px solid ${color}`, borderRadius: 18, padding: '14px 26px', fontSize: 36, fontWeight: 800, color, background: '#fff'}}>
		<span style={{width: 50, height: 50, borderRadius: 25, background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30}}>{n}</span>
		{children}
	</div>
);

export const Reflex: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">反射的概念</Header>
		<div style={{position: 'absolute', left: 90, top: 180, width: 1120}}>
			<Appear at={rf1.from} style={{fontSize: 46, fontWeight: 900}}>
				神经调节的基本方式：<Hl>反射</Hl>
			</Appear>
			<Appear at={rf2.from} style={{marginTop: 30}}>
				<Card style={{fontSize: 36, lineHeight: 1.6}}>
					在<Hl>中枢神经系统</Hl>参与下，机体对内外刺激所产生的<Hl c={C.orange}>规律性应答反应</Hl>
				</Card>
			</Appear>
			<Appear at={rf4.from} style={{marginTop: 34, fontSize: 32, fontWeight: 800, color: C.muted}}>
				完成反射的两个条件
			</Appear>
			<div style={{display: 'flex', gap: 30, marginTop: 14}}>
				<Appear at={rf4.from + 10} dy={0} dx={-20}>
					<Need n="1" color={C.red}>完整的反射弧</Need>
				</Appear>
				<Appear at={rf4.from + 40} dy={0} dx={-20}>
					<Need n="2" color={C.orange}>适宜的刺激</Need>
				</Appear>
			</div>
			<Appear at={rf5.from} style={{marginTop: 34}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31, lineHeight: 1.6}}>
					草履虫没有神经系统，对刺激的反应<Hl>不是反射</Hl>
					<br />
					直接刺激传出神经引起肌肉收缩，反射弧不完整，<Hl>不是反射</Hl>
				</Callout>
			</Appear>
		</div>
		<Appear at={rf3.from} style={{position: 'absolute', left: 1300, right: 90, top: 170, height: 720}}>
			<Photo src="images/kneejerk.jpg" caption="叩击膝盖下方的韧带：膝跳反射" style={{width: '100%', height: '100%'}} pos="center 30%" />
		</Appear>
		<Narration t={t} />
	</Scene>
);
