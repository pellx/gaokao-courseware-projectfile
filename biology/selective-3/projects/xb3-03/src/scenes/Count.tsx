import React from 'react';
import {Appear, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Chem} from '../components/chem';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.count;
const {ct1, ct2, ct3, ct4} = t.cue;

const COUNTS = [156, 178, 191];

const Plate: React.FC<{x: number; n: number}> = ({x, n}) => (
	<g>
		<circle cx={x} cy={130} r={110} fill="#fdf6ea" stroke={C.text} strokeWidth={5} />
		{Array.from({length: 70}, (_, i) => {
			const a = i * 2.39996 + n;
			const r = 95 * Math.sqrt((i + 0.5) / 70);
			return <circle key={i} cx={x + r * Math.cos(a)} cy={130 + r * Math.sin(a)} r={5} fill={C.orange} />;
		})}
		<text x={x} y={290} fontSize={36} fontWeight={900} fill={C.red} textAnchor="middle">{n}</text>
	</g>
);

export const Count: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">菌落计数</Header>
		<svg width={820} height={310} viewBox="0 0 820 310" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={ct1.from}>
				{COUNTS.map((n, i) => (
					<Plate key={n} x={130 + i * 280} n={n} />
				))}
			</G>
		</svg>
		<Appear at={ct1.from} style={{position: 'absolute', left: 90, width: 820, top: 500, fontSize: 30, fontWeight: 800, lineHeight: 1.6}}>
			选菌落数在 <Hl>30～300</Hl> 的平板；每个稀释度至少 <Hl c={C.orange}>3 个平板</Hl>，取平均值
		</Appear>
		<Appear at={ct2.from} style={{position: 'absolute', left: 980, right: 90, top: 175}}>
			<Card style={{fontSize: 30, fontWeight: 700, lineHeight: 1.6}}>
				<div>每克样品中的菌株数 =</div>
				<div style={{fontSize: 48, fontWeight: 900, color: C.red, textAlign: 'center', margin: '6px 0'}}>(C ÷ V) × M</div>
				<div style={{fontSize: 26, color: C.muted}}>C：平均菌落数　V：涂布体积（mL）　M：稀释倍数</div>
			</Card>
		</Appear>
		<Appear at={ct3.from} style={{position: 'absolute', left: 980, right: 90, top: 440}}>
			<Card style={{fontSize: 30, fontWeight: 800, lineHeight: 1.7, background: C.orangeSoft}}>
				<div>平均：(156 + 178 + 191) ÷ 3 = 175</div>
				<div>
					(175 ÷ 0.1) × <Chem>10^5</Chem> = <Hl>1.75 × <Chem>10^8</Chem> 个/g</Hl>
				</div>
			</Card>
		</Appear>
		<Tip at={ct4.from} top={720} label="易错">
			不在 30～300 之间的平板<Hl>不计</Hl>；V 以 mL 为单位，涂布 0.1 mL 要<Hl>除以 0.1</Hl>，不要漏掉
		</Tip>
		<Narration t={t} />
	</Scene>
);
