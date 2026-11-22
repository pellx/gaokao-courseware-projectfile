import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pest;
const {ps1, ps2, ps3, ps4, ps5} = t.cue;

const Item: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => (
	<Appear at={at} dx={-16} dy={0}>
		<div style={{fontSize: 30, fontWeight: 700, lineHeight: 1.5, marginTop: 16}}>· {children}</div>
	</Appear>
);

export const Pest: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">种群研究的应用：防治与渔业</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 30}}>
			<Appear at={ps1.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.red}`, borderRadius: 24, padding: '22px 30px', height: 360, boxSizing: 'border-box'}}>
					<div style={{fontSize: 40, fontWeight: 900, color: C.red}}>有害生物防治</div>
					<Item at={ps2.from}><Hl c={C.orange}>监测、预报</Hl>，数量少时及早防治</Item>
					<Item at={ps3.from}>引入天敌：<Hl c={C.green}>生物防治</Hl></Item>
					<Item at={ps3.from + 30}>破坏生存条件，<Hl>降低K值</Hl>（兴修水利、改造蝗区）</Item>
				</div>
			</Appear>
			<Appear at={ps1.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 24, padding: '22px 30px', height: 360, boxSizing: 'border-box'}}>
					<div style={{fontSize: 40, fontWeight: 900, color: C.green}}>渔业资源合理利用</div>
					<Item at={ps4.from}>控制<Hl c={C.orange}>捕捞强度</Hl></Item>
					<Item at={ps4.from + 20}>控制<Hl c={C.orange}>网眼大小</Hl>，保护幼鱼</Item>
					<Item at={ps4.from + 40}>捕捞后种群数量保持在适当水平</Item>
				</div>
			</Appear>
		</div>
		<Appear at={ps5.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="考法" style={{fontSize: 31}}>
				网眼过小 → 捕获大量幼鱼 → 年龄结构变为<Hl>衰退型</Hl> → 数量下降；答题联系<Hl c={C.orange}>年龄结构和K值</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
