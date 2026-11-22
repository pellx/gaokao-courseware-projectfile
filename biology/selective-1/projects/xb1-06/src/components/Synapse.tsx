import React from 'react';
import {C} from '../theme';
import {Defs} from './ui';

const EDGE = C.brown;

// Fixed vesicle positions inside the terminal.
const VESICLES = [
	[330, 150], [390, 120], [450, 150], [510, 120], [570, 150], [360, 205], [430, 200], [500, 205], [560, 200], [400, 255], [480, 255],
];
const RECEPTORS = [300, 370, 440, 510, 580];
// Transmitter molecules in the cleft (x positions).
const CLEFT = [290, 340, 380, 420, 460, 500, 540, 590];

// Synapse in side view: presynaptic terminal (top) with vesicles and a
// mitochondrion, cleft, postsynaptic membrane with receptors (bottom).
// release: 0 vesicles inside → 1 transmitter spread in the cleft.
// bind: transmitter sits on receptors. transporter: reuptake pumps on the
// presynaptic membrane; blocked crosses them out. receptors: how many
// receptors are drawn (for the addiction scene).
export const Synapse: React.FC<{
	release?: number;
	bind?: number;
	transporter?: number;
	blocked?: number;
	receptors?: number;
	labels?: number;
	dot?: string;
	cleftDots?: number;
}> = ({release = 0, bind = 0, transporter = 0, blocked = 0, receptors = 5, labels = 1, dot = C.red, cleftDots}) => {
	const n = cleftDots ?? CLEFT.length;
	return (
		<svg width={940} height={600} viewBox="0 0 940 600">
			<Defs />
			{/* presynaptic terminal */}
			<path d="M400,0 L500,0 L510,40 C700,60 760,180 740,300 L160,300 C140,180 200,60 390,40 Z" fill="#fbe3c4" stroke={EDGE} strokeWidth={5} />
			<line x1={160} y1={300} x2={740} y2={300} stroke={C.orange} strokeWidth={10} />
			<ellipse cx={660} cy={200} rx={50} ry={26} fill="#f2c08f" stroke={EDGE} strokeWidth={3} />
			<path d="M620,200 Q640,185 660,200 T700,200" fill="none" stroke={EDGE} strokeWidth={3} />
			{VESICLES.map(([x, y], i) => {
				// The lower vesicles move to the membrane and open as release goes on.
				const moves = y >= 200;
				const yy = moves ? y + (288 - y) * Math.min(1, release * 1.5) : y;
				return (
					<g key={i} opacity={moves ? 1 - Math.max(0, release - 0.6) * 2.5 : 1}>
						<circle cx={x} cy={yy} r={22} fill="#fff" stroke={EDGE} strokeWidth={3} />
						{[[-7, -6], [6, -4], [0, 7]].map(([dx, dy], j) => (
							<circle key={j} cx={x + dx} cy={yy + dy} r={4.5} fill={dot} />
						))}
					</g>
				);
			})}
			{/* postsynaptic membrane and cell */}
			<path d="M120,350 L780,350 L800,600 L100,600 Z" fill="#f6ead9" stroke="none" />
			<line x1={120} y1={350} x2={780} y2={350} stroke={C.green} strokeWidth={10} />
			{RECEPTORS.slice(0, receptors).map((x) => (
				<path key={x} d={`M${x - 16},372 L${x - 16},350 M${x + 16},372 L${x + 16},350 M${x - 16},372 L${x + 16},372`} stroke={C.green} strokeWidth={7} fill="none" />
			))}
			{/* transmitter in the cleft */}
			{CLEFT.slice(0, n).map((x, i) => {
				const yRel = 310 + (i % 3) * 12;
				const target = RECEPTORS[i % receptors] ?? x;
				const cx = x + (target - x) * bind;
				const cy = yRel + (350 - yRel) * bind;
				return <circle key={i} cx={cx} cy={cy} r={9} fill={dot} opacity={release > 0.5 ? (release - 0.5) * 2 : 0} />;
			})}
			{transporter > 0 && (
				<g opacity={transporter}>
					{[200, 700].map((x) => (
						<g key={x}>
							<rect x={x - 18} y={282} width={36} height={36} rx={8} fill={C.gold} stroke={EDGE} strokeWidth={3} />
							<line x1={x + (x < 450 ? 50 : -50)} y1={330} x2={x} y2={250} stroke={C.gold} strokeWidth={6} markerEnd="url(#arrow-orange)" opacity={1 - blocked} />
							{blocked > 0 && (
								<g opacity={blocked} stroke={C.red} strokeWidth={9} strokeLinecap="round">
									<line x1={x - 26} y1={274} x2={x + 26} y2={326} />
									<line x1={x + 26} y1={274} x2={x - 26} y2={326} />
								</g>
							)}
						</g>
					))}
				</g>
			)}
			{labels > 0 && (
				<g opacity={labels} fontSize={28} fontWeight={900}>
					<text x={770} y={110} fill={EDGE}>突触小体</text>
					<text x={770} y={300} fill={C.orange}>突触前膜</text>
					<text x={790} y={334} fill={EDGE} fontSize={24}>突触间隙</text>
					<text x={800} y={372} fill={C.green}>突触后膜</text>
					<text x={250} y={95} fill={C.orange} fontSize={24} textAnchor="end">突触小泡</text>
					<line x1={255} y1={88} x2={310} y2={140} stroke={C.orange} strokeWidth={3} />
					<text x={660} y={250} fill={EDGE} fontSize={22} textAnchor="middle">线粒体</text>
					<text x={440} y={420} fill={C.green} fontSize={24} textAnchor="middle">受体</text>
				</g>
			)}
		</svg>
	);
};
