import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.relation;
const {re2, re3, re4, re5, re6} = t.cue;

const R = 92;
const N = {
	plasma: {x: 210, y: 150, label: '血浆', color: C.red, soft: C.redSoft},
	lymph: {x: 890, y: 150, label: '淋巴液', color: C.green, soft: C.greenSoft},
	tissue: {x: 550, y: 370, label: '组织液', color: C.orange, soft: C.orangeSoft},
};

const Label: React.FC<{x: number; y: number; children: string; color?: string}> = ({x, y, children, color = C.muted}) => (
	<text x={x} y={y} fontSize={28} fontWeight={700} fill={color} textAnchor="middle">
		{children}
	</text>
);

export const Relation: React.FC = () => {
	const frame = useCurrentFrame();
	// At the 考法 line the lymph node pulses: it is the one to find first.
	const pulse = frame >= re6.from ? 1 + 0.06 * Math.sin(((frame - re6.from) / 30) * Math.PI * 2) : 1;
	const box = interpolate(frame, [re2.from + 30, re2.from + 50], [0, 1], clamp);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点二">内环境与三种细胞外液的关系</Header>
			<svg width={1100} height={800} viewBox="0 0 1100 800" style={{position: 'absolute', left: 90, top: 140, overflow: 'visible'}}>
				<Defs />
				<rect x={70} y={30} width={960} height={470} rx={40} fill="none" stroke={C.red} strokeWidth={4} strokeDasharray="14 10" opacity={box} />
				<text x={1010} y={486} fontSize={30} fontWeight={800} fill={C.red} textAnchor="end" opacity={box}>
					内环境（细胞外液）
				</text>
				<G at={re3.from}>
					<Arrow x1={N.plasma.x} y1={N.plasma.y} x2={N.tissue.x} y2={N.tissue.y} trim={[R + 6, R + 12]} offset={-14} color={C.red} marker="arrow-red" />
					<Arrow x1={N.tissue.x} y1={N.tissue.y} x2={N.plasma.x} y2={N.plasma.y} trim={[R + 6, R + 12]} offset={-14} color={C.orange} marker="arrow-orange" />
					<Label x={300} y={310}>毛细血管壁</Label>
				</G>
				<G at={re4.from}>
					<Arrow x1={N.tissue.x} y1={N.tissue.y} x2={N.lymph.x} y2={N.lymph.y} trim={[R + 6, R + 12]} color={C.green} marker="arrow-green" />
					<Label x={820} y={310}>毛细淋巴管壁</Label>
				</G>
				<G at={re4.from + 40}>
					<Arrow x1={N.lymph.x} y1={N.lymph.y} x2={N.plasma.x} y2={N.plasma.y} trim={[R + 6, R + 12]} color={C.green} marker="arrow-green" />
					<Label x={550} y={130}>淋巴循环</Label>
				</G>
				<G at={re5.from}>
					<rect x={420} y={570} width={260} height={100} rx={22} fill="#f6e3cf" stroke={C.brown} strokeWidth={5} />
					<text x={550} y={634} fontSize={40} fontWeight={800} fill={C.brown} textAnchor="middle">
						细胞内液
					</text>
					<Arrow x1={530} y1={N.tissue.y + R + 6} x2={530} y2={564} color={C.brown} marker="arrow" />
					<Arrow x1={570} y1={564} x2={570} y2={N.tissue.y + R + 6} color={C.brown} marker="arrow" />
					<Label x={660} y={530}>细胞膜</Label>
				</G>
				{Object.entries(N).map(([k, n]) => (
					<G key={k} at={re2.from}>
						<g transform={`translate(${n.x} ${n.y}) scale(${k === 'lymph' ? pulse : 1})`}>
							<circle r={R} fill={n.soft} stroke={n.color} strokeWidth={k === 'lymph' && frame >= re6.from ? 9 : 5} />
							<text y={14} fontSize={42} fontWeight={900} fill={n.color} textAnchor="middle">
								{n.label}
							</text>
						</g>
					</G>
				))}
			</svg>
			<Appear at={re2.from} style={{position: 'absolute', left: 1250, right: 90, top: 190}}>
				<div style={{fontSize: 34, lineHeight: 1.6, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 20, padding: '18px 26px'}}>
					<Hl>内环境</Hl> = 细胞外液构成的液体环境
					<br />
					<span style={{color: C.muted}}>不包括细胞内液</span>
				</div>
			</Appear>
			<Appear at={re6.from} style={{position: 'absolute', left: 1250, right: 90, top: 400}}>
				<Callout label="考法" style={{fontSize: 32}}>
					先找<Hl c={C.green}>淋巴液</Hl>：一进一出两个单向箭头。
					<br />
					箭头从<Hl c={C.orange}>组织液</Hl>来，指向<Hl>血浆</Hl>；与组织液双向交换的另一个是细胞内液。
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
