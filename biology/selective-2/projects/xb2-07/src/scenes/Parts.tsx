import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.parts;
const {pt1, pt2, pt3, pt4, pt5} = t.cue;

const PARTS: [string, string, string, React.ReactNode, number][] = [
	['非生物的物质和能量', C.orange, '阳光、热能、水、空气、无机盐', '生物生存的基础', pt1.from],
	['生产者', C.green, '绿色植物（自养生物）', <>生态系统的<Hl c={C.green}>基石</Hl></>, pt2.from],
	['消费者', C.red, '主要是动物', <><Hl>加快物质循环</Hl>；传粉、传播种子</>, pt3.from],
	['分解者', C.brown, '主要是细菌和真菌', <>有机物 → <Hl c={C.brown}>无机物</Hl></>, pt4.from],
];

export const Parts: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">生态系统的四种组成成分</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22}}>
			{PARTS.map(([name, color, ex, role, at]) => (
				<Appear key={name} at={at}>
					<div style={{border: `5px solid ${color}`, borderRadius: 22, padding: '16px 26px', height: 190, boxSizing: 'border-box', background: '#fff'}}>
						<div style={{fontSize: 38, fontWeight: 900, color}}>{name}</div>
						<div style={{fontSize: 28, fontWeight: 700, marginTop: 10, color: C.muted}}>{ex}</div>
						<div style={{fontSize: 30, fontWeight: 800, marginTop: 8}}>{role}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={pt5.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="考法" style={{fontSize: 31}}>
				基石：<Hl c={C.green}>生产者</Hl>；缺了会崩溃：<Hl c={C.orange}>生产者和分解者</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
