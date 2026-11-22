import React from 'react';
import {Appear, Callout, Card, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.density;
const {de1, de2, de3, de4} = t.cue;

// Pseudo-random but fixed positions inside the field.
const spots = (n: number, seed: number) =>
	Array.from({length: n}, (_, i) => {
		const a = Math.sin(i * 12.9898 + seed) * 43758.5453;
		const b = Math.sin(i * 78.233 + seed) * 12345.678;
		return {x: 40 + (a - Math.floor(a)) * 600, y: 40 + (b - Math.floor(b)) * 330};
	});
const SAME = spots(26, 1);
const OTHER = spots(9, 7);

export const Density: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">种群与种群密度</Header>
		<svg width={700} height={470} viewBox="0 0 700 470" style={{position: 'absolute', left: 90, top: 180}}>
			<Defs />
			<G at={de1.from}>
				<rect x={10} y={10} width={680} height={390} rx={24} fill={C.greenSoft} stroke={C.green} strokeWidth={5} />
				{SAME.map((p, i) => (
					<circle key={i} cx={p.x} cy={p.y} r={14} fill={C.orange} />
				))}
				{OTHER.map((p, i) => (
					<path key={i} d={`M${p.x},${p.y - 16} l14,26 h-28 z`} fill={C.brown} />
				))}
				<circle cx={60} cy={440} r={14} fill={C.orange} />
				<text x={84} y={450} fontSize={28} fontWeight={800} fill={C.orange}>同一物种（一个种群）</text>
				<path d="M430,424 l14,26 h-28 z" fill={C.brown} />
				<text x={456} y={450} fontSize={28} fontWeight={800} fill={C.brown}>其他物种</text>
			</G>
		</svg>
		<div style={{position: 'absolute', left: 860, right: 90, top: 190, display: 'flex', flexDirection: 'column', gap: 26}}>
			<Appear at={de1.from}>
				<Card style={{fontSize: 34, fontWeight: 700, lineHeight: 1.5}}>
					<Hl>种群</Hl>：一定空间范围内，<Hl c={C.orange}>同种生物所有个体</Hl>形成的集合
				</Card>
			</Appear>
			<Appear at={de2.from}>
				<Card style={{fontSize: 36, fontWeight: 800, textAlign: 'center'}}>
					种群密度 = <Hl c={C.orange}>个体数</Hl> ÷ <Hl c={C.green}>面积（或体积）</Hl>
				</Card>
			</Appear>
			<Appear at={de3.from}>
				<div style={{display: 'inline-block', alignSelf: 'flex-start', background: C.red, color: '#fff', fontSize: 36, fontWeight: 900, padding: '10px 28px', borderRadius: 14}}>
					最基本的数量特征
				</div>
			</Appear>
		</div>
		<Appear at={de4.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 32}}>
				三看：<Hl c={C.orange}>同一区域 · 同一物种 · 全部个体</Hl>。“池塘中的全部鱼”“全部成年鲤鱼”都<Hl>不是</Hl>种群
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
