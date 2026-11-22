import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Defs} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pitfall;
const {pf1, pf2, pf3, pf4} = t.cue;

export const Pitfall: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">转录的易错点</Header>
		<svg width={1740} height={220} viewBox="0 0 1740 220" style={{position: 'absolute', left: 90, top: 165}}>
			<Defs />
			<G at={pf1.from}>
				<rect x={40} y={60} width={1600} height={28} rx={8} fill="#fff" stroke={C.brown} strokeWidth={4} />
				<rect x={40} y={100} width={1600} height={28} rx={8} fill="#fff" stroke={C.brown} strokeWidth={4} />
				<rect x={200} y={60} width={360} height={68} rx={8} fill={C.orange} opacity={0.3} />
				<rect x={1000} y={60} width={420} height={68} rx={8} fill={C.green} opacity={0.3} />
				<text x={380} y={40} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">基因 1</text>
				<text x={1210} y={40} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">基因 2</text>
			</G>
			<G at={pf2.from}>
				<Arrow x1={210} y1={170} x2={550} y2={170} marker="arrow-orange" color={C.orange} />
				<text x={380} y={210} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">以下面一条链为模板</text>
				<Arrow x1={1410} y1={170} x2={1010} y2={170} marker="arrow-green" color={C.green} />
				<text x={1210} y={210} fontSize={24} fontWeight={800} fill={C.green} textAnchor="middle">以上面一条链为模板</text>
			</G>
		</svg>
		<Rows
			style={{left: 90, right: 90, top: 420}}
			fontSize={32}
			gap={18}
			items={[
				{at: pf1.from, color: C.red, children: <>转录以<Hl>基因</Hl>为单位，不是整个 DNA 一起转录</>},
				{at: pf2.from, color: C.orange, children: <>不同基因的模板链<Hl c={C.orange}>不一定是同一条链</Hl></>},
				{at: pf3.from, color: C.green, children: <>同一基因在不同细胞中不一定转录：<Hl c={C.green}>基因的选择性表达</Hl></>},
			]}
		/>
		<Tip at={pf4.from} top={720} label="易错" fontSize={32}>
			一个 DNA 可转录出<Hl>多种</Hl> RNA；实际 mRNA 碱基数<Hl>少于</Hl>基因碱基数的一半（有不转录的部分），计算题中一般忽略
		</Tip>
		<Narration t={t} />
	</Scene>
);
