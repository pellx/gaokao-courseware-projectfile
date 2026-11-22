import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pyramid;
const {py1, py2, py3, py4, py5} = t.cue;

const BAR = 70;
// Bars listed bottom to top: [width, label].
const Pyr: React.FC<{cx: number; bars: [number, string][]; color: string; name: string; note: string; noteColor: string; at: number}> = ({cx, bars, color, name, note, noteColor, at}) => (
	<G at={at}>
		{bars.map(([w, label], i) => {
			const y = 300 - i * (BAR + 6);
			return (
				<g key={label}>
					<rect x={cx - w / 2} y={y} width={w} height={BAR} rx={6} fill={color} opacity={0.55 + i * 0.15} />
					<text x={cx} y={y + BAR / 2 + 10} fontSize={26} fontWeight={800} fill="#fff" textAnchor="middle">{label}</text>
				</g>
			);
		})}
		<text x={cx} y={420} fontSize={36} fontWeight={900} fill={color} textAnchor="middle">{name}</text>
		<text x={cx} y={462} fontSize={28} fontWeight={900} fill={noteColor} textAnchor="middle">{note}</text>
	</G>
);

export const Pyramid: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">生态金字塔</Header>
		<Appear at={py1.from} style={{position: 'absolute', left: 90, top: 170, fontSize: 30, fontWeight: 700}}>
			把各营养级的数值由低到高绘成图
		</Appear>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 160}}>
			<Pyr cx={290} at={py2.from} color={C.green} name="能量金字塔" note="上窄下宽，通常不倒置" noteColor={C.green} bars={[[400, '生产者'], [260, '初级消费者'], [130, '次级']]} />
			<Pyr cx={870} at={py3.from} color={C.orange} name="数量金字塔" note="可能倒置（树 → 昆虫）" noteColor={C.red} bars={[[90, '树'], [420, '昆虫'], [200, '鸟']]} />
			<Pyr cx={1450} at={py4.from} color={C.brown} name="生物量金字塔" note="海洋某一时刻可能倒置" noteColor={C.red} bars={[[180, '浮游植物'], [360, '浮游动物']]} />
		</svg>
		<Appear at={py5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="考法" style={{fontSize: 31}}>
				通常不会倒置的是<Hl c={C.green}>能量金字塔</Hl>；数量金字塔、生物量金字塔都<Hl>可能倒置</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
