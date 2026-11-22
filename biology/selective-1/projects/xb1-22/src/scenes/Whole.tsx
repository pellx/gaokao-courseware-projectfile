import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.whole;
const {wh2, wh3, wh4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Box: React.FC<{x: number; y: number; w: number; color: string; label: string; sub?: string}> = ({x, y, w, color, label, sub}) => (
	<g>
		<rect x={x - w / 2} y={y - 48} width={w} height={96} rx={22} fill="#fff" stroke={color} strokeWidth={6} />
		<text x={x} y={sub ? y - 2 : y + 12} fontSize={34} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
		{sub && <text x={x} y={y + 32} fontSize={22} fontWeight={700} fill={C.muted} textAnchor="middle">{sub}</text>}
	</g>
);

// Environment → (receptors) → gene expression ⇄ hormones → growth and development.
export const Whole: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">植物生长发育的整体调控</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={wh2.from}>
				<Box x={260} y={240} w={380} color={C.green} label="环境因素" sub="光、温度、重力" />
			</G>
			<G at={at(wh2.from, wh2.to, 0.2)}>
				<Box x={860} y={90} w={380} color={C.red} label="基因表达调控" />
			</G>
			<G at={at(wh2.from, wh2.to, 0.45)}>
				<Box x={860} y={390} w={380} color={C.orange} label="激素调节" sub="激素的产生和分布" />
			</G>
			<G at={wh3.from}>
				<Box x={1480} y={240} w={400} color={C.brown} label="生长、发育、繁殖、休眠" />
				<Arrow x1={1050} y1={110} x2={1290} y2={210} color={C.muted} />
				<Arrow x1={1050} y1={370} x2={1290} y2={270} color={C.muted} />
			</G>
			<G at={wh4.from}>
				<Arrow x1={450} y1={210} x2={665} y2={110} color={C.green} marker="arrow-green" />
				<text x={585} y={212} fontSize={24} fontWeight={800} fill={C.green} textAnchor="middle">光敏色素等受体</text>
				<Arrow x1={450} y1={270} x2={665} y2={370} color={C.green} marker="arrow-green" />
			</G>
			<G at={at(wh4.from, wh4.to, 0.6)}>
				<Arrow x1={860} y1={340} x2={860} y2={140} offset={-26} color={C.orange} marker="arrow-orange" />
				<Arrow x1={860} y1={140} x2={860} y2={340} offset={-26} color={C.red} marker="arrow-red" />
			</G>
		</svg>
		<Appear at={wh4.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="考法" style={{fontSize: 29, padding: '12px 24px'}}>
				环境因素影响<Hl c={C.orange}>激素的产生和分布</Hl>，也通过光敏色素等影响<Hl>基因表达</Hl>；激素又影响基因表达
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
