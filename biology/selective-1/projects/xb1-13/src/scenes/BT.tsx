import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.bt;
const {bt2, bt3, bt4, bt5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Node: React.FC<{x: number; y: number; r: number; color: string; label: string; sub?: string}> = ({x, y, r, color, label, sub}) => (
	<g>
		<circle cx={x} cy={y} r={r} fill="#fff" stroke={color} strokeWidth={6} />
		<circle cx={x} cy={y} r={r * 0.38} fill={color} opacity={0.85} />
		<text x={x} y={y + r + 44} fontSize={34} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
		{sub && <text x={x} y={y + r + 82} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="middle">{sub}</text>}
	</g>
);

// Haematopoietic stem cell in the bone marrow → B cells mature in the marrow,
// T cells migrate to the thymus → both settle in lymph nodes and spleen.
export const BT: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">B细胞与T细胞的来源</Header>
		<svg width={1740} height={560} viewBox="0 0 1740 560" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={bt2.from}>
				<rect x={10} y={20} width={760} height={470} rx={30} fill={C.redSoft} stroke={C.red} strokeWidth={4} strokeDasharray="14 10" />
				<text x={40} y={70} fontSize={34} fontWeight={900} fill={C.red}>骨髓</text>
				<Node x={170} y={250} r={58} color={C.brown} label="造血干细胞" />
			</G>
			<G at={bt3.from}>
				<Arrow x1={240} y1={220} x2={540} y2={150} color={C.orange} marker="arrow-orange" />
				<text x={390} y={160} fontSize={26} fontWeight={800} fill={C.orange} textAnchor="middle">在骨髓中成熟</text>
				<Node x={610} y={140} r={50} color={C.orange} label="B细胞" />
			</G>
			<G at={bt4.from}>
				<rect x={860} y={250} width={420} height={240} rx={30} fill={C.greenSoft} stroke={C.green} strokeWidth={4} strokeDasharray="14 10" />
				<text x={890} y={300} fontSize={34} fontWeight={900} fill={C.green}>胸腺</text>
				<Arrow x1={240} y1={290} x2={1000} y2={370} color={C.green} marker="arrow-green" />
				<text x={560} y={370} fontSize={26} fontWeight={800} fill={C.green} textAnchor="middle">迁移到胸腺中成熟</text>
				<Node x={1080} y={360} r={50} color={C.green} label="T细胞" />
			</G>
			<G at={at(bt4.from, bt4.to, 0.55)}>
				<rect x={1400} y={130} width={320} height={160} rx={24} fill="#fff" stroke={C.brown} strokeWidth={4} />
				<text x={1560} y={200} fontSize={32} fontWeight={900} fill={C.brown} textAnchor="middle">淋巴结、脾等</text>
				<text x={1560} y={248} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">随血液、淋巴循环</text>
				<Arrow x1={670} y1={130} x2={1395} y2={190} color={C.muted} dash="12 8" />
				<Arrow x1={1140} y1={340} x2={1400} y2={260} color={C.muted} dash="12 8" />
			</G>
		</svg>
		<Appear at={bt5.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '14px 24px'}}>
				产生都在<Hl>骨髓</Hl>；成熟：B细胞在<Hl c={C.orange}>骨髓</Hl>，T细胞在<Hl c={C.green}>胸腺</Hl> → 切除胸腺主要影响T细胞
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
