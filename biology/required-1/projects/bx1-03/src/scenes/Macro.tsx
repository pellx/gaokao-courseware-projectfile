import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.macro;
const {ma1, ma2, ma3, ma4} = t.cue;

const Chip: React.FC<{s: string; color: string; at: number; name: string}> = ({s, color, at, name}) => (
	<Appear at={at} dy={16}>
		<div style={{width: 150, height: 150, borderRadius: 22, border: `5px solid ${color}`, background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			<div style={{fontSize: 60, fontWeight: 900, color, lineHeight: 1.1}}>{s}</div>
			<div style={{fontSize: 26, fontWeight: 700, color: C.muted}}>{name}</div>
		</div>
	</Appear>
);

const BIG = [['C', '碳'], ['H', '氢'], ['O', '氧'], ['N', '氮'], ['P', '磷'], ['S', '硫'], ['K', '钾'], ['Ca', '钙'], ['Mg', '镁']];
const TRACE = [['Fe', '铁'], ['Mn', '锰'], ['B', '硼'], ['Zn', '锌'], ['Mo', '钼'], ['Cu', '铜']];

const Label: React.FC<{at: number; color: string; children: React.ReactNode}> = ({at, color, children}) => (
	<Appear at={at} dy={0} style={{width: 170, fontSize: 38, fontWeight: 900, color}}>
		{children}
	</Appear>
);

export const Macro: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">大量元素与微量元素</Header>
		<div style={{position: 'absolute', left: 90, top: 170, display: 'flex', alignItems: 'center', gap: 14}}>
			<Label at={ma1.from} color={C.red}>大量元素</Label>
			{BIG.map(([s, n], i) => (
				<Chip key={s} s={s} name={n} color={s === 'Ca' || s === 'Mg' ? C.red : C.brown} at={ma1.from + i * 8} />
			))}
		</div>
		<div style={{position: 'absolute', left: 90, top: 350, display: 'flex', alignItems: 'center', gap: 14}}>
			<Label at={ma2.from} color={C.orange}>微量元素</Label>
			{TRACE.map(([s, n], i) => (
				<Chip key={s} s={s} name={n} color={C.orange} at={ma2.from + i * 8} />
			))}
		</div>
		<Def at={ma3.from} style={{left: 90, right: 90, top: 535}} fontSize={36}>
			口诀：<Hl c={C.orange}>铁 猛 碰 新 木 桶</Hl>（Fe、Mn、B、Zn、Mo、Cu）
		</Def>
		<Tip at={ma4.from} top={665} label="易错">
			按<Hl>含量</Hl>划分，不按作用大小；<Hl>Ca、Mg 是大量元素</Hl>；微量元素含量少，但同样不可缺少
		</Tip>
		<Narration t={t} />
	</Scene>
);
