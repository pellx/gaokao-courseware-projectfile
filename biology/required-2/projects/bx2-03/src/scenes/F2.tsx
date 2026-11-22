import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Punnett} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.f2;
const {f21, f22, f23, f24, f25} = t.cue;
const G4 = ['YR', 'Yr', 'yR', 'yr'];
// Combine two gametes into a genotype written dominant-first per gene.
const join = (a: string, b: string) => {
	const pair = (x: string, y: string) => (x < y ? x + y : y + x); // uppercase sorts first
	return pair(a[0], b[0]) + pair(a[1], b[1]);
};
const CELLS = G4.map((r) => G4.map((c) => join(r, c)));
const tone = (g: string) => {
	const Y = g.includes('Y');
	const R = g.includes('R');
	return Y && R ? C.red : Y ? C.orange : R ? C.green : C.brown;
};

export const F2: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">F<sub>2</sub> 的基因型与表型</Header>
		<Punnett style={{left: 90, top: 165}} at={f21.from} step={12} cell={96} fontSize={30} cols={G4} rows={G4} cells={CELLS} color={tone} />
		<Rows
			style={{left: 840, right: 90, top: 170}}
			fontSize={29}
			gap={14}
			items={[
				{at: f22.from, color: C.red, title: '黄圆 9/16', children: <>Y_R_（双显性）</>},
				{at: f22.from + 30, color: C.orange, title: '黄皱 3/16', children: <>Y_rr</>},
				{at: f22.from + 50, color: C.green, title: '绿圆 3/16', children: <>yyR_</>},
				{at: f22.from + 70, color: C.brown, title: '绿皱 1/16', children: <>yyrr（双隐性）</>},
				{at: f23.from, color: C.orange, title: '基因型 9 种', children: <>纯合子 4 种共 4/16；YyRr 占 4/16</>},
				{at: f24.from, color: C.red, title: '黄圆中', children: <>纯合子 YYRR 占 <Hl>1/9</Hl></>},
			]}
		/>
		<Tip at={f25.from} top={730} label="易错" fontSize={32}>
			重组类型看亲本：黄圆 × 绿皱 → 重组占 <Hl>3/8</Hl>；黄皱 × 绿圆 → 重组占 <Hl>5/8</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
