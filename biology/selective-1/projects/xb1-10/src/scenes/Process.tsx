import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pr1, pr2, pr3, pr4, pr5} = t.cue;

const Box: React.FC<{x: number; y: number; w?: number; color: string; label: string; opacity: number}> = ({x, y, w = 300, color, label, opacity}) => (
	<g opacity={opacity}>
		<rect x={x} y={y} width={w} height={80} rx={16} fill="#fff" stroke={color} strokeWidth={5} />
		<text x={x + w / 2} y={y + 52} fontSize={32} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
	</g>
);

const Arrow: React.FC<{d: string; color: string; marker: string; opacity: number; dash?: boolean}> = ({d, color, marker, opacity, dash}) => (
	<path d={d} fill="none" stroke={color} strokeWidth={6} strokeDasharray={dash ? '12 8' : undefined} markerEnd={`url(#${marker})`} opacity={opacity} />
);

export const Process: React.FC = () => {
	const a1 = useRamp(pr1.from, 16);
	const a2 = useRamp(pr2.from, 16);
	const a3 = useRamp(pr3.from, 16);
	const a4 = useRamp(pr4.from, 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点三">血糖调节的过程</Header>
			<svg width={1740} height={560} viewBox="0 0 1740 560" style={{position: 'absolute', left: 90, top: 160}}>
				<Defs />
				{/* left: high blood glucose → B cells → insulin */}
				<Box x={0} y={20} color={C.red} label="血糖升高" opacity={a1} />
				<Arrow d="M150,100 L150,212" color={C.green} marker="arrow-green" opacity={a1} />
				<Box x={0} y={220} color={C.green} label="胰岛B细胞" opacity={a1} />
				<Arrow d="M150,300 L150,412" color={C.green} marker="arrow-green" opacity={a1} />
				<Box x={0} y={420} w={340} color={C.green} label="胰岛素↑ → 血糖降低" opacity={a1} />
				{/* right: low blood glucose → A cells → glucagon */}
				<Box x={1440} y={20} color={C.orange} label="血糖降低" opacity={a2} />
				<Arrow d="M1590,100 L1590,212" color={C.red} marker="arrow-red" opacity={a2} />
				<Box x={1440} y={220} color={C.red} label="胰岛A细胞" opacity={a2} />
				<Arrow d="M1590,300 L1590,412" color={C.red} marker="arrow-red" opacity={a2} />
				<Box x={1360} y={420} w={380} color={C.red} label="胰高血糖素↑ → 血糖升高" opacity={a2} />
				{/* hypothalamus via autonomic nerves */}
				<Box x={720} y={20} color={C.brown} label="下丘脑" opacity={Math.max(a3, a4)} />
				<Arrow d="M300,60 L712,60" color={C.muted} marker="arrow" opacity={a3} dash />
				<Arrow d="M770,100 C700,220 500,260 308,260" color={C.green} marker="arrow-green" opacity={a3} />
				<text x={560} y={210} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle" opacity={a3}>副交感神经</text>
				<Arrow d="M1440,60 L1028,60" color={C.muted} marker="arrow" opacity={a4} dash />
				<Arrow d="M970,100 C1040,220 1240,260 1432,260" color={C.orange} marker="arrow-orange" opacity={a4} />
				<text x={1180} y={210} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle" opacity={a4}>交感神经</text>
				<Box x={720} y={300} color={C.orange} label="肾上腺髓质" opacity={a4} />
				<Arrow d="M870,100 L870,292" color={C.orange} marker="arrow-orange" opacity={a4} />
				<Arrow d="M1020,360 C1150,380 1250,420 1352,450" color={C.orange} marker="arrow-orange" opacity={a4} />
				<text x={1150} y={440} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle" opacity={a4}>肾上腺素</text>
			</svg>
			<Appear at={pr5.from} style={{position: 'absolute', left: 90, right: 90, top: 740}}>
				<Callout label="考法" style={{fontSize: 30}}>
					<Hl>神经—体液调节</Hl>，以<Hl>激素调节</Hl>为主；神经调节最终通过<Hl>激素</Hl>起作用
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
