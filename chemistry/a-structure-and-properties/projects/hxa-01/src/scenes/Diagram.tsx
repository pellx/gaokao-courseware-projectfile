import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';
import {ShellDiagram} from './parts';

const t = T.diagram;
const {dg1, dg2, dg3, dg4, dg5} = t.cue;

const CY = 190;
const Label: React.FC<{x: number; s: string; note: string; color?: string}> = ({x, s, note, color = C.text}) => (
	<g>
		<text x={x} y={CY + 140} fontSize={36} fontWeight={900} fill={color} textAnchor="middle">
			{svgChem(s, 36)}
		</text>
		<text x={x} y={CY + 182} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="middle">
			{note}
		</text>
	</g>
);

export const Diagram: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">原子和离子的结构示意图</Header>
		<svg width={1760} height={420} viewBox="0 0 1760 420" style={{position: 'absolute', left: 80, top: 160}}>
			<Defs />
			<G at={dg1.from}>
				<ShellDiagram cx={110} cy={CY} z={11} shells={[2, 8, 1]} hlLast={C.red} />
				<Label x={180} s="Na" note="核电荷数 11 = 电子数 11" />
			</G>
			<G at={dg2.from}>
				<Arrow x1={330} y1={CY} x2={470} y2={CY} color={C.red} marker="arrow-red" />
				<text x={400} y={CY - 22} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">
					{svgChem('失 1 个 e^-', 26)}
				</text>
				<ShellDiagram cx={540} cy={CY} z={11} shells={[2, 8]} color={C.red} />
				<Label x={580} s="Na^+" note="11 > 10：阳离子" color={C.red} />
			</G>
			<G at={dg3.from}>
				<ShellDiagram cx={1000} cy={CY} z={17} shells={[2, 8, 7]} hlLast={C.green} />
				<Label x={1070} s="Cl" note="核电荷数 17 = 电子数 17" />
				<Arrow x1={1220} y1={CY} x2={1360} y2={CY} color={C.green} marker="arrow-green" />
				<text x={1290} y={CY - 22} fontSize={26} fontWeight={800} fill={C.green} textAnchor="middle">
					{svgChem('得 1 个 e^-', 26)}
				</text>
				<ShellDiagram cx={1430} cy={CY} z={17} shells={[2, 8, 8]} color={C.green} />
				<Label x={1500} s="Cl^-" note="17 < 18：阴离子" color={C.green} />
			</G>
		</svg>
		<Appear at={dg4.from} style={{position: 'absolute', left: 90, right: 90, top: 600, display: 'flex', gap: 18, fontSize: 30, fontWeight: 800}}>
			{[
				['核电荷数 = 电子数', '原子', C.text],
				['核电荷数 > 电子数', '阳离子', C.red],
				['核电荷数 < 电子数', '阴离子', C.green],
			].map(([a, b, c]) => (
				<div key={b} style={{flex: 1, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 16, padding: '12px 18px', textAlign: 'center'}}>
					{a} → <span style={{color: c}}>{b}</span>
				</div>
			))}
		</Appear>
		<Appear at={dg5.from} style={{position: 'absolute', left: 90, right: 90, top: 718}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31, padding: '16px 26px'}}>
				离子示意图的<Hl>核电荷数不变</Hl>：Cl<sup style={{fontSize: '0.66em'}}>−</sup> 圈内仍写 <Hl>+17</Hl>，不是 +18；圈内的“+”也不能漏
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
