import React from 'react';
import {Appear, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {Tip} from '../components/lib';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.device;
const {dv1, dv2, dv3, dv4} = t.cue;

const Y1 = 110;
const Y2 = 330;

export const Device: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">探究酵母菌细胞呼吸的方式：实验装置</Header>
		<Appear at={dv1.from} style={{position: 'absolute', left: 90, top: 150, fontSize: 31, fontWeight: 800, color: C.muted}}>
			酵母菌：<Hl>兼性厌氧菌</Hl>，有氧、无氧条件下都能生存
		</Appear>
		<svg width={1740} height={440} viewBox="0 0 1740 440" style={{position: 'absolute', left: 90, top: 210}}>
			<Defs />
			<G at={dv2.from}>
				<text x={0} y={Y1 + 10} fontSize={32} fontWeight={900} fill={C.red}>有氧</text>
				<Box x={230} y={Y1} w={200} h={90} label="通入空气" color={C.muted} fontSize={30} />
				<Box x={560} y={Y1} w={300} h={110} label={svgChem('10% NaOH', 30)} sub="吸收空气中的二氧化碳" color={C.orange} fontSize={30} />
				<Box x={950} y={Y1} w={300} h={90} label="酵母菌培养液" color={C.brown} fontSize={30} />
				<Box x={1340} y={Y1} w={300} h={90} label="澄清石灰水" color={C.green} fontSize={30} />
				<Arrow x1={330} y1={Y1} x2={410} y2={Y1} trim={[0, 0]} />
				<Arrow x1={710} y1={Y1} x2={800} y2={Y1} trim={[0, 0]} />
				<Arrow x1={1100} y1={Y1} x2={1190} y2={Y1} trim={[0, 0]} />
			</G>
			<G at={dv3.from}>
				<text x={0} y={Y2 + 10} fontSize={32} fontWeight={900} fill={C.red}>无氧</text>
				<Box x={950} y={Y2} w={300} h={110} label="酵母菌培养液" sub="封口放置一段时间" color={C.brown} fontSize={30} />
				<Box x={1340} y={Y2} w={300} h={90} label="澄清石灰水" color={C.green} fontSize={30} />
				<Arrow x1={1100} y1={Y2} x2={1190} y2={Y2} trim={[0, 0]} />
				<text x={560} y={Y2 + 10} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">先耗尽瓶中原有的氧气</text>
			</G>
		</svg>
		<Tip at={dv4.from} top={680} label="解题方法">
			NaOH：<Hl>吸收空气中的 CO<sub>2</sub></Hl>；无氧组先放置：保证 CO<sub>2</sub> <Hl c={C.orange}>都来自无氧呼吸</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
