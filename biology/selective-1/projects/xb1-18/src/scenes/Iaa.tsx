import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.iaa;
const {ia1, ia2, ia3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// The road to auxin, one stop per experiment.
const STOPS: [string, string, string][] = [
	['1880', '达尔文', '尖端产生某种“影响”'],
	['1910', '鲍森·詹森', '影响可透过琼脂片'],
	['1914', '拜尔', '影响在下部分布不均'],
	['1926', '温特', '是化学物质，命名生长素'],
	['1934', '分离鉴定', '吲哚乙酸（IAA）'],
];

export const Iaa: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">生长素的化学本质</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 14}}>
			{STOPS.map(([year, who, what], i) => (
				<Appear key={year} at={ia1.from + i * 12} style={{flex: 1}}>
					<div style={{borderTop: `8px solid ${i === 4 ? C.red : C.green}`, background: i === 4 ? C.redSoft : C.panel, borderRadius: 14, padding: '14px 18px', height: 190, boxSizing: 'border-box'}}>
						<div style={{fontSize: 34, fontWeight: 900, color: i === 4 ? C.red : C.green}}>{year}</div>
						<div style={{fontSize: 30, fontWeight: 900, marginTop: 6}}>{who}</div>
						<div style={{fontSize: 25, fontWeight: 700, color: C.muted, marginTop: 6}}>{what}</div>
					</div>
				</Appear>
			))}
		</div>
		<div style={{position: 'absolute', left: 90, right: 90, top: 430, display: 'flex', gap: 24}}>
			{[
				['吲哚乙酸（IAA）', '主要的生长素', C.red, at(ia1.from, ia1.to, 0.7)],
				['苯乙酸（PAA）', '也有生长素效应', C.orange, ia2.from],
				['吲哚丁酸（IBA）', '也有生长素效应', C.orange, at(ia2.from, ia2.to, 0.5)],
			].map(([name, note, color, from]) => (
				<Appear key={name as string} at={from as number} style={{flex: 1}}>
					<div style={{border: `4px solid ${color}`, borderRadius: 18, padding: '14px 22px', background: '#fff'}}>
						<div style={{fontSize: 32, fontWeight: 900, color: color as string}}>{name}</div>
						<div style={{fontSize: 26, fontWeight: 700, color: C.muted, marginTop: 4}}>{note}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={ia3.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				生长素是吲哚乙酸，<Hl>不是蛋白质</Hl>；由<Hl c={C.orange}>色氨酸</Hl>经一系列反应转变而来
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
