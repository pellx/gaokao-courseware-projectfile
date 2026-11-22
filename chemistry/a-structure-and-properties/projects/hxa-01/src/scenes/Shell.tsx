import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {Rule} from './parts';

const t = T.shell;
const {sh1, sh2, sh3, sh4, sh5, sh6} = t.cue;

const NX = 90;
const NY = 290;
const SHELLS = [
	{name: 'K', n: 1, max: 2},
	{name: 'L', n: 2, max: 8},
	{name: 'M', n: 3, max: 18},
	{name: 'N', n: 4, max: 32},
];

// Nucleus on the left, four shells as arcs, labelled with name and capacity.
const Shells: React.FC = () => (
	<svg width={680} height={560} viewBox="0 0 680 560" style={{position: 'absolute', left: 60, top: 165}}>
		<Defs />
		<G at={sh1.from}>
			<circle cx={NX} cy={NY} r={34} fill={C.red} />
			<text x={NX} y={NY + 10} fontSize={26} fontWeight={900} fill="#fff" textAnchor="middle">核</text>
			{SHELLS.map((s, i) => {
				const r = 95 + i * 95;
				return (
					<g key={s.name}>
						<path d={`M${NX + r * Math.cos(-0.75)},${NY + r * Math.sin(-0.75)} A${r},${r} 0 0 1 ${NX + r * Math.cos(0.75)},${NY + r * Math.sin(0.75)}`} fill="none" stroke={i === 0 ? C.red : C.line} strokeWidth={6} />
						<text x={NX + r + 10} y={NY + 12} fontSize={36} fontWeight={900} fill={C.text} textAnchor="middle" stroke="#fff" strokeWidth={10} paintOrder="stroke">
							{s.name}
						</text>
					</g>
				);
			})}
			<Arrow x1={130} y1={500} x2={560} y2={500} color={C.orange} marker="arrow-orange" />
			<text x={345} y={545} fontSize={28} fontWeight={800} fill={C.orange} textAnchor="middle">离核越远，能量越高</text>
		</G>
		<G at={sh3.from}>
			{SHELLS.map((s, i) => {
				const r = 95 + i * 95;
				return (
					<text key={s.name} x={NX + r * Math.cos(0.75) + 4} y={NY - r * Math.sin(0.75) - 14} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle" stroke="#fff" strokeWidth={8} paintOrder="stroke">
						≤{s.max}
					</text>
				);
			})}
		</G>
	</svg>
);

const Ok: React.FC<{ok: boolean; children: React.ReactNode; note: string}> = ({ok, children, note}) => (
	<div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 16, background: ok ? C.greenSoft : C.redSoft, borderRadius: 18, padding: '14px 22px'}}>
		<span style={{width: 50, height: 50, borderRadius: 25, background: ok ? C.green : C.red, color: '#fff', fontSize: 34, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>{ok ? '✓' : '✗'}</span>
		<div>
			<div style={{fontSize: 34, fontWeight: 900}}>{children}</div>
			<div style={{fontSize: 24, fontWeight: 700, color: ok ? C.green : C.red}}>{note}</div>
		</div>
	</div>
);

export const Shell: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">核外电子的分层排布</Header>
		<Shells />
		<div style={{position: 'absolute', left: 790, right: 90, top: 175, display: 'flex', flexDirection: 'column', gap: 16}}>
			<Appear at={sh2.from} dx={-20} dy={0}>
				<Rule tag="规律一" color={C.red}>先排能量低的<Hl>内层</Hl>，排满再排外层</Rule>
			</Appear>
			<Appear at={sh3.from} dx={-20} dy={0}>
				<Rule tag="规律二" color={C.orange}>
					第 n 层最多 <Hl>2n<sup style={{fontSize: '0.66em'}}>2</sup></Hl> 个：K 2、L 8、M 18
				</Rule>
			</Appear>
			<Appear at={sh4.from} dx={-20} dy={0}>
				<Rule tag="规律三" color={C.green}>
					<span>
						<Hl>最外层 ≤ 8</Hl>（K 层为最外层时 ≤ 2）；<Hl c={C.orange}>次外层 ≤ 18</Hl>
					</span>
				</Rule>
			</Appear>
		</div>
		<Appear at={sh5.from} style={{position: 'absolute', left: 790, right: 90, top: 520}}>
			<div style={{fontSize: 30, fontWeight: 800, marginBottom: 12}}>钾（19 个电子）怎么排？</div>
			<div style={{display: 'flex', gap: 20}}>
				<Ok ok note="K L M N">2，8，8，1</Ok>
				<Ok ok={false} note="M 层作最外层却有 9 个">2，8，9</Ok>
			</div>
		</Appear>
		<Appear at={sh6.from} style={{position: 'absolute', left: 90, right: 90, top: 738}}>
			<Callout label="解题方法" color={C.orange} soft={C.orangeSoft} style={{fontSize: 31, padding: '16px 26px'}}>
				几条规律<Hl>同时满足</Hl>，排完逐层检查；2n<sup style={{fontSize: '0.66em'}}>2</sup> 只是<Hl>上限</Hl>，不是每层都要排满
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
