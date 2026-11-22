import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.genetics;
const {ge1, ge2, ge3, ge4} = t.cue;

const CL = {x: 870, y: 300};

export const Genetics: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">克隆动物遗传物质的来源</Header>
		<svg width={1740} height={520} viewBox="0 0 1740 520" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={ge1.from}>
				<Box x={CL.x} y={CL.y} w={300} h={110} label="克隆动物" color={C.red} fill={C.redSoft} fontSize={40} />
				<Box x={220} y={90} w={340} h={110} label="供体细胞" sub="提供细胞核" color={C.red} />
				<Arrow x1={390} y1={110} x2={CL.x - 150} y2={CL.y - 40} color={C.red} marker="arrow-red" />
				<text x={560} y={150} fontSize={30} fontWeight={900} fill={C.red}>核基因（全部）</text>
			</G>
			<G at={ge2.from}>
				<Box x={1520} y={90} w={340} h={110} label="卵母细胞（受体）" sub="去核，提供细胞质" color={C.green} />
				<Arrow x1={1350} y1={110} x2={CL.x + 150} y2={CL.y - 40} color={C.green} marker="arrow-green" />
				<text x={1180} y={150} fontSize={30} fontWeight={900} fill={C.green} textAnchor="end">细胞质基因</text>
			</G>
			<G at={ge3.from}>
				<Box x={870} y={470} w={360} h={90} label="代孕母体" sub="只提供发育场所" color={C.brown} />
				<Arrow x1={870} y1={425} x2={870} y2={CL.y + 55} color={C.muted} dash="10 8" />
			</G>
		</svg>
		<Tip at={ge4.from} top={730} label="解题方法">
			性别和主要性状看<Hl>供核个体</Hl>；克隆属于<Hl>无性繁殖</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
