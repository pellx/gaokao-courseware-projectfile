import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.inhibit;
const {ih1, ih2, ih3} = t.cue;

// Postsynaptic membrane patch: ion flowing in through a channel, and the
// charge signs on each side (`out` above, `inn` below).
const Patch: React.FC<{ion: string; color: string; marker: string; out: string; inn: string; flow: number; big?: boolean}> = ({ion, color, marker, out, inn, flow, big}) => (
	<svg width={760} height={380} viewBox="0 0 760 380">
		<Defs />
		<text x={20} y={40} fontSize={28} fontWeight={800} fill={C.muted}>膜外</text>
		<text x={20} y={360} fontSize={28} fontWeight={800} fill={C.muted}>膜内</text>
		<rect x={20} y={170} width={720} height={40} fill="#e6c79c" stroke={C.brown} strokeWidth={3} />
		<rect x={340} y={160} width={30} height={60} rx={10} fill={color} />
		<rect x={390} y={160} width={30} height={60} rx={10} fill={color} />
		<line x1={380} y1={50} x2={380} y2={320} stroke={color} strokeWidth={12} opacity={flow} markerEnd={`url(#${marker})`} />
		<text x={400} y={80} fontSize={34} fontWeight={900} fill={color}>{ion}内流</text>
		<g fontSize={big ? 50 : 42} fontWeight={900} textAnchor="middle">
			{[90, 170, 250, 510, 590, 670].map((x) => (
				<React.Fragment key={x}>
					<text x={x} y={150} fill={out === '+' ? C.red : C.brown}>{out}</text>
					<text x={x} y={262} fill={inn === '+' ? C.red : C.brown}>{inn}</text>
					{big && <text x={x} y={300} fill={C.brown}>{inn}</text>}
				</React.Fragment>
			))}
		</g>
	</svg>
);

export const Inhibit: React.FC = () => {
	const f1 = useRamp(ih1.from + 30, 16);
	const f2 = useRamp(ih2.from + 30, 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点四">兴奋性递质与抑制性递质</Header>
			<Appear at={ih1.from} style={{position: 'absolute', left: 90, top: 170}}>
				<div style={{fontSize: 36, fontWeight: 900, color: C.orange}}>兴奋性递质</div>
				<Patch ion="Na⁺" color={C.orange} marker="arrow-orange" out={f1 > 0.5 ? '−' : '+'} inn={f1 > 0.5 ? '+' : '−'} flow={f1} />
				<div style={{fontSize: 30, fontWeight: 800}}>
					后膜变为<Hl c={C.orange}>外负内正</Hl>，产生动作电位
				</div>
			</Appear>
			<Appear at={ih2.from} style={{position: 'absolute', left: 1000, top: 170}}>
				<div style={{fontSize: 36, fontWeight: 900, color: C.green}}>抑制性递质</div>
				<Patch ion="Cl⁻" color={C.green} marker="arrow-green" out="+" inn="−" flow={f2} big={f2 > 0.5} />
				<div style={{fontSize: 30, fontWeight: 800}}>
					仍为<Hl c={C.green}>外正内负</Hl>，电位差更大，更难兴奋
				</div>
			</Appear>
			<Appear at={ih3.from} style={{position: 'absolute', left: 90, right: 90, top: 730}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
					抑制性递质也使后膜<Hl>电位发生变化</Hl>，只是没有产生动作电位
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
