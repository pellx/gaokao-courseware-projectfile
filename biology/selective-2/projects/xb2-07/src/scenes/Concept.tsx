import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cc1, cc2, cc3, cc4} = t.cue;

const Pill: React.FC<{color: string; children: React.ReactNode}> = ({color, children}) => (
	<span style={{border: `5px solid ${color}`, color, borderRadius: 18, padding: '10px 26px', background: '#fff'}}>{children}</span>
);

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">生态系统的概念</Header>
		<Appear at={cc1.from} style={{position: 'absolute', left: 90, right: 90, top: 200, display: 'flex', alignItems: 'center', gap: 26, fontSize: 40, fontWeight: 900}}>
			<Pill color={C.green}>生物群落</Pill>
			<span style={{color: C.muted}}>＋</span>
			<Pill color={C.orange}>非生物环境</Pill>
			<span style={{color: C.muted}}>相互作用 →</span>
			<Pill color={C.red}>生态系统</Pill>
		</Appear>
		<Appear at={cc2.from} style={{position: 'absolute', left: 90, right: 90, top: 330, fontSize: 32, fontWeight: 700}}>
			范围有大有小：<Hl>生物圈</Hl>是地球上最大的生态系统
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 410, display: 'flex', gap: 30}}>
			<Appear at={cc3.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '18px 26px', fontSize: 31, fontWeight: 700}}>
					<Hl c={C.green}>自然生态系统</Hl>：森林、草原、荒漠、湿地、海洋
				</div>
			</Appear>
			<Appear at={cc3.from + 25} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.orange}`, borderRadius: 22, padding: '18px 26px', fontSize: 31, fontWeight: 700}}>
					<Hl c={C.orange}>人工生态系统</Hl>：农田、人工林、果园、城市
				</div>
			</Appear>
		</div>
		<Appear at={cc4.from} style={{position: 'absolute', left: 90, right: 90, top: 590}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				只有“全部生物”是<Hl c={C.green}>群落</Hl>；加上<Hl>非生物环境</Hl>才是生态系统
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
