import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.carbon;
const {cb1, cb2, cb3, cb4, cb5} = t.cue;

// Bars show the order only (approximate shares of the main elements in human cells).
const H = 300;
const Bars: React.FC<{x: number; at: number; title: string; data: [string, number][]; top: string}> = ({x, at, title, data, top}) => (
	<G at={at}>
		<text x={x + 260} y={30} fontSize={36} fontWeight={900} fill={C.text} textAnchor="middle">{title}</text>
		<line x1={x} y1={H + 60} x2={x + 520} y2={H + 60} stroke={C.text} strokeWidth={4} />
		{data.map(([s, v], i) => {
			const h = (v / data[0][1]) * (H - 40);
			const bx = x + 30 + i * 125;
			const c = s === top ? C.red : C.orange;
			return (
				<g key={s}>
					<rect x={bx} y={H + 60 - h} width={90} height={h} rx={8} fill={c} opacity={s === top ? 1 : 0.55} />
					<text x={bx + 45} y={H + 100} fontSize={36} fontWeight={900} fill={c} textAnchor="middle">{s}</text>
				</g>
			);
		})}
	</G>
);

export const Carbon: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">碳是核心元素与元素含量</Header>
		<Def at={cb1.from} style={{left: 90, right: 90, top: 165}} color={C.red} soft={C.redSoft}>
			生物大分子以<Hl>碳链</Hl>为基本骨架 → <Hl>碳是生命的核心元素</Hl>
		</Def>
		<svg width={1200} height={420} viewBox="0 0 1200 420" style={{position: 'absolute', left: 90, top: 280}}>
			<Bars x={0} at={cb2.from} title="鲜重（水最多）" top="O" data={[['O', 65], ['C', 18], ['H', 10], ['N', 3]]} />
			<Bars x={640} at={cb3.from} title="人体细胞干重" top="C" data={[['C', 56], ['O', 15], ['N', 9], ['H', 7.5]]} />
		</svg>
		<Appear at={cb4.from} style={{position: 'absolute', left: 1360, top: 330, fontSize: 34, fontWeight: 800, lineHeight: 1.8}}>
			<div>鲜重：<Hl c={C.orange}>O ＞ C ＞ H ＞ N</Hl></div>
			<div>人体干重：<Hl c={C.orange}>C ＞ O ＞ N ＞ H</Hl></div>
		</Appear>
		<Tip at={cb5.from} top={730} label="解题方法">
			柱形图中 <Hl>O 远多于 C → 鲜重</Hl>；<Hl>C 排第一 → 一般是干重</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
