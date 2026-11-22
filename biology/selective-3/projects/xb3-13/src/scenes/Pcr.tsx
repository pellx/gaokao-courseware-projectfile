import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pcr;
const {pc1, pc2, pc3, pc4, pc5} = t.cue;

const X = [180, 700, 1220];
const L = 340;
// A strand from x to x+L at y; `primer` draws a short block at one end.
const Strand: React.FC<{x: number; y: number; color?: string}> = ({x, y, color = C.brown}) => (
	<line x1={x} y1={y} x2={x + L} y2={y} stroke={color} strokeWidth={10} strokeLinecap="round" />
);

export const Pcr: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">PCR 的原理与过程</Header>
		<svg width={1740} height={520} viewBox="0 0 1740 520" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={pc1.from}>
				<text x={0} y={36} fontSize={30} fontWeight={900} fill={C.text}>原理：DNA 半保留复制</text>
			</G>
			<G at={pc2.from}>
				<rect x={X[0] - 40} y={80} width={L + 80} height={360} rx={24} fill={C.redSoft} />
				<text x={X[0] + L / 2} y={130} fontSize={34} fontWeight={900} fill={C.red} textAnchor="middle">① 变性</text>
				<text x={X[0] + L / 2} y={172} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">90 ℃以上</text>
				<Strand x={X[0]} y={250} />
				<Strand x={X[0]} y={340} />
				<text x={X[0] + L / 2} y={410} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">双链解聚为单链</text>
			</G>
			<G at={pc3.from}>
				<Arrow x1={X[0] + L + 50} y1={295} x2={X[1] - 50} y2={295} />
				<rect x={X[1] - 40} y={80} width={L + 80} height={360} rx={24} fill={C.orangeSoft} />
				<text x={X[1] + L / 2} y={130} fontSize={34} fontWeight={900} fill={C.orange} textAnchor="middle">② 复性</text>
				<text x={X[1] + L / 2} y={172} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">50 ℃左右</text>
				<Strand x={X[1]} y={250} />
				<Strand x={X[1]} y={340} />
				<rect x={X[1] + L - 70} y={262} width={70} height={14} rx={4} fill={C.red} />
				<rect x={X[1]} y={314} width={70} height={14} rx={4} fill={C.red} />
				<text x={X[1] + L / 2} y={410} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">引物与单链互补结合</text>
			</G>
			<G at={pc4.from}>
				<Arrow x1={X[1] + L + 50} y1={295} x2={X[2] - 50} y2={295} />
				<rect x={X[2] - 40} y={80} width={L + 80} height={360} rx={24} fill={C.greenSoft} />
				<text x={X[2] + L / 2} y={130} fontSize={34} fontWeight={900} fill={C.green} textAnchor="middle">③ 延伸</text>
				<text x={X[2] + L / 2} y={172} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">72 ℃左右</text>
				<Strand x={X[2]} y={250} />
				<Strand x={X[2]} y={340} />
				<line x1={X[2] + 30} y1={269} x2={X[2] + L} y2={269} stroke={C.green} strokeWidth={10} />
				<rect x={X[2] + L - 70} y={262} width={70} height={14} rx={4} fill={C.red} />
				<line x1={X[2]} y1={321} x2={X[2] + L - 30} y2={321} stroke={C.green} strokeWidth={10} />
				<rect x={X[2]} y={314} width={70} height={14} rx={4} fill={C.red} />
				<text x={X[2] + L / 2} y={410} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">从引物 3′ 端延伸子链</text>
			</G>
			<G at={pc4.from + 20}>
				<text x={1700} y={480} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="end">
					<tspan fill={C.red}>■</tspan> 引物　<tspan fill={C.green}>━</tspan> 新合成的子链
				</text>
			</G>
		</svg>
		<Tip at={pc5.from} top={720} label="易错">
			PCR <Hl>不用解旋酶</Hl>，靠高温解旋；耐高温的 DNA 聚合酶从引物 3′ 端延伸，子链方向 <Hl>5′→3′</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
