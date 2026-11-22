import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sources;
const {sr1, sr2, sr3, sr4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Box: React.FC<{at: number; color: string; main?: boolean; dim?: boolean; children: React.ReactNode}> = ({at, color, main, dim, children}) => (
	<Appear at={at} dx={-20} dy={0}>
		<div style={{height: 100, boxSizing: 'border-box', border: `4px solid ${color}`, borderRadius: 18, padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: 30, fontWeight: 800, color, background: main ? (color === C.orange ? C.orangeSoft : C.greenSoft) : '#fff', opacity: dim ? 0.4 : 1, lineHeight: 1.3}}>
			{children}
		</div>
	</Appear>
);

const YS = [0, 140, 280];

export const Sources: React.FC = () => {
	const inA = useRamp(sr2.from, 16);
	const outA = useRamp(sr3.from, 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点一">血糖的来源与去路</Header>
			<svg width={1740} height={420} style={{position: 'absolute', left: 90, top: 190}}>
				<Defs />
				{YS.map((y) => (
					<line key={`i${y}`} x1={480} y1={y + 50} x2={700} y2={210} stroke={C.orange} strokeWidth={6} markerEnd="url(#arrow-orange)" opacity={inA} />
				))}
				{YS.map((y) => (
					<line key={`o${y}`} x1={1040} y1={210} x2={1250} y2={y + 50} stroke={C.green} strokeWidth={6} markerEnd="url(#arrow-green)" opacity={outA} />
				))}
			</svg>
			<div style={{position: 'absolute', left: 790, top: 290, width: 340, height: 220, borderRadius: 110, background: C.redSoft, border: `5px solid ${C.red}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
				<Appear at={sr1.from} dy={0} style={{textAlign: 'center'}}>
					<div style={{fontSize: 46, fontWeight: 900, color: C.red}}>血糖</div>
					<div style={{fontSize: 30, fontWeight: 800}}>3.9～6.1 mmol/L</div>
				</Appear>
			</div>
			<div style={{position: 'absolute', left: 90, top: 190, width: 480, display: 'flex', flexDirection: 'column', gap: 40}}>
				<Box at={sr2.from} color={C.orange} main>食物中糖类消化吸收（主要）</Box>
				<Box at={at(sr2.from, sr2.to, 0.45)} color={C.orange}>
					<span>
						<Hl c={C.orange}>肝糖原</Hl>分解
					</span>
				</Box>
				<Box at={at(sr2.from, sr2.to, 0.75)} color={C.orange}>非糖物质转化</Box>
			</div>
			<div style={{position: 'absolute', left: 1350, right: 90, top: 190, display: 'flex', flexDirection: 'column', gap: 40}}>
				<Box at={sr3.from} color={C.green} main>氧化分解为CO₂ + H₂O + 能量（主要）</Box>
				<Box at={at(sr3.from, sr3.to, 0.45)} color={C.green}>合成肝糖原、肌糖原</Box>
				<Box at={at(sr3.from, sr3.to, 0.7)} color={C.green}>转化为甘油三酯等</Box>
			</div>
			<Appear at={sr4.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
					<Hl>肌糖原不能直接分解</Hl>补充血糖；能直接分解补充血糖的只有<Hl>肝糖原</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
