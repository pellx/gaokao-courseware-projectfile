import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {LONG, MAT, MCell, PAT, SHORT} from './cells';

const t = T.mii;
const {m21, m22, m23, m24, m25} = t.cue;
const X = [217, 652, 1087, 1522];
const CY = 170;
const LY = CY + 135 + 44;

export const Mii: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">减数分裂Ⅱ（以精子形成为例）</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={m21.from}>
				<MCell
					x={X[0]}
					y={CY}
					rx={120}
					labelY={LY}
					label="前期Ⅱ"
					sub={['无同源染色体', '染色体不再复制']}
					chs={[
						{dx: -30, dy: -12, h: LONG, color: PAT, double: true, tail: {from: 0.66, color: MAT, which: 'right'}},
						{dx: 36, dy: 18, h: SHORT, color: MAT, double: true},
					]}
				/>
			</G>
			<G at={m22.from}>
				<MCell
					x={X[1]}
					y={CY}
					rx={120}
					equator
					labelY={LY}
					label="中期Ⅱ"
					sub={['着丝粒排列在', '赤道板上']}
					chs={[
						{dx: 0, dy: -36, h: LONG, color: PAT, double: true, tail: {from: 0.66, color: MAT, which: 'right'}},
						{dx: 0, dy: 56, h: SHORT, color: MAT, double: true},
					]}
				/>
			</G>
			<G at={m23.from}>
				<MCell
					x={X[2]}
					y={CY}
					rx={165}
					ry={115}
					labelY={LY}
					label="后期Ⅱ"
					sub={['着丝粒分裂', '染色体数暂时加倍']}
					chs={[
						{dx: -80, dy: -26, h: LONG, color: PAT},
						{dx: 80, dy: -26, h: LONG, color: PAT, tail: {from: 0.66, color: MAT, which: 'left'}},
						{dx: -80, dy: 52, h: SHORT, color: MAT},
						{dx: 80, dy: 52, h: SHORT, color: MAT},
					]}
				/>
			</G>
			<G at={m24.from}>
				<MCell x={X[3] - 80} y={CY} rx={70} chs={[{dx: -14, dy: -6, h: LONG, color: PAT}, {dx: 18, dy: 10, h: SHORT, color: MAT}]} />
				<MCell x={X[3] + 80} y={CY} rx={70} chs={[{dx: -14, dy: -6, h: LONG, color: PAT, tail: {from: 0.66, color: MAT, which: 'left'}}, {dx: 18, dy: 10, h: SHORT, color: MAT}]} />
				<text x={X[3]} y={LY} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">末期Ⅱ</text>
				<text x={X[3]} y={LY + 36} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">共形成 4 个精细胞</text>
				<text x={X[3]} y={LY + 68} fontSize={24} fontWeight={700} fill={C.green} textAnchor="middle">变形 → 精子</text>
			</G>
		</svg>
		<Tip at={m25.from} top={690} label="考法" fontSize={33}>
			减数分裂Ⅱ与有丝分裂相似，但<Hl>没有同源染色体</Hl>；后期Ⅱ细胞中染色体数与体细胞<Hl>相同</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
