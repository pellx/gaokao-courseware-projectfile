import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {LONG, MAT, MCell, PAT, SHORT} from './cells';

const t = T.diversity;
const {dv1, dv2, dv3, dv4} = t.cue;
const CY = 195;
const LY = CY + 140 + 44;
const xo = (which: 'left' | 'right', color: string) => ({from: 0.66, color, which});

export const Diversity: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">配子多样性的原因</Header>
		<svg width={1740} height={510} viewBox="0 0 1740 510" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={dv1.from}>
				<text x={500} y={28} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">① 减数分裂Ⅰ后期：非同源染色体自由组合</text>
				<MCell
					x={280}
					y={CY}
					rx={135}
					equator
					labelY={LY}
					label="排列方式一"
					sub={['配子：红长＋红短、橙长＋橙短']}
					chs={[
						{dx: -22, dy: -40, h: LONG, color: PAT, double: true},
						{dx: 22, dy: -40, h: LONG, color: MAT, double: true},
						{dx: -22, dy: 62, h: SHORT, color: PAT, double: true},
						{dx: 22, dy: 62, h: SHORT, color: MAT, double: true},
					]}
				/>
				<MCell
					x={720}
					y={CY}
					rx={135}
					equator
					labelY={LY}
					label="排列方式二"
					sub={['配子：红长＋橙短、橙长＋红短']}
					chs={[
						{dx: -22, dy: -40, h: LONG, color: PAT, double: true},
						{dx: 22, dy: -40, h: LONG, color: MAT, double: true},
						{dx: -22, dy: 62, h: SHORT, color: MAT, double: true},
						{dx: 22, dy: 62, h: SHORT, color: PAT, double: true},
					]}
				/>
			</G>
			<G at={dv2.from}>
				<text x={500} y={490} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">n 对同源染色体 → 2<tspan dy={-14} fontSize={22}>n</tspan><tspan dy={14}> 种配子（人：2</tspan><tspan dy={-14} fontSize={22}>23</tspan><tspan dy={14}> 种）</tspan></text>
			</G>
			<G at={dv3.from}>
				<text x={1400} y={28} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">② 减数分裂Ⅰ前期：互换</text>
				<MCell
					x={1400}
					y={CY}
					rx={135}
					labelY={LY}
					label="四分体中非姐妹染色单体互换"
					sub={['产生重组的染色单体']}
					chs={[
						{dx: -20, dy: 0, h: LONG + 30, color: PAT, double: true, tail: xo('right', MAT)},
						{dx: 20, dy: 0, h: LONG + 30, color: MAT, double: true, tail: xo('left', PAT)},
					]}
				/>
			</G>
		</svg>
		<Tip at={dv4.from} top={705} label="易错" fontSize={33}>
			互换发生在<Hl>非姐妹染色单体</Hl>之间；再加上受精时卵细胞和精子<Hl>随机结合</Hl>，后代更加多样
		</Tip>
		<Narration t={t} />
	</Scene>
);
