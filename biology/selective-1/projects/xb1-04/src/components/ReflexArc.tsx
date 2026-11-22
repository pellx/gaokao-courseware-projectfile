import React from 'react';
import {C} from '../theme';
import {Defs} from './ui';

export type ArcPart = 'receptor' | 'afferent' | 'ganglion' | 'center' | 'efferent' | 'effector';

const EDGE = C.brown;

// Reflex arc through a spinal cord cross-section (dorsal side up): skin
// receptor → afferent nerve with its ganglion → grey matter → efferent nerve →
// muscle. `hl` gives a part a thick coloured outline; `horns` labels the
// dorsal/ventral horns; `arrows` marks the direction of conduction; `cut`
// shows a cut through the afferent nerve with its two stimulation points.
export const ReflexArc: React.FC<{
	hl?: Partial<Record<ArcPart, string>>;
	labels?: boolean;
	horns?: number;
	arrows?: number;
	cut?: number;
}> = ({hl = {}, labels = true, horns = 0, arrows = 0, cut = 0}) => {
	const s = (p: ArcPart, w = 7) => ({stroke: hl[p] ?? EDGE, strokeWidth: hl[p] ? w + 5 : w});
	const label = (p: ArcPart, fallback: string) => hl[p] ?? fallback;
	return (
		<svg width={1080} height={640} viewBox="0 0 1080 640">
			<Defs />
			{/* skin and receptor */}
			<rect x={40} y={60} width={280} height={60} rx={12} fill="#f6d7b0" stroke={EDGE} strokeWidth={3} />
			<text x={180} y={98} fontSize={24} fontWeight={700} fill={EDGE} textAnchor="middle" opacity={0.7}>皮肤</text>
			{['M160,150 L130,110', 'M160,150 L160,100', 'M160,150 L190,110'].map((d) => (
				<path key={d} d={d} fill="none" strokeLinecap="round" {...s('receptor', 6)} />
			))}
			{/* afferent nerve and ganglion */}
			<path d="M160,150 C 260,240 420,170 526,170" fill="none" strokeLinecap="round" {...s('afferent')} />
			<path d="M594,170 C 690,170 760,190 812,248" fill="none" strokeLinecap="round" {...s('afferent')} />
			<ellipse cx={560} cy={170} rx={36} ry={26} fill="#f3d2a6" {...s('ganglion', 5)} />
			<circle cx={560} cy={170} r={9} fill={EDGE} />
			{/* spinal cord with grey matter */}
			<ellipse cx={850} cy={330} rx={200} ry={170} fill="#fbeedd" stroke={EDGE} strokeWidth={4} />
			<path
				d="M790,195 L815,195 L840,290 L860,290 L885,195 L910,195 L895,300 L965,400 L925,455 L870,385 L830,385 L775,455 L735,400 L805,300 Z"
				fill="#ecd2ae"
				stroke={hl.center ?? '#c9a77c'}
				strokeWidth={hl.center ? 9 : 3}
			/>
			<path d="M815,250 L845,325 L880,410" fill="none" stroke={EDGE} strokeWidth={5} />
			<circle cx={845} cy={325} r={10} fill={EDGE} />
			{/* efferent neuron: cell body in the ventral horn */}
			<circle cx={892} cy={425} r={17} fill={hl.efferent ?? EDGE} />
			<path d="M880,435 C 780,560 520,560 300,548" fill="none" strokeLinecap="round" {...s('efferent')} />
			{/* muscle (effector) with nerve endings */}
			<ellipse cx={180} cy={548} rx={130} ry={56} fill="#eab09a" stroke={hl.effector ?? EDGE} strokeWidth={hl.effector ? 10 : 4} />
			{['M300,548 L270,520', 'M300,548 L265,550', 'M300,548 L272,578'].map((d) => (
				<path key={d} d={d} fill="none" strokeLinecap="round" {...s('efferent', 5)} />
			))}
			{labels && (
				<g fontSize={30} fontWeight={900} textAnchor="middle">
					<text x={160} y={40} fill={label('receptor', EDGE)}>感受器</text>
					<text x={340} y={240} fill={label('afferent', EDGE)}>传入神经</text>
					<text x={560} y={124} fill={label('ganglion', EDGE)}>神经节</text>
					<text x={850} y={140} fill={label('center', EDGE)}>神经中枢</text>
					<text x={590} y={600} fill={label('efferent', EDGE)}>传出神经</text>
					<text x={180} y={630} fill={label('effector', EDGE)}>效应器（肌肉）</text>
				</g>
			)}
			{horns > 0 && (
				<g opacity={horns} fontSize={28} fontWeight={900}>
					<text x={930} y={215} fill={C.orange}>后角（窄）</text>
					<text x={905} y={490} fill={C.green}>前角（宽）</text>
				</g>
			)}
			{arrows > 0 && (
				<g opacity={arrows} strokeWidth={6}>
					<line x1={360} y1={196} x2={420} y2={182} stroke={C.orange} markerEnd="url(#arrow-orange)" />
					<line x1={700} y1={176} x2={752} y2={200} stroke={C.orange} markerEnd="url(#arrow-orange)" />
					<line x1={700} y1={528} x2={620} y2={540} stroke={C.green} markerEnd="url(#arrow-green)" />
					<line x1={430} y1={548} x2={360} y2={550} stroke={C.green} markerEnd="url(#arrow-green)" />
				</g>
			)}
			{cut > 0 && (
				<g opacity={cut}>
					<line x1={440} y1={140} x2={470} y2={210} stroke={C.red} strokeWidth={8} />
					<circle cx={500} cy={172} r={13} fill={C.red} />
					<text x={500} y={252} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">刺激中枢端</text>
					<circle cx={400} cy={185} r={13} fill={C.red} />
					<text x={330} y={150} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">刺激外周端</text>
				</g>
			)}
		</svg>
	);
};
