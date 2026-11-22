import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.probe;
const {pb1, pb2, pb3, pb4} = t.cue;

// Meter dial with a needle at `angle` degrees (0 = upright).
export const Dial: React.FC<{x: number; y: number; angle: number; r?: number}> = ({x, y, angle, r = 70}) => (
	<g>
		<path d={`M${x - r},${y} A${r},${r} 0 0 1 ${x + r},${y} Z`} fill="#fff" stroke={C.text} strokeWidth={4} />
		{[-50, -25, 0, 25, 50].map((a) => (
			<line key={a} x1={x} y1={y - r + 6} x2={x} y2={y - r + 18} stroke={C.text} strokeWidth={3} transform={`rotate(${a} ${x} ${y})`} />
		))}
		<line x1={x} y1={y} x2={x} y2={y - r + 14} stroke={C.red} strokeWidth={6} strokeLinecap="round" transform={`rotate(${angle} ${x} ${y})`} />
		<circle cx={x} cy={y} r={8} fill={C.text} />
	</g>
);

// Section of axon (membranes at y=220 and y=330) with a meter above and two
// electrodes; `inside` puts electrode B inside the fibre.
const Setup: React.FC<{inside: boolean; angle: number; title: string; result: React.ReactNode; color: string}> = ({inside, angle, title, result, color}) => (
	<div>
		<div style={{fontSize: 34, fontWeight: 900, color, marginBottom: 6}}>{title}</div>
		<svg width={780} height={350} viewBox="0 0 780 350">
			<rect x={40} y={220} width={700} height={110} fill="#fbeedd" />
			<line x1={40} y1={220} x2={740} y2={220} stroke={C.brown} strokeWidth={8} />
			<line x1={40} y1={330} x2={740} y2={330} stroke={C.brown} strokeWidth={8} />
			<text x={60} y={300} fontSize={24} fontWeight={800} fill={C.muted}>膜内</text>
			<text x={60} y={206} fontSize={24} fontWeight={800} fill={C.muted}>膜外</text>
			{[120, 200, 560, 640, 700].map((x) => (
				<text key={x} x={x} y={208} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">+</text>
			))}
			<Dial x={390} y={110} angle={angle} />
			<path d="M330,110 L260,110 L260,200" fill="none" stroke={C.text} strokeWidth={4} />
			<circle cx={260} cy={204} r={9} fill={C.text} />
			<text x={238} y={180} fontSize={26} fontWeight={900} textAnchor="end">A</text>
			{inside ? (
				<>
					<path d="M450,110 L520,110 L520,275" fill="none" stroke={C.text} strokeWidth={4} />
					<circle cx={520} cy={279} r={9} fill={C.text} />
				</>
			) : (
				<>
					<path d="M450,110 L520,110 L520,200" fill="none" stroke={C.text} strokeWidth={4} />
					<circle cx={520} cy={204} r={9} fill={C.text} />
				</>
			)}
			<text x={545} y={180} fontSize={26} fontWeight={900}>B</text>
		</svg>
		<div style={{fontSize: 30, fontWeight: 800, marginTop: 4}}>{result}</div>
	</div>
);

export const Probe: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">测量电位时电极的放置</Header>
		<Appear at={pb1.from} style={{position: 'absolute', left: 90, top: 170, fontSize: 34, fontWeight: 800}}>
			测静息电位，两个电极放在哪里？
		</Appear>
		<Appear at={pb2.from} style={{position: 'absolute', left: 90, top: 240}}>
			<Setup inside angle={-40} color={C.green} title="✓ 一极膜内、一极膜外" result={<>指针偏转，测出<Hl c={C.green}>静息电位（负值）</Hl></>} />
		</Appear>
		<Appear at={pb3.from} style={{position: 'absolute', left: 990, top: 240}}>
			<Setup inside={false} angle={0} color={C.red} title="✗ 两极都在膜外" result={<>膜外各处电位相等，<Hl>指针不偏转</Hl></>} />
		</Appear>
		<Appear at={pb4.from} style={{position: 'absolute', left: 90, right: 90, top: 760}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29}}>
				两极都在膜外，测的是<Hl>两点之间的电位差</Hl>，用来研究兴奋的传导，不能测静息电位
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
