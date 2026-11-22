import React from 'react';
import {Appear, Callout, Card, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.minmax;
const {mm1, mm2, mm3, mm4} = t.cue;

const N = {
	草: {x: 300, y: 445},
	兔: {x: 100, y: 245},
	鼠: {x: 520, y: 300},
	蛇: {x: 520, y: 150},
	鹰: {x: 300, y: 45},
};
type K = keyof typeof N;
const E = (a: K, b: K, color: string, marker: string) => {
	const p = N[a];
	const q = N[b];
	const len = Math.hypot(q.x - p.x, q.y - p.y);
	const ux = (q.x - p.x) / len;
	const uy = (q.y - p.y) / len;
	const r = () => Math.min(Math.abs(75 / (ux || 1e-6)), Math.abs(38 / (uy || 1e-6)));
	return <Arrow key={a + b + color} x1={p.x + ux * r() * 1.05} y1={p.y + uy * r() * 1.05} x2={q.x - ux * r() * 1.15} y2={q.y - uy * r() * 1.15} color={color} marker={marker} width={color === C.muted ? 5 : 8} />;
};

export const MinMax: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">至少与最多消耗生产者</Header>
		<svg width={620} height={490} viewBox="0 0 620 490" style={{position: 'absolute', left: 80, top: 170}}>
			<Defs />
			<G at={mm1.from}>
				{E('草', '兔', C.muted, 'arrow')}
				{E('草', '鼠', C.muted, 'arrow')}
				{E('兔', '鹰', C.muted, 'arrow')}
				{E('鼠', '蛇', C.muted, 'arrow')}
				{E('蛇', '鹰', C.muted, 'arrow')}
			</G>
			<G at={mm2.from}>
				{E('草', '兔', C.green, 'arrow-green')}
				{E('兔', '鹰', C.green, 'arrow-green')}
			</G>
			<G at={mm3.from}>
				{E('草', '鼠', C.red, 'arrow-red')}
				{E('鼠', '蛇', C.red, 'arrow-red')}
				{E('蛇', '鹰', C.red, 'arrow-red')}
			</G>
			<G at={mm1.from}>
				{(Object.keys(N) as K[]).map((k) => (
					<Box key={k} x={N[k].x} y={N[k].y} w={150} h={76} label={k} color={k === '草' ? C.green : k === '鹰' ? C.red : C.orange} fontSize={34} />
				))}
			</G>
		</svg>
		<div style={{position: 'absolute', left: 760, right: 90, top: 185, display: 'flex', flexDirection: 'column', gap: 22}}>
			<Appear at={mm1.from} style={{fontSize: 30, fontWeight: 800}}>
				知高求低：鹰增重 1 kg，消耗多少草？
			</Appear>
			<Appear at={mm2.from}>
				<Card style={{borderColor: C.green, borderWidth: 5, fontSize: 30, fontWeight: 700, lineHeight: 1.6}}>
					<Hl c={C.green}>至少：最短链 × 20%</Hl>
					<br />草→兔→鹰：1 ÷ 20% ÷ 20% = <Hl c={C.green}>25 kg</Hl>
				</Card>
			</Appear>
			<Appear at={mm3.from}>
				<Card style={{borderColor: C.red, borderWidth: 5, fontSize: 30, fontWeight: 700, lineHeight: 1.6}}>
					<Hl>最多：最长链 × 10%</Hl>
					<br />草→鼠→蛇→鹰：1 ÷ 10% ÷ 10% ÷ 10% = <Hl>1000 kg</Hl>
				</Card>
			</Appear>
		</div>
		<Appear at={mm4.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				至少——<Hl c={C.green}>短链 × 20%</Hl>；最多——<Hl>长链 × 10%</Hl>；知低求高求“最多获得”：<Hl c={C.green}>最短链 × 20%</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
