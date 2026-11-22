import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.antigen;
const {ag2, ag3, ag4, ag5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// A Y-shaped antibody whose two arms bind matching (triangle) antigens; a
// differently shaped (round) antigen floats by unbound.
const Antibody: React.FC<{bind: number; show: number}> = ({bind, show}) => (
	<svg width={620} height={520} viewBox="0 0 620 520">
		<G at={show}>
			<path d="M310,470 L310,280 L170,140 M310,280 L450,140" fill="none" stroke={C.green} strokeWidth={34} strokeLinecap="round" strokeLinejoin="round" />
			{/* binding sites */}
			<path d="M150,120 l-26,-26 l30,-8 z" fill="#fff" stroke={C.green} strokeWidth={6} />
			<path d="M470,120 l26,-26 l-30,-8 z" fill="#fff" stroke={C.green} strokeWidth={6} />
			<text x={310} y={510} fontSize={30} fontWeight={900} fill={C.green} textAnchor="middle">抗体（免疫球蛋白）</text>
		</G>
		{/* matching antigens: slide in to the binding sites */}
		<g opacity={bind > 0 ? 1 : 0} transform={`translate(${-60 * (1 - bind)}, ${-60 * (1 - bind)})`}>
			<path d="M60,30 L150,80 L100,140 Z" fill={C.red} />
		</g>
		<g opacity={bind > 0 ? 1 : 0} transform={`translate(${60 * (1 - bind)}, ${-60 * (1 - bind)})`}>
			<path d="M560,30 L470,80 L520,140 Z" fill={C.red} />
		</g>
		<g opacity={bind > 0 ? 1 : 0}>
			<circle cx={540} cy={330} r={40} fill={C.orange} />
			<text x={540} y={400} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">其他抗原</text>
			<text x={540} y={430} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">不能结合</text>
			<text x={110} y={190} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">抗原</text>
		</g>
	</svg>
);

export const Antigen: React.FC = () => {
	const frame = at(ag4.from, ag4.to, 0.45);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点八">抗原与抗体</Header>
			<div style={{position: 'absolute', left: 1200, top: 190, transform: 'scale(0.8)', transformOrigin: 'top left'}}>
				<BindAt from={frame} show={ag4.from} />
			</div>
			<div style={{position: 'absolute', left: 90, width: 1050, top: 190, display: 'flex', flexDirection: 'column', gap: 22}}>
				<Appear at={ag2.from}>
					<div style={{border: `5px solid ${C.red}`, borderRadius: 22, padding: '18px 28px', background: '#fff'}}>
						<div style={{fontSize: 40, fontWeight: 900, color: C.red}}>抗原</div>
						<div style={{fontSize: 30, fontWeight: 700, marginTop: 6, lineHeight: 1.5}}>能引发免疫反应的物质，大多是<Hl>蛋白质</Hl></div>
						<Appear at={ag3.from} dy={8}>
							<div style={{fontSize: 28, fontWeight: 700, color: C.muted, marginTop: 6}}>不一定来自外界：自身衰老、损伤、癌变的细胞也可成为抗原</div>
						</Appear>
					</div>
				</Appear>
				<Appear at={ag4.from}>
					<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '18px 28px', background: '#fff'}}>
						<div style={{fontSize: 40, fontWeight: 900, color: C.green}}>抗体</div>
						<div style={{fontSize: 30, fontWeight: 700, marginTop: 6, lineHeight: 1.5}}>浆细胞分泌的免疫球蛋白，与抗原<Hl c={C.green}>特异性结合</Hl></div>
						<div style={{fontSize: 28, fontWeight: 700, color: C.muted, marginTop: 6}}>主要分布在血清中，组织液和外分泌液中也有</div>
					</div>
				</Appear>
			</div>
			<Appear at={ag5.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '14px 24px'}}>
					抗原—抗体结合形成沉淀等，最终由<Hl c={C.orange}>其他免疫细胞吞噬消化</Hl>；抗体<Hl>不能直接清除</Hl>病原体
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

const BindAt: React.FC<{from: number; show: number}> = ({from, show}) => {
	const f = useCurrentFrame();
	const bind = f < from ? 0 : interpolate(f, [from, from + 30], [0.01, 1], {extrapolateRight: 'clamp'});
	return <Antibody bind={bind} show={show} />;
};
