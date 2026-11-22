import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {LONG, MAT, MCell, PAT, SHORT} from './cells';

const t = T.mi;
const {m11, m12, m13, m14, m15} = t.cue;
const X = [217, 652, 1087, 1522];
const CY = 170;
const xo = (which: 'left' | 'right', color: string) => ({from: 0.66, color, which});

export const Mi: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">减数分裂Ⅰ（以精子形成为例）</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={m11.from}>
				<MCell
					x={X[0]}
					y={CY}
					rx={135}
					label="前期Ⅰ"
					sub={['联会、形成四分体', '非姐妹染色单体互换']}
					chs={[
						{dx: -56, dy: -10, h: LONG, color: PAT, double: true, tail: xo('right', MAT)},
						{dx: -20, dy: -10, h: LONG, color: MAT, double: true, tail: xo('left', PAT)},
						{dx: 32, dy: 12, h: SHORT, color: PAT, double: true},
						{dx: 68, dy: 12, h: SHORT, color: MAT, double: true},
					]}
				/>
			</G>
			<G at={m12.from}>
				<MCell
					x={X[1]}
					y={CY}
					rx={135}
					equator
					label="中期Ⅰ"
					sub={['同源染色体成对排列', '在赤道板两侧']}
					chs={[
						{dx: -22, dy: -42, h: LONG, color: PAT, double: true, tail: xo('right', MAT)},
						{dx: 22, dy: -42, h: LONG, color: MAT, double: true, tail: xo('left', PAT)},
						{dx: -22, dy: 58, h: SHORT, color: MAT, double: true},
						{dx: 22, dy: 58, h: SHORT, color: PAT, double: true},
					]}
				/>
			</G>
			<G at={m13.from}>
				<MCell
					x={X[2]}
					y={CY}
					rx={170}
					ry={118}
					label="后期Ⅰ"
					sub={['同源染色体分离', '非同源染色体自由组合']}
					labelY={CY + 135 + 44}
					chs={[
						{dx: -110, dy: -22, h: LONG, color: PAT, double: true, tail: xo('right', MAT)},
						{dx: 110, dy: -22, h: LONG, color: MAT, double: true, tail: xo('left', PAT)},
						{dx: -60, dy: 40, h: SHORT, color: MAT, double: true},
						{dx: 60, dy: 40, h: SHORT, color: PAT, double: true},
					]}
				/>
			</G>
			<G at={m14.from}>
				<MCell x={X[3] - 92} y={CY} rx={84} chs={[{dx: -20, dy: -8, h: LONG, color: PAT, double: true, tail: xo('right', MAT)}, {dx: 26, dy: 8, h: SHORT, color: MAT, double: true}]} />
				<MCell x={X[3] + 92} y={CY} rx={84} chs={[{dx: -20, dy: -8, h: LONG, color: MAT, double: true, tail: xo('left', PAT)}, {dx: 26, dy: 8, h: SHORT, color: PAT, double: true}]} />
				<text x={X[3]} y={CY + 135 + 44} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">末期Ⅰ</text>
				<text x={X[3]} y={CY + 135 + 80} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">形成 2 个次级精母细胞</text>
				<text x={X[3]} y={CY + 135 + 112} fontSize={24} fontWeight={700} fill={C.red} textAnchor="middle">染色体数目减半</text>
			</G>
		</svg>
		<Tip at={m15.from} top={690} label="易错" fontSize={33}>
			染色体数目减半发生在<Hl>减数分裂Ⅰ</Hl>（同源染色体分离）；减数分裂Ⅰ结束后细胞中<Hl>没有同源染色体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
