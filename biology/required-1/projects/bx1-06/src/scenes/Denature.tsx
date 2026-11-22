import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.denature;
const {dn1, dn2, dn3, dn4} = t.cue;

export const Denature: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">蛋白质的变性</Header>
		<svg width={1740} height={290} viewBox="0 0 1740 290" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={dn1.from}>
				<path d="M40,200 C60,40 160,30 180,120 S260,250 300,140 S380,30 420,110 S470,230 500,180" fill="none" stroke={C.orange} strokeWidth={16} strokeLinecap="round" />
				<text x={270} y={280} fontSize={30} fontWeight={800} fill={C.muted} textAnchor="middle">正常的空间结构</text>
				<Arrow x1={600} y1={150} x2={1000} y2={150} trim={[0, 0]} color={C.red} marker="arrow-red" width={8} />
				<text x={800} y={120} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">高温、过酸、过碱、重金属盐</text>
				<path d="M1100,150 C1200,120 1300,180 1400,145 S1580,130 1680,160" fill="none" stroke={C.orange} strokeWidth={16} strokeLinecap="round" />
				<text x={1390} y={240} fontSize={30} fontWeight={800} fill={C.red} textAnchor="middle">空间结构破坏，伸展、松散</text>
			</G>
		</svg>
		<Bullets
			style={{left: 90, right: 90, top: 480}}
			fontSize={33}
			gap={22}
			items={[
				{at: dn1.from + 40, color: C.red, children: <>失去<Hl>生物活性</Hl></>},
				{at: dn2.from, color: C.orange, children: <><Hl>肽键没有断裂</Hl> → 仍能与双缩脲试剂发生紫色反应</>},
				{at: dn3.from, color: C.green, children: <>熟鸡蛋、熟肉易消化：结构松散，<Hl c={C.green}>易被蛋白酶水解</Hl></>},
			]}
		/>
		<Tip at={dn4.from} top={710} label="易错">
			变性一般<Hl>不可逆</Hl>；<Hl c={C.orange}>盐析</Hl>只是蛋白质析出，空间结构不变，可逆
		</Tip>
		<Narration t={t} />
	</Scene>
);
