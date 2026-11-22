import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {G, Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {Nuclide} from './parts';
import {AnimeBeat} from '../components/anime';

const t = T.atom;
const {at1, at2, at3, at3b, at4, at5, at6} = t.cue;

// Nucleus: protons (red, "+") and neutrons (brown) packed in a cluster.
const NUC: [number, number, boolean][] = [
	[0, 0, true], [-34, -14, false], [32, -18, true], [-14, 30, true], [24, 26, false],
	[-40, 22, true], [6, -40, false], [44, 8, false], [-26, -44, true], [38, -48, false],
];
const CX = 300;
const CY = 310;

const Model: React.FC = () => (
	<svg width={640} height={560} viewBox="0 0 640 560" style={{position: 'absolute', left: 70, top: 160}}>
		<G at={at1.from}>
			<ellipse cx={CX} cy={CY} rx={230} ry={100} fill="none" stroke={C.line} strokeWidth={4} strokeDasharray="10 8" />
			<ellipse cx={CX} cy={CY} rx={230} ry={100} fill="none" stroke={C.line} strokeWidth={4} strokeDasharray="10 8" transform={`rotate(60 ${CX} ${CY})`} />
			<ellipse cx={CX} cy={CY} rx={230} ry={100} fill="none" stroke={C.line} strokeWidth={4} strokeDasharray="10 8" transform={`rotate(-60 ${CX} ${CY})`} />
			{NUC.map(([dx, dy, p], i) => (
				<g key={i}>
					<circle cx={CX + dx} cy={CY + dy} r={22} fill={p ? C.red : C.brown} stroke="#fff" strokeWidth={3} />
					{p && (
						<text x={CX + dx} y={CY + dy + 9} fontSize={26} fontWeight={900} fill="#fff" textAnchor="middle">
							+
						</text>
					)}
				</g>
			))}
			{[
				[CX + 230, CY],
				[CX - 115, CY - 199],
				[CX - 115, CY + 199],
			].map(([x, y], i) => (
				<g key={i}>
					<circle cx={x} cy={y} r={18} fill={C.orange} />
					<text x={x} y={y + 9} fontSize={28} fontWeight={900} fill="#fff" textAnchor="middle">
						−
					</text>
				</g>
			))}
			<text x={CX} y={CY + 108} fontSize={30} fontWeight={800} fill={C.text} textAnchor="middle" stroke="#fff" strokeWidth={8} paintOrder="stroke">
				原子核
			</text>
			<text x={CX + 230} y={CY - 34} fontSize={28} fontWeight={800} fill={C.orange} textAnchor="middle">
				电子
			</text>
		</G>
		<G at={at2.from}>
			<circle cx={60} cy={36} r={14} fill={C.red} />
			<text x={84} y={46} fontSize={26} fontWeight={700} fill={C.text}>质子</text>
			<circle cx={190} cy={36} r={14} fill={C.brown} />
			<text x={214} y={46} fontSize={26} fontWeight={700} fill={C.text}>中子</text>
			<circle cx={320} cy={36} r={14} fill={C.orange} />
			<text x={344} y={46} fontSize={26} fontWeight={700} fill={C.text}>电子</text>
		</G>
	</svg>
);

export const Atom: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">原子的构成</Header>
		<Model />
		<div style={{position: 'absolute', left: 780, right: 90, top: 175}}>
			<Table
				head={['粒子', '电荷', '相对质量', '位置']}
				cols="1fr 1.2fr 1.4fr 1.2fr"
				at={at2.from}
				fontSize={30}
				rowHeight={66}
				rows={[
					{cells: [<Hl c={C.red}>质子</Hl>, '+1', '≈ 1', '原子核'], at: at2.from},
					{cells: [<Hl c={C.brown}>中子</Hl>, <span>0</span>, '≈ 1', '原子核'], at: at2.from + 10},
					{cells: [<Hl c={C.orange}>电子</Hl>, '−1', <Hl c={C.red}>约 1/1836</Hl>, '核外'], at: at2.from + 20},
				]}
			/>
		</div>
		<Appear at={at3.from} style={{position: 'absolute', left: 780, right: 90, top: 450, fontSize: 30, fontWeight: 700, color: C.muted}}>
			原子的质量几乎全部<Hl>集中在原子核</Hl>上
		</Appear>
		<Appear at={at4.from} style={{position: 'absolute', left: 780, top: 515, width: 560}}>
			<Card style={{padding: '18px 26px'}}>
				<div style={{fontSize: 30, fontWeight: 700, color: C.muted}}>质量数</div>
				<div style={{fontSize: 46, fontWeight: 900, marginTop: 4}}>
					<Hl>A</Hl> = <Hl c={C.orange}>Z</Hl> + <Hl c={C.brown}>N</Hl>
				</div>
				<div style={{fontSize: 26, fontWeight: 600, color: C.muted, marginTop: 4}}>质量数 = 质子数 + 中子数</div>
			</Card>
		</Appear>
		<Appear at={at5.from} style={{position: 'absolute', left: 1370, right: 90, top: 515}}>
			<Card style={{padding: '18px 26px', textAlign: 'center'}}>
				<Nuclide a="37" z="17" x="Cl" size={64} aColor={C.red} zColor={C.orange} />
				<div style={{fontSize: 34, fontWeight: 900, marginTop: 10}}>
					N = 37 − 17 = <Hl>20</Hl>
				</div>
			</Card>
		</Appear>
		<Appear at={at6.from} style={{position: 'absolute', left: 90, right: 90, top: 728}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31, padding: '16px 26px'}}>
				左上角是<Hl>质量数 A</Hl>，左下角是<Hl c={C.orange}>质子数 Z</Hl>；中子数要用 <Hl>A − Z</Hl> 算出来
			</Callout>
		</Appear>
		<AnimeBeat k="hand" from={at3b.from} to={at3b.to}>
			<span style={{color: C.red}}>原子核</span>：个头极小，{'\n'}质量却几乎<span style={{color: C.red}}>全在这儿</span>！
		</AnimeBeat>
		<Narration t={t} />
	</Scene>
);
