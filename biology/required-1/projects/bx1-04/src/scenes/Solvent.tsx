import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.solvent;
const {sv1, sv2, sv3, sv4} = t.cue;

// A water molecule: O in the middle, two H at 104.5°; δ− on O, δ+ on the H.
const Water: React.FC<{x: number; y: number; rot?: number; labels?: boolean}> = ({x, y, rot = 0, labels}) => (
	<g transform={`translate(${x},${y}) rotate(${rot})`}>
		<line x1={0} y1={0} x2={-48} y2={38} stroke={C.muted} strokeWidth={8} />
		<line x1={0} y1={0} x2={48} y2={38} stroke={C.muted} strokeWidth={8} />
		<circle cx={0} cy={0} r={40} fill={C.red} />
		<circle cx={-48} cy={38} r={24} fill={C.gold} />
		<circle cx={48} cy={38} r={24} fill={C.gold} />
		<text x={0} y={11} fontSize={30} fontWeight={900} fill="#fff" textAnchor="middle">O</text>
		<text x={-48} y={47} fontSize={24} fontWeight={900} fill="#fff" textAnchor="middle">H</text>
		<text x={48} y={47} fontSize={24} fontWeight={900} fill="#fff" textAnchor="middle">H</text>
		{labels && (
			<g transform={`rotate(${-rot})`}>
				<text x={0} y={-52} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">δ−</text>
				<text x={-80} y={90} fontSize={28} fontWeight={900} fill={C.brown} textAnchor="middle">δ+</text>
				<text x={80} y={90} fontSize={28} fontWeight={900} fill={C.brown} textAnchor="middle">δ+</text>
			</g>
		)}
	</g>
);

export const Solvent: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">水为什么是良好的溶剂</Header>
		<svg width={620} height={470} viewBox="0 0 620 470" style={{position: 'absolute', left: 80, top: 170}}>
			<G at={sv1.from}>
				<Water x={170} y={110} labels />
			</G>
			<G at={sv2.from}>
				<Water x={300} y={300} />
				<Water x={470} y={130} />
				<line x1={218} y1={150} x2={265} y2={262} stroke={C.orange} strokeWidth={5} strokeDasharray="8 8" />
				<line x1={422} y1={170} x2={336} y2={268} stroke={C.orange} strokeWidth={5} strokeDasharray="8 8" />
				<text x={300} y={420} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">虚线：氢键</text>
			</G>
		</svg>
		<Rows
			style={{left: 760, right: 90, top: 190}}
			fontSize={32}
			gap={22}
			items={[
				{at: sv1.from, color: C.red, title: '极性分子', children: <>带电荷的分子或离子易与水结合 → <Hl>良好的溶剂</Hl></>},
				{at: sv2.from, color: C.orange, title: '氢键', children: <>不断断裂又形成 → 常温下呈<Hl c={C.orange}>液态</Hl>，能流动</>},
				{at: sv3.from, color: C.orange, title: '氢键', children: <><Hl>比热容较高</Hl> → 温度不易改变，利于维持稳定</>},
			]}
		/>
		<Tip at={sv4.from} top={690} label="易错">
			良好溶剂 ← <Hl>极性</Hl>；比热容高、能流动 ← <Hl>氢键</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
