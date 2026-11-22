import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.energy;
const {en1, en2, en3} = t.cue;

const L = 160;
const R = 760;

export const Energy: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">能量与氧元素的去向</Header>
		<Bullets
			style={{left: 90, right: 90, top: 170}}
			fontSize={33}
			items={[{at: en1.from, color: C.red, children: <>三个阶段都产生 ATP，<Hl>第三阶段最多</Hl></>}]}
		/>
		<svg width={1000} height={420} viewBox="0 0 1000 420" style={{position: 'absolute', left: 90, top: 250}}>
			<Defs />
			<G at={en2.from}>
				<Box x={L} y={60} w={260} h={80} label={svgChem('C6H12^18O6', 32)} color={C.orange} fontSize={32} />
				<Box x={L} y={200} w={260} h={80} label={svgChem('H2^18O', 32)} color={C.brown} fontSize={32} />
				<Box x={L} y={340} w={260} h={80} label={svgChem('^18O2', 32)} color={C.red} fontSize={32} />
				<Box x={R} y={130} w={260} h={80} label={svgChem('C^18O2', 32)} color={C.orange} fontSize={32} />
				<Box x={R} y={340} w={260} h={80} label={svgChem('H2^18O', 32)} color={C.red} fontSize={32} />
				<Arrow x1={L + 130} y1={60} x2={R - 130} y2={120} trim={[4, 6]} color={C.orange} marker="arrow-orange" />
				<Arrow x1={L + 130} y1={200} x2={R - 130} y2={140} trim={[4, 6]} color={C.brown} />
				<Arrow x1={L + 130} y1={340} x2={R - 130} y2={340} trim={[4, 6]} color={C.red} marker="arrow-red" />
				<text x={460} y={375} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">第三阶段</text>
				<text x={430} y={52} fontSize={26} fontWeight={800} fill={C.orange} textAnchor="middle">第一、二阶段</text>
				<text x={460} y={215} fontSize={26} fontWeight={800} fill={C.brown} textAnchor="middle">第二阶段</text>
			</G>
		</svg>
		<Tip at={en3.from} top={700} label="解题方法">
			追踪氧元素：<Hl>O<sub>2</sub> 中的氧只进入水</Hl>；葡萄糖和反应物水中的氧进入 CO<sub>2</sub>
		</Tip>
		<Narration t={t} />
	</Scene>
);
