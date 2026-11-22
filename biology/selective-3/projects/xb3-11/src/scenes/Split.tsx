import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.split;
const {sl1, sl2, sl3, sl4, sl5} = t.cue;

// Blastocyst with its inner cell mass on top; `clip` names a clipPath to show only part of it.
const Blast: React.FC<{x: number; y: number; r: number; clip?: string}> = ({x, y, r, clip}) => (
	<g clipPath={clip ? `url(#${clip})` : undefined}>
		<circle cx={x} cy={y} r={r} fill="#fff" stroke={C.orange} strokeWidth={9} />
		<path d={`M${x - r * 0.72},${y - r * 0.69} A${r - 4},${r - 4} 0 0 1 ${x + r * 0.72},${y - r * 0.69} Q${x + r * 0.4},${y - r * 0.12} ${x},${y - r * 0.12} Q${x - r * 0.4},${y - r * 0.12} ${x - r * 0.72},${y - r * 0.69} z`} fill={C.red} opacity={0.8} />
	</g>
);

export const Split: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">胚胎分割</Header>
		<svg width={760} height={500} viewBox="0 0 760 500" style={{position: 'absolute', left: 70, top: 170}}>
			<Defs />
			<G at={sl2.from}>
				<Blast x={170} y={200} r={130} />
				<text x={170} y={380} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">囊胚（或桑葚胚）</text>
			</G>
			<G at={sl3.from}>
				<line x1={170} y1={50} x2={170} y2={350} stroke={C.red} strokeWidth={6} strokeDasharray="14 10" />
				<text x={170} y={36} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">均等分割内细胞团</text>
				<Arrow x1={320} y1={200} x2={400} y2={200} />
				<clipPath id="half-l">
					<rect x={420} y={0} width={110} height={400} />
				</clipPath>
				<clipPath id="half-r">
					<rect x={590} y={0} width={110} height={400} />
				</clipPath>
				<Blast x={530} y={200} r={110} clip="half-l" />
				<Blast x={590} y={200} r={110} clip="half-r" />
				<text x={480} y={355} fontSize={26} fontWeight={900} fill={C.text} textAnchor="middle">半胚</text>
				<text x={640} y={355} fontSize={26} fontWeight={900} fill={C.text} textAnchor="middle">半胚</text>
				<text x={560} y={410} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">移植 → 同卵双胎</text>
			</G>
		</svg>
		<Bullets
			style={{left: 880, right: 90, top: 185}}
			fontSize={30}
			gap={20}
			items={[
				{at: sl1.from, children: <>机械方法切成 2、4、8 等份，获得<Hl>同卵双胎或多胎</Hl></>},
				{at: sl2.from, children: <>选发育良好、形态正常的<Hl c={C.orange}>桑葚胚或囊胚</Hl></>},
				{at: sl3.from, color: C.red, children: <><Hl>内细胞团均等分割</Hl>，否则影响恢复和发育</>},
				{at: sl4.from, color: C.green, children: <>属于<Hl c={C.green}>无性繁殖</Hl>；份数越多成功率越低，<Hl c={C.green}>二分胚胎</Hl>成功率最高</>},
			]}
		/>
		<Tip at={sl5.from} top={720} label="易错">
			均等分割的是<Hl>内细胞团</Hl>，不是滋养层；取<Hl c={C.orange}>滋养层细胞</Hl>做 DNA 分析可鉴定性别
		</Tip>
		<Narration t={t} />
	</Scene>
);
