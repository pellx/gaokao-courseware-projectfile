import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.history;
const {hi1, hi2, hi3, hi4, hi5, hi6} = t.cue;

type Event = {who: string; when: string; what: React.ReactNode; at: number; color: string};
const EVENTS: Event[] = [
	{who: '维萨里', when: '比利时', what: <>人体结构<br /><Hl c={C.orange}>器官水平</Hl></>, at: hi1.from, color: C.muted},
	{who: '比夏', when: '法国', what: <>器官由<br /><Hl c={C.orange}>组织</Hl>构成</>, at: hi1.from + 40, color: C.muted},
	{who: '胡克', when: '英国 1665', what: <>观察软木<br /><Hl>命名细胞</Hl><br />（死细胞）</>, at: hi2.from, color: C.red},
	{who: '列文虎克', when: '荷兰', what: <>观察到<br /><Hl c={C.orange}>活细胞</Hl><br />细菌、红细胞</>, at: hi3.from, color: C.orange},
	{who: '施莱登 施旺', when: '德国 19世纪30年代', what: <><Hl>建立</Hl><br /><Hl>细胞学说</Hl></>, at: hi4.from, color: C.red},
	{who: '魏尔肖', when: '德国', what: <>细胞通过<br /><Hl c={C.orange}>分裂</Hl>产生<br />新细胞</>, at: hi5.from, color: C.orange},
];
const LEFT = 90;
const W = 1740 / EVENTS.length;

export const History: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">细胞学说的建立过程</Header>
		<Appear at={hi1.from} dy={0} style={{position: 'absolute', left: LEFT, width: 1740, top: 236, height: 8, background: C.line, borderRadius: 4}}>
			<span />
		</Appear>
		{EVENTS.map((e, i) => (
			<Appear key={e.who} at={e.at} style={{position: 'absolute', left: LEFT + i * W, width: W, top: 210}}>
				<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<div style={{width: 60, height: 60, borderRadius: 30, background: e.color, color: '#fff', fontSize: 30, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{i + 1}</div>
					<div style={{marginTop: 22, width: W - 24, height: 400, boxSizing: 'border-box', border: `5px solid ${e.color === C.muted ? C.line : e.color}`, borderRadius: 22, background: '#fff', padding: '20px 10px', textAlign: 'center'}}>
						<div style={{fontSize: e.who.length > 4 ? 32 : 40, fontWeight: 900, color: e.color === C.muted ? C.text : e.color}}>{e.who}</div>
						<div style={{fontSize: 24, fontWeight: 700, color: C.muted, marginTop: 6}}>{e.when}</div>
						<div style={{fontSize: 30, fontWeight: 700, marginTop: 26, lineHeight: 1.55}}>{e.what}</div>
					</div>
				</div>
			</Appear>
		))}
		<Tip at={hi6.from} top={740} label="易错">
			胡克看到的是<Hl>死细胞</Hl>（细胞壁围成的小室），只是<Hl>命名者</Hl>；细胞学说的<Hl>建立者</Hl>是施莱登和施旺
		</Tip>
		<Narration t={t} />
	</Scene>
);
