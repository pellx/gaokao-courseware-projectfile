import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board} from '../components/board';
import {chem} from '../components/chem';
import {Geo, Kind} from './Geo';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.shapes;
const {sh1, sh2, sh3, sh4} = t.cue;
const ITEMS: {f: string; name: string; kind: Kind; c: string; l: string; ang: string; at: number; n?: number[]}[] = [
	{f: 'CO2', name: '直线形', kind: 'linear', c: 'C', l: 'O', ang: '180°', at: 0, n: [2, 2]},
	{f: 'H2O', name: 'V 形', kind: 'bent4', c: 'O', l: 'H', ang: '约 105°', at: 0},
	{f: 'BF3', name: '平面三角形', kind: 'trigonal', c: 'B', l: 'F', ang: '120°', at: 1},
	{f: 'NH3', name: '三角锥形', kind: 'pyramid', c: 'N', l: 'H', ang: '约 107°', at: 1},
	{f: 'CH4', name: '正四面体形', kind: 'tetra', c: 'C', l: 'H', ang: '109°28′', at: 2},
	{f: 'P4', name: '正四面体形', kind: 'p4', c: 'P', l: 'P', ang: '60°', at: 2},
];

export const Shapes: React.FC = () => {
	const ats = [sh1.from, sh2.from, sh3.from];
	return (
		<Board
			t={t}
			tag="考点一"
			title="常见分子的空间结构"
			callout={{label: '易错', at: sh4.from, text: <>原子数相同，形状可以不同：差别在中心原子有没有<Hl>孤电子对</Hl></>}}
		>
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 14}}>
				{ITEMS.map((it, i) => (
					<Appear key={it.f} at={ats[it.at] + (i % 2) * 25}>
						<div style={{background: '#fff', border: `3px solid ${C.line}`, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '4px 10px'}}>
							<Geo kind={it.kind} at={ats[it.at] + (i % 2) * 25} center={it.c} lig={it.l} n={it.n} angle={it.ang} size={240} />
							<div>
								<div style={{fontSize: 36, fontWeight: 900}}>{chem(it.f)}</div>
								<div style={{fontSize: 30, fontWeight: 800, color: C.red}}>{it.name}</div>
							</div>
						</div>
					</Appear>
				))}
			</div>
		</Board>
	);
};
