import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fusion;
const {fu1, fu2, fu3, fu4} = t.cue;

const Y = 170;

// A cell carrying both nuclei; `wall` draws the regenerated cell wall.
const Hybrid: React.FC<{x: number; wall?: boolean}> = ({x, wall}) => (
	<g>
		{wall && <rect x={x - 95} y={Y - 85} width={190} height={170} rx={16} fill="#fff" stroke={C.brown} strokeWidth={14} />}
		<ellipse cx={x} cy={Y} rx={80} ry={70} fill="#fff7ea" stroke={C.red} strokeWidth={4} />
		<circle cx={x - 26} cy={Y} r={18} fill={C.green} />
		<circle cx={x + 26} cy={Y} r={18} fill={C.orange} />
	</g>
);

const Label: React.FC<{x: number; children: React.ReactNode; color?: string}> = ({x, children, color = C.text}) => (
	<text x={x} y={Y + 140} fontSize={28} fontWeight={900} fill={color} textAnchor="middle">{children}</text>
);

export const Fusion: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">原生质体融合与杂种植株</Header>
		<Def at={fu1.from} fontSize={31} style={{left: 90, right: 90, top: 165}}>
			诱导融合：物理法（<Hl c={C.orange}>电融合法、离心法</Hl>）；化学法（<Hl c={C.orange}>聚乙二醇（PEG）融合法</Hl>、高 Ca<sup>2+</sup>—高 pH 融合法）
		</Def>
		<svg width={1740} height={360} viewBox="0 0 1740 360" style={{position: 'absolute', left: 90, top: 320}}>
			<Defs />
			<G at={fu1.from}>
				<circle cx={70} cy={Y - 70} r={50} fill={C.greenSoft} stroke={C.green} strokeWidth={4} />
				<circle cx={70} cy={Y + 70} r={50} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
				<Arrow x1={135} y1={Y} x2={285} y2={Y} />
				<text x={210} y={Y - 18} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">诱导融合</text>
				<Hybrid x={370} />
				<Label x={370}>融合的原生质体</Label>
			</G>
			<G at={fu2.from}>
				<Arrow x1={460} y1={Y} x2={590} y2={Y} color={C.red} marker="arrow-red" />
				<text x={525} y={Y - 18} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">再生壁</text>
				<Hybrid x={700} wall />
				<Label x={700} color={C.red}>杂种细胞（融合成功）</Label>
			</G>
			<G at={fu3.from}>
				<Arrow x1={805} y1={Y} x2={955} y2={Y} />
				<text x={880} y={Y - 18} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">脱分化</text>
				<path d={`M1000,${Y + 40} C990,${Y - 30} 1040,${Y - 70} 1080,${Y - 50} C1130,${Y - 80} 1170,${Y - 20} 1150,${Y + 40} z`} fill="#e9d9a8" stroke={C.brown} strokeWidth={4} />
				<Label x={1075}>愈伤组织</Label>
				<Arrow x1={1190} y1={Y} x2={1340} y2={Y} />
				<text x={1265} y={Y - 18} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">再分化</text>
				<line x1={1450} y1={Y + 80} x2={1450} y2={Y - 70} stroke={C.green} strokeWidth={8} />
				<ellipse cx={1405} cy={Y - 20} rx={45} ry={20} fill={C.green} transform={`rotate(-30 1405 ${Y - 20})`} />
				<ellipse cx={1495} cy={Y - 50} rx={45} ry={20} fill={C.green} transform={`rotate(30 1495 ${Y - 50})`} />
				<ellipse cx={1500} cy={Y + 20} rx={40} ry={18} fill={C.green} transform={`rotate(25 1500 ${Y + 20})`} />
				<Label x={1450} color={C.green}>杂种植株</Label>
			</G>
		</svg>
		<Tip at={fu4.from} top={730} label="易错">
			融合结果还有<Hl>同种细胞融合</Hl>的，需要筛选；<Hl>灭活病毒</Hl>只用于诱导动物细胞融合
		</Tip>
		<Narration t={t} />
	</Scene>
);
