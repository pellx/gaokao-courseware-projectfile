import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.autoimmune;
const {au1, au2, au3, au4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Autoimmune: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">自身免疫病</Header>
		<Appear at={au1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 32, fontWeight: 800}}>
			免疫系统对<Hl>自身成分</Hl>发生反应，损伤组织和器官
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 250, display: 'flex', gap: 22}}>
			{['风湿性心脏病', '类风湿关节炎', '系统性红斑狼疮'].map((s, i) => (
				<Appear key={s} at={at(au2.from, au2.to, 0.15 + i * 0.25)} style={{flex: 1}}>
					<div style={{border: `4px solid ${C.red}`, borderRadius: 18, padding: '14px 0', textAlign: 'center', fontSize: 34, fontWeight: 900, color: C.red, background: i ? '#fff' : C.redSoft}}>{s}</div>
				</Appear>
			))}
		</div>
		<Appear at={au3.from} style={{position: 'absolute', left: 90, top: 380, fontSize: 28, fontWeight: 800, color: C.muted}}>
			例：风湿性心脏病
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 430}}>
			<Chain
				fontSize={29}
				gap={10}
				steps={[
					{label: '感染链球菌', color: C.orange, at: au3.from},
					{label: '产生抗体', color: C.green, at: at(au3.from, au3.to, 0.45)},
					{label: '攻击链球菌', color: C.green, at: at(au3.from, au3.to, 0.75)},
					{label: '也攻击心脏瓣膜（结构相似）', color: C.red, at: at(au3.from, au3.to, 0.85)},
				]}
			/>
		</div>
		<Appear at={au4.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				免疫功能<Hl>过强</Hl>、敌我不分，属于<Hl>免疫自稳</Hl>功能异常；治疗常用<Hl c={C.green}>免疫抑制剂</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
