import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.amitosis;
const {am1, am2, am3, am4} = t.cue;

// Frog red blood cell (oval, nucleated) dividing by constriction.
const Y = 130;
export const Amitosis: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">无丝分裂</Header>
		<Def at={am1.from} style={{left: 90, right: 90, top: 165}} fontSize={33}>
			分裂过程中<Hl>没有出现纺锤丝和染色体的变化</Hl>
		</Def>
		<svg width={1740} height={300} viewBox="0 0 1740 300" style={{position: 'absolute', left: 90, top: 290}}>
			<Defs />
			<G at={am2.from}>
				<ellipse cx={200} cy={Y} rx={150} ry={95} fill={C.redSoft} stroke={C.red} strokeWidth={5} />
				<ellipse cx={200} cy={Y} rx={45} ry={32} fill={C.red} opacity={0.7} />
				<Arrow x1={380} y1={Y} x2={480} y2={Y} trim={[0, 0]} />
				<ellipse cx={680} cy={Y} rx={170} ry={95} fill={C.redSoft} stroke={C.red} strokeWidth={5} />
				<path d="M620,130 C620,100 660,100 680,118 C700,100 740,100 740,130 C740,160 700,160 680,142 C660,160 620,160 620,130 z" fill={C.red} opacity={0.7} />
				<text x={680} y={265} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">细胞核延长、中部缢裂</text>
				<Arrow x1={880} y1={Y} x2={980} y2={Y} trim={[0, 0]} />
				<path d="M1040,130 C1040,45 1190,45 1220,105 C1250,45 1400,45 1400,130 C1400,215 1250,215 1220,155 C1190,215 1040,215 1040,130 z" fill={C.redSoft} stroke={C.red} strokeWidth={5} />
				<ellipse cx={1130} cy={Y} rx={36} ry={28} fill={C.red} opacity={0.7} />
				<ellipse cx={1310} cy={Y} rx={36} ry={28} fill={C.red} opacity={0.7} />
				<text x={1220} y={265} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">整个细胞从中部缢裂</text>
			</G>
			<G at={am3.from}>
				<text x={1580} y={140} fontSize={34} fontWeight={900} fill={C.red} textAnchor="middle">蛙的红细胞</text>
			</G>
		</svg>
		<Tip at={am4.from} top={640} label="易错">
			无丝分裂<Hl>也有 DNA 复制</Hl>；原核细胞是<Hl c={C.orange}>二分裂</Hl>；人的成熟红细胞不分裂
		</Tip>
		<Narration t={t} />
	</Scene>
);
