import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apply;
const {ap1, ap2, ap3, ap4, ap5} = t.cue;

// Antibody–drug conjugate: a Y-shaped antibody, linkers, drug molecules, and a tumour cell.
const Y0 = {x: 300, y: 260};

export const Apply: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">单克隆抗体的优点和应用</Header>
		<Bullets
			style={{left: 90, right: 90, top: 175}}
			fontSize={30}
			gap={14}
			items={[
				{at: ap1.from, color: C.red, children: <>优点：能<Hl>准确识别抗原的细微差异</Hl>，与特定抗原<Hl>特异性结合</Hl>，并可<Hl c={C.orange}>大量制备</Hl></>},
				{at: ap2.from, children: <>作为<Hl c={C.orange}>诊断试剂</Hl>：识别病原体、检测早孕等</>},
				{at: ap3.from, children: <>运载药物：<Hl>抗体—药物偶联物（ADC）</Hl></>},
			]}
		/>
		<svg width={1740} height={330} viewBox="0 0 1740 330" style={{position: 'absolute', left: 90, top: 350}}>
			<G at={ap4.from}>
				<path d={`M${Y0.x},${Y0.y} V${Y0.y - 110} L${Y0.x - 70},${Y0.y - 190} M${Y0.x},${Y0.y - 110} L${Y0.x + 70},${Y0.y - 190}`} fill="none" stroke={C.orange} strokeWidth={22} strokeLinecap="round" strokeLinejoin="round" />
				{[-1, 1].map((s) => (
					<g key={s}>
						<line x1={Y0.x + s * 12} y1={Y0.y - 40} x2={Y0.x + s * 90} y2={Y0.y - 40} stroke={C.muted} strokeWidth={5} strokeDasharray="8 6" />
						<circle cx={Y0.x + s * 108} cy={Y0.y - 40} r={20} fill={C.red} />
					</g>
				))}
				<text x={Y0.x - 70} y={Y0.y - 215} fontSize={26} fontWeight={900} fill={C.orange} textAnchor="middle">抗体</text>
				<text x={Y0.x} y={Y0.y + 50} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">药物（经接头与抗体相连）</text>
				<path d="M900,40 C1040,0 1200,30 1230,150 C1260,270 1100,320 960,290 C830,260 800,90 900,40 z" fill={C.redSoft} stroke={C.red} strokeWidth={5} />
				<text x={1030} y={180} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">肿瘤细胞</text>
				{[[880, 110], [910, 220], [1000, 40]].map(([x, y], i) => (
					<polygon key={i} points={`${x - 14},${y} ${x},${y - 18} ${x + 14},${y}`} fill={C.orange} />
				))}
				<line x1={560} y1={160} x2={800} y2={160} stroke={C.muted} strokeWidth={6} strokeDasharray="14 10" />
				<text x={680} y={130} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">抗体：识别、定位</text>
				<text x={680} y={210} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">药物：杀伤</text>
			</G>
		</svg>
		<Tip at={ap5.from} top={720} label="易错">
			ADC 中杀伤肿瘤细胞的是<Hl>药物</Hl>；单克隆抗体只起<Hl>导向</Hl>（识别、定位）作用
		</Tip>
		<Narration t={t} />
	</Scene>
);
