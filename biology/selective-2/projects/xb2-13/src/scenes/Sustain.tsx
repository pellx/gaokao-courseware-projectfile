import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sustain;
const {su1, su2, su3, su4} = t.cue;

const AREAS: [string, string][] = [
	['自然', C.green],
	['经济', C.orange],
	['社会', C.red],
];

export const Sustain: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">可持续发展</Header>
		<Appear at={su1.from} style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Card style={{fontSize: 31, fontWeight: 700, lineHeight: 1.55}}>
				<Hl c={C.green}>可持续发展</Hl>：在不牺牲未来几代人需要的情况下，满足我们这代人的需要
			</Card>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 320, display: 'flex', gap: 24, alignItems: 'center'}}>
			{AREAS.map(([a, c], i) => (
				<Appear key={a} at={su2.from + i * 15}>
					<div style={{width: 170, height: 170, borderRadius: 85, border: `6px solid ${c}`, color: c, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, fontWeight: 900}}>{a}</div>
				</Appear>
			))}
			<Appear at={su2.from + 45} style={{fontSize: 32, fontWeight: 800, marginLeft: 20}}>
				持久而<Hl>协调</Hl>地发展
			</Appear>
		</div>
		<Appear at={su3.from} style={{position: 'absolute', left: 90, right: 90, top: 530, fontSize: 30, fontWeight: 700, lineHeight: 1.55}}>
			思路：控制<Hl c={C.orange}>人口增长</Hl>，转变<Hl c={C.orange}>生产和生活方式</Hl>，减小生态足迹，提高资源利用率
		</Appear>
		<Appear at={su4.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				可持续发展<Hl>不是禁止</Hl>开发利用，而是<Hl c={C.green}>合理利用</Hl>，兼顾当代人和后代人
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
