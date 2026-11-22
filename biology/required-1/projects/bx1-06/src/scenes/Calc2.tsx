import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Rows, Tip} from '../components/lib';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.calc2;
const {cb1, cb2, cb3, cb4, cb5} = t.cue;

const Chain: React.FC<{y: number; n: number; at: number}> = ({y, n, at}) => (
	<G at={at}>
		<text x={40} y={y + 12} fontSize={34} fontWeight={900} fill={C.green} textAnchor="middle">{svgChem('H2N', 34)}</text>
		{Array.from({length: n}, (_, i) => (
			<g key={i}>
				{i > 0 && <line x1={110 + (i - 1) * 90 + 34} y1={y} x2={110 + i * 90 - 34} y2={y} stroke={C.red} strokeWidth={6} />}
				<circle cx={110 + i * 90} cy={y} r={34} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
			</g>
		))}
		<text x={110 + (n - 1) * 90 + 50} y={y + 12} fontSize={34} fontWeight={900} fill={C.green}>COOH</text>
	</G>
);

export const Calc2: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">计算：游离的氨基、羧基与 N、O 原子数</Header>
		<svg width={900} height={260} viewBox="0 0 900 260" style={{position: 'absolute', left: 90, top: 165}}>
			<Chain y={60} n={6} at={cb1.from} />
			<Chain y={180} n={5} at={cb2.from} />
		</svg>
		<Rows
			style={{left: 1000, right: 90, top: 175}}
			fontSize={30}
			gap={16}
			items={[
				{at: cb1.from, color: C.green, title: '每条链', children: <>两端各有 1 个游离的氨基和羧基</>},
				{at: cb2.from, color: C.green, title: 'm 条链', children: <>至少 <Hl c={C.green}>m 个</Hl>游离氨基、m 个游离羧基</>},
			]}
		/>
		<Rows
			style={{left: 90, right: 90, top: 450}}
			fontSize={32}
			gap={16}
			items={[
				{at: cb3.from, color: C.orange, title: 'N 原子数', children: <>＝ 肽键数 ＋ 肽链数 ＋ R 基中的 N</>},
				{at: cb4.from, color: C.red, title: 'O 原子数', children: <>＝ 肽键数 ＋ <Hl>2 ×</Hl> 肽链数 ＋ R 基中的 O</>},
			]}
		/>
		<Tip at={cb5.from} top={680} label="解题方法">
			数<Hl>“肽键 ＋ 链端 ＋ R 基”</Hl>：每个肽键 1 个 N、1 个 O；每条链末端多 1 个 N、2 个 O
		</Tip>
		<Narration t={t} />
	</Scene>
);
