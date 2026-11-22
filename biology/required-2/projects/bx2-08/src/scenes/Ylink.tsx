import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ylink;
const {yl1, yl2, yl3, yl4} = t.cue;
const W = 70;
const TOP = 70;

export const Ylink: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">伴 Y 遗传与 X、Y 的同源区段</Header>
		<svg width={700} height={520} viewBox="0 0 700 520" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={yl1.from}>
				<rect x={200} y={TOP} width={W} height={400} rx={30} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
				<text x={235} y={TOP - 18} fontSize={38} fontWeight={900} fill={C.orange} textAnchor="middle">X</text>
				<rect x={380} y={TOP} width={W} height={230} rx={30} fill={C.redSoft} stroke={C.red} strokeWidth={5} />
				<text x={415} y={TOP - 18} fontSize={38} fontWeight={900} fill={C.red} textAnchor="middle">Y</text>
			</G>
			<G at={yl2.from}>
				<rect x={196} y={TOP + 20} width={258} height={110} fill="none" stroke={C.green} strokeWidth={4} strokeDasharray="10 7" />
				<rect x={203} y={TOP + 24} width={W - 6} height={102} fill={C.greenSoft} />
				<rect x={383} y={TOP + 24} width={W - 6} height={102} fill={C.greenSoft} />
				<text x={325} y={TOP + 84} fontSize={26} fontWeight={900} fill={C.green} textAnchor="middle">同源区段</text>
				<text x={180} y={TOP + 300} fontSize={26} fontWeight={900} fill={C.orange} textAnchor="end">X 的非同源区段</text>
				<text x={470} y={TOP + 190} fontSize={26} fontWeight={900} fill={C.red}>Y 的非同源区段</text>
				<text x={470} y={TOP + 226} fontSize={22} fontWeight={700} fill={C.muted}>（伴 Y 遗传）</text>
			</G>
		</svg>
		<Rows
			style={{left: 840, right: 90, top: 180}}
			fontSize={31}
			gap={20}
			items={[
				{at: yl1.from, color: C.red, title: '伴 Y', children: <>患者<Hl>全是男性</Hl>，父传子、子传孙</>},
				{at: yl2.from, color: C.green, title: '同源区段', children: <>X、Y 上都有，存在<Hl c={C.green}>等位基因</Hl></>},
				{at: yl3.from, color: C.orange, title: '例', children: <>X<sup>a</sup>X<sup>a</sup> × X<sup>a</sup>Y<sup>A</sup> → 雄<Hl c={C.orange}>全显</Hl>、雌<Hl c={C.orange}>全隐</Hl></>},
			]}
		/>
		<Tip at={yl4.from} top={720} label="易错" fontSize={33}>
			同源区段基因：男性在 X 和 Y 上<Hl>各写一个</Hl>（如 X<sup>a</sup>Y<sup>A</sup>）；其遗传<Hl>也与性别相关联</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
