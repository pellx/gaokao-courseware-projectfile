import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.care;
const {ca2, ca3, ca4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const ITEMS: [string, string][] = [
	['种类', C.orange],
	['浓度', C.red],
	['时间', C.orange],
	['部位', C.orange],
	['生理状态、气候', C.green],
	['残留与安全', C.red],
];

export const Care: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">施用的注意事项</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 200, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24}}>
			{ITEMS.map(([s, color], i) => (
				<Appear key={s} at={i < 5 ? at(ca2.from, ca2.to, 0.1 + i * 0.16) : ca3.from}>
					<div style={{border: `5px solid ${color}`, borderRadius: 20, padding: '24px 0', textAlign: 'center', fontSize: 40, fontWeight: 900, color, background: '#fff'}}>{s}</div>
				</Appear>
			))}
		</div>
		<Appear at={ca4.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				调节剂<Hl>不是越多越好</Hl>：赤霉素过量 → 水稻疯长、结实率降低
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
