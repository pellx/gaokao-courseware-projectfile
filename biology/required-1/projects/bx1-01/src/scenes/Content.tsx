import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.content;
const {co1, co2, co3, co4, co5} = t.cue;

const POINTS: {at: number; body: React.ReactNode; note?: string}[] = [
	{at: co2.from, body: <>细胞是一个有机体，<Hl>一切动植物</Hl>都由细胞发育而来，并由<Hl c={C.orange}>细胞和细胞产物</Hl>所构成</>},
	{at: co3.from, body: <>细胞是一个<Hl c={C.orange}>相对独立</Hl>的单位，既有它自己的生命，又对与其他细胞共同组成的整体生命起作用</>},
	{at: co4.from, body: <><Hl>新细胞是由老细胞分裂产生的</Hl></>, note: '在魏尔肖“细胞通过分裂产生新细胞”的基础上修正补充'},
];

export const Content: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">细胞学说的主要内容</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180, display: 'flex', flexDirection: 'column', gap: 26}}>
			{POINTS.map((p, i) => (
				<Appear key={i} at={Math.max(p.at, co1.from)} dx={-24} dy={0}>
					<div style={{display: 'flex', alignItems: 'center', gap: 28, background: C.panel, border: `4px solid ${C.line}`, borderRadius: 22, padding: '22px 30px'}}>
						<div style={{flex: 'none', width: 72, height: 72, borderRadius: 36, background: i === 2 ? C.red : C.orange, color: '#fff', fontSize: 40, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{i + 1}</div>
						<div>
							<div style={{fontSize: 40, fontWeight: 700, lineHeight: 1.5}}>{p.body}</div>
							{p.note && <div style={{fontSize: 28, fontWeight: 700, color: C.muted, marginTop: 6}}>{p.note}</div>}
						</div>
					</div>
				</Appear>
			))}
		</div>
		<Tip at={co5.from} top={720} label="易错">
			说的是<Hl>一切动植物</Hl>，不是一切生物：病毒没有细胞结构，细菌等原核生物也不在细胞学说的论述范围内
		</Tip>
		<Narration t={t} />
	</Scene>
);
