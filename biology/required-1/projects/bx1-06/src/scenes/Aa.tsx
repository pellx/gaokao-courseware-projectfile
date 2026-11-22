import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.aa;
const {aa1, aa2, aa3, aa4} = t.cue;

// Structural formula: R above the central C, H below, amino group left, carboxyl right.
const X = 330;
const Y = 230;
const S = 56;

export const Aa: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">氨基酸的结构通式</Header>
		<svg width={760} height={470} viewBox="0 0 760 470" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={aa1.from}>
				<line x1={X - 150} y1={Y - 18} x2={X - 30} y2={Y - 18} stroke={C.text} strokeWidth={5} />
				<line x1={X + 30} y1={Y - 18} x2={X + 150} y2={Y - 18} stroke={C.text} strokeWidth={5} />
				<text x={X} y={Y} fontSize={S} fontWeight={900} fill={C.text} textAnchor="middle">C</text>
				<rect x={X - 330} y={Y - 70} width={180} height={90} rx={16} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
				<text x={X - 240} y={Y} fontSize={S} fontWeight={900} fill={C.orange} textAnchor="middle">{svgChem('H2N', S)}</text>
				<text x={X - 240} y={Y + 70} fontSize={28} fontWeight={800} fill={C.orange} textAnchor="middle">氨基</text>
				<rect x={X + 150} y={Y - 70} width={230} height={90} rx={16} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
				<text x={X + 265} y={Y} fontSize={S} fontWeight={900} fill={C.orange} textAnchor="middle">COOH</text>
				<text x={X + 265} y={Y + 70} fontSize={28} fontWeight={800} fill={C.orange} textAnchor="middle">羧基</text>
			</G>
			<G at={aa2.from}>
				<circle cx={X} cy={Y - 18} r={44} fill="none" stroke={C.red} strokeWidth={5} strokeDasharray="10 7" />
				<line x1={X} y1={Y - 64} x2={X} y2={Y - 130} stroke={C.text} strokeWidth={5} />
				<line x1={X} y1={Y + 28} x2={X} y2={Y + 94} stroke={C.text} strokeWidth={5} />
				<text x={X} y={Y + 150} fontSize={S} fontWeight={900} fill={C.text} textAnchor="middle">H</text>
				<rect x={X - 55} y={Y - 220} width={110} height={86} rx={16} fill={C.redSoft} stroke={C.red} strokeWidth={4} />
				<text x={X} y={Y - 155} fontSize={S} fontWeight={900} fill={C.red} textAnchor="middle">R</text>
				<text x={X + 80} y={Y - 165} fontSize={28} fontWeight={800} fill={C.red}>R 基（侧链）</text>
				<text x={X + 80} y={Y + 130} fontSize={28} fontWeight={800} fill={C.red}>同一个碳原子</text>
			</G>
		</svg>
		<Bullets
			style={{left: 960, right: 90, top: 200}}
			fontSize={33}
			gap={26}
			items={[
				{at: aa1.from, color: C.orange, children: <>至少含有<Hl c={C.orange}>一个氨基（—NH<sub>2</sub>）</Hl>和<Hl c={C.orange}>一个羧基（—COOH）</Hl></>},
				{at: aa2.from, color: C.red, children: <>氨基和羧基连在<Hl>同一个碳原子</Hl>上，该碳还连一个 H 和一个 R 基</>},
				{at: aa3.from, color: C.red, children: <>氨基酸的种类由<Hl>R 基</Hl>决定</>},
			]}
		/>
		<Tip at={aa4.from} top={690} label="解题方法">
			判断是否为组成蛋白质的氨基酸：看<Hl>同一个碳上是否既有氨基又有羧基</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
