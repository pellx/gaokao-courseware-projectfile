import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning2;
const {mn1, mn2, mn3, mn4} = t.cue;

const STOCK: [string, string, string][] = [
	['载畜量过少', C.muted, '牧草浪费'],
	['合理载畜量', C.green, '持续高效'],
	['载畜量过多', C.red, '草原退化'],
];

export const Meaning2: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">实践意义：调整能量流动关系</Header>
		<Appear at={mn1.from} style={{position: 'absolute', left: 90, right: 90, top: 175, fontSize: 31, fontWeight: 700, lineHeight: 1.55}}>
			<Hl>意义三</Hl>：合理调整能量流动关系，使能量<Hl c={C.green}>持续高效地流向对人类最有益的部分</Hl>
		</Appear>
		<Appear at={mn2.from} style={{position: 'absolute', left: 90, right: 90, top: 290}}>
			<div style={{border: `5px solid ${C.orange}`, borderRadius: 22, padding: '16px 26px', fontSize: 31, fontWeight: 700}}>
				农田<Hl c={C.orange}>除草、灭虫</Hl> → 更多能量流向农作物
			</div>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 410, display: 'flex', gap: 24}}>
			{STOCK.map(([name, color, note], i) => (
				<Appear key={name} at={mn3.from + i * 18} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 20, padding: '16px 22px', textAlign: 'center'}}>
						<div style={{fontSize: 34, fontWeight: 900, color}}>{name}</div>
						<div style={{fontSize: 28, fontWeight: 700, marginTop: 6}}>{note}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={mn4.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="考法" style={{fontSize: 30}}>
				除草灭虫的意义：<Hl>调整能量流动关系，使能量持续高效地流向对人类最有益的部分</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
