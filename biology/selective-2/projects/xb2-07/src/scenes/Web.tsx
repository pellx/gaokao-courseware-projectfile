import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.web;
const {wb1, wb2, wb3, wb4, wb5} = t.cue;

type N = {x: number; y: number; c: string};
const NODES: Record<string, N> = {
	草: {x: 870, y: 470, c: C.green},
	兔: {x: 380, y: 340, c: C.orange},
	鼠: {x: 870, y: 340, c: C.orange},
	昆虫: {x: 1360, y: 340, c: C.orange},
	狐: {x: 380, y: 190, c: C.red},
	蛇: {x: 1060, y: 200, c: C.red},
	食虫鸟: {x: 1360, y: 200, c: C.red},
	鹰: {x: 870, y: 60, c: C.red},
};
const EDGES: [string, string][] = [
	['草', '兔'],
	['草', '鼠'],
	['草', '昆虫'],
	['兔', '狐'],
	['鼠', '狐'],
	['鼠', '蛇'],
	['鼠', '鹰'],
	['蛇', '鹰'],
	['昆虫', '食虫鸟'],
	['食虫鸟', '鹰'],
];
const W = 170;
const H = 72;

// Trim an edge so it starts and ends at the box borders.
const edge = (a: N, b: N) => {
	const dx = b.x - a.x;
	const dy = b.y - a.y;
	const s = (p: number) => Math.min(Math.abs(W / 2 / (dx || 1e-6)), Math.abs(H / 2 / (dy || 1e-6))) * p;
	return {x1: a.x + dx * s(1.08), y1: a.y + dy * s(1.08), x2: b.x - dx * s(1.15), y2: b.y - dy * s(1.15)};
};

export const Web: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">食物网</Header>
		<svg width={1740} height={520} viewBox="0 0 1740 520" style={{position: 'absolute', left: 90, top: 165}}>
			<Defs />
			<G at={wb1.from}>
				{EDGES.map(([a, b]) => (
					<Arrow key={a + b} {...edge(NODES[a], NODES[b])} color={C.muted} width={5} />
				))}
				{Object.entries(NODES).map(([name, n]) => (
					<Box key={name} x={n.x} y={n.y} w={W} h={H} label={name} color={n.c} fontSize={34} />
				))}
			</G>
			<G at={wb2.from}>
				<text x={1560} y={470} fontSize={34} fontWeight={900} fill={C.red} textAnchor="middle">共 5 条食物链</text>
			</G>
			<G at={wb3.from}>
				<text x={60} y={70} fontSize={27} fontWeight={900} fill={C.orange}>鹰：第三、第四营养级</text>
			</G>
			<G at={wb4.from}>
				<text x={60} y={115} fontSize={27} fontWeight={900} fill={C.red}>鹰与蛇：捕食 + 竞争</text>
			</G>
		</svg>
		<Appear at={wb5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="考法" style={{fontSize: 30}}>
				三个必考动作：<Hl c={C.orange}>数食物链</Hl>（从生产者数到最高营养级）、<Hl c={C.orange}>找营养级</Hl>、<Hl c={C.orange}>判断种间关系</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
