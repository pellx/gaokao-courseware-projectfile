import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fusion;
const {fu1, fu2, fu3, fu4, fu5} = t.cue;

const Y = 110;

export const Fusion: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">动物细胞融合</Header>
		<Def at={fu1.from} fontSize={31} style={{left: 90, right: 90, top: 165}}>
			<Hl>动物细胞融合</Hl>：使两个或多个动物细胞结合形成一个细胞 → <Hl>杂交细胞</Hl>（具有原来细胞的遗传信息）
		</Def>
		<svg width={760} height={240} viewBox="0 0 760 240" style={{position: 'absolute', left: 90, top: 300}}>
			<Defs />
			<G at={fu1.from}>
				<circle cx={70} cy={Y - 50} r={46} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
				<circle cx={70} cy={Y - 50} r={16} fill={C.orange} />
				<circle cx={70} cy={Y + 70} r={46} fill={C.greenSoft} stroke={C.green} strokeWidth={4} />
				<circle cx={70} cy={Y + 70} r={16} fill={C.green} />
				<Arrow x1={140} y1={Y + 10} x2={430} y2={Y + 10} />
				<text x={285} y={Y - 14} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">诱导融合</text>
			</G>
			<G at={fu2.from}>
				<ellipse cx={560} cy={Y + 10} rx={110} ry={80} fill="#fff7ea" stroke={C.red} strokeWidth={5} />
				<circle cx={530} cy={Y + 10} r={18} fill={C.orange} />
				<circle cx={590} cy={Y + 10} r={18} fill={C.green} />
				<text x={560} y={Y + 128} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">杂交细胞</text>
			</G>
		</svg>
		<Bullets
			style={{left: 920, right: 90, top: 320}}
			fontSize={31}
			gap={22}
			items={[
				{at: fu3.from, children: <><Hl c={C.orange}>PEG 融合法</Hl>（化学）</>},
				{at: fu3.from + 20, children: <><Hl c={C.orange}>电融合法</Hl>（物理）</>},
				{at: fu3.from + 40, color: C.red, children: <><Hl>灭活病毒诱导法</Hl>（生物，动物特有）</>},
				{at: fu4.from, color: C.muted, children: <>灭活病毒：<Hl c={C.orange}>失去感染能力</Hl>，但<Hl c={C.orange}>保留融合活性</Hl></>},
			]}
		/>
		<Tip at={fu5.from} top={660} label="易错">
			<Hl>灭活病毒诱导法</Hl>是动物细胞融合特有的方法，不能用于植物原生质体融合
		</Tip>
		<Narration t={t} />
	</Scene>
);
