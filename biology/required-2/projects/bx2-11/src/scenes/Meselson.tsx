import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

// "15N" -> superscript mass number.
const iso = (s: string) => s.split(/(\d+N)/).map((p, i) => (/^\d+N$/.test(p) ? <React.Fragment key={i}><tspan dy={-10} fontSize={16}>{p.slice(0, -1)}</tspan><tspan dy={10}>N</tspan></React.Fragment> : p));

const t = T.meselson;
const {ms1, ms2, ms3, ms4} = t.cue;
// Band heights in a centrifuge tube: light (轻) high, middle (中), heavy (重) low.
const BAND = {light: 150, mid: 210, heavy: 270};

const Tube: React.FC<{x: number; at: number; bands: [keyof typeof BAND, number][]; label: string; sub: string}> = ({x, at, bands, label, sub}) => (
	<G at={at}>
		<path d={`M${x - 50},40 V320 Q${x - 50},370 ${x},370 Q${x + 50},370 ${x + 50},320 V40`} fill={C.panel} stroke={C.brown} strokeWidth={4} />
		{bands.map(([b, w]) => (
			<rect key={b} x={x - 40} y={BAND[b] - 7} width={80} height={14} rx={4} fill={C.red} opacity={w} />
		))}
		<text x={x} y={420} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">{label}</text>
		<text x={x} y={460} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">{iso(sub)}</text>
	</G>
);

export const Meselson: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">梅塞尔森和斯塔尔的实验</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={ms1.from}>
				<text x={70} y={BAND.light + 9} fontSize={28} fontWeight={900} fill={C.muted}>轻带</text>
				<text x={70} y={BAND.mid + 9} fontSize={28} fontWeight={900} fill={C.muted}>中带</text>
				<text x={70} y={BAND.heavy + 9} fontSize={28} fontWeight={900} fill={C.muted}>重带</text>
				{Object.values(BAND).map((y) => (
					<line key={y} x1={140} y1={y} x2={1100} y2={y} stroke={C.line} strokeWidth={3} strokeDasharray="8 8" />
				))}
			</G>
			<Tube x={300} at={ms1.from} bands={[['heavy', 1]]} label="亲代" sub="两条链均含 15N" />
			<Tube x={600} at={ms2.from} bands={[['mid', 1]]} label="第一代" sub="15N 链 ＋ 14N 链" />
			<Tube x={900} at={ms3.from} bands={[['mid', 1], ['light', 1]]} label="第二代" sub="中带、轻带各一半" />
			<G at={ms4.from}>
				<rect x={1180} y={30} width={520} height={340} rx={20} fill={C.redSoft} stroke={C.red} strokeWidth={4} />
				<text x={1440} y={90} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">若是全保留复制</text>
				<text x={1440} y={150} fontSize={28} fontWeight={800} fill={C.text} textAnchor="middle">第一代：一条重带 ＋ 一条轻带</text>
				<text x={1440} y={200} fontSize={28} fontWeight={800} fill={C.text} textAnchor="middle">不会出现中带</text>
				<text x={1440} y={290} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">实际：第一代全是中带</text>
				<text x={1440} y={340} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">→ 半保留复制</text>
			</G>
		</svg>
		<Tip at={ms4.from} top={700} label="解题方法" fontSize={33}>
			先把每种假说的预期离心结果画出来，再与实际对照：<Hl>第一代只有中带</Hl>就排除了全保留复制
		</Tip>
		<Narration t={t} />
	</Scene>
);
