import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fingerprint;
const {fp1, fp2, fp3, fp4} = t.cue;
// Band rows (y in lane) for mother, child, father: each child band matches one parent.
const LANES: {label: string; color: string; bands: number[]}[] = [
	{label: '母亲', color: C.orange, bands: [40, 110, 170, 260, 330]},
	{label: '孩子', color: C.red, bands: [40, 90, 170, 220, 330]},
	{label: '父亲', color: C.brown, bands: [90, 140, 220, 290, 360]},
];

export const Fingerprint: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">DNA 指纹技术</Header>
		<svg width={640} height={500} viewBox="0 0 640 500" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={fp2.from}>
				<rect x={20} y={20} width={600} height={420} rx={16} fill={C.panel} stroke={C.line} strokeWidth={4} />
				{LANES.map((l, i) => {
					const x = 80 + i * 180;
					return (
						<g key={l.label}>
							{l.bands.map((y) => (
								<rect key={y} x={x} y={40 + y} width={120} height={16} rx={4} fill={l.color} />
							))}
							<text x={x + 60} y={480} fontSize={30} fontWeight={900} fill={l.color} textAnchor="middle">{l.label}</text>
						</g>
					);
				})}
			</G>
		</svg>
		<Rows
			style={{left: 800, right: 90, top: 180}}
			fontSize={31}
			gap={18}
			items={[
				{at: fp1.from, color: C.red, title: '原理', children: <>每个人的 DNA 都有<Hl>特定的碱基序列</Hl>（特异性）</>},
				{at: fp2.from, color: C.orange, title: '方法', children: <>DNA 切成片段 → 电泳 → 比对<Hl c={C.orange}>条带图谱</Hl></>},
				{at: fp3.from, color: C.green, title: '应用', children: <>刑侦破案、亲子鉴定、遇难者身份鉴定</>},
			]}
		/>
		<Tip at={fp4.from} top={720} label="解题方法" fontSize={33}>
			亲子鉴定：孩子的每一条带<Hl>要么来自母亲，要么来自父亲</Hl>；原理是 DNA 的<Hl>特异性</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
