import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Tip} from '../components/lib';
import {Mito} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.route;
const {ro1, ro2, ro3, ro4, ro5} = t.cue;

const Y = 220;
const lbl = (x: number, y: number, s: string, c: string = C.text) => (
	<text x={x} y={y} fontSize={28} fontWeight={900} fill={c} textAnchor="middle">
		{s}
	</text>
);
const vesicle = (x: number, y: number) => (
	<g>
		<circle cx={x} cy={y} r={30} fill="#fff" stroke={C.orange} strokeWidth={5} />
		<circle cx={x - 6} cy={y + 2} r={7} fill={C.red} />
		<circle cx={x + 9} cy={y - 6} r={7} fill={C.red} />
	</g>
);

export const Route: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">分泌蛋白的合成和运输途径</Header>
		<svg width={1740} height={500} viewBox="0 0 1740 500" style={{position: 'absolute', left: 90, top: 150}}>
			<Defs />
			<rect x={10} y={20} width={1560} height={440} rx={110} fill={C.panel} stroke={C.brown} strokeWidth={6} />
			<circle cx={150} cy={Y} r={95} fill="#f3ece2" stroke={C.brown} strokeWidth={5} />
			{lbl(150, Y + 10, '细胞核', C.brown)}
			<G at={ro1.from}>
				<circle cx={330} cy={90} r={12} fill={C.red} />
				{lbl(330, 70, '核糖体', C.red)}
				{[0, 1, 2].map((k) => (
					<path key={k} d={`M300,${170 + k * 50} C340,${150 + k * 50} 380,${190 + k * 50} 420,${170 + k * 50} S500,${150 + k * 50} 540,${170 + k * 50}`} fill="none" stroke={C.orange} strokeWidth={8} />
				))}
				{[310, 350, 390, 430, 470, 510].map((x) =>
					[0, 1, 2].map((k) => <circle key={`${x}${k}`} cx={x} cy={160 + k * 50} r={6} fill={C.red} />),
				)}
				{lbl(420, 330, '粗面内质网', C.orange)}
				<Arrow x1={340} y1={102} x2={380} y2={150} trim={[4, 4]} color={C.red} marker="arrow-red" width={4} />
			</G>
			<G at={ro2.from}>
				{vesicle(680, Y)}
				{lbl(680, Y + 70, '囊泡')}
				<Arrow x1={555} y1={Y} x2={640} y2={Y} trim={[0, 4]} color={C.red} marker="arrow-red" />
				{[0, 1, 2, 3].map((k) => (
					<path key={k} d={`M${860 + k * 22},${Y - 90 + k * 6} Q${830 + k * 22},${Y} ${860 + k * 22},${Y + 90 - k * 6}`} fill="none" stroke={C.red} strokeWidth={9} strokeLinecap="round" />
				))}
				{lbl(880, Y + 140, '高尔基体', C.red)}
				<Arrow x1={712} y1={Y} x2={812} y2={Y} trim={[0, 4]} color={C.red} marker="arrow-red" />
			</G>
			<G at={ro3.from}>
				{vesicle(1130, Y)}
				{lbl(1130, Y + 70, '囊泡')}
				<Arrow x1={945} y1={Y} x2={1095} y2={Y} trim={[0, 4]} color={C.red} marker="arrow-red" />
				{vesicle(1540, Y)}
				<Arrow x1={1162} y1={Y} x2={1505} y2={Y} trim={[0, 4]} color={C.red} marker="arrow-red" />
				{lbl(1480, Y + 200, '细胞膜', C.brown)}
				{[0, 1, 2].map((k) => (
					<circle key={k} cx={1630 + (k % 2) * 30} cy={Y - 40 + k * 40} r={9} fill={C.red} />
				))}
				{lbl(1660, Y + 110, '细胞外', C.muted)}
			</G>
			<G at={ro4.from}>
				<g transform={`translate(0,0)`}>
					<Mito cx={560} cy={400} rx={110} ry={46} />
				</g>
				{lbl(780, 410, '线粒体：供能', C.orange)}
			</G>
		</svg>
		<Tip at={ro5.from} top={680} label="解题方法">
			<Hl>核糖体 → 内质网 → 高尔基体 → 细胞膜</Hl>，线粒体全程供能
		</Tip>
		<Narration t={t} />
	</Scene>
);
