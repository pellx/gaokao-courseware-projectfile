import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.spread;
const {sp2, sp3, sp4, sp5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Spread: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">艾滋病的传播途径与预防</Header>
		<div style={{position: 'absolute', left: 90, width: 1060, top: 185}}>
			<Appear at={sp2.from} style={{fontSize: 30, fontWeight: 800, marginBottom: 16}}>
				会传播（<Hl>血液、精液、乳汁</Hl>等中有HIV）
			</Appear>
			<div style={{display: 'flex', gap: 18}}>
				{['性接触传播', '血液传播', '母婴传播'].map((s, i) => (
					<Appear key={s} at={at(sp2.from, sp2.to, 0.55 + i * 0.13)} style={{flex: 1}}>
						<div style={{background: C.red, color: '#fff', borderRadius: 18, padding: '18px 0', textAlign: 'center', fontSize: 34, fontWeight: 900}}>{s}</div>
					</Appear>
				))}
			</div>
			<Appear at={sp3.from} style={{fontSize: 30, fontWeight: 800, margin: '30px 0 16px'}}>
				一般不会传播
			</Appear>
			<div style={{display: 'flex', gap: 18}}>
				{['握手', '拥抱', '共同进餐'].map((s, i) => (
					<Appear key={s} at={at(sp3.from, sp3.to, 0.1 + i * 0.15)} style={{flex: 1}}>
						<div style={{border: `4px solid ${C.green}`, color: C.green, borderRadius: 18, padding: '14px 0', textAlign: 'center', fontSize: 34, fontWeight: 900, background: C.greenSoft}}>{s}</div>
					</Appear>
				))}
			</div>
		</div>
		<Appear at={sp4.from} style={{position: 'absolute', left: 1210, right: 90, top: 185}}>
			<div style={{border: `5px solid ${C.green}`, borderRadius: 24, padding: '20px 28px', background: '#fff', height: 360, boxSizing: 'border-box'}}>
				<div style={{fontSize: 38, fontWeight: 900, color: C.green}}>预防</div>
				{['洁身自爱', '不共用注射器、牙刷、剃须刀', '输血严格检测', '关心帮助感染者，不歧视'].map((s) => (
					<div key={s} style={{fontSize: 28, fontWeight: 700, marginTop: 14}}>· {s}</div>
				))}
			</div>
		</Appear>
		<Appear at={sp5.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				直接死因往往是免疫功能丧失后的<Hl>严重感染或恶性肿瘤</Hl>，而不是HIV本身
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
