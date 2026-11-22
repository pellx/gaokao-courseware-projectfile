import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.dist;
const {ds1, ds2, ds3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const PLACES = ['胚芽鞘', '芽和根尖的分生组织', '形成层', '发育中的种子和果实'];

export const Dist: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">生长素的分布</Header>
		<Appear at={ds1.from} style={{position: 'absolute', left: 90, top: 190, fontSize: 36, fontWeight: 900}}>
			各器官都有，相对集中在<Hl>生长旺盛</Hl>的部位
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 300, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22}}>
			{PLACES.map((s, i) => (
				<Appear key={s} at={at(ds2.from, ds2.to, 0.1 + i * 0.2)}>
					<div style={{border: `4px solid ${C.green}`, borderRadius: 18, padding: '18px 26px', fontSize: 34, fontWeight: 900, color: C.green, background: '#fff'}}>{s}</div>
				</Appear>
			))}
		</div>
		<Appear at={ds3.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="考法" style={{fontSize: 30}}>
				合成多和分布多的部位大体一致：<Hl c={C.green}>幼嫩、生长旺盛</Hl>；衰老组织中<Hl c={C.orange}>较少</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
