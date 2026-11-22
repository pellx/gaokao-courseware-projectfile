import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.protect;
const {pt1, pt2, pt3, pt4, pt5} = t.cue;

const WAYS: [string, string, React.ReactNode, number][] = [
	['就地保护', C.green, <>原地建立<Hl c={C.green}>自然保护区</Hl>、国家公园<br /><Hl>最有效</Hl></>, pt2.from],
	['易地保护', C.orange, <>迁出原地：<br /><Hl c={C.orange}>植物园、动物园、繁育中心</Hl></>, pt3.from],
	['生物技术保护', C.brown, <>精子库、种子库、基因库；人工授精、组织培养、胚胎移植</>, pt4.from],
];

export const Protect: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">保护生物多样性的措施</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 24}}>
			{WAYS.map(([name, color, body, at]) => (
				<Appear key={name} at={Math.max(at, pt1.from)} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, padding: '20px 24px', height: 310, boxSizing: 'border-box', background: '#fff'}}>
						<div style={{fontSize: 42, fontWeight: 900, color}}>{name}</div>
						<div style={{fontSize: 30, fontWeight: 700, marginTop: 16, lineHeight: 1.6}}>{body}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={pt5.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="考法" style={{fontSize: 30}}>
				就地 vs 易地：看<Hl>有没有迁出原地</Hl>；此外还要<Hl c={C.orange}>加强立法、执法和宣传教育</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
