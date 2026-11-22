import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cells;
const {ce2, ce3, ce4, ce5} = t.cue;
const mid = (from: number, to: number) => Math.round((from + to) / 2);

// Glow strength for a part of the drawing while the narration talks about it.
const useGlow = (from: number, to: number) => {
	const frame = useCurrentFrame();
	return frame >= from && frame < to ? 0.5 + 0.5 * Math.sin(((frame - from) / 20) * Math.PI) ** 2 : 0;
};

const TISSUE_CELLS = [90, 320, 550, 780];
const RBC = [140, 300, 460, 620, 780, 900];
const LYMPHOCYTES = [620, 770, 910];

export const Cells: React.FC = () => {
	const frame = useCurrentFrame();
	const tissue = useGlow(ce2.from, mid(ce2.from, ce2.to));
	const blood = useGlow(mid(ce2.from, ce2.to), ce2.to);
	const lymph = useGlow(ce3.from, ce3.to);
	const bWall = useGlow(ce4.from, mid(ce4.from, ce4.to));
	const lWall = useGlow(mid(ce4.from, ce4.to), ce4.to + 30);
	const focus = frame >= ce5.from;
	return (
		<Scene duration={t.duration}>
			<Header tag="考点三">不同细胞生活的内环境</Header>
			<svg width={1000} height={680} viewBox="0 0 1000 680" style={{position: 'absolute', left: 80, top: 170}}>
				<rect x={0} y={0} width={1000} height={680} rx={30} fill={C.orangeSoft} />
				<text x={30} y={250} fontSize={30} fontWeight={800} fill={C.orange}>组织液</text>
				{/* Blood capillary */}
				<rect x={0} y={40} width={1000} height={130} fill={C.redSoft} />
				<line x1={0} y1={40} x2={1000} y2={40} stroke={C.red} strokeWidth={8 + 8 * bWall} />
				<line x1={0} y1={170} x2={1000} y2={170} stroke={C.red} strokeWidth={8 + 8 * bWall} />
				{RBC.map((x) => (
					<ellipse key={x} cx={x} cy={105} rx={40 + 6 * blood} ry={24 + 4 * blood} fill={C.red} opacity={0.85} />
				))}
				<text x={30} y={118} fontSize={30} fontWeight={800} fill={C.red}>血浆</text>
				<text x={980} y={30} fontSize={26} fontWeight={700} fill={C.red} textAnchor="end">毛细血管壁</text>
				{/* Tissue cells */}
				{TISSUE_CELLS.map((x) => (
					<g key={x}>
						<rect x={x} y={270} width={170} height={130} rx={36} fill="#f6d7b0" stroke={C.brown} strokeWidth={5 + 5 * tissue} />
						<circle cx={x + 85} cy={335} r={22} fill={C.brown} opacity={0.7} />
					</g>
				))}
				<text x={500} y={445} fontSize={28} fontWeight={700} fill={C.brown} textAnchor="middle">组织细胞</text>
				{/* Blind-ended lymph capillary */}
				<path d="M1000,500 H380 A60,60 0 0 0 380,620 H1000" fill={C.greenSoft} stroke={C.green} strokeWidth={8 + 8 * lWall} />
				{LYMPHOCYTES.map((x) => (
					<g key={x}>
						<circle cx={x} cy={560} r={30 + 5 * lymph} fill="#fff" stroke={C.green} strokeWidth={5} />
						<circle cx={x} cy={560} r={18} fill={C.green} />
					</g>
				))}
				<text x={420} y={572} fontSize={30} fontWeight={800} fill={C.green}>淋巴液</text>
				<text x={980} y={660} fontSize={26} fontWeight={700} fill={C.green} textAnchor="end">毛细淋巴管壁</text>
			</svg>
			<div style={{position: 'absolute', left: 1130, right: 80, top: 170}}>
				<Table
					head={['细胞', '生活的内环境']}
					cols="1.2fr 1fr"
					at={ce2.from - 10}
					fontSize={30}
					rowHeight={70}
					focus={focus}
					rows={[
						{cells: ['组织细胞', '组织液'], at: ce2.from},
						{cells: ['血细胞', '血浆'], at: mid(ce2.from, ce2.to)},
						{cells: ['淋巴细胞', '淋巴液、血浆'], at: ce3.from},
						{cells: ['毛细血管壁细胞', '血浆、组织液'], at: ce4.from, key: true},
						{cells: ['毛细淋巴管壁细胞', '淋巴液、组织液'], at: mid(ce4.from, ce4.to), key: true},
					]}
				/>
				<Appear at={ce5.from} style={{marginTop: 26}}>
					<Callout label="考法" style={{fontSize: 32}}>
						先看细胞在哪里；<Hl>管壁细胞</Hl>两侧都要写全。
					</Callout>
				</Appear>
			</div>
			<Narration t={t} />
		</Scene>
	);
};
